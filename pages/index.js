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
  const [time, setTime] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const price = PRICING[boat][duration];

  const isMultiDay =
    duration.includes("day") && !duration.includes("hour");

  const getMaxStartHour = (duration) => {
    if (isMultiDay) return 16;

    switch (duration) {
      case "1 hour":
        return 16;
      case "2 hours":
        return 15;
      case "Half day (4 hours)":
        return 13;
      case "Full day":
        return 9;
      default:
        return 16;
    }
  };

  const isAllowedDate = (value) => {
    if (!value) return true;
    const d = new Date(value);
    const year = d.getFullYear();

    const start = new Date(year, 3, 1);
    const end = new Date(year, 9, 31);

    return d >= start && d <= end;
  };

  const buildDateTime = () => {
    if (!date || !time) return "";
    return `${date}T${time}`;
  };

  const generateTimeOptions = () => {
    if (duration === "Full day") {
      return <option value="09:00">09:00</option>;
    }

    const max = getMaxStartHour(duration);

    return Array.from({ length: 24 }).flatMap((_, h) => {
      if (h < 9 || h > max) return [];

      const hour = String(h).padStart(2, "0");

      return [
        <option key={`${hour}:00`} value={`${hour}:00`}>{hour}:00</option>,
        <option key={`${hour}:30`} value={`${hour}:30`}>{hour}:30</option>
      ];
    });
  };

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

          <div style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.25)"
          }} />

          <div style={{
            position: "absolute",
            top: "120px",
            left: "80px",
            color: "white",
            maxWidth: "500px",
            zIndex: 2
          }}>
            <h1 style={{ fontSize: "3.2rem" }}>
              Boat Hire on the Helford River
            </h1>

            <button
              style={{
                marginTop: "20px",
                padding: "14px 28px",
                backgroundColor: "#1e3a5f",
                color: "white",
                border: "none",
                borderRadius: "6px"
              }}
              onClick={() =>
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Check availability
            </button>
          </div>
        </div>

        {/* BOOKING */}
        <div id="booking" style={{ padding: "60px 20px", maxWidth: "750px", margin: "0 auto" }}>
          <div style={{
            backgroundColor: "#f5f5f5",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}>

            <h2 style={{ marginBottom: "10px" }}>
              Request your boat hire
            </h2>

            <p style={{ marginBottom: "20px", color: "#555" }}>
              We’ll confirm availability and advise on tides & weather to help you choose the best time.
            </p>

            <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle()} />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle()} />
            <input placeholder="Mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle()} />

            <select value={category} onChange={(e) => {
              setCategory(e.target.value);
              setBoat(BOATS[e.target.value][0]);
            }} style={inputStyle()}>
              {Object.keys(BOATS).map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select value={boat} onChange={(e) => setBoat(e.target.value)} style={inputStyle()}>
              {(BOATS[category] || []).map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>

            <select value={duration} onChange={(e) => setDuration(e.target.value)} style={inputStyle()}>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>Half day (4 hours)</option>
              <option>Full day</option>
              <option>2 days</option>
              <option>3 days</option>
              <option>4 days</option>
              <option>5 days</option>
              <option>6 days</option>
              <option>7 days</option>
            </select>

            <input
              type="date"
              min="2026-04-01"
              max="2026-10-31"
              onChange={(e) => setDate(e.target.value)}
              style={inputStyle()}
            />

            <select value={time} onChange={(e) => setTime(e.target.value)} style={inputStyle()}>
              <option value="">Select time</option>
              {generateTimeOptions()}
            </select>

            <h3 style={{ fontSize: "1.8rem", color: "#1e3a5f" }}>
              £{price}
            </h3>

            <button
              onClick={async () => {
                if (!name || !email || !mobile || !date || !time) {
                  alert("Please complete all fields");
                  return;
                }

                const res = await fetch("/api/send-booking", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name,
                    email,
                    mobile,
                    boat,
                    duration,
                    dateTime: buildDateTime()
                  })
                });

                alert(res.ok ? "Request sent — we’ll confirm shortly!" : "Error sending request");
              }}
              style={{
                padding: "14px",
                backgroundColor: "#1e3a5f",
                color: "white",
                border: "none",
                borderRadius: "8px"
              }}
            >
              Request availability
            </button>

          </div>
        </div>

        {/* SECONDARY IMAGE */}
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
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

function inputStyle() {
  return {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ddd"
  };
}
