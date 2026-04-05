import Head from "next/head";

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
  <a href="/boat-launching-helford" style={{ textDecoration: "none", color: "#333" }}>Boat Launching</a>
  <a href="/boat-storage-helford" style={{ textDecoration: "none", color: "#333" }}>Boat Storage</a>
  <a href="/gillan-creek-moorings" style={{ textDecoration: "none", color: "#333" }}>Moorings</a>
  <a href="/#booking" style={{ textDecoration: "none", color: "#1e3a5f", fontWeight: "bold" }}>Book</a>
</div>

  </div>

      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <h1>Boat Launching on the Helford River</h1>

        <p>
          We provide reliable and convenient boat launching on the Helford River from our base at St Anthony, Cornwall. Whether you're launching a small motorboat, sailing dinghy, or day boat, our slipway offers easy access to one of Cornwall’s most sheltered and scenic waterways.
        </p>

        <h2>Boat Launching Services</h2>

        <ul>
          <li>Slipway launching on the Helford River</li>
          <li>Suitable for small boats, dinghies, and tenders</li>
          <li>Easy access at St Anthony</li>
          <li>Friendly local advice and assistance</li>
        </ul>

        <h2>Launching on the Helford River</h2>
        <p>
          The Helford River is known for its calm, sheltered waters, making it an ideal location for boat launching in Cornwall. Our slipway at St Anthony provides straightforward access to the river, allowing you to get on the water quickly and safely.
        </p>

        <p>
          From here, you can explore the creeks, anchorages, and coastline that make the Helford one of the most popular boating destinations in the South West.
        </p>

        <h2>Why Launch Here?</h2>
        <p>
          Launching at St Anthony on the Helford River gives you direct access to peaceful waters without the congestion of larger harbours. It’s a perfect starting point for day trips, fishing, or simply enjoying time on the water.
        </p>

        <h2>Location</h2>
        <p>
          Our boat launching facilities are based in St Anthony on the Helford River, Cornwall. This quiet and accessible location is ideal for boat owners looking for a simple and stress-free launch point.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a href="/contact">
            <button style={{
              padding: "14px 28px",
              backgroundColor: "#1e3a5f",
              color: "white",
              border: "none",
              borderRadius: "6px"
            }}>
              Contact us about boat launching
            </button>
          </a>
        </div>

      </div>
    </>
  );
}
