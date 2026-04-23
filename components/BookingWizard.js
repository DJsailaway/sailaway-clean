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

  const total = bookings.reduce((s, b) => s + calcPrice(b), 0);

  const updateBoat = (i, key, value) => {
    const copy = [...bookings];
    copy[i][key] = value;
    setBookings(copy);
  };

  const addBoat = () => setBookings([...bookings, createBoat()]);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const canSubmit = name && phone && email;

  return (
    <div style={{ display: "flex", gap: "20px", maxWidth: "1100px", margin: "40px auto" }}>

      {/* ---------------- MAIN WIZARD ---------------- */}
      <div style={{
        flex: 1,
        background: "#fff",
        borderRadius: "16px",
        padding: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}>

        {/* PROGRESS BAR */}
        <div style={{ marginBottom: "25px" }}>
          <div style={{ fontWeight: 700 }}>Step {step} / 5</div>
          <div style={{
            height: "6px",
            background: "#eee",
            borderRadius: "10px",
            marginTop: "8px",
            overflow: "hidden"
          }}>
            <div style={{
              width: `${(step / 5) * 100}%`,
              height: "100%",
              background: "#0f2f4f"
            }} />
          </div>
        </div>

        {/* ---------------- STEP CONTENT ---------------- */}

        {step === 1 && (
          <>
            <h2>Select your boats</h2>

            {bookings.map((b, i) => (
              <div key={i} style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                padding: "15px",
                marginBottom: "12px"
              }}>
                <select
                  value={b.category}
                  onChange={(e) => {
                    const cat = e.target.value;
                    updateBoat(i, "category", cat);
                    updateBoat(i, "boat", BOATS[cat][0]);
                  }}
                  style={{ width: "100%", padding: "10px", marginBottom: "8px" }}
                >
                  {Object.keys(BOATS).map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                <select
                  value={b.boat}
                  onChange={(e) => updateBoat(i, "boat", e.target.value)}
                  style={{ width: "100%", padding: "10px" }}
                >
                  {BOATS[b.category].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </div>
            ))}

            <button onClick={addBoat}>+ Add another boat</button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Duration</h2>

            {bookings.map((b, i) => (
              <div key={i} style={{ marginBottom: "15px" }}>
                <strong>{b.boat}</strong>

                <select
                  value={b.duration}
                  onChange={(e) => {
                    updateBoat(i, "duration", e.target.value);
                    updateBoat(i, "isMultiDay", false);
                  }}
                  style={{ width: "100%", padding: "10px", marginTop: "8px" }}
                >
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>Half day (4 hours)</option>
                  <option>Full day (8 hours)</option>
                </select>

                <button onClick={() => updateBoat(i, "isMultiDay", true)}>
                  Multi-day
                </button>

                {b.isMultiDay && (
                  <div>
                    <button onClick={() => updateBoat(i, "days", Math.max(2, b.days - 1))}>−</button>
                    <span style={{ margin: "0 10px" }}>{b.days}</span>
                    <button onClick={() => updateBoat(i, "days", Math.min(31, b.days + 1))}>+</button>
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {step === 3 && (
          <>
            <h2>Starting location</h2>

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
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: location === loc ? "2px solid #0f2f4f" : "1px solid #ddd"
                  }}
                >
                  {loc === "Other" ? "Other (specify)" : loc}
                </button>
              ))}
            </div>

            {location === "Other" && (
              <input
                placeholder="Enter location"
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
                style={{ width: "100%", padding: "10px", marginTop: "10px" }}
              />
            )}
          </>
        )}

        {step === 4 && (
          <>
            <h2>Summary</h2>
            {bookings.map((b, i) => (
              <div key={i}>
                {b.boat} — £{calcPrice(b)}
              </div>
            ))}
          </>
        )}

        {step === 5 && (
          <>
            <h2>Your details</h2>

            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

            <button disabled={!canSubmit}>Request booking</button>
          </>
        )}

        {/* NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          {step > 1 && <button onClick={back}>Back</button>}
          {step < 5 && <button onClick={next}>Next</button>}
        </div>
      </div>

      {/* ---------------- STICKY SUMMARY ---------------- */}
      <div style={{
        width: "300px",
        position: "sticky",
        top: "20px",
        height: "fit-content",
        background: "#0f2f4f",
        color: "#fff",
        padding: "20px",
        borderRadius: "16px"
      }}>
        <h3>Total</h3>
        <div style={{ fontSize: "28px", fontWeight: 700 }}>£{total}</div>

        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
          {bookings.length} boat(s)
        </div>
      </div>
    </div>
  );
}
