import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";

export default function Moorings() {
  return (
    <>
      <Head>
        <title>Moorings Helford River | Gillan Creek Moorings Cornwall</title>
      </Head>

      <Navbar />

      <SplitOverlayHero
        imageSrc="/moorings-gillan-creek.jpg"
        imageAlt="Boat moorings at Gillan Creek"
        title="Moorings at Gillan Creek on the Helford River"
        topContent={
          <>
            <p>
              Secure and convenient boat moorings in one of Cornwall’s most sheltered and scenic river locations.
            </p>
          </>
        }
        bottomContent={
          <>
            <p>
              We offer secure and convenient boat moorings at Gillan Creek, part of the Helford River in Cornwall.
              Ideal for local and visiting boat owners.
            </p>
          </>
        }
      />

      <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>Our Moorings Services</h2>
        <ul>
          <li>Seasonal and short-term moorings</li>
          <li>Direct access to Gillan Creek</li>
          <li>Safe for small and medium boats</li>
        </ul>

        <h2>Why Choose Gillan Creek?</h2>
        <p>
          A quiet, sheltered location with easy access to the Helford River.
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
