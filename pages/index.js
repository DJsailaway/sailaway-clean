import { useState } from "react";

const PRICING = {
  "Motor Boat": { "1 hour": 120, "2 hours": 200, "Half day (4 hours)": 350, "Full day": 600 },
  "Sailing Boat": { "1 hour": 80, "2 hours": 140, "Half day (4 hours)": 260, "Full day": 420 },
  "Kayak / Paddleboard": { "1 hour": 20, "2 hours": 35, "Half day (4 hours)": 60, "Full day": 90 },
  "Rowing Boat": { "1 hour": 25, "2 hours": 45, "Half day (4 hours)": 70, "Full day": 110 }
};

export default function Home() {
  const [boat, setBoat] = useState("Motor Boat");
  const [duration, setDuration] = useState("2 hours");
  const [date, setDate] = useState("");

  const price = PRICING[boat][duration];

return (
  <div style={{ fontFamily: "sans-serif" }}>

{/* HERO SECTION */}
<div style={{ position: "relative" }}>

  <img 
    src="/hero.jpg"
    style={{
      width: "100%",
      height: "auto",
      display: "block"
    }}
  />

  {/* Overlay */}
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)"
  }} />

  {/* Text */}
<div style={{
  position: "absolute",
  top: "120px",
  left: "80px",
  color: "white",
  textShadow: "0 2px 12px rgba(0,0,0,0.8)",
  maxWidth: "500px"
}}>
  <h1 style={{ fontSize: "3.5rem", marginBottom: "10px" }}>
    Boat Hire on the Helford River
  </h1>
  <p style={{ fontSize: "1.2rem" }}>
    Relaxed, family-friendly experiences from St Anthony
  </p>
      
<button
  style={{
    marginTop: "24px",
    padding: "14px 28px",
    fontSize: "1.1rem",
    backgroundColor: "#1e3a5f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.2s ease",
    width: "100%",
    maxWidth: "280px"
  }}
>
  Check availability
</button>
</div>

</div>

{/* BOOKING SECTION */}
<div
  id="booking"
  style={{
    borderTop: "1px solid #eee",
    paddingTop: "40px"
  }}
>
  <div style={{
    padding: "40px 20px",
    maxWidth: "700px",
    margin: "0 auto"
  }}>

<div style={{
  backgroundColor: "#f5f5f5",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
}}>

      <h2 style={{ marginBottom: "20px" }}>
        Plan your time on the water
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

<label style={{ fontWeight: "500" }}>
  Boat type
  <br /><br />
  <select
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
            onChange={(e) => setBoat(e.target.value)}
          >
            <option>Motor Boat</option>
            <option>Sailing Boat</option>
            <option>Kayak / Paddleboard</option>
            <option>Rowing Boat</option>
          </select>
        </label>

<label style={{ fontWeight: "500" }}>
  Duration
  <br /><br />
  <select
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option>1 hour</option>
            <option>2 hours</option>
            <option>Half day (4 hours)</option>
            <option>Full day</option>
          </select>
        </label>

<label style={{ fontWeight: "500" }}>
          Start time
          <br /><br />
          <input
            type="datetime-local"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

      </div>

<h3 style={{
  fontSize: "2rem",
  marginTop: "30px",
  color: "#1e3a5f"
}}>
  £{price}
</h3>

      <button
        style={{
          marginTop: "30px",
          padding: "14px",
          width: "100%",
          fontSize: "1.1rem",
          backgroundColor: "#1e3a5f",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Request booking
      </button>
<div style={{
  marginTop: "20px",
  color: "#333",
  fontSize: "0.95rem",
  opacity: 0.95,
  display: "flex",
  flexDirection: "column",
  gap: "6px"
}}>
  <div>✓ No experience needed</div>
  <div>✓ Life jackets included</div>
  <div>✓ Based in St Anthony</div>
</div>
          
    </div>
  </div>
</div>

  {/* SECONDARY IMAGE */}
  <img 
    src="/secondary.jpg"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      marginTop: "60px"
    }}
  />

</div>
);
}
