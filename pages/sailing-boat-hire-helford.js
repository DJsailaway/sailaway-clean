import Head from "next/head";
import Navbar from "../components/navbar";

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

      {/* NAVBAR */}
      <Navbar />

      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <h1>Sailing Boat Hire on the Helford River</h1>

        <p style={{ marginBottom: "30px" }}>
          Enjoy traditional sailing on the beautiful Helford River. Our fleet of sailing boats is available for experienced sailors looking to explore Cornwall’s stunning coastline.
        </p>

        <h2>Our Sailing Boats</h2>

        {/* DRASCOMBE */}
        <div style={{ position: "relative", marginBottom: "40px" }}>
          <img
            src="/sailing-boats-helford-river.jpg"
            style={{ width: "100%", borderRadius: "10px" }}
          />

          <div style={{
            position: "absolute",
            top: "20%",
            left: "40px",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.7)",
            maxWidth: "400px"
          }}>
            <h2>Drascombe Longboat</h2>
            <p>Traditional sailing boat for up to 6 people — perfect for relaxed cruising on the river.</p>

            <a href="/?boat=Drascombe%20Longboat%20(6%20people)#booking">
              <button style={{
                marginTop: "10px",
                padding: "12px 20px",
                backgroundColor: "#1e3a5f",
                color: "white",
                border: "none",
                borderRadius: "6px"
              }}>
                Check availability
              </button>
            </a>
          </div>
        </div>

        {/* WAYFARER */}
        <div style={{ position: "relative", marginBottom: "40px" }}>
          <img
            src="/sailing-hire-cornwall.jpg"
            style={{ width: "100%", borderRadius: "10px" }}
          />

          <div style={{
            position: "absolute",
            top: "20%",
            left: "40px",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.7)",
            maxWidth: "400px"
          }}>
            <h2>Wayfarer Dinghy</h2>
            <p>Versatile dinghy for up to 4 people — great for confident sailors exploring further afield.</p>

            <a href="/?boat=Wayfarer%20Dinghy%20(4%20people)#booking">
              <button style={{
                marginTop: "10px",
                padding: "12px 20px",
                backgroundColor: "#1e3a5f",
                color: "white",
                border: "none",
                borderRadius: "6px"
              }}>
                Check availability
              </button>
            </a>
          </div>
        </div>

        {/* SMALL DINGHIES */}
        <div style={{ position: "relative", marginBottom: "40px" }}>
          <img
            src="/sailing-hire-helford-river.jpg"
            style={{ width: "100%", borderRadius: "10px" }}
          />

          <div style={{
            position: "absolute",
            top: "20%",
            left: "40px",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.7)",
            maxWidth: "400px"
          }}>
            <h2>Topaz, Pico & Topper</h2>
            <p>Single or double-handed dinghies — ideal for more active sailing and experienced users.</p>

            <a href="/?boat=Topaz%20Pico%20Topper#booking">
              <button style={{
                marginTop: "10px",
                padding: "12px 20px",
                backgroundColor: "#1e3a5f",
                color: "white",
                border: "none",
                borderRadius: "6px"
              }}>
                Check availability
              </button>
            </a>
          </div>
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
