import Head from "next/head";
import Navbar from "../components/navbar";

export default function BoatStorage() {  // ✅ renamed function
  return (
    <>
      <Head>
        <title>Boat Storage St Anthony | Helford River Boat Storage Cornwall</title>
        <meta
          name="description"
          content="Boat storage at St Anthony on the Helford River, Cornwall. Secure and convenient seasonal boat storage for local Helford boat owners."
        />
      </Head>

  {/* NAVBAR */}
      <Navbar />


      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <h1>Boat Storage at St Anthony on the Helford River</h1>

        <p>
          We provide secure and convenient boat storage at St Anthony on the Helford River, Cornwall. Our storage is ideal for local boat owners looking for a practical and accessible place to keep their boats close to the water.
        </p>

        <h2>Boat Storage Services</h2>

        <ul>
          <li>Seasonal boat storage at St Anthony</li>
          <li>Convenient access to the Helford River</li>
          <li>Suitable for small boats, dinghies, and tenders</li>
          <li>Ideal for Helford River boat owners</li>
        </ul>

        <h2>Boat Storage on the Helford River</h2>
        <p>
          Our boat storage at St Anthony is perfectly located for those using the Helford River. Many of the boats we store are regularly used on the river, making it easy to launch and recover when needed.
        </p>

        <p>
          Keeping your boat stored locally on the Helford means less hassle, quicker access to the water, and more time enjoying one of Cornwall’s most beautiful boating areas.
        </p>

        <h2>Why Store Your Boat at St Anthony?</h2>
        <p>
          St Anthony offers a quiet and accessible location for boat storage on the Helford River. It’s an ideal choice for boat owners who want a simple, secure, and local storage solution without the need to travel far.
        </p>

        <h2>Location</h2>
        <p>
          Our boat storage facilities are based in St Anthony on the Helford River, Cornwall. This well-positioned location makes it easy for Helford boat owners to store and access their boats throughout the season.
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
              Contact us about boat storage
            </button>
          </a>
        </div>

      </div>
    </>
  );
}
