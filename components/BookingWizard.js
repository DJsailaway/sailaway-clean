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
    perDay: 600
  },
  "Bass Boat (5 people)": {
    "1 hour": 120,
    "2 hours": 200,
    "Half day (4 hours)": 350,
    "Full day (8 hours)": 600,
    perDay: 600
  },
  "Drascombe Longboat (6 people)": {
    "1 hour": 120,
    "2 hours": 200,
    "Half day (4 hours)": 350,
    "Full day (8 hours)": 600,
    perDay: 600
  },
  "Wayfarer Dinghy (4 people)": {
    "1 hour": 120,
    "2 hours": 200,
    "Half day (4 hours)": 350,
    "Full day (8 hours)": 600,
    perDay: 600
  },
  "Pico Dinghy (2 people)": {
    "1 hour": 80,
    "2 hours": 140,
    "Half day (4 hours)": 260,
    "Full day (8 hours)": 420,
    perDay: 420
  },
  "Topper Dinghy (1 person)": {
    "1 hour": 80,
    "2 hours": 140,
    "Half day (4 hours)": 260,
    "Full day (8 hours)": 420,
    perDay: 420
  },
  "Double Kayak (2 people)": {
    "1 hour": 20,
    "2 hours": 35,
    "Half day (4 hours)": 60,
    "Full day (8 hours)": 90,
    perDay: 90
  },
  "Single Kayak (1 person)": {
    "1 hour": 20,
    "2 hours": 35,
    "Half day (4 hours)": 60,
    "Full day (8 hours)": 90,
    perDay: 90
  },
  "Stand-Up Paddleboard (1 person)": {
    "1 hour": 20,
    "2 hours": 35,
    "Half day (4 hours)": 60,
    "Full day (8 hours)": 90,
    perDay: 90
  },
  "Anarth Rowing Dinghy (4 people)": {
    "1 hour": 25,
    "2 hours": 45,
    "Half day (4 hours)": 70,
    "Full day (8 hours)": 110,
    perDay: 110
  }
};

export default function BookingWizard() {
  const [category, setCategory] = useState("Motor Boats");
  const [boat, setBoat] = useState(BOATS["Motor Boats"][0]);

  const [duration, setDuration] = useState("2 hours");
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [days, setDays] = useState(7);

  const [location, setLocation] = useState("St Anthony");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const price = isMultiDay
    ? (PRICING[boat]?.perDay || 0) * days
    : PRICING[boat]?.[duration] || 0;

  const canSubmit = name && phone && email;

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}
    >
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
                fontWeight: 600
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
              fontWeight: 600
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
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px"
          }}>
            <button onClick={() => setDays(Math.max(2, days - 1))} style={{ fontSize: 24 }}>−</button>
            <div style={{ fontSize: "20px", fontWeight: 700 }}>{days}</div>
            <button onClick={() => setDays(Math.min(31, days + 1))} style={{ fontSize: 24 }}>+</button>
          </div>
        </div>
      )}

      {/* LOCATION */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ width: "100%", padding: "12px", marginBottom: "20px" }}
      >
        <option>St Anthony</option>
        <option>Helford Village</option>
        <option>Durgan</option>
        <option>Port Navas</option>
        <option>Gillan</option>
        <option>Flushing</option>
        <option>Helford Passage</option>
      </select>

      {/* CONTACT */}
      <input placeholder="Name (required)" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "10px" }} />
      <input placeholder="Mobile number (required)" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "10px" }} />
      <input placeholder="Email (required)" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "20px" }} />

      {/* PRICE */}
      <h3 style={{ marginBottom: "20px" }}>£{price}</h3>

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
