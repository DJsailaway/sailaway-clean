import { useState } from "react";

// --- BOATS ---
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

// --- PRICING (EDIT HERE) ---
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
  // Add other boats the same way
};

export default function BookingWizard() {
  const [category, setCategory] = useState("Motor Boats");
  const [boat, setBoat] = useState(BOATS["Motor Boats"][0]);

  const [duration, setDuration] = useState("2 hours");
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [days, setDays] = useState(7);

  const [location, setLocation] = useState("St Anthony");
  const [customLocation, setCustomLocation] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // --- PRICE CALCULATION ---
  let price = 0;

  if (isMultiDay) {
    const boatPricing = PRICING[boat];

    if (days <= 7) {
      price = boatPricing?.multiDay?.[days] || 0;
    } else {
      const weekPrice = boatPricing?.multiDay?.[7] || 0;
      const extraDays = days - 7;
      price = weekPrice + extraDays * (boatPricing?.extraDay || 0);
    }
  } else {
    price = PRICING[boat]?.[duration] || 0;
  }

  const canSubmit = name && phone && email;

  return (
    <div style={{
      maxWidth: "700px",
      margin: "40px auto",
      padding: "30px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
    }}>
      <h2 style={{ marginBottom: "20px" }}>Book your boat</h2>

      {/* CATEGORY */}
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setBoat(BOATS[e.target.value][0]);
        }}
        style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
      >
        {Object.keys(BOATS).map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      {/* BOAT */}
      <select
        value={boat}
        onChange={(e) => setBoat(e.target.value)}
        style={{ width: "100%", padding: "12px", marginBottom: "20px" }}
      >
        {BOATS[category].map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>

      {/* DURATION */}
      <div style={{ marginBottom: "20px" }}>
        <strong>Duration</strong>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
          {["1 hour", "2 hours", "Half day (4 hours)", "Full day (8 hours)"].map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setDuration(opt);
                setIsMultiDay(false);
              }}
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                border: duration === opt && !isMultiDay ? "2px solid #0f2f4f" : "1px solid #ccc",
                background: duration === opt && !isMultiDay ? "#eef3f8" : "#fff",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              {opt}
            </button>
          ))}

          <button
            onClick={() => setIsMultiDay(true)}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: isMultiDay ? "2px solid #0f2f4f" : "1px solid #ccc",
              background: isMultiDay ? "#eef3f8" : "#fff",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Multi-day
          </button>
        </div>
      </div>

      {/* MULTI DAY */}
      {isMultiDay && (
        <div style={{ marginBottom: "20px" }}>
          <strong>Number of days</strong>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "12px",
            marginTop: "10px"
          }}>
            <button onClick={() => setDays(Math.max(2, days - 1))} style={{ fontSize: 22 }}>−</button>
            <div style={{ fontSize: "20px", fontWeight: 700 }}>{days}</div>
            <button onClick={() => setDays(Math.min(31, days + 1))} style={{ fontSize: 22 }}>+</button>
          </div>
        </div>
      )}

      {/* LOCATION BUTTONS */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ fontWeight: 700, marginBottom: "10px" }}>
          Starting location
        </div>

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
                padding: "10px 14px",
                borderRadius: "8px",
                border: location === loc ? "2px solid #0f2f4f" : "1px solid #ccc",
                background: location === loc ? "#eef3f8" : "#fff",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              {loc === "Other" ? "Other (please specify)" : loc}
            </button>
          ))}
        </div>

        {/* CONDITIONAL INPUT */}
        {location === "Other" && (
          <input
            placeholder="Enter location"
            value={customLocation}
            onChange={(e) => setCustomLocation(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />
        )}
      </div>

      {/* PRICE */}
      <div style={{ marginBottom: "20px" }}>
        <h3>£{price}</h3>

        <div style={{ fontSize: "14px", color: "#555" }}>
          {isMultiDay
            ? days <= 7
              ? `Total for ${days} day${days > 1 ? "s" : ""}`
              : `Week rate + ${days - 7} extra day${days - 7 > 1 ? "s" : ""}`
            : duration}
        </div>
      </div>

      {/* CONTACT */}
      <input placeholder="Name (required)" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "10px" }} />
      <input placeholder="Mobile number (required)" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "10px" }} />
      <input placeholder="Email (required)" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "20px" }} />

      <button
        disabled={!canSubmit}
        style={{
          width: "100%",
          padding: "14px",
          background: canSubmit ? "#0f2f4f" : "#ccc",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontWeight: 700
        }}
      >
        Request booking
      </button>
    </div>
  );
}
