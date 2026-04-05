import Head from "next/head";

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

        <h1>St Anthony on the Helford River</h1>

        <p>
          Located on the Helford River, St Anthony is one of Cornwall’s most scenic and unspoilt destinations. With calm waters, wooded creeks, and abundant wildlife, it’s the perfect place to explore by boat.
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
