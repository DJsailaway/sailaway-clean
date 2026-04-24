import { useState } from "react";
import { PRICING } from "../lib/pricing";

// ---------------- INTENT MAP ----------------
const INTENT_MAP = {
  Motor: "Motor Boats",
  Sail: "Sailing Boats",
  Paddle: "Rowing, Kayak & SUP"
};

// ---------------- BOATS ----------------
const CATEGORIES = {
  "Motor Boats": [
    "Plymouth Pilot (8 people)",
    "Bass Boat (5 people)"
  ],
  "Sailing Boats": [
    "Drascombe Longboat (6 people)",
    "Wayfarer Dinghy (4 people)",
    "Topaz Dinghy (2 people)",
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

const createBoat = () => ({
  category: "Motor Boats",
  boat: CATEGORIES["Motor Boats"][0],
  duration: "2 Hours",
  isMultiDay: false,
  days: 7
});

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [intent, setIntent] = useState("Motor");
  const [bookings, setBookings] = useState([createBoat()]);

  const [location, setLocation] = useState("St Anthony");
  const [customLocation, setCustomLocation] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

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

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  // ---------------- EMAIL SUBMIT (ONLY CHANGE) ----------------
  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          bookings,
          total,
          location: customLocation || location
        })
      });

      if (res.ok) {
        alert("Booking sent successfully!");
      } else {
        alert("Failed to send booking. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- YOUR ORIGINAL STYLES PRESERVED ----------------
  const inputStyle = {
    width: "100%",
    padding: "16px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    marginBottom: "12px"
  };

  const cardStyle = (selected) => ({
    padding: "20px",
    borderRadius: "16px",
    border: selected ? "2px solid #0f2f4f" : "1px solid #ddd",
    background: selected ? "#eef4f8" : "#f8fafc",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  });

  // ---------------- RENDER ----------------
  return (
    <div style={{ maxWidth: "1100px", margin: "40px auto", padding: "20px" }}>

      {/* ---------------- PROGRESS BAR (RESTORED) ---------------- */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "30px"
      }}>
        {["Experience", "Boat", "Duration", "Location", "Details"].map((label, i) => {
          const stepNum = i + 1;
          const active = step === stepNum;
          const complete = step > stepNum;

          return (
            <div key={label} style={{ flex: 1, textAlign: "center", position: "relative" }}>
              {i !== 0 && (
                <div style={{
                  position: "absolute",
                  top: "18px",
                  left: "-50%",
                  width: "100%",
                  height: "2px",
                  background: complete ? "#0f2f4f" : "#ddd"
                }} />
              )}

              <div style={{
                width: "36px",
                height: "36px",
                margin: "0 auto",
                borderRadius: "50%",
                background: active || complete ? "#0f2f4f" : "#fff",
                color: active || complete ? "#fff" : "#999",
                border: "2px solid #0f2f4f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600"
              }}>
                {stepNum}
              </div>

              <div style={{
                fontSize: "13px",
                marginTop: "6px",
                color: active ? "#0f2f4f" : "#777"
              }}>
                {label}
              </div>
            </div>
          );
        })}
      </div>

      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Step {step} of 5
      </h2>

      {/* ---------------- STEP 1 ---------------- */}
      {step === 1 && (
        <div style={{ display: "grid", gap: "15px" }}>
          {Object.keys(INTENT_MAP).map((key) => (
            <div
              key={key}
              onClick={() => {
                setIntent(key);

                const category = INTENT_MAP[key];
                const copy = [...bookings];

                copy[0].category = category;
                copy[0].boat = CATEGORIES[category][0];

                setBookings(copy);

                setStep(2);
              }}
              style={cardStyle(intent === key)}
            >
              <strong>{key}</strong>
            </div>
          ))}
        </div>
      )}

      {/* ---------------- STEP 2 ---------------- */}
      {step === 2 && (() => {
        const category = INTENT_MAP[intent];
        const boats = CATEGORIES[category];

        return (
          <div style={{ display: "grid", gap: "15px" }}>
            {boats.map((boat) => (
              <div
                key={boat}
                onClick={() => {
                  updateBoat(0, "boat", boat);
                  setStep(3);
                }}
                style={cardStyle(bookings[0].boat === boat)}
              >
                {boat}
              </div>
            ))}
          </div>
        );
      })()}

      {/* ---------------- STEP 3 ---------------- */}
      {step === 3 && (
        <>
          <h3>Duration</h3>

          <select
            value={bookings[0].duration}
            onChange={(e) => updateBoat(0, "duration", e.target.value)}
            style={inputStyle}
          >
            <option>1 Hour</option>
            <option>2 Hours</option>
            <option>Half Day (4 Hours)</option>
            <option>Full Day (8 Hours)</option>
          </select>

          <button onClick={() => updateBoat(0, "isMultiDay", true)}>
            Multi Day
          </button>

          {bookings[0].isMultiDay && (
            <input
              type="number"
              min="2"
              max="31"
              value={bookings[0].days}
              onChange={(e) => updateBoat(0, "days", Number(e.target.value))}
              style={inputStyle}
            />
          )}
        </>
      )}

      {/* ---------------- STEP 4 ---------------- */}
      {step === 4 && (
        <>
          <h3>Location</h3>

          {Object.keys(PRICING.locations).map((loc) => (
            <div
              key={loc}
              onClick={() => setLocation(loc)}
              style={cardStyle(location === loc)}
            >
              {loc}
            </div>
          ))}
        </>
      )}

      {/* ---------------- STEP 5 ---------------- */}
      {step === 5 && (
        <>
          <h3>Details</h3>

          <input style={inputStyle} placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input style={inputStyle} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
          <input style={inputStyle} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%",
              padding: "16px",
              fontSize: "18px",
              borderRadius: "14px",
              background: "#0f2f4f",
              color: "#fff",
              border: "none",
              marginTop: "20px",
              cursor: "pointer"
            }}
          >
            {loading ? "Sending..." : "Request Booking"}
          </button>
        </>
      )}

      {/* ---------------- NAVIGATION (UNCHANGED) ---------------- */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "30px"
      }}>
        {step > 1 && step < 5 && (
          <button onClick={back}>Back</button>
        )}

        {step >= 3 && step < 5 && (
          <button onClick={next}>Next →</button>
        )}
      </div>

      {/* ---------------- TOTAL ---------------- */}
      <div style={{ marginTop: "30px", fontSize: "20px" }}>
        Total: £{total}
      </div>
    </div>
  );
}
