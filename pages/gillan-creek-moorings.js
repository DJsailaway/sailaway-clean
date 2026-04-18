import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";
import CTASection from "../components/CTASection";

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

        {/* 🔻 CTA SECTION (using your reusable component) */}
        <CTASection
          title="We offer comprehensive boat yard services"
          subtitle="including launch and retrieval, metal-, fibreglass and wood-work, and storage:"
          buttonText="Boat Launching"
          buttonLink="/boat-launching-helford"
        />

        {/* SECOND ROW OF OPTIONS (keeps CTASection simple but expandable) */}
        <div style={{ textAlign: "center", marginTop: "-20px" }}>
          <CTASection
            buttonText="Boatyard Services"
            buttonLink="/boatyard-services"
            background="#ffffff"
            align="center"
          />
        </div>

        <div style={{ textAlign: "center", marginTop: "-30px" }}>
          <CTASection
            buttonText="Boat Storage"
            buttonLink="/boat-storage-helford"
            background="#ffffff"
            align="center"
          />
        </div>

        {/* Optional contact CTA */}
        <CTASection
          title="Need help choosing the right service?"
          buttonText="Contact us"
          buttonLink="/contact"
          background="#f5f5f5"
        />
      </div>
    </>
  );
}
