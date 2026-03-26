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
  <div style={{ padding: 20, maxWidth: "600px", margin: "0 auto" }}>
      <h1>Boat Hire on the Helford River</h1>
      <p>Relaxed, family-friendly experiences from St Anthony</p>

      <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
  Plan your time on the water
</h2>
<p style={{ color: "#666", marginBottom: "30px" }}>
  Choose your boat, duration, and preferred start time
</p>

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
</div>

{/* NEW IMAGE SECTION 👇 */}
<div style={{
  height: "400px",
  backgroundImage: "url('/secondary.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  marginTop: "60px"
}} />

</div>
);
}
