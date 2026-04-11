import Head from "next/head";
import Navbar from "../components/navbar";

export default function GillanCreekFerry() {
  return (
    <>
      <Head>
        <title>Gillan Creek Ferry | Helford River Crossing Cornwall</title>
        <meta
          name="description"
          content="Take the Gillan Creek Ferry across the Helford River. A simple and scenic way to cross between Helford and Gillan Creek."
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
            src="/gillan-creek-ferry.jpg"
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
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))"
          }} />

          {/* Text overlay */}
          <div style={{
            position: "absolute",
            bottom: "30px",
            left: "30px",
            right: "30px",
            color: "white",
            maxWidth: "500px"
          }}>
            <h1 style={{ marginBottom: "10px" }}>
              Gillan Creek Ferry
            </h1>

            <p>
              A simple and scenic ferry across Gillan Creek — avoiding the walk around.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <p style={{ marginBottom: "30px" }}>
          The Gillan Creek Ferry provides a convenient and enjoyable way to cross Gillan Creek. Whether you're walking the South West Coast Path or exploring the area, it's a relaxing way to shave a few miles off your route.
        </p>

        <h2>Crossing Information</h2>
        <ul style={{ marginBottom: "30px", lineHeight: "1.8" }}>
          <li>✔ Short crossing time - around 5 minutes</li>
          <li>✔ The ferry runs from 1st April to 31st October, for around 3 hours either side of high tide.</li>
          <li>✔ From the north side of the creek, visit the boathouse to request a crossing. From the south, flip the sign at the crossing steps down to summon the ferryman - or call us on 01326231357</li>
        </ul>

        <h2>Why Take the Ferry?</h2>
        <ul style={{ marginBottom: "30px", lineHeight: "1.8" }}>
          <li>✔ Saves time compared to driving around</li>
          <li>✔ Ideal for walkers and day visitors</li>
          <li>✔ Scenic and peaceful crossing</li>
        </ul>

        <h2>Who It's For</h2>
        <p style={{ marginBottom: "30px" }}>
          Perfect for walkers, families, and anyone exploring the Helford River area who wants a simple and enjoyable way to cross the creek.
        </p>

        {/* CTA */}
        <div style={{
          marginTop: "40px",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: "30px",
          borderRadius: "10px"
        }}>
          <h2>Plan Your Crossing</h2>
          <p style={{ marginBottom: "20px" }}>
            Get in touch or visit us to find out today's running times and availability.
          </p>

          <a href="/#contact">
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
              Contact Us
            </button>
          </a>
        </div>

      </div>
    </>
  );
}
