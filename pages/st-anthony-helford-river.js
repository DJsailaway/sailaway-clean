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

        {/* FULL WIDTH IMAGE (NO CROPPING) */}
        <div style={{ width: "100%" }}>
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
        </div>

        {/* CONTENT */}
        <div
          style={{
            padding: "40px 20px",
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          <h1>St Anthony on the Helford River</h1>

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
