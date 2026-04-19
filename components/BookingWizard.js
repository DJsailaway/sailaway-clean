import { useState } from "react";

// ---------------- BOATS ----------------

const BOATS = {
  Motor: ["Plymouth Pilot (8 people)", "Bass Boat (5 people)"],

  Sail: [
    "Drascombe Longboat (6 people)",
    "Wayfarer Dinghy (4 people)",
    "Topaz Dinghy (2 people)",
    "Pico Dinghy (2 people)",
    "Topper Dinghy (1 person)",
  ],

  "Kayak / SUP / Rowing": [
    "Rowing Dinghy (4 people)",
    "Kayak (2 people)",
    "SUP (1 person)",
    "Anarth Dinghy (4 people)",
  ],
};

// ---------------- PRICING ----------------
// (unchanged structure — you can expand later with multi-day rates)

const PRICING = {
  "Plymouth Pilot (8 people)": {
    "1 hour": 120,
    "2 hours": 200,
    "Half day (4 hours)": 350,
    "Full day": 600,
  },
};

// ---------------- DURATION OPTIONS ----------------

const DURATIONS = [
  "1 hour",
  "2 hours",
  "Half day (4 hours)",
  "Full day",
  "Multi-day (1–21 days)",
];

const LOCATIONS = ["St Anthony", "Helford Village", "Gillan", "Flushing", "Other"];

// ---------------- HELPERS ----------------

function getPrice(boat, duration) {
  if (!boat || !duration) return null;

  const base = PRICING?.[boat]?.[duration];

  // fallback (so system never breaks)
  return base || null;
}

// ---------------- COMPONENT ----------------

export default function BookingWizard() {
  const [step, setStep] = useState(1);

  const [type, setType] = useState("Motor");
  const [boat, setBoat] = useState(BOATS["Motor"][0]);
  const [duration, setDuration] = useState("1 hour");

  const [date, setDate] = useState("");
  const [days, setDays] = useState(1); // NEW for multi-day
  const [time, setTime] = useState("09:00");
  const [from, setFrom] = useState("St Anthony");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const price = getPrice(boat, duration);

  const card = {
    background: "#f7f7f7",
    padding: "28px",
    borderRadius: "14px",
  };

  const option = {
    padding: "14px",
    background: "white",
    borderRadius: "10px",
    marginBottom: "10px",
    cursor: "pointer",
    border: "1px solid #ddd",
  };

  const selected = {
    ...option,
    border: "2px solid #0f2f4f",
  };

  const button = {
    marginTop: "15px",
    width: "100%",
    padding: "14px",
    background: "#0f2f4f",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: 700,
    cursor: "pointer",
  };

  const backButton = {
    marginTop: "10px",
    width: "100%",
    padding: "12px",
    background: "white",
    color: "#0f2f4f",
    border: "2px solid #0f2f4f",
    borderRadius: "10px",
    fontWeight: 700,
    cursor: "pointer",
  };

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "20px" }}>
      <div style={card}>

        <div style={{ marginBottom: 10, opacity: 0.6 }}>
          Step {step} of 5
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2>Choose experience</h2>

            {Object.keys(BOATS).map((t) => (
              <div
                key={t}
                style={type === t ? selected : option}
                onClick={() => {
                  setType(t);
                  setBoat(BOATS[t][0]);
                }}
              >
                {t}
              </div>
            ))}

            <button style={button} onClick={() => setStep(2)}>
              Continue
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2>Select boat</h2>

            {BOATS[type].map((b) => (
              <div
                key={b}
                style={boat === b ? selected : option}
                onClick={() => setBoat(b)}
              >
                {b}
              </div>
            ))}

            <button style={button} onClick={() => setStep(3)}>
              Continue
            </button>

            <button style={backButton} onClick={() => setStep(1)}>
              Back
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2>Duration</h2>

            {DURATIONS.map((d) => (
              <div
                key={d}
                style={duration === d ? selected : option}
                onClick={() => setDuration(d)}
              >
                {d}
              </div>
            ))}

            <button style={button} onClick={() => setStep(4)}>
              Continue
            </button>

            <button style={backButton} onClick={() => setStep(2)}>
              Back
            </button>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <h2>Date & time</h2>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            {duration === "Multi-day (1–21 days)" && (
              <input
                type="number"
                min="1"
                max="21"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="Number of days (1–21)"
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
              />
            )}

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <button style={button} onClick={() => setStep(5)}>
              Continue
            </button>

            <button style={backButton} onClick={() => setStep(3)}>
              Back
            </button>
          </>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <>
            <h2>Pickup location</h2>

            {LOCATIONS.map((l) => (
              <div
                key={l}
                style={from === l ? selected : option}
                onClick={() => setFrom(l)}
              >
                {l}
              </div>
            ))}

            <button style={button}>
              Request booking
            </button>

            <button style={backButton} onClick={() => setStep(4)}>
              Back
            </button>
          </>
        )}

      </div>
    </div>
  );
}
