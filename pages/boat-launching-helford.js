import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";
import CTASection from "../components/CTASection";

export default function BoatyardServices() {
  return (
    <>
      <Head>
        <title>Boat Launching Helford River | Slipway & Launch Service Cornwall</title>
      </Head>

      <Navbar />

      <SplitOverlayHero
        imageSrc="/helford-boatyard.jpg"
        alt="Boat launching at St Anthony on the Helford River"
        title="Boat Launching on the Helford River"
        topContent={
          <>
            <h3>Boat Launching Services</h3>
            <ul>
              <li>Slipway launching on the Helford River</li>
              <li>Suitable for small boats, dinghies, and tenders</li>
              <li>Easy access at St Anthony</li>
              <li>Friendly local advice and assistance</li>
            </ul>
          </>
        }
        bottomContent={
          <>
            <p>
              We provide reliable and convenient boat launching on the Helford River from our base at St Anthony, Cornwall.
              Whether you're launching a small motorboat, sailing dinghy, or day boat, our slipway offers easy access to one of Cornwall’s most sheltered and scenic waterways.
            </p>
          </>
        }
      />

      <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>Launching on the Helford River</h2>
        <p>
          The Helford River is known for its calm, sheltered waters, making it an ideal location for boat launching in Cornwall.
        </p>

        <h2>Why Launch Here?</h2>
        <p>
          Launching at St Anthony gives you direct access to peaceful waters without congestion.
        </p>

        <h2>Location</h2>
        <p>St Anthony, Helford River, Cornwall.</p>

        {/* 🔻 CTA SECTION (UPDATED NAVIGATION HUB) */}
        <CTASection
          title="Explore our full boatyard services"
          subtitle="Everything you need to manage, maintain and store your boat on the Helford River:"
          buttons={[
            {
              text: "Moorings",
              link: "/gillan-creek-moorings",
              variant: "secondary",
            },
            {
              text: "Boatyard Services",
              link: "/boatyard-services",
              variant: "secondary",
            },
            {
              text: "Boat Storage",
              link: "/boat-storage-helford",
            },
          ]}
        />
      </div>
    </>
  );
}
