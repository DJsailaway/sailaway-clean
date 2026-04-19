import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";

// -------------------- DATA --------------------

const BOATS = {
  Motor: ["Plymouth Pilot (8 people)", "Bass Boat (5 people)"],
  Sail: ["Drascombe Longboat (6 people)", "Wayfarer Dinghy (4 people)", "Topaz Dinghy (2 people)"],
  "Kayak & SUP": ["Double Kayak (2 people)", "Single Kayak (1 person)", "Stand-Up Paddleboard (1 person)"],
};

const DURATIONS = ["1 hour", "2 hours", "Half day (4 hours)", "Full day"];

const LOCATIONS = ["St Anthony", "Helford Village", "Gillan", "Flushing", "Other"];

// -------------------- HELPERS --------------------

function isValidDate(dateStr) {
  if (!dateStr) return false;

  const selected = new Date(dateStr);
  const now = new Date();

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const year = selected.getFullYear();
  const month = selected.getMonth() + 1;

  const inSeason = (month >= 4 && month <= 10);

  return selected >= minDate && inSeason;
}

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

// -------------------- COMPONENT --------------------

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

  const progress = (step / 6) * 100;

  const card = {
    background: "#f7f7f7",
    padding: "26px",
    borderRadius: "14px",
    maxWidth: "720px",
    margin: "0 auto",
  };

  const button = {
    marginTop: "20px",
    width: "100%",
    padding: "14px",
    background: "#0f2f4f",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: 600,
    cursor: "pointer",
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

  return (
    <>
      <Head>
        <title>Luxury Boat Booking | Helford River</title>
      </Head>

      <Navbar />

      {/* HERO */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px 20px",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", marginBottom: "10px" }}>
          Plan your Helford River experience
        </h1>

        <p style={{ opacity: 0.7 }}>
          A simple, guided booking experience for your perfect day on the water.
        </p>
      </div>

      {/* PROGRESS BAR */}
      <div style={{ maxWidth: "720px", margin: "0 auto 20px", padding: "0 20px" }}>
        <div
          style={{
            height: "6px",
            background: "#eaeaea",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#0f2f4f",
              transition: "width 300ms ease",
            }}
          />
        </div>
      </div>

      {/* WIZARD */}
      <div style={{ padding: "20px" }}>
        <div style={card}>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2>What would you like to do?</h2>

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
              <h2>Select your boat</h2>

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

              <button style={button} onClick={() => setStep(4)}>
                Continue
              </button>
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <h2>Select date</h2>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ width: "100%", padding: "12px", marginTop: "10px" }}
              />

              <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
                April – October only. Must be at least 1 day ahead.
              </p>

              <button
                style={button}
                onClick={() => isValidDate(date) && setStep(5)}
              >
                Continue
              </button>
            </>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <>
              <h2>Select time</h2>

              {generateTimes(duration).map((t) => (
                <div
                  key={t}
                  style={time === t ? selected : option}
                  onClick={() => setTime(t)}
                >
                  {t}
                </div>
              ))}

              <button style={button} onClick={() => setStep(6)}>
                Continue
              </button>
            </>
          )}

          {/* STEP 6 */}
          {step === 6 && (
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

              {from === "Other" && (
                <input
                  placeholder="Please specify"
                  style={{ width: "100%", padding: "12px", marginTop: "10px" }}
                />
              )}

              <h2 style={{ marginTop: "20px" }}>Your details</h2>

              <input
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "12px", marginBottom: "10px" }}
              />

              <input
                placeholder="Mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                style={{ width: "100%", padding: "12px", marginBottom: "10px" }}
              />

              <input
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", padding: "12px", marginBottom: "10px" }}
              />

              <button style={button}>
                Request Booking
              </button>
            </>
          )}

        </div>
      </div>
    </>
  );
}
