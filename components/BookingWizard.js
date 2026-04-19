import { useState } from "react";

// ---------------- DATA ----------------

const BOATS = {
  Motor: ["Plymouth Pilot (8 people)", "Bass Boat (5 people)"],
  Sail: [
    "Drascombe Longboat (6 people)",
    "Wayfarer Dinghy (4 people)",
    "Topaz Dinghy (2 people)",
  ],
  "Kayak & SUP": [
    "Double Kayak (2 people)",
    "Single Kayak (1 person)",
    "Stand-Up Paddleboard (1 person)",
  ],
};

const DURATIONS = ["1 hour", "2 hours", "Half day (4 hours)", "Full day"];

const LOCATIONS = ["St Anthony", "Helford Village", "Gillan", "Flushing", "Other"];

// ---------------- HELPERS ----------------

function getMaxHour(duration) {
  if (duration === "1 hour") return 16;
  if (duration === "2 hours") return 15;
  if (duration === "Half day (4 hours)") return 13;
  if (duration === "Full day") return 9;
  return 16;
}

function generateTimes(duration) {
  const times = [];
  const max = getMaxHour(duration);

  for (let h = 9; h <= max; h++) {
    times.push(`${String(h).padStart(2, "0")}:00`);
    if (h !== max) times.push(`${String(h).padStart(2, "0")}:30`);
  }

  return times;
}

// ---------------- COMPONENT ----------------

export default function BookingWizard() {
  const [type, setType] = useState("Motor");
  const [boat, setBoat] = useState(BOATS["Motor"][0]);
  const [duration, setDuration] = useState("1 hour");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [from, setFrom] = useState("St Anthony");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const card = {
    background: "#f7f7f7",
    padding: "26px",
    borderRadius: "14px",
  };

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "20px" }}>
      <div style={card}>

        {/* TYPE */}
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setBoat(BOATS[e.target.value][0]);
          }}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        >
          {Object.keys(BOATS).map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        {/* BOAT */}
        <select
          value={boat}
          onChange={(e) => setBoat(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        >
          {BOATS[type].map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>

        {/* DURATION */}
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        >
          {DURATIONS.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        {/* DATE */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        {/* TIME */}
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        >
          {generateTimes(duration).map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        {/* FROM */}
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        >
          {LOCATIONS.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>

        {/* DETAILS */}
        <input
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          placeholder="Mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "14px" }}
        />

        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#0f2f4f",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: 700,
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Request Booking
        </button>
      </div>
    </div>
  );
}
