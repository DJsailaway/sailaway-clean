import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";
import CTASection from "../components/CTASection";

export default function BoatyardServices() {
  return (
    <>
      <Head>
        <title>Boatyard Services Helford River | Moorings & Launching Cornwall</title>
        <meta
          name="description"
          content="Boatyard services on the Helford River including boat launching, moorings, and storage. Based in St Anthony, Cornwall."
        />
      </Head>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <SplitOverlayHero
        imageSrc="/boat-launching-helford.jpg"
        imageAlt="Boat launching on the Helford River"
        title="Boatyard Services on the Helford River"
        topContent={
          <p>
            Reliable boatyard services including launching, moorings and storage from our base at St Anthony.
          </p>
        }
      />

      <div
        style={{
          fontFamily: "sans-serif",
          padding: "40px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <p>
          We offer a range of boatyard services from our base at St Anthony on the Helford River, Cornwall.
          Whether you need launching, moorings, or general support, we provide a reliable and friendly service.
        </p>

        <h2>Our Services</h2>

        <ul>
          <li>Boat launching</li>
          <li>Moorings on the Helford River</li>
          <li>Seasonal boat storage</li>
        </ul>

        <h2>Boat Launching</h2>
        <p>
          Convenient and straightforward launching facilities with easy access to the Helford River.
        </p>

        <h2>Moorings</h2>
        <p>
          Secure moorings in one of Cornwall’s most sheltered and beautiful rivers.
        </p>

        <h2>Storage</h2>
        <p>
          Seasonal boat storage available at St Anthony for local boat owners.
        </p>

        <h2>Location</h2>
        <p>
          Based in St Anthony on the Helford River, ideally located for easy water access.
        </p>

        {/* 🔻 CTA HUB (NOW PART OF SYSTEM) */}
        <CTASection
          title="Explore our full range of boatyard services"
          subtitle="Everything you need for launching, moorings, and storage on the Helford River:"
          buttons={[
            {
              text: "Boat Launching",
              link: "/boat-launching-helford",
              variant: "secondary",
            },
            {
              text: "Moorings",
              link: "/gillan-creek-moorings",
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
