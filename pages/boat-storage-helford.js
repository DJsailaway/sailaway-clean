import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";
import CTASection from "../components/CTASection";

export default function BoatStorage() {
  return (
    <>
      <Head>
        <title>Boat Storage St Anthony | Helford River Boat Storage Cornwall</title>
        <meta
          name="description"
          content="Boat storage at St Anthony on the Helford River, Cornwall. Secure and convenient seasonal boat storage for local Helford boat owners."
        />
      </Head>

      <Navbar />

      {/* HERO */}
      <SplitOverlayHero
        imageSrc="/boat-storage-helford.jpg"
        imageAlt="Boat storage at St Anthony on the Helford River"
        title="Boat Storage at St Anthony on the Helford River"
        objectPosition="center bottom"
        overlayOpacity={0.05}
        topContent={
          <p>
            Secure and convenient boat storage at St Anthony, perfectly positioned for easy access to the Helford River.
          </p>
        }
        bottomContent={
          <p>
            Ideal for local boat owners, our storage offers a practical and accessible way to keep your boat close to the water throughout the season.
          </p>
        }
      />

      {/* MAIN CONTENT */}
      <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>Boat Storage Services</h2>

        <ul>
          <li>Seasonal boat storage at St Anthony</li>
          <li>Convenient access to the Helford River</li>
          <li>Suitable for small boats, dinghies, and tenders</li>
          <li>Ideal for Helford River boat owners</li>
        </ul>

        <h2>Boat Storage on the Helford River</h2>
        <p>
          Our boat storage at St Anthony is perfectly located for those using the Helford River.
        </p>

        <p>
          Keeping your boat stored locally means less hassle, quicker access to the water, and more time boating.
        </p>

        <h2>Why Store Your Boat at St Anthony?</h2>
        <p>
          St Anthony offers a quiet and accessible location for boat storage on the Helford River.
        </p>

        <h2>Location</h2>
        <p>St Anthony, Helford River, Cornwall.</p>

        {/* 🔻 CTA HUB (FULL BOATYARD SYSTEM) */}
        <CTASection
          title="Explore our full boatyard services"
          subtitle="Everything you need for launching, maintaining, and storing your boat on the Helford River:"
          buttons={[
            {
              text: "Boat Launching",
              link: "/boat-launching-helford",
              variant: "secondary",
            },
            {
              text: "Moorings",
              link: "/moorings-helford-river",
              variant: "secondary",
            },
            {
              text: "Boatyard Services",
              link: "/boatyard-services",
            },
          ]}
        />
      </div>
    </>
  );
}
