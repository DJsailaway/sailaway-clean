import { useState } from "react";
import Head from "next/head";


// 👇 PUT BOATS HERE
const BOATS = {
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
  "Kayaks": [
    "Double Kayak (2 people)",
    "Single Kayak (1 person)"
  ],
  "Paddleboards": [
    "Stand-Up Paddleboard (1 person)"
  ],
  "Rowing Boats": [
    "Anarth Rowing Dinghy (4 people)"
  ]
};


// 👇 THEN PRICING DIRECTLY BELOW
const PRICING = {
  "Plymouth Pilot (8 people)": { "1 hour": 120, "2 hours": 200, "Half day (4 hours)": 350, "Full day": 600 },
  "Bass Boat (5 people)": { "1 hour": 120, "2 hours": 200, "Half day (4 hours)": 350, "Full day": 600 },
  "Drascombe Longboat (6 people)": { "1 hour": 120, "2 hours": 200, "Half day (4 hours)": 350, "Full day": 600 },
  "Wayfarer Dinghy (4 people)": { "1 hour": 120, "2 hours": 200, "Half day (4 hours)": 350, "Full day": 600 },
  "Topaz Dinghy (2 people)": { "1 hour": 120, "2 hours": 200, "Half day (4 hours)": 350, "Full day": 600 },
  "Pico Dinghy (2 people)": { "1 hour": 80, "2 hours": 140, "Half day (4 hours)": 260, "Full day": 420 },
  "Topper Dinghy (1 person)": { "1 hour": 80, "2 hours": 140, "Half day (4 hours)": 260, "Full day": 420 },
  "Double Kayak (2 people)": { "1 hour": 20, "2 hours": 35, "Half day (4 hours)": 60, "Full day": 90 },
  "Single Kayak (1 person)": { "1 hour": 20, "2 hours": 35, "Half day (4 hours)": 60, "Full day": 90 },
  "Stand-Up Paddleboard (1 person)": { "1 hour": 20, "2 hours": 35, "Half day (4 hours)": 60, "Full day": 90 },
  "Anarth Rowing Dinghy (4 people)": { "1 hour": 25, "2 hours": 45, "Half day (4 hours)": 70, "Full day": 110 }
};

export default function Home() {
  const [category, setCategory] = useState("Motor Boats");
  const [boat, setBoat] = useState("Plymouth Pilot (8 people)");
  const [duration, setDuration] = useState("2 hours");
  const [date, setDate] = useState("");

  const price = PRICING[boat][duration];

return (
  <>
    <Head>
      <title>Boat Hire Helford River | Self Drive Boats Cornwall</title>
      <meta
        name="description"
        content="Boat hire on the Helford River in Cornwall. Self-drive boats available — no experience needed. Established since 1936."
      />
    </Head>
  
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
    Boat Hire on the Helford River, Cornwall
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

{/* BOAT CATEGORY */}
<label style={{ fontWeight: "500" }}>
  Boat type
  <br /><br />
  <select
    name="category"
    value={category}
    onChange={(e) => {
      setCategory(e.target.value);
      setBoat(BOATS[e.target.value][0]);
    }}
    style={{
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem"
    }}
  >
    <option>Motor Boats</option>
    <option>Sailing Boats</option>
    <option>Kayaks</option>
    <option>Paddleboards</option>
    <option>Rowing Boats</option>
  </select>
</label>

{/* SPECIFIC BOAT */}
<label style={{ fontWeight: "500" }}>
  Select boat
  <br /><br />
  <select
    name="boat"
    value={boat}
    onChange={(e) => setBoat(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem"
    }}
  >
    {BOATS[category].map((b) => (
      <option key={b}>{b}</option>
    ))}
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
  onClick={() => alert("CLICK WORKS")}
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
  gap: "8px"
}}>
  <div>✓ Motor boats — no experience needed</div>
  <div>✓ Sailing boats for experienced sailors</div>
  <div>✓ Life jackets & full briefing included</div>
  <div>✓ Hiring boats since 1936</div>
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
</>
);
}
