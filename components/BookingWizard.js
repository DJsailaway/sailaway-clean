import { useState } from "react";
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
  durationType: "null",
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

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

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

  const next = () => setStep((s) => Math.min(5, s + 1));
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
    <>
      <div style={{
        display: "flex",
        gap: "20px",
        maxWidth: "1200px",
        margin: "40px auto",
        paddingBottom: "40px"
      }}>

<div style={{
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
}}>

{/* STEP HEADER (STABILISED) */}
<h2 style={{
  fontSize: "28px",
  margin: "0 0 10px 0",
  minHeight: "34px"
}}>
  Step {step} of 5
<div style={{
  display: "flex",
  gap: "6px",
  marginBottom: "16px"
}}>
  {[1, 2, 3, 4, 5].map((i) => (
    <div
      key={i}
      style={{
        flex: 1,
        height: "8px",
        borderRadius: "999px",
        background: i <= step ? "#0f2f4f" : "#e6e6e6",
        transition: "background 0.25s ease"
      }}
    />
  ))}
</div>
    </h2>

          {/* ✅ FIXED CONTAINER */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            justifyContent: "flex-start",
            gap: "12px",
          }}>

            {/* STEP 1 */}
            {step === 1 && (
              <div style={{ display: "grid", gap: "15px", alignContent: "start" }}>
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
              <div style={{ display: "grid", gap: "15px", alignContent: "start" }}>
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

    {/* MODE SELECTION ONLY (NO PREVIEW CONTENT YET) */}
    {!bookings[0].durationType && (
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px"
      }}>
        <button
          onClick={() => updateBoat(0, "durationType", "hourly")}
          style={nextButtonStyle}
        >
          Hourly
        </button>

        <button
          onClick={() => updateBoat(0, "durationType", "multi")}
          style={nextButtonStyle}
        >
          Multi-day
        </button>
      </div>
    )}

    {/* HOURLY OPTIONS */}
    {bookings[0].durationType === "hourly" && (
      <div style={{ display: "grid", gap: "10px" }}>
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

    {/* MULTI-DAY STEPPER */}
    {bookings[0].durationType === "multi" && (
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "10px"
      }}>
        <div style={{
          fontSize: "18px",
          fontWeight: 600
        }}>
          Number of days
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          background: "#f8fafc"
        }}>
          <button
            onClick={() =>
              updateBoat(0, "days", Math.max(1, bookings[0].days - 1))
            }
            style={{
              ...nextButtonStyle,
              width: "50px",
              height: "50px",
              borderRadius: "10px"
            }}
          >
            −
          </button>

          <div style={{
            fontSize: "28px",
            fontWeight: "bold",
            minWidth: "60px",
            textAlign: "center"
          }}>
            {bookings[0].days}
          </div>

          <button
            onClick={() =>
              updateBoat(0, "days", bookings[0].days + 1)
            }
            style={{
              ...nextButtonStyle,
              width: "50px",
              height: "50px",
              borderRadius: "10px"
            }}
          >
            +
          </button>
        </div>
      </div>
    )}
  </div>
)}

{/* STEP 4 */}
{step === 4 && (
  <div style={{ flex: 1 }}>
    <h3 style={{ fontSize: "26px", marginBottom: "16px" }}>
      Location
    </h3>

    {/* MAIN OPTIONS */}
    <div
      style={{
        display: "grid",
        gap: "12px",
        marginBottom: "16px",
      }}
    >
      {/* ST ANTHONY (always visible) */}
      <div
        onClick={() => {
          setLocation("St Anthony");
        }}
        style={{
          ...cardStyle(location === "St Anthony"),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>St Anthony</span>
        {location === "St Anthony" && <span>✓</span>}
      </div>

      {/* OTHER LOCATIONS TOGGLE */}
      <div
        onClick={() => setShowOtherLocations((s) => !s)}
        style={{
          ...cardStyle(
            showOtherLocations &&
              location !== "St Anthony"
          ),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Other Locations</span>
        <span>{showOtherLocations ? "−" : "+"}</span>
      </div>
    </div>

    {/* EXPANDED LIST */}
    {showOtherLocations && (
      <div
        style={{
          display: "grid",
          gap: "10px",
          paddingLeft: "12px",
          borderLeft: "3px solid #0f2f4f",
          marginBottom: "16px",
        }}
      >
        {Object.keys(PRICING.locations)
          .filter((loc) => loc !== "St Anthony")
          .filter((loc) => {
            // If nothing selected OR St Anthony selected → show all
            if (!location || location === "St Anthony") return true;

            // Otherwise only show selected location
            return loc === location;
          })
          .map((loc) => (
            <div
              key={loc}
              onClick={() => {
                setLocation(loc);
              }}
              style={{
                ...cardStyle(location === loc),
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              <span>{loc}</span>
              {location === loc && <span>✓</span>}
            </div>
          ))}
      </div>
    )}

    {/* CUSTOM LOCATION INPUT (only if needed) */}
    {location === "Other" && (
      <input
        style={inputStyle}
        value={customLocation}
        onChange={(e) => setCustomLocation(e.target.value)}
        placeholder="Enter custom location"
      />
    )}
  </div>
)}

            {/* STEP 5 */}
{step === 5 && (
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

                {step >= 3 && step < 5 && (
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

                {step === 5 && (
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

        {/* TOTAL */}
        <div style={{
          width: "300px",
          background: "#0f2f4f",
          color: "#fff",
          padding: "20px",
          borderRadius: "16px"
        }}>
          <h3>Total</h3>
          <div style={{ fontSize: "32px" }}>£{total}</div>
        </div>

      </div>
    </>
  );
}
