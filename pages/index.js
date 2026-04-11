import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";

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
        <Navbar />

        {/* HERO */}
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
          <Image
            src="/hero.jpg"
            alt="Boat Hire on Helford River"
            fill
            priority
            style={{ objectFit: "cover" }}
          />

          {/* overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.25)"
            }}
          />

          {/* text */}
          <div
            style={{
              position: "absolute",
              top: "120px",
              left: "80px",
              color: "white",
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
              maxWidth: "500px",
              zIndex: 2
            }}
          >
            <h1 style={{ fontSize: "3.5rem", marginBottom: "10px" }}>
              Boat Hire on the Helford River, Cornwall
            </h1>

            <p style={{ fontSize: "1.2rem", marginBottom: "24px" }}>
              Relaxed, family-friendly experiences from St Anthony
            </p>

            <button
              style={{
                padding: "14px 28px",
                fontSize: "1.1rem",
                backgroundColor: "#1e3a5f",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                maxWidth: "280px"
              }}
              onClick={() => {
                document.getElementById("booking")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              Check availability
            </button>
          </div>
        </div>

        {/* BOOKING */}
        <div id="booking" style={{ borderTop: "1px solid #eee", paddingTop: "40px" }}>
          <div style={{ padding: "40px 20px", maxWidth: "700px", margin: "0 auto" }}>

            <div style={{
              backgroundColor: "#f5f5f5",
              padding: "30px",
              borderRadius: "10px"
            }}>

              <h2>Plan your time on the water</h2>

              {/* form unchanged */}
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

                <label>
                  Boat type
                  <br /><br />
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      setBoat(BOATS[e.target.value][0]);
                    }}
                    style={{ width: "100%", padding: "10px" }}
                  >
                    {Object.keys(BOATS).map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Select boat
                  <br /><br />
                  <select
                    value={boat}
                    onChange={(e) => setBoat(e.target.value)}
                    style={{ width: "100%", padding: "10px" }}
                  >
                    {(BOATS[category] || []).map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Duration
                  <br /><br />
                  <select
                    onChange={(e) => setDuration(e.target.value)}
                    style={{ width: "100%", padding: "10px" }}
                  >
                    <option>1 hour</option>
                    <option>2 hours</option>
                    <option>Half day (4 hours)</option>
                    <option>Full day</option>
                  </select>
                </label>

                <label>
                  Start time
                  <br /><br />
                  <input
                    type="datetime-local"
                    onChange={(e) => setDate(e.target.value)}
                    style={{ width: "100%", padding: "10px" }}
                  />
                </label>

              </div>

              <h3 style={{ fontSize: "2rem", marginTop: "30px" }}>
                £{price}
              </h3>

              <button
                style={{
                  marginTop: "30px",
                  padding: "14px",
                  width: "100%",
                  backgroundColor: "#1e3a5f",
                  color: "white",
                  border: "none",
                  borderRadius: "6px"
                }}
              >
                Request booking
              </button>

            </div>
          </div>
        </div>

        {/* SECONDARY IMAGE (FIXED) */}
        <div style={{ position: "relative", width: "100%", height: "500px", marginTop: "60px" }}>
          <Image
            src="/secondary.jpg"
            alt="Helford River scenery"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

      </div>
    </>
  );
}
