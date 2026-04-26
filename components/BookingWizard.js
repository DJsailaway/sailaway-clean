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

  durationType: "hourly",
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

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // ---------------- PRICING ----------------
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

  // ---------------- STYLES (UNCHANGED) ----------------
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
        paddingBottom: "110px"
      }}>

        <div style={{
          flex: 1,
          background: "#fff",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)"
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
          {step === 2 && (() => {
            const category = INTENT_MAP[intent];
            const boats = CATEGORIES[category];

            return (
              <div style={{ display: "grid", gap: "15px" }}>
                {boats.map((boat) => (
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
            );
          })()}

          {/* STEP 3 (UNCHANGED UI) */}
          {step === 3 && (
            <>
              <h3 style={{ fontSize: "26px" }}>Duration</h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginBottom: "20px"
              }}>
                <button onClick={() => updateBoat(0, "durationType", "hourly")} style={nextButtonStyle}>
                  Hourly
                </button>

                <button onClick={() => updateBoat(0, "durationType", "multi")} style={nextButtonStyle}>
                  Multi-Day
                </button>
              </div>

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

              {bookings[0].durationType === "multi" && (
                <input
                  type="number"
                  value={bookings[0].days}
                  onChange={(e) => updateBoat(0, "days", Number(e.target.value))}
                  style={inputStyle}
                />
              )}
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <h3>Location</h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px"
              }}>
                {[...Object.keys(PRICING.locations), "Other"].map((loc) => (
                  <div
                    key={loc}
                    onClick={() => setLocation(loc)}
                    style={cardStyle(location === loc)}
                  >
                    {loc}
                  </div>
                ))}
              </div>

              {location === "Other" && (
                <input
                  style={inputStyle}
                  value={customLocation}
                  onChange={(e) => setCustomLocation(e.target.value)}
                />
              )}
            </>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <>
              <input style={inputStyle} placeholder="Name" onChange={(e) => setName(e.target.value)} />
              <input style={inputStyle} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
              <input style={inputStyle} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

              <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                <button onClick={back} style={{ ...backButtonStyle, flex: "0 0 120px" }}>
                  ← Back
                </button>

                <button
                  style={{ ...nextButtonStyle, flex: 1 }}
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
                >
                  Request Booking
                </button>
              </div>
            </>
          )}

          {/* NAVIGATION (ONLY ONE SYSTEM) */}
          {step === 3 && (
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
              <button onClick={back} style={backButtonStyle}>Back</button>
              <button onClick={next} style={nextButtonStyle}>Next</button>
            </div>
          )}

          {step === 4 && (
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
              <button onClick={back} style={backButtonStyle}>Back</button>
              <button onClick={next} style={nextButtonStyle}>Next</button>
            </div>
          )}

        </div>

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
