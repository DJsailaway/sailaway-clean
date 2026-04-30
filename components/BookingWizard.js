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

const DURATION_OPTIONS = [
  { label: "1 Hour", key: "1h" },
  { label: "2 Hours", key: "2h" },
  { label: "Half Day (4 Hours)", key: "half" },
  { label: "Full Day (8 Hours)", key: "full" }
];

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
    fontSize: "18px"
  });

  const steps = ["Boat", "Selection", "Duration", "Location", "Details"];

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
    border: "none"
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
        margin: "40px auto"
      }}>

        {/* LEFT */}
        <div style={{ flex: 1 }}>

          {/* STEP TRACKER (IMPROVED) */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
            {steps.map((label, i) => {
              const n = i + 1;
              const active = step === n;
              const done = step > n;

              return (
                <div
                  key={label}
                  onClick={() => setStep(n)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 14px",
                    borderRadius: "999px",
                    cursor: "pointer",
                    background: active ? "#0f2f4f" : done ? "#2d5a7a" : "#eee",
                    color: active || done ? "#fff" : "#333",
                    fontSize: "14px"
                  }}
                >
                  <div style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px"
                  }}>
                    {n}
                  </div>
                  {label}
                </div>
              );
            })}
          </div>

          {/* STEP HEADER */}
          <h2>Step {step} of 5</h2>

          {/* STEP CONTENT (UNCHANGED LOGIC) */}
          {step === 1 && (
            <div style={{ display: "grid", gap: "12px" }}>
              {Object.keys(INTENT_MAP).map((key) => (
                <div
                  key={key}
                  onClick={() => {
                    setIntent(key);
                    const cat = INTENT_MAP[key];
                    const copy = [...bookings];
                    copy[0].category = cat;
                    copy[0].boat = CATEGORIES[cat][0];
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

          {/* (Steps 2–5 remain unchanged from your working version) */}
          {/* KEEP YOUR EXISTING STEP 2–5 HERE */}
        </div>

        {/* RIGHT COLUMN */}
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

      {/* NAVIGATION (MOVED OUTSIDE FLEX LAYOUT — FIXED) */}
      {step >= 2 && (
        <div style={{
          maxWidth: "1200px",
          margin: "20px auto",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <button onClick={back} style={backButtonStyle}>
            ← Back
          </button>

          {step < 5 ? (
            <button onClick={next} style={nextButtonStyle}>
              Next →
            </button>
          ) : (
            <button style={nextButtonStyle}>
              Request Booking
            </button>
          )}
        </div>
      )}
    </>
  );
}
