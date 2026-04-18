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

      <div>
        <Navbar />

        {/* IMAGE + FULL TEXT OVERLAY */}
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
              display: "block",
            }}
          />

          {/* GRADIENT OVERLAY */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.05) 60%, rgba(0,0,0,0))",
            }}
          />

          {/* TEXT */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "40px",
              right: "40px",
              color: "white",
              maxWidth: "800px",
              textShadow: "0 2px 10px rgba(0,0,0,0.7)",
            }}
          >
            <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
              St Anthony on the Helford River
            </h1>

            <p style={{ fontSize: "1.2rem", marginBottom: "16px" }}>
              Located on the Helford River, St Anthony is one of Cornwall’s most scenic and unspoilt destinations.
              With calm waters, wooded creeks, and abundant wildlife, it’s the perfect place to explore by boat.
            </p>

            <h2 style={{ marginTop: "20px" }}>Things to Do</h2>
            <ul style={{ lineHeight: "1.8" }}>
              <li>Boat hire and river exploration</li>
              <li>Kayaking and paddleboarding</li>
              <li>Swimming and picnics</li>
            </ul>

            <h2 style={{ marginTop: "20px" }}>Why Visit?</h2>
            <ul style={{ lineHeight: "1.8" }}>
              <li>✔ Quiet and unspoilt</li>
              <li>✔ Ideal for families</li>
              <li>✔ One of Cornwall’s hidden gems</li>
            </ul>

            <div style={{ marginTop: "30px" }}>
              <a href="/#booking">
                <button
                  style={{
                    padding: "14px 28px",
                    backgroundColor: "#1e3a5f",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: 600,
                  }}
                >
                  Check availability
                </button>
              </a>
            </div>
          </div>
        </div>

        <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }} />
      </div>
    </>
  );
}
