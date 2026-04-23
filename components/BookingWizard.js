import { useState } from "react";
import { PRICING } from "../lib/pricing";

// ---------------- CATEGORY GROUPS (STEP 1) ----------------
const CATEGORY_GROUPS = {
  Motor: ["Motor Boats"],
  Sail: ["Sailing Boats"],
  Paddle: ["Rowing, Kayak & SUP"]
};

// ---------------- FULL BOAT DATA ----------------
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

const CATEGORY_META = {
  Motor: { desc: "Powerful motorboats for effortless cruising" },
  Sail: { desc: "Traditional sailing craft for hands-on adventure" },
  Paddle: { desc: "Kayaks, rowing & SUP for quiet exploration" }
};

// ---------------- INITIAL BOAT ----------------
const createBoat = () => ({
  category: "Motor Boats",
  boat: CATEGORIES["Motor Boats"][0],
  duration: "2 hours",
  isMultiDay: false,
  days: 7
});

export default function BookingWizard() {
  const [step, setStep] = useState(1);

  const [intent, setIntent] = useState("Motor"); // STEP 1
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

  const addBoat = () => setBookings([...bookings, createBoat()]);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  // ---------------- STYLES ----------------
  const cardBase = {
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid #e5e5e5",
    background: "#fff",
    cursor: "pointer",
    transition: "all 0.25s ease",
  };

  const cardActive = {
    ...cardBase,
    border: "2px solid #0f2f4f",
    background: "#f8fafc",
    transform: "translateY(-2px)",
  };

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

  // ---------------- ANIMATION WRAPPER ----------------
  const stepWrapper = {
    opacity: 1,
    transform: "translateY(0px)",
    transition: "all 0.25s ease-in-out"
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

        <div style={stepWrapper}>

          {/* ---------------- STEP 1: INTENT ---------------- */}
          {step === 1 && (
            <>
              <h3 style={{ fontSize: "26px" }}>Choose your experience</h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "15px",
                marginTop: "20px"
              }}>
                {Object.keys(CATEGORY_GROUPS).map((key) => (
                  <div
                    key={key}
                    onClick={() => setIntent(key)}
                    style={intent === key ? cardActive : cardBase}
                  >
                    <div style={{ fontSize: "20px", fontWeight: 600 }}>
                      {key}
                    </div>
                    <div style={{ fontSize: "14px", opacity: 0.7, marginTop: "6px" }}>
                      {CATEGORY_META[key].desc}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ---------------- STEP 2: BOAT SELECTION ---------------- */}
          {step === 2 && (
            <>
              <h3 style={{ fontSize: "26px" }}>Select your vessel</h3>

              <select
                value={bookings[0].category}
                onChange={(e) => {
                  const cat = e.target.value;
                  const copy = [...bookings];
                  copy[0].category = cat;
                  copy[0].boat = CATEGORIES[cat][0];
                  setBookings(copy);
                }}
                style={inputStyle}
              >
                {CATEGORY_GROUPS[intent].map((group) => (
                  <option key={group}>{group}</option>
                ))}
              </select>

              <select
                value={bookings[0].boat}
                onChange={(e) => {
                  const copy = [...bookings];
                  copy[0].boat = e.target.value;
                  setBookings(copy);
                }}
                style={inputStyle}
              >
                {CATEGORIES[bookings[0].category].map((boat) => (
                  <option key={boat}>{boat}</option>
                ))}
              </select>
            </>
          )}

          {/* ---------------- STEP 3: DURATION ---------------- */}
          {step === 3 && (
            <>
              <h3>Duration</h3>

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

          {/* ---------------- STEP 4: LOCATION ---------------- */}
          {step === 4 && (
            <>
              <h3>Starting location</h3>

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

          {/* ---------------- STEP 5: DETAILS ---------------- */}
          {step === 5 && (
            <>
              <h3>Your details</h3>

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

        </div>

        {/* NAV */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "25px"
        }}>
          {step > 1 && <button onClick={back} style={buttonStyle}>Back</button>}
          {step < 5 && <button onClick={next} style={buttonStyle}>Next</button>}
        </div>

      </div>

      {/* ---------------- STICKY SUMMARY ---------------- */}
      <div style={{
        width: "320px",
        position: "sticky",
        top: "20px",
        background: "#0f2f4f",
        color: "#fff",
        padding: "25px",
        borderRadius: "16px",
        height: "fit-content"
      }}>
        <h3>Total</h3>
        <div style={{ fontSize: "36px", fontWeight: 700 }}>£{total}</div>
        <div style={{ fontSize: "13px", opacity: 0.8, marginTop: "10px" }}>
          Updated live as you build your trip
        </div>
      </div>

    </div>
  );
}
