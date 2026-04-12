import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function BoatyardServices() {
  return (
    <>
      <Head>
        <title>Boat Launching Helford River | Slipway & Launch Service Cornwall</title>
        <meta
          name="description"
          content="Boat launching on the Helford River from St Anthony, Cornwall. Easy slipway access, safe launching, and friendly local service for all types of boats."
        />
      </Head>

      <Navbar />

      <div style={{ fontFamily: "sans-serif" }}>

        {/* HERO IMAGE */}
        <div style={{ position: "relative", width: "100%" }}>
          
          <Image
            src="/boat-launching-helford.jpg"
            alt="Boat launching at St Anthony on the Helford River"
            width={2000}
            height={1200}
            priority
            style={{
              width: "100%",
              height: "auto",
              display: "block"
            }}
          />

          {/* SUBTLE GRADIENT */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.05) 60%, rgba(0,0,0,0))"
            }}
          />

          {/* TOP LEFT CONTENT */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "40px",
              maxWidth: "500px",
              color: "white",
              textShadow: "0 2px 10px rgba(0,0,0,0.7)"
            }}
          >
            <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
              Boat Launching on the Helford River
            </h1>

            <h3 style={{ marginBottom: "10px" }}>
              Boat Launching Services
            </h3>

            <ul style={{ lineHeight: "1.8", paddingLeft: "20px" }}>
              <li>Slipway launching on the Helford River</li>
              <li>Suitable for small boats, dinghies, and tenders</li>
              <li>Easy access at St Anthony</li>
              <li>Friendly local advice and assistance</li>
            </ul>
          </div>

          {/* LOWER TEXT BLOCK (INTRO PARAGRAPH) */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "40px",
              right: "40px",
              maxWidth: "700px",
              color: "white",
              textShadow: "0 2px 10px rgba(0,0,0,0.7)"
            }}
          >
            <p style={{ fontSize: "1.1rem" }}>
              We provide reliable and convenient boat launching on the Helford River from our base at St Anthony, Cornwall.
              Whether you're launching a small motorboat, sailing dinghy, or day boat, our slipway offers easy access to one of Cornwall’s most sheltered and scenic waterways.
            </p>
          </div>
        </div>

        {/* REST OF PAGE */}
        <div
          style={{
            padding: "40px 20px",
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          <h2>Launching on the Helford River</h2>

          <p>
            The Helford River is known for its calm, sheltered waters, making it an ideal location for boat launching in Cornwall.
            Our slipway at St Anthony provides straightforward access to the river, allowing you to get on the water quickly and safely.
          </p>

          <p>
            From here, you can explore the creeks, anchorages, and coastline that make the Helford one of the most popular boating destinations in the South West.
          </p>

          <h2>Why Launch Here?</h2>

          <p>
            Launching at St Anthony on the Helford River gives you direct access to peaceful waters without the congestion of larger harbours.
            It’s a perfect starting point for day trips, fishing, or simply enjoying time on the water.
          </p>

          <h2>Location</h2>

          <p>
            Our boat launching facilities are based in St Anthony on the Helford River, Cornwall.
            This quiet and accessible location is ideal for boat owners looking for a simple and stress-free launch point.
          </p>

          <div style={{ marginTop: "40px" }}>
            <a href="/contact">
              <button
                style={{
                  padding: "14px 28px",
                  backgroundColor: "#1e3a5f",
                  color: "white",
                  border: "none",
                  borderRadius: "6px"
                }}
              >
                Contact us about boat launching
              </button>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
