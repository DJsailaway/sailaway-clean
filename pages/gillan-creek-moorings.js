import Head from "next/head";
import Navbar from "../components/navbar";

export default function Moorings() {
  return (
    <>
      <Head>
        <title>Moorings on the Helford River – Gillan Creek | Cornwall Boat Moorings</title>
        <meta
          name="description"
          content="Secure boat moorings at Gillan Creek, part of the Helford River, Cornwall. Ideal for local and visiting boat owners seeking convenient river access."
        />
      </Head>

  {/* NAVBAR */}
      <Navbar />


      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <h1>Moorings at Gillan Creek on the Helford River</h1>

        <p>
          We offer secure and convenient boat moorings at Gillan Creek, part of the Helford River in Cornwall. Ideal for local and visiting boat owners, our moorings provide safe and easy access to one of the South West’s most sheltered waterways.
        </p>

        <h2>Our Moorings Services</h2>
        <ul>
          <li>Seasonal and short-term moorings on the Helford River</li>
          <li>Direct access to Gillan Creek</li>
          <li>Safe moorings for small and medium-sized boats</li>
          <li>Perfect for Helford River boat owners and visitors</li>
        </ul>

        <h2>Moorings on the Helford River</h2>
        <p>
          Gillan Creek offers a quiet, sheltered location for mooring boats on the Helford River. Our moorings are designed for convenience, allowing you to launch and recover your boat easily while enjoying the scenic surroundings.
        </p>

        <p>
          Whether you’re mooring for a day trip, a weekend stay, or a full season, our location on Gillan Creek ensures you can make the most of your time on the river.
        </p>

        <h2>Why Choose Gillan Creek Moorings?</h2>
        <p>
          Our moorings are a local favourite because they combine safety, convenience, and accessibility. Being based in Gillan Creek, you’re close to St Anthony and other popular parts of the Helford River, yet enjoy a peaceful mooring away from busier areas.
        </p>

        <h2>Location</h2>
        <p>
          Our moorings are located at Gillan Creek on the Helford River, Cornwall. This prime location gives you easy access to the river, local creeks, and surrounding coastline while keeping your boat secure.
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
              Contact us about moorings
            </button>
          </a>
        </div>

      </div>
    </>
  );
}
