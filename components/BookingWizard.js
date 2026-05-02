import { useState, useEffect, useRef } from "react";
import { PRICING } from "../lib/pricing";

// ---------------- INTENT → CATEGORY ----------------
const INTENT_MAP = {
  Motor: "Motor Boats",
  Sail: "Sailing Boats",
  Paddle: "Rowing, Kayak & SUP"
};

// ---------------- BOATS ----------------
const CATEGORIES = {
  "Motor Boats": [
    "Plymouth Pilot (8 people)",
    "Bass Boat (5 people)"
  ],
  "Sailing Boats": [
    "Drascombe Longboat (6 people)",
    "Wayfarer Dinghy (4 people)",
    "Topaz Dinghy (2 people)",
    "Pico Dinghy (2 people)",
    "Topper Dinghy (1 person)"
  ],
  "Rowing, Kayak & SUP": [
    "Anarth Rowing Dinghy (4 people)",
    "Double Kayak (2 people)",
    "Single Kayak (1 person)",
    "Stand-Up Paddleboard (1 person)"
  ]
};

// ---------------- SAFE PRICING KEYS ----------------
const DURATION_OPTIONS = [
  { label: "1 Hour", key: "1h" },
  { label: "2 Hours", key: "2h" },
  { label: "Half Day (4 Hours)", key: "half" },
  { label: "Full Day (8 Hours)", key: "full" }
];

// ---------------- BOAT STATE ----------------
const createBoat = () => ({
  category: "Motor Boats",
  boat: CATEGORIES["Motor Boats"][0],
  durationType: null,
  durationKey: "2h",
  durationLabel: "2 Hours",
  days: 7
});

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [intent, setIntent] = useState("Motor");
  const [bookings, setBookings] = useState([createBoat()]);

  const [location, setLocation] = useState("St Anthony");
  const [customLocation, setCustomLocation] = useState("");
  const [showOtherLocations, setShowOtherLocations] = useState(false);
  const [locationMode, setLocationMode] = useState("st-anthony");
  const [shouldFocusWizard, setShouldFocusWizard] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

const getTimeLimits = (durationType, durationKey) => {
  if (durationType === "hourly") {
    if (durationKey === "1h") return { min: "09:00", max: "16:00" };
    if (durationKey === "2h") return { min: "09:00", max: "15:00" };
    if (durationKey === "half") return { min: "09:00", max: "13:00" };
    if (durationKey === "full") return { min: "09:00", max: "09:00" };
  }

  return { min: "09:00", max: "17:00" };
};
  
  const { min, max } = getTimeLimits(
  bookings[0].durationType,
  bookings[0].durationKey
);

  const generateTimeSlots = (min, max) => {
  const slots = [];

  const [minH, minM] = min.split(":").map(Number);
  const [maxH, maxM] = max.split(":").map(Number);

  let start = minH * 60 + minM;
  const end = maxH * 60 + maxM;

  for (let t = start; t <= end; t += 30) {
    const h = Math.floor(t / 60);
    const m = t % 60;

    slots.push(
      `${String(h).padStart(2, "0")}:${m === 0 ? "00" : "30"}`
    );
  }

  return slots;
};

  useEffect(() => {
  const slots = generateTimeSlots(min, max);

  if (!time && slots.length > 0) {
    setTime(slots.includes("10:00") ? "10:00" : slots[0]);
  }
}, [min, max]);

  // ✅ OPTION A: scroll-to-step ref
  const wizardRef = useRef(null);

useEffect(() => {
  if (!shouldFocusWizard) return;

  wizardRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  setShouldFocusWizard(false); // reset after use
}, [step, shouldFocusWizard]);

  const calcBoatPrice = (b) => {
    const p = PRICING.boats?.[b.boat];
    if (!p) return 0;

    if (b.durationType === "multi") {
      if (b.days <= 7) return p.multiDay?.[b.days] || 0;
      return (p.multiDay?.[7] || 0) + (b.days - 7) * p.extraDay;
    }

    return p.hourly?.[b.durationKey] || 0;
  };

  const total =
    bookings.reduce((sum, b) => sum + calcBoatPrice(b), 0) +
    (PRICING.locations?.[location] || 0);

  const updateBoat = (i, key, value) => {
    const copy = [...bookings];
    copy[i][key] = value;
    setBookings(copy);
  };

  const next = () => setStep((s) => Math.min(6, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const inputStyle = {
    width: "100%",
    padding: "16px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    marginBottom: "12px"
  };

  const cardStyle = (selected) => ({
    padding: "20px",
    borderRadius: "16px",
    border: selected ? "2px solid #0f2f4f" : "1px solid #ddd",
    background: selected ? "#eef4f8" : "#f8fafc",
    cursor: "pointer",
    transition: "all 0.25s ease",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    fontSize: "18px"
  });

  const buttonBase = {
    padding: "16px 26px",
    borderRadius: "14px",
    fontSize: "17px",
    fontWeight: 600,
    cursor: "pointer"
  };

  const nextButtonStyle = {
    ...buttonBase,
    background: "#0f2f4f",
    color: "#fff",
    border: "none",
    boxShadow: "0 6px 16px rgba(15,47,79,0.25)"
  };

  const backButtonStyle = {
    ...buttonBase,
    background: "#fff",
    border: "1px solid #ccc",
    color: "#333"
  };

return (
<div
  id="booking-wizard"
  style={{
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 16px 40px",
    scrollMarginTop: "90px",
    boxSizing: "border-box"
  }}
>

      {/* LEFT */}
<div style={{
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100vh - 180px)"
}}>

        <h2 style={{ fontSize: "28px", margin: "0 0 10px 0" }}>
          Step {step} of 6
        </h2>

        <div style={{ display: "flex", gap: "6px", marginBottom: "16px" }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: "8px",
                borderRadius: "999px",
                background: i <= step ? "#0f2f4f" : "#e6e6e6"
              }}
            />
          ))}
        </div>

        {/* ✅ FIXED VIEWPORT HEIGHT */}
        <div style={{
          flex: 1,
          minHeight: "calc(100vh - 220px)",
          maxHeight: "calc(100vh - 220px)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>

          {/* STEP 1 */}
          {step === 1 && (
            <div style={{ display: "grid", gap: "15px" }}>
              {Object.keys(INTENT_MAP).map((key) => (
                <div
                  key={key}
                  onClick={() => {
                    setIntent(key);
                    const category = INTENT_MAP[key];
                    const copy = [...bookings];
                    copy[0].category = category;
                    copy[0].boat = CATEGORIES[category][0];
                    setBookings(copy);
                    setStep(2);
                  }}
                  style={cardStyle(intent === key)}
                >
                  <strong>{key}</strong>
                </div>
              ))}
            </div>
          )}

{/* STEP 2 */}
{step === 2 && (
  <div
    style={{
      display: "grid",
      gap: "15px",
      gridTemplateColumns:
        INTENT_MAP[intent] === "Motor Boats"
          ? "1fr"
          : "1fr 1fr"
    }}
  >
    {CATEGORIES[INTENT_MAP[intent]].map((boat) => (
      <div
        key={boat}
        onClick={() => {
          updateBoat(0, "boat", boat);
          setStep(3);
        }}
        style={cardStyle(bookings[0].boat === boat)}
      >
        {boat}
      </div>
    ))}
  </div>
)}

{/* STEP 3 */}
{step === 3 && (
  <div style={{ flex: 1 }}>
    <h3 style={{
      fontSize: "26px",
      margin: "0 0 16px 0",
      minHeight: "32px"
    }}>
      Duration
    </h3>

    {/* MODE SELECTION */}
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
      marginBottom: "20px"
    }}>
<button
  onClick={() => {
  updateBoat(0, "durationType", "hourly");
  updateBoat(0, "days", 7); // reset multi-day safely
}}
  style={{
    ...nextButtonStyle,
    opacity:
      bookings[0].durationType === null ||
      bookings[0].durationType === "hourly"
        ? 1
        : 0.35
  }}
>
  Hourly
</button>

<button
  onClick={() => {
  updateBoat(0, "durationType", "multi");
  updateBoat(0, "durationKey", "2h"); // reset hourly safely
}}
  style={{
    ...nextButtonStyle,
    opacity:
      bookings[0].durationType === null ||
      bookings[0].durationType === "multi"
        ? 1
        : 0.35
  }}
>
  Multi-Day
</button>
    </div>

    {/* HOURLY OPTIONS */}
    {bookings[0].durationType === "hourly" && (
      <div style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px"
}}>
        {DURATION_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            onClick={() => updateBoat(0, "durationKey", opt.key)}
            style={cardStyle(bookings[0].durationKey === opt.key)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    )}

    {/* MULTI-DAY INPUT */}
    {bookings[0].durationType === "multi" && (
      <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  marginTop: "10px"
}}>
  <button
    onClick={() =>
      updateBoat(
        0,
        "days",
        Math.max(1, bookings[0].days - 1)
      )
    }
    style={{
      ...nextButtonStyle,
      width: "60px",
      padding: "12px 0",
      fontSize: "20px"
    }}
  >
    −
  </button>

  <div style={{
    fontSize: "22px",
    fontWeight: "600",
    minWidth: "60px",
    textAlign: "center"
  }}>
    {bookings[0].days}
  </div>

  <button
    onClick={() =>
      updateBoat(
        0,
        "days",
        bookings[0].days + 1
      )
    }
    style={{
      ...nextButtonStyle,
      width: "60px",
      padding: "12px 0",
      fontSize: "20px"
    }}
  >
    +
  </button>
</div>
    )}
  </div>
)}

{/* STEP 4 — DATE & TIME */}
{step === 4 && (
  <div style={{ flex: 1 }}>
    <h3 style={{ fontSize: "26px", marginBottom: "16px" }}>
      Select Date & Start Time
    </h3>

    {/* DATE */}
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      style={inputStyle}
    />

{/* TIME PICKER — CLEAN SNAP SCROLLER */}
<div
  style={{
    marginTop: "12px",
    height: "240px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollSnapType: "y mandatory",
    borderRadius: "12px",
    border: "1px solid #ddd",
    background: "#fff"
  }}
>
  {generateTimeSlots(min, max).map((t) => (
    <button
      key={t}
      onClick={() => setTime(t)}
      style={{
        width: "100%",
        height: "48px",
        border: "none",
        background: "transparent",
        scrollSnapAlign: "center",
        fontSize: "18px",
        fontWeight: time === t ? 700 : 500,
        color: time === t ? "#0f2f4f" : "#777",
        cursor: "pointer",
        transition: "all 0.2s ease"
      }}
    >
      {t}
    </button>
  ))}
</div>
)}

{/* STEP 5 */}
{step === 5 && (
  <div style={{ flex: 1 }}>
    <h3 style={{ fontSize: "26px", marginBottom: "16px" }}>
      Location
    </h3>

    {/* MODE SELECTION */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      {/* ST ANTHONY */}
      <button
        onClick={() => {
          setLocationMode("st-anthony");
          setLocation("St Anthony");
        }}
        style={{
          ...nextButtonStyle,
          opacity: locationMode === "st-anthony" ? 1 : 0.35,
        }}
      >
        St Anthony
      </button>

      {/* OTHER LOCATIONS */}
      <button
        onClick={() => {
          setLocationMode("preset");
        }}
        style={{
          ...nextButtonStyle,
          opacity: locationMode === "preset" ? 1 : 0.35,
        }}
      >
        Other Locations
      </button>
    </div>

    {/* PRESET LIST */}
    {locationMode === "preset" && (
      <div
        style={{
          display: "grid",
          gap: "10px",
          marginBottom: "16px",
        }}
      >
        {Object.keys(PRICING.locations)
          .filter((loc) => loc !== "St Anthony")
          .map((loc) => (
            <button
              key={loc}
              onClick={() => setLocation(loc)}
              style={cardStyle(location === loc)}
            >
              {loc}
            </button>
          ))}

        {/* CUSTOM OPTION */}
        <button
          onClick={() => setLocationMode("custom")}
          style={cardStyle(locationMode === "custom")}
        >
          Other (enter manually)
        </button>
      </div>
    )}

    {/* CUSTOM INPUT */}
    {locationMode === "custom" && (
      <input
        style={inputStyle}
        value={customLocation}
        onChange={(e) => setCustomLocation(e.target.value)}
        placeholder="Enter custom location"
      />
    )}
  </div>
)}

            {/* STEP 6 */}
{step === 6 && (
  <div style={{ display: "grid", gap: "12px" }}>
    <input style={inputStyle} placeholder="Name" onChange={(e) => setName(e.target.value)} />
    <input style={inputStyle} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
    <input style={inputStyle} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
  </div>
)}

          </div>

          {/* 🔒 LOCKED NAVIGATION SYSTEM (UNCHANGED) */}
          {step >= 2 && (
            <div style={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px"
            }}>

              <button
                onClick={back}
                style={{
                  ...backButtonStyle,
                  flex: "0 0 160px",
                  fontSize: "18px",
                  padding: "16px 26px"
                }}
              >
                ← Back
              </button>

              <div style={{
                marginLeft: "auto",
                display: "flex",
                gap: "12px",
                alignItems: "stretch",
                alignSelf: "flex-end"
              }}>

                {step >= 3 && step < 6 && (
                  <button
                    onClick={next}
                    style={{
                      ...nextButtonStyle,
                      flex: "0 0 240px",
                      fontSize: "18px",
                      padding: "18px 26px"
                    }}
                  >
                    Next →
                  </button>
                )}

                {step === 6 && (
                  <button
                    onClick={async () => {
                      await fetch("/api/bookings", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name,
                          email,
                          phone,
                          bookings,
                          date,
                          time,
                          total,
                          location: customLocation || location
                        })
                      });
                    }}
                    style={{
                      ...nextButtonStyle,
                      flex: "0 0 260px",
                      fontSize: "19px",
                      padding: "18px 26px"
                    }}
                  >
                    Request Booking
                  </button>
                )}

              </div>
            </div>
          )}

        </div>

      {/* RIGHT */}
      <div style={{
  width: "300px",
  maxHeight: "calc(100vh - 180px)",
  background: "#0f2f4f",
  color: "#fff",
  padding: "20px",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}}>
        <h3>Total</h3>
        <div style={{ fontSize: "32px" }}>£{total}</div>
      </div>

    </div>
  );
}
