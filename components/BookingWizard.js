import { useState } from "react";
import { PRICING } from "../lib/pricing";

// ---------------- CATEGORIES ----------------
const CATEGORIES = {
  "Motor Boats": ["Plymouth Pilot (8 people)", "Bass Boat (5 people)"],
  "Sailing Boats": [
    "Drascombe Longboat (6 people)",
    "Wayfarer Dinghy (4 people)",
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
  const [bookings, setBookings] = useState([createBoat()]);

  const [location, setLocation] = useState("St Anthony");
  const [customLocation, setCustomLocation] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // ---------------- PRICE LOGIC ----------------
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

  // ---------------- UPDATE HELPERS ----------------
  const updateBoat = (i, key, value) => {
    const copy = [...bookings];
    copy[i][key] = value;
    setBookings(copy);
  };

  const addBoat = () => setBookings([...bookings, createBoat()]);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const inputStyle = {
    width: "100%",
    padding: "16px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginBottom: "12px"
  };

  const buttonStyle = {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    fontSize: "16px"
  };

  // ---------------- RENDER ----------------
  return (
    <div style={{ display: "flex", gap: "20px", maxWidth: "1100px", margin: "40px auto" }}>

      {/* MAIN */}
      <div style={{
        flex: 1,
        background: "#fff",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}>

        {/* STEP INDICATOR */}
        <h2 style={{ fontSize: "26px" }}>Step {step} / 5</h2>

        {/* ---------------- STEP 1: CATEGORY + BOAT ---------------- */}
        {step === 1 && (
          <>
            <h3 style={{ fontSize: "22px" }}>Select your vessel</h3>

            {bookings.map((b, i) => (
              <div key={i} style={{ marginBottom: "20px" }}>

                {/* CATEGORY */}
                <select
                  value={b.category}
                  onChange={(e) => {
                    const cat = e.target.value;
                    const copy = [...bookings];
                    copy[i].category = cat;
                    copy[i].boat = CATEGORIES[cat][0];
                    setBookings(copy);
                  }}
                  style={inputStyle}
                >
                  {Object.keys(CATEGORIES).map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                {/* BOAT */}
                <select
                  value={b.boat}
                  onChange={(e) => updateBoat(i, "boat", e.target.value)}
                  style={inputStyle}
                >
                  {CATEGORIES[b.category].map((boat) => (
                    <option key={boat}>{boat}</option>
                  ))}
                </select>

              </div>
            ))}

            <button onClick={addBoat} style={buttonStyle}>
              + Add another boat
            </button>
          </>
        )}

        {/* ---------------- STEP 2: DURATION ---------------- */}
        {step === 2 && (
          <>
            <h3 style={{ fontSize: "22px" }}>Duration</h3>

            {bookings.map((b, i) => (
              <select
                key={i}
                value={b.duration}
                onChange={(e) => updateBoat(i, "duration", e.target.value)}
                style={inputStyle}
              >
                <option>1 hour</option>
                <option>2 hours</option>
                <option>Half day (4 hours)</option>
                <option>Full day (8 hours)</option>
              </select>
            ))}
          </>
        )}

        {/* ---------------- STEP 3: LOCATION ---------------- */}
        {step === 3 && (
          <>
            <h3 style={{ fontSize: "22px" }}>Starting location</h3>

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
                placeholder="Enter custom location"
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
              />
            )}
          </>
        )}

        {/* ---------------- STEP 4: SUMMARY ---------------- */}
        {step === 4 && (
          <>
            <h3 style={{ fontSize: "22px" }}>Summary</h3>

            {bookings.map((b, i) => (
              <div key={i}>
                {b.boat} — £{calcBoatPrice(b)}
              </div>
            ))}

            <div style={{ marginTop: "15px" }}>
              Delivery fee: £{deliveryFee}
            </div>
          </>
        )}

        {/* ---------------- STEP 5: DETAILS ---------------- */}
        {step === 5 && (
          <>
            <h3 style={{ fontSize: "22px" }}>Your details</h3>

            <input style={inputStyle} placeholder="Full name *" onChange={(e) => setName(e.target.value)} />
            <input style={inputStyle} placeholder="Mobile number *" onChange={(e) => setPhone(e.target.value)} />
            <input style={inputStyle} placeholder="Email address *" onChange={(e) => setEmail(e.target.value)} />

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
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          {step > 1 && <button onClick={back} style={buttonStyle}>Back</button>}
          {step < 5 && <button onClick={next} style={buttonStyle}>Next</button>}
        </div>

      </div>

      {/* SIDEBAR */}
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
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>£{total}</div>
        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.8 }}>
          Includes all selected boats + delivery
        </div>
      </div>

    </div>
  );
}
