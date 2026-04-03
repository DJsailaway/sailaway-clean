import Head from "next/head";

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
  <div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderBottom: "1px solid #eee",
    backgroundColor: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000
  }}>
    
    {/* Logo / Brand */}
    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
      Sailaway
    </div>

    {/* Links */}
    <div style={{ display: "flex", gap: "20px", fontSize: "0.95rem" }}>
      <a href="/" style={{ textDecoration: "none", color: "#333" }}>Home</a>
      <a href="/motor-boat-hire-helford" style={{ textDecoration: "none", color: "#333" }}>Motor Boats</a>
      <a href="/sailing-boat-hire-helford">Sailing</a>
      <a href="/kayak-hire-helford">Kayaks</a>
      <a href="/st-anthony-helford-river">Location</a>
      <a href="/boatyard-services" style={{ textDecoration: "none", color: "#333" }}>Boatyard</a>
      <a href="/#booking" style={{ textDecoration: "none", color: "#1e3a5f", fontWeight: "bold" }}>Book</a>
    </div>

  </div>

      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <h1>Sailing Boat Hire on the Helford River</h1>

        <p>
          Enjoy traditional sailing on the beautiful Helford River. Our fleet of sailing boats is available for experienced sailors looking to explore Cornwall’s stunning coastline.
        </p>

        <h2>Our Sailing Boats</h2>
        <ul>
          <li>Drascombe Longboat (6 people)</li>
          <li>Wayfarer Dinghy (4 people)</li>
          <li>Topaz, Pico & Topper Dinghies</li>
        </ul>

        <h2>Important Information</h2>
        <ul>
          <li>✔ Suitable for experienced sailors</li>
          <li>✔ Safety briefing provided</li>
          <li>✔ Life jackets included</li>
        </ul>

        <div style={{ marginTop: "40px" }}>
          <a href="/#booking">
            <button style={{
              padding: "14px 28px",
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
    </>
  );
}
