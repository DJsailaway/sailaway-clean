import Head from "next/head";

export default function MotorBoatHire() {
  return (
    <>
      <Head>
        <title>Motor Boat Hire Helford River | Self Drive Boats Cornwall</title>
        <meta
          name="description"
          content="Hire a motor boat on the Helford River in Cornwall. Self-drive boats available with no experience needed. Family-friendly boating on The Lizard."
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
        <div style={{ fontWeight: "bold" }}>Sailaway</div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/">Home</a>
          <a href="/motor-boat-hire-helford">Motor Boats</a>
          <a href="/sailing-boat-hire-helford">Sailing</a>
          <a href="/kayak-hire-helford">Kayaks</a>
          <a href="/st-anthony-helford-river">Location</a>
          <a href="/#booking" style={{ fontWeight: "bold" }}>Book</a>
        </div>
      </div>

      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Motor Boat Hire on the Helford River
        </h1>

        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
          Explore the beautiful Helford River at your own pace with our self-drive motor boat hire.
          No previous boating experience is required — full instructions and safety briefing are provided before you set off.
        </p>

        <p style={{ marginBottom: "30px" }}>
          Based in St Anthony, our boats are perfect for families, couples, and anyone looking to enjoy a relaxed day on the water in one of Cornwall’s most scenic locations.
        </p>

        <h2>Our Motor Boats</h2>

        <ul style={{ marginBottom: "30px", lineHeight: "1.8" }}>
          <li><strong>Plymouth Pilot</strong> – spacious and stable (up to 8 people)</li>
          <li><strong>Bass Boat</strong> – ideal for smaller groups (up to 5 people)</li>
        </ul>

        <h2>What to Expect</h2>

        <ul style={{ marginBottom: "30px", lineHeight: "1.8" }}>
          <li>✔ No experience needed</li>
          <li>✔ Full safety briefing before departure</li>
          <li>✔ Life jackets included</li>
          <li>✔ Flexible hire durations (1 hour to full day)</li>
          <li>✔ Easy access from St Anthony</li>
        </ul>

        <h2>Explore the Helford River</h2>

        <p style={{ marginBottom: "30px" }}>
          Cruise past peaceful creeks, hidden beaches, and wooded riverbanks. Stop for a picnic, swim in sheltered waters, or simply enjoy the scenery at your own pace.
        </p>

        <h2>Prices</h2>

        <p style={{ marginBottom: "30px" }}>
          Motor boat hire starts from £120. Half day and full day options available.
        </p>

        <div style={{
          backgroundColor: "#f5f5f5",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center"
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
              cursor: "pointer",
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
