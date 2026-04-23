import { useState } from "react";
import { PRICING } from "../lib/pricing";

// ---------------- INTENT → CATEGORY MAP ----------------
const INTENT_MAP = {
  Motor: "Motor Boats",
  Sail: "Sailing Boats",
  Paddle: "Rowing, Kayak & SUP"
};

// ---------------- CATEGORIES ----------------
const CATEGORIES = {
  "Motor Boats": [
    "Plymouth Pilot (8 people)",
    "Bass Boat (5 people)"
  ],

  "Sailing Boats": [
    "Drascombe Longboat (6 people)",
    "Wayfarer Dinghy (4 people)",
    "Topaz Dinghy (2 people)",   // ✅ FIXED POSITION
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

// ---------------- INITIAL STATE ----------------
const createBoat = () => ({
  category: "Motor Boats",
  boat: CATEGORIES["Motor Boats"][0],
  duration: "2 hours",
  isMultiDay: false,
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

  // ---------------- PRICE ----------------
  const calcBoatPrice = (b) => {
    const p = PRICING.boats?.[b.boat];
    if (!p) return 0;

    if (b.isMultiDay) {
      if (b.days <= 7) return p.multiDay?.[b.days] || 0;
      return (p.multiDay?.[7] || 0) + (b.days - 7) * p.extraDay;
    }

    return p.hourly?.[b.duration] || p.day?.[b.duration] || 0;
  };

  const deliveryFee = PRICING.locations?.[location] || 0;

  const total =
    bookings.reduce((sum, b) => sum + calcBoatPrice(b), 0) +
    deliveryFee;

  // ---------------- HELPERS ----------------
  const updateBoat = (i, key, value) => {
    const copy = [...bookings];
    copy[i][key] = value;
    setBookings(copy);
  };

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  // ---------------- STYLES ----------------
  const inputStyle = {
    width: "100%",
    padding: "16px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    marginBottom: "12px"
  };

  const buttonStyle = {
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    background: "#fff",
    fontSize: "16px",
    cursor: "pointer"
  };

  return (
    <div style={{
      display: "flex",
      gap: "20px",
      maxWidth: "1200px",
      margin: "40px auto"
    }}>

      {/* ---------------- MAIN ---------------- */}
      <div style={{
        flex: 1,
        background: "#fff",
        padding: "40px",
        borderRadius: "18px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.08)"
      }}>

        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Step {step} / 5
        </h2>

        {/* ---------------- STEP 1 ---------------- */}
        {step === 1 && (
          <>
            <h3>Choose experience</h3>

            {Object.keys(INTENT_MAP).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setIntent(key);

                  const copy = [...bookings];
                  const category = INTENT_MAP[key];

                  copy[0].category = category;
                  copy[0].boat = CATEGORIES[category][0];

                  setBookings(copy);
                }}
                style={{
                  ...buttonStyle,
                  marginRight: "10px",
                  marginBottom: "10px",
                  border: intent === key ? "2px solid #0f2f4f" : "1px solid #ccc"
                }}
              >
                {key}
              </button>
            ))}
          </>
        )}

        {/* ---------------- STEP 2 (FIXED) ---------------- */}
        {step === 2 && (() => {
          const category = INTENT_MAP[intent];
          const boats = CATEGORIES[category];

          return (
            <>
              <h3 style={{ fontSize: "26px" }}>Select your vessel</h3>

              <div style={{
                fontSize: "13px",
                opacity: 0.6,
                marginBottom: "10px"
              }}>
                Category: {category}
              </div>

              <select
                value={bookings[0].boat}
                onChange={(e) => {
                  const copy = [...bookings];
                  copy[0].boat = e.target.value;
                  copy[0].category = category;
                  setBookings(copy);
                }}
                style={inputStyle}
              >
                {boats.map((boat) => (
                  <option key={boat}>{boat}</option>
                ))}
              </select>
            </>
          );
        })()}

        {/* ---------------- STEP 3 ---------------- */}
        {step === 3 && (
          <>
            <h3>Duration</h3>

            <select
              value={bookings[0].duration}
              onChange={(e) => updateBoat(0, "duration", e.target.value)}
              style={inputStyle}
            >
              <option>1 hour</option>
              <option>2 hours</option>
              <option>Half day (4 hours)</option>
              <option>Full day (8 hours)</option>
            </select>
          </>
        )}

        {/* ---------------- STEP 4 ---------------- */}
        {step === 4 && (
          <>
            <h3>Location</h3>

            {Object.keys(PRICING.locations).map((loc) => (
              <button
                key={loc}
                onClick={() => setLocation(loc)}
                style={{
                  ...buttonStyle,
                  margin: "5px",
                  border: location === loc ? "2px solid #0f2f4f" : "1px solid #ccc"
                }}
              >
                {loc}
              </button>
            ))}

            {location === "Other" && (
              <input
                style={inputStyle}
                placeholder="Enter location"
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
              />
            )}
          </>
        )}

        {/* ---------------- STEP 5 ---------------- */}
        {step === 5 && (
          <>
            <h3>Your details</h3>

            <input style={inputStyle} placeholder="Name *" onChange={(e) => setName(e.target.value)} />
            <input style={inputStyle} placeholder="Phone *" onChange={(e) => setPhone(e.target.value)} />
            <input style={inputStyle} placeholder="Email *" onChange={(e) => setEmail(e.target.value)} />

            <button
              disabled={!name || !phone || !email}
              style={{
                ...buttonStyle,
                width: "100%",
                background: name && phone && email ? "#0f2f4f" : "#ccc",
                color: "#fff",
                border: "none"
              }}
            >
              Request booking
            </button>
          </>
        )}

        {/* NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "25px" }}>
          {step > 1 && <button onClick={back} style={buttonStyle}>Back</button>}
          {step < 5 && <button onClick={next} style={buttonStyle}>Next</button>}
        </div>

      </div>

      {/* ---------------- SUMMARY ---------------- */}
      <div style={{
        width: "320px",
        position: "sticky",
        top: "20px",
        background: "#0f2f4f",
        color: "#fff",
        padding: "25px",
        borderRadius: "16px"
      }}>
        <h3>Total</h3>
        <div style={{ fontSize: "36px", fontWeight: 700 }}>£{total}</div>
      </div>

    </div>
  );
}
