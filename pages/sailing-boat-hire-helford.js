import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";

// Reusable Boat Card component
function BoatCard({ title, description, imageSrc, href }) {
  return (
    <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", background: "#fff" }}>

      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div style={{ padding: "16px" }}>
        <h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>{title}</h3>

        <p style={{ fontSize: "0.95rem", color: "#555", marginBottom: "12px" }}>
          {description}
        </p>

        {href && (
          <a href={href}>
            <button
              style={{
                padding: "10px 16px",
                backgroundColor: "#1e3a5f",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Check availability
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default function SailingBoatHire() {
  return (
    <>
      <Head>
        <title>Sailing Boat Hire Helford River | Dinghy Hire Cornwall</title>
        <meta
          name="description"
          content="Hire sailing boats on the Helford River in Cornwall. Dinghies and traditional boats available for experienced sailors."
        />
      </Head>

      <Navbar />

      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <h1>Sailing Boat Hire on the Helford River</h1>

        <p style={{ marginBottom: "30px" }}>
          Enjoy traditional sailing on the beautiful Helford River. Our fleet of sailing boats is available for experienced sailors looking to explore Cornwall’s stunning coastline.
        </p>

        <h2>Our Sailing Boats</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px",
          marginBottom: "40px"
        }}>

          <BoatCard
            title="Drascombe Longboat"
            description="Traditional sailing boat for up to 6 people — perfect for relaxed cruising on the river."
            imageSrc="/sailing-boats-helford-river.jpg"
            href="/?boat=Drascombe%20Longboat%20(6%20people)#booking"
          />

          <BoatCard
            title="Wayfarer Dinghy"
            description="Versatile dinghy for up to 4 people — great for confident sailors exploring further afield."
            imageSrc="/sailing-hire-cornwall.jpg"
            href="/?boat=Wayfarer%20Dinghy%20(4%20people)#booking"
          />

          <BoatCard
            title="Topaz, Pico & Topper"
            description="Single or double-handed dinghies — ideal for more active sailing and experienced users."
            imageSrc="/sailing-hire-helford-river.jpg"
            href="/?boat=Topaz%20Pico%20Topper#booking"
          />

        </div>

        <h2>Important Information</h2>
        <ul style={{ marginBottom: "30px", lineHeight: "1.8" }}>
          <li>✔ Suitable for experienced sailors</li>
          <li>✔ Safety briefing provided</li>
          <li>✔ Life jackets included</li>
        </ul>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a href="/#booking">
            <button style={{
              padding: "14px 28px",
              backgroundColor: "#1e3a5f",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold"
            }}>
              Check availability
            </button>
          </a>
        </div>

      </div>
    </>
  );
}
