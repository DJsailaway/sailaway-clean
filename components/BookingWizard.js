import { useState } from "react";

// ---------------- BOATS ----------------
const BOATS = {
  "Motor Boats": ["Plymouth Pilot (8 people)", "Bass Boat (5 people)"],
  "Sailing Boats": [
    "Drascombe Longboat (6 people)",
    "Wayfarer Dinghy (4 people)",
    "Pico Dinghy (2 people)",
    "Topper Dinghy (1 person)"
  ],
  "Rowing, Kayak & SUP": [
    "Double Kayak (2 people)",
    "Single Kayak (1 person)",
    "Stand-Up Paddleboard (1 person)",
    "Anarth Rowing Dinghy (4 people)"
  ]
};

// ---------------- PRICING ----------------
const PRICING = {
  "Plymouth Pilot (8 people)": {
    "1 hour": 120,
    "2 hours": 200,
    "Half day (4 hours)": 350,
    "Full day (8 hours)": 600,
    multiDay: { 2: 1100, 3: 1500, 4: 1900, 5: 2200, 6: 2500, 7: 2800 },
    extraDay: 350
  },
  "Bass Boat (5 people)": {
    "1 hour": 120,
    "2 hours": 200,
    "Half day (4 hours)": 350,
    "Full day (8 hours)": 600,
    multiDay: { 2: 1100, 3: 1500, 4: 1900, 5: 2200, 6: 2500, 7: 2800 },
    extraDay: 350
  }
};

const createBoat = () => ({
  category: "Motor Boats",
  boat: BOATS["Motor Boats"][0],
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

  // ---------------- PRICE ----------------
  const calcPrice = (b) => {
    const p = PRICING[b.boat];
    if (!p) return 0;

    if (b.isMultiDay) {
      if (b.days <= 7) return p.multiDay?.[b.days] || 0;
      return (p.multiDay?.[7] || 0) + (b.days - 7) * (p.extraDay || 0);
    }

    return p[b.duration] || 0;
  };

  const total = bookings.reduce((sum, b) => sum + calcPrice(b), 0);

  const updateBoat = (i, key, value) => {
    const copy = [...bookings];
    copy[i][key] = value;
    setBookings(copy);
  };

  const addBoat = () => setBookings([...bookings, createBoat()]);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const canSubmit = name && phone && email;

  // ---------------- INPUT STYLE (GLOBAL UPGRADE) ----------------
  const inputStyle = {
    width: "100%",
    padding: "16px",
    fontSize: "18px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #ddd"
  };

  const buttonStyle = {
    padding: "12px 16px",
    fontSize: "16px",
    fontWeight: 600,
    borderRadius: "10px",
    border: "1px solid #ddd",
    cursor: "pointer",
    background: "#fff"
  };

  const selectedButton = {
    ...buttonStyle,
    background: "#eef3f8",
    border: "2px solid #0f2f4f"
  };

  return (
    <div style={{
      display: "flex",
      gap: "20px",
      maxWidth: "1100px",
      margin: "40px auto",
      fontSize: "18px",
      lineHeight: 1.6
    }}>

      {/* ---------------- MAIN ---------------- */}
      <div style={{
        flex: 1,
        background: "#fff",
        borderRadius: "16px",
        padding: "35px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}>

        {/* PROGRESS */}
        <div style={{ marginBottom: "25px" }}>
          <div style={{ fontSize: "18px", fontWeight: 700 }}>
            Step {step} / 5
          </div>

          <div style={{
            height: "6px",
            background: "#eee",
            borderRadius: "10px",
            marginTop: "10px",
            overflow: "hidden"
          }}>
            <div style={{
              width: `${(step / 5) * 100}%`,
              height: "100%",
              background: "#0f2f4f"
            }} />
          </div>
        </div>

        {/* ---------------- STEP 1 ---------------- */}
        {step === 1 && (
          <>
            <h2 style={{ fontSize: "28px" }}>Select your boats</h2>

            {bookings.map((b, i) => (
              <div key={i} style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                padding: "15px",
                marginBottom: "15px"
              }}>
                <select
                  value={b.category}
                  onChange={(e) => {
                    const cat = e.target.value;
                    updateBoat(i, "category", cat);
                    updateBoat(i, "boat", BOATS[cat][0]);
                  }}
                  style={inputStyle}
                >
                  {Object.keys(BOATS).map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                <select
                  value={b.boat}
                  onChange={(e) => updateBoat(i, "boat", e.target.value)}
                  style={inputStyle}
                >
                  {BOATS[b.category].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </div>
            ))}

            <button style={buttonStyle} onClick={addBoat}>
              + Add another boat
            </button>
          </>
        )}

        {/* ---------------- STEP 2 ---------------- */}
        {step === 2 && (
          <>
            <h2 style={{ fontSize: "28px" }}>Duration</h2>

            {bookings.map((b, i) => (
              <div key={i} style={{ marginBottom: "18px" }}>
                <strong style={{ fontSize: "18px" }}>{b.boat}</strong>

                <select
                  value={b.duration}
                  onChange={(e) => {
                    updateBoat(i, "duration", e.target.value);
                    updateBoat(i, "isMultiDay", false);
                  }}
                  style={inputStyle}
                >
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>Half day (4 hours)</option>
                  <option>Full day (8 hours)</option>
                </select>

                <button style={buttonStyle}
                  onClick={() => updateBoat(i, "isMultiDay", true)}
                >
                  Multi-day
                </button>

                {b.isMultiDay && (
                  <div style={{ marginTop: "10px" }}>
                    <button style={buttonStyle}
                      onClick={() => updateBoat(i, "days", Math.max(2, b.days - 1))}
                    >−</button>

                    <span style={{ margin: "0 12px", fontSize: "18px" }}>
                      {b.days} days
                    </span>

                    <button style={buttonStyle}
                      onClick={() => updateBoat(i, "days", Math.min(31, b.days + 1))}
                    >+</button>
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* ---------------- STEP 3 ---------------- */}
        {step === 3 && (
          <>
            <h2 style={{ fontSize: "28px" }}>Starting location</h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                "St Anthony",
                "Helford Village",
                "Durgan",
                "Port Navas",
                "Gillan",
                "Flushing",
                "Helford Passage",
                "Calamansac",
                "Other"
              ].map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocation(loc)}
                  style={location === loc ? selectedButton : buttonStyle}
                >
                  {loc === "Other" ? "Other (specify)" : loc}
                </button>
              ))}
            </div>

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

        {/* ---------------- STEP 4 ---------------- */}
        {step === 4 && (
          <>
            <h2 style={{ fontSize: "28px" }}>Summary</h2>

            {bookings.map((b, i) => (
              <div key={i} style={{ marginBottom: "8px" }}>
                {b.boat} — £{calcPrice(b)}
              </div>
            ))}
          </>
        )}

        {/* ---------------- STEP 5 ---------------- */}
        {step === 5 && (
          <>
            <h2 style={{ fontSize: "28px" }}>Your details</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input style={inputStyle} placeholder="Full name *" onChange={(e) => setName(e.target.value)} />
              <input style={inputStyle} placeholder="Mobile number *" onChange={(e) => setPhone(e.target.value)} />
              <input style={inputStyle} placeholder="Email address *" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <button
              style={{
                ...buttonStyle,
                width: "100%",
                background: canSubmit ? "#0f2f4f" : "#ccc",
                color: "#fff",
                border: "none",
                marginTop: "10px"
              }}
              disabled={!canSubmit}
            >
              Request booking
            </button>
          </>
        )}

        {/* NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "25px" }}>
          {step > 1 && <button style={buttonStyle} onClick={back}>Back</button>}
          {step < 5 && <button style={buttonStyle} onClick={next}>Next</button>}
        </div>
      </div>

      {/* ---------------- SIDEBAR ---------------- */}
      <div style={{
        width: "320px",
        position: "sticky",
        top: "20px",
        background: "#0f2f4f",
        color: "#fff",
        padding: "25px",
        borderRadius: "16px"
      }}>
        <h3 style={{ fontSize: "20px" }}>Total</h3>
        <div style={{ fontSize: "32px", fontWeight: 700 }}>£{total}</div>
        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.85 }}>
          {bookings.length} boat(s) selected
        </div>
      </div>
    </div>
  );
}
