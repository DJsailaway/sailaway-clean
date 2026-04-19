import { useState } from "react";

// ---------------- BOATS ----------------

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

// ---------------- PRICING MATRIX (EDIT HERE ONCE PER YEAR) ----------------
// Structure: boat → duration → price

const PRICING = {
  "Plymouth Pilot (8 people)": {
    "1 hour": 120,
    "2 hours": 200,
    "Half day (4 hours)": 350,
    "Full day": 600,
    "Week": 2500,
  },

  "Bass Boat (5 people)": {
    "1 hour": 120,
    "2 hours": 200,
    "Half day (4 hours)": 350,
    "Full day": 600,
    "Week": 2500,
  },

  "Drascombe Longboat (6 people)": {
    "1 hour": 110,
    "2 hours": 180,
    "Half day (4 hours)": 320,
    "Full day": 550,
    "Week": 2300,
  },

  "Wayfarer Dinghy (4 people)": {
    "1 hour": 100,
    "2 hours": 160,
    "Half day (4 hours)": 280,
    "Full day": 500,
    "Week": 2000,
  },

  "Topaz Dinghy (2 people)": {
    "1 hour": 90,
    "2 hours": 140,
    "Half day (4 hours)": 240,
    "Full day": 420,
    "Week": 1800,
  },

  "Double Kayak (2 people)": {
    "1 hour": 20,
    "2 hours": 35,
    "Half day (4 hours)": 60,
    "Full day": 90,
    "Week": 400,
  },

  "Single Kayak (1 person)": {
    "1 hour": 15,
    "2 hours": 25,
    "Half day (4 hours)": 45,
    "Full day": 70,
    "Week": 300,
  },

  "Stand-Up Paddleboard (1 person)": {
    "1 hour": 15,
    "2 hours": 25,
    "Half day (4 hours)": 45,
    "Full day": 70,
    "Week": 300,
  },
};

// ---------------- OPTIONS ----------------

const DURATIONS = ["1 hour", "2 hours", "Half day (4 hours)", "Full day", "Week"];

const LOCATIONS = ["St Anthony", "Helford Village", "Gillan", "Flushing", "Other"];

// ---------------- COMPONENT ----------------

export default function BookingWizard() {
  const [step, setStep] = useState(1);

  const [type, setType] = useState("Motor");
  const [boat, setBoat] = useState(BOATS["Motor"][0]);
  const [duration, setDuration] = useState("1 hour");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [from, setFrom] = useState("St Anthony");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const price = PRICING?.[boat]?.[duration];

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
    marginTop: "20px",
    width: "100%",
    padding: "14px",
    background: "#0f2f4f",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: 700,
    cursor: "pointer",
  };

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "20px" }}>
      <div style={card}>

        {/* STEP */}
        <div style={{ marginBottom: "10px", opacity: 0.6 }}>
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

            {/* 💰 LIVE PRICE */}
            {price && (
              <div style={{ marginTop: 12, fontWeight: 700 }}>
                Estimated price: £{price}
              </div>
            )}

            <button style={button} onClick={() => setStep(4)}>
              Continue
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

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <button style={button} onClick={() => setStep(5)}>
              Continue
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
          </>
        )}

      </div>
    </div>
  );
}
