import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";
import BookingWizard from "../components/BookingWizard"; // if you split it later

export default function Home() {
  return (
    <>
      <Head>
        <title>Boat Hire Helford River | Self Drive Boats Cornwall</title>
      </Head>

      <Navbar />

      {/* HERO (RESTORED + IMPROVED TEXT SHADOW) */}
      <SplitOverlayHero
        imageSrc="/hero.jpg"
        alt="Boat Hire on Helford River"
        title="Boat Hire on the Helford River, Cornwall"
        overlayStrength="light"
        topContent={
          <div style={{ textShadow: "0 2px 18px rgba(0,0,0,0.6)" }}>
            <p>
              Self-drive boats, kayaks, sailing boats and more — explore Cornwall’s Helford River at your own pace.
            </p>
          </div>
        }
      />

      {/* BUTTON NAV BAR (UNCHANGED) */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          padding: "25px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <a href="/motor-boat-hire-helford"><button>Our Motor Boats</button></a>
        <a href="/sailing-boat-hire-helford"><button>Our Sailing Boats</button></a>
        <a href="/kayak-hire-helford"><button>Our Kayaks & SUPs</button></a>
        <a href="/st-anthony-helford-river"><button>Location</button></a>
        <a href="/boat-hire-faq"><button>FAQs</button></a>
      </div>

      {/* 🌊 BOOKING SECTION TITLE (LUXURY INTRO FEEL) */}
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px 10px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "10px", color: "#0f2f4f" }}>
          Plan your perfect day on the water
        </h2>

        <p style={{ opacity: 0.7 }}>
          A simple, guided booking experience — designed for clarity and ease.
        </p>
      </div>

      {/* 🚢 BOOKING WIZARD (NEW SYSTEM EMBEDDED) */}
      <div style={{ paddingBottom: "80px" }}>
        <BookingWizard />
      </div>
    </>
  );
}
