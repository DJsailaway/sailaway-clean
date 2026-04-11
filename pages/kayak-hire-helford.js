import Head from "next/head";
import Navbar from "../components/navbar";

export default function KayakHire() {
  return (
    <>
      <Head>
        <title>Kayak Hire Helford River | Paddleboard Hire Cornwall</title>
        <meta
          name="description"
          content="Hire kayaks and paddleboards on the Helford River. A relaxed and affordable way to explore Cornwall’s waterways."
        />
      </Head>

      {/* NAVBAR */}
      <Navbar />

      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        {/* HERO IMAGE */}
        <div style={{
          position: "relative",
          marginBottom: "40px",
          borderRadius: "12px",
          overflow: "hidden"
        }}>
          <img
            src="/kayak-hire-helford.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }}
          />

          {/* Gradient overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.2))"
          }} />

          {/* Text */}
          <div style={{
            position: "absolute",
            bottom: "30px",
            left: "30px",
            right: "30px",
            color: "white",
            maxWidth: "500px"
          }}>
            <h1 style={{ marginBottom: "10px" }}>
              Kayak & Paddleboard Hire on the Helford River
            </h1>

            <p>
              Explore at your own pace with our easy-to-use kayaks and paddleboards — perfect for a relaxed day on the water.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <p style={{ marginBottom: "30px" }}>
          Explore the Helford River at a slower pace with our kayaks and paddleboards. Perfect for families, beginners, and those looking for a peaceful way to enjoy the water.
        </p>

        <h2>Available Options</h2>
        <ul style={{ marginBottom: "30px", lineHeight: "1.8" }}>
          <li>Single Kayaks</li>
          <li>Double Kayaks</li>
          <li>Stand-Up Paddleboards</li>
        </ul>

        <h2>Why Choose Kayaks?</h2>
        <ul style={{ marginBottom: "30px", lineHeight: "1.8" }}>
          <li>✔ Easy to use</li>
          <li>✔ No experience needed</li>
          <li>✔ Great for exploring creeks</li>
        </ul>

        <div style={{
          marginTop: "40px",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: "30px",
          borderRadius: "10px"
        }}>
          <h2>Check Availability</h2>
          <p style={{ marginBottom: "20px" }}>
            Use our booking form to check availability and request your preferred date and time.
          </p>

          <a href="/#booking">
            <button style={{
              padding: "14px 28px",
              fontSize: "1.1rem",
              backgroundColor: "#1e3a5f",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Check availability
            </button>
          </a>
        </div>

      </div>
    </>
  );
}
