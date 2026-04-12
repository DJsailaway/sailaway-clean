import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";

// BOATS
const BOATS = {
  "Motor Boats": ["Plymouth Pilot (8 people)", "Bass Boat (5 people)"],
  "Sailing Boats": [
    "Drascombe Longboat (6 people)",
    "Wayfarer Dinghy (4 people)",
    "Topaz Dinghy (2 people)",
    "Pico Dinghy (2 people)",
    "Topper Dinghy (1 person)"
  ],
  "Kayaks": ["Double Kayak (2 people)", "Single Kayak (1 person)"],
  "Paddleboards": ["Stand-Up Paddleboard (1 person)"],
  "Rowing Boats": ["Anarth Rowing Dinghy (4 people)"]
};

// PRICING
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

  const buttonStyle = {
    padding: "12px 16px",
    backgroundColor: "#1e3a5f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    whiteSpace: "nowrap"
  };

  return (
    <>
      <Head>
        <title>Boat Hire Helford River | Self Drive Boats Cornwall</title>
      </Head>

      <Navbar />

      {/* HERO */}
      <SplitOverlayHero
        imageSrc="/hero.jpg"
        alt="Boat Hire on Helford River"
        title="Boat Hire on the Helford River, Cornwall"
        overlayStrength="light"
        topContent={
          <>
            <p>
              Self-drive boats, kayaks, sailing boats and more — explore Cornwall’s Helford River at your own pace.
            </p>
          </>
        }
      />

      {/* BUTTON NAV BAR */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          padding: "25px 20px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        <a href="/motor-boat-hire-helford"><button style={buttonStyle}>Our Motor Boats</button></a>
        <a href="/sailing-boat-hire-helford"><button style={buttonStyle}>Our Sailing Boats</button></a>
        <a href="/kayak-hire-helford"><button style={buttonStyle}>Our Kayaks & SUPs</button></a>
        <a href="/st-anthony-helford-river"><button style={buttonStyle}>Location</button></a>
        <a href="/boat-hire-faqs"><button style={buttonStyle}>FAQs</button></a>
      </div>

      {/* BOOKING */}
      <div
        id="booking"
        style={{
          padding: "40px 20px",
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "30px",
            borderRadius: "10px"
          }}
        >
          <h2>Request your boat hire</h2>

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setBoat(BOATS[e.target.value][0]);
            }}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          >
            {Object.keys(BOATS).map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select
            value={boat}
            onChange={(e) => setBoat(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          >
            {(BOATS[category] || []).map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          >
            <option>1 hour</option>
            <option>2 hours</option>
            <option>Half day (4 hours)</option>
            <option>Full day</option>
          </select>

          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <h3 style={{ color: "#1e3a5f" }}>£{price}</h3>

          <button
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#1e3a5f",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold"
            }}
          >
            Request booking
          </button>
        </div>
      </div>
    </>
  );
}
