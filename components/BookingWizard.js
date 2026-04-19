import { useState } from "react";
import { PRICING } from "../data/pricing";

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

// ---------------- PRICE ENGINE ----------------

function getPrice(boat, hireType, hours, days) {
  const config = PRICING?.[boat];

  if (!config) return null;

  // HOURLY (tiered)
  if (hireType === "hourly") {
    return config.hourly?.[hours] || config.hourly?.[1];
  }

  // DAILY
  if (hireType === "daily") {
    return config.daily;
  }

  // MULTI-DAY
  if (hireType === "multi") {
    return config.daily * days;
  }

  return null;
}

// ---------------- COMPONENT ----------------

export default function BookingWizard() {
  const [step, setStep] = useState(1);

  const [category, setCategory] = useState("Motor");
  const [boat, setBoat] = useState(BOATS["Motor"][0]);

  const [hireType, setHireType] = useState("hourly");

  const [hours, setHours] = useState(1);
  const [days, setDays] = useState(2);

  const [date, setDate] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const price = getPrice(boat, hireType, hours, days);

  const isValid = name && email && mobile;

  // ---------------- STYLES ----------------

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
    fontWeight: 600,
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

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2>Choose experience</h2>

            {Object.keys(BOATS).map((t) => (
              <div
                key={t}
                style={category === t ? selected : option}
                onClick={() => {
                  setCategory(t);
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

            {BOATS[category].map((b) => (
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
            <h2>Hire type</h2>

            <div
              style={hireType === "hourly" ? selected : option}
              onClick={() => setHireType("hourly")}
            >
              Hourly hire
            </div>

            <div
              style={hireType === "daily" ? selected : option}
              onClick={() => setHireType("daily")}
            >
              Day hire
            </div>

            <div
              style={hireType === "multi" ? selected : option}
              onClick={() => setHireType("multi")}
            >
              Multi-day hire (2–21 days)
            </div>

            {hireType === "hourly" && (
              <input
                type="number"
                min="1"
                max="8"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                style={{ width: "100%", padding: "10px", marginTop: 10 }}
              />
            )}

            {hireType === "multi" && (
              <input
                type="number"
                min="2"
                max="21"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                style={{ width: "100%", padding: "10px", marginTop: 10 }}
              />
            )}

            {price && (
              <div style={{ marginTop: 10, fontWeight: 700 }}>
                Estimated price: £{price}
              </div>
            )}

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
            <h2>Date</h2>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ width: "100%", padding: "10px" }}
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
            <h2>Contact details</h2>

            <input
              placeholder="Name (required)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={option}
            />

            <input
              placeholder="Mobile (required)"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={option}
            />

            <input
              placeholder="Email (required)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={option}
            />

            {!isValid && (
              <div style={{ color: "red", marginBottom: 10 }}>
                Please complete all required fields
              </div>
            )}

            <button
              style={isValid ? button : { ...button, opacity: 0.4 }}
              disabled={!isValid}
            >
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
