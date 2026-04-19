import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";
import BookingWizard from "../components/BookingWizard";

export default function BookingPage() {
  return (
    <>
      <Head>
        <title>Boat Hire Helford River | Booking</title>
      </Head>

      {/* NAVBAR (ONLY ONE INSTANCE) */}
      <Navbar />

      {/* 🌊 HERO (RESTORED) */}
      <SplitOverlayHero
        imageSrc="/hero.jpg"
        alt="Boat Hire on Helford River"
        title="Boat Hire on the Helford River, Cornwall"
        overlayStrength="light"
        topContent={
          <div style={{ textShadow: "0 2px 20px rgba(0,0,0,0.65)" }}>
            <p>
              Self-drive boats, kayaks, sailing boats and more — explore Cornwall’s Helford River at your own pace.
            </p>
          </div>
        }
      />

      {/* 🌊 CTA NAV BUTTONS */}
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
        <a href="/motor-boat-hire-helford">
          <button style={buttonStyle}>Our Motor Boats</button>
        </a>

        <a href="/sailing-boat-hire-helford">
          <button style={buttonStyle}>Our Sailing Boats</button>
        </a>

        <a href="/kayak-hire-helford">
          <button style={buttonStyle}>Our Kayaks & SUPs</button>
        </a>

        <a href="/st-anthony-helford-river">
          <button style={buttonStyle}>Location</button>
        </a>

        <a href="/boat-hire-faq">
          <button style={buttonStyle}>FAQs</button>
        </a>
      </div>

      {/* 🌊 SECTION TITLE */}
      <div
        style={{
          textAlign: "center",
          padding: "30px 20px 10px",
        }}
      >
        <h2 style={{ color: "#0f2f4f" }}>
          Plan your perfect day on the water
        </h2>

        <p style={{ opacity: 0.7 }}>
          A guided concierge-style booking experience.
        </p>
      </div>

      {/* 🚢 BOOKING WIZARD (NOW RESTORED) */}
      <div style={{ paddingBottom: "80px" }}>
        <BookingWizard />
      </div>
    </>
  );
}

// ---------------- BUTTON STYLE (RESTORED LUXURY SIZE) ----------------

const buttonStyle = {
  padding: "12px 18px",
  backgroundColor: "#1e3a5f",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: 700,
  cursor: "pointer",
  fontSize: "15px",
  letterSpacing: "0.2px",
  boxShadow: "0 6px 16px rgba(15, 47, 79, 0.15)",
};
