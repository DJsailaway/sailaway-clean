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
    backgroundColor: "rgba(0,0,0,0.2)"
  }} />

  {/* Text */}
<div style={{
  position: "absolute",
  top: "80px",
  left: "60px",
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
</div>

</div>

<div style={{
  borderTop: "1px solid #eee",
  paddingTop: "40px"
}}>

    {/* CENTERED CONTENT */}
    <div style={{ padding: 20, maxWidth: "700px", margin: "0 auto" }}>

      <h2>Plan your time on the water</h2>

      <p>
        I want a{" "}
        <select onChange={(e) => setBoat(e.target.value)}>
          <option>Motor Boat</option>
          <option>Sailing Boat</option>
          <option>Kayak / Paddleboard</option>
          <option>Rowing Boat</option>
        </select>{" "}
        for{" "}
        <select onChange={(e) => setDuration(e.target.value)}>
          <option>1 hour</option>
          <option>2 hours</option>
          <option>Half day (4 hours)</option>
          <option>Full day</option>
        </select>{" "}
        starting from{" "}
        <input type="datetime-local" onChange={(e) => setDate(e.target.value)} />
      </p>

      <h3>£{price}</h3>
      <button>Request booking</button>
       </div> {/* END centered content */}

  </div> {/* END bordered section */}

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
