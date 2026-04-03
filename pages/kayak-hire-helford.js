import Head from "next/head";

export default function KayakHire() {
  return (
    <>
      <Head>
        <title>Kayak Hire Helford River | Paddleboard Hire Cornwall</title>
        <meta
          name="description"
          content="Hire kayaks and paddleboards on the Helford River. A relaxed and affordable way to explore Cornwall’s waterways."
        />
      </Head>

      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <h1>Kayak & Paddleboard Hire on the Helford River</h1>

        <p>
          Explore the Helford River at a slower pace with our kayaks and paddleboards. Perfect for families, beginners, and those looking for a peaceful way to enjoy the water.
        </p>

        <h2>Available Options</h2>
        <ul>
          <li>Single Kayaks</li>
          <li>Double Kayaks</li>
          <li>Stand-Up Paddleboards</li>
        </ul>

        <h2>Why Choose Kayaks?</h2>
        <ul>
          <li>✔ Easy to use</li>
          <li>✔ No experience needed</li>
          <li>✔ Great for exploring creeks</li>
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
