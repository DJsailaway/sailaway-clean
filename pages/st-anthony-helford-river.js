import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Location() {
  return (
    <>
      <Head>
        <title>St Anthony Helford River | Boat Hire Cornwall</title>
        <meta
          name="description"
          content="Discover St Anthony on the Helford River. Boat hire, kayaking, and one of Cornwall’s most beautiful and peaceful locations."
        />
      </Head>

      <div style={{ fontFamily: "sans-serif" }}>
        <Navbar />

        {/* IMAGE WITH OVERLAY TEXT */}
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src="/st-anthony.jpg"
            alt="St Anthony on the Helford River"
            width={2000}
            height={1200}
            priority
            style={{
              width: "100%",
              height: "auto",
              display: "block"
            }}
          />

          {/* DARK OVERLAY */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))"
            }}
          />

          {/* TEXT OVERLAY */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "40px",
              right: "40px",
              color: "white",
              maxWidth: "700px",
              textShadow: "0 2px 12px rgba(0,0,0,0.8)"
            }}
          >
            <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
              St Anthony on the Helford River
            </h1>

            <p style={{ fontSize: "1.2rem", margin: 0 }}>
              One of Cornwall’s most peaceful and unspoilt boating locations
            </p>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div
          style={{
            padding: "40px 20px",
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          <p>
            Located on the Helford River, St Anthony is one of Cornwall’s most scenic and unspoilt destinations.
            With calm waters, wooded creeks, and abundant wildlife, it’s the perfect place to explore by boat.
          </p>

          <h2>Things to Do</h2>
          <ul>
            <li>Boat hire and river exploration</li>
            <li>Kayaking and paddleboarding</li>
            <li>Swimming and picnics</li>
          </ul>

          <h2>Why Visit?</h2>
          <ul>
            <li>✔ Quiet and unspoilt</li>
            <li>✔ Ideal for families</li>
            <li>✔ One of Cornwall’s hidden gems</li>
          </ul>

          <div style={{ marginTop: "40px" }}>
            <a href="/#booking">
              <button
                style={{
                  padding: "14px 28px",
                  backgroundColor: "#1e3a5f",
                  color: "white",
                  border: "none",
                  borderRadius: "6px"
                }}
              >
                Check availability
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
