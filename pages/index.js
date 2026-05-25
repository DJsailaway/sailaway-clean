import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";
import BookingWizard from "../components/BookingWizard";

export default function BookingPage() {

const [activeImage, setActiveImage] = useState(null);

const isMobile =
  typeof window !== "undefined" && window.innerWidth < 768;
  
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

{/* 🌊 HERITAGE / TRUST SECTION */}
<div
  style={{
    maxWidth: "850px",
    margin: "0 auto",
    padding: "70px 24px 50px",
    textAlign: "center",
    background: "#fcfcfb",
  }}
>
  <p
    style={{
      color: "#0f2f4f",
      fontWeight: 700,
      letterSpacing: "1px",
      fontSize: "13px",
      marginBottom: "18px",
    }}
  >
    A Cornish Tradition Since the 1930s
  </p>

  <h2
    style={{
      fontSize: "clamp(32px, 5vw, 52px)",
      lineHeight: 1.1,
      marginBottom: "28px",
      color: "#0f2f4f",
    }}
  >
    Explore one of Cornwall’s most beautiful stretches of coastline with the county’s largest hire fleet.
  </h2>

  <p
    style={{
      fontSize: "19px",
      lineHeight: 1.8,
      color: "#444",
      marginBottom: "22px",
    }}
  >
    For generations, people have come to St Anthony to explore the Helford River by boat. Many of the families who hired from us in the 1930s still return today.
  </p>

  <p
    style={{
      fontSize: "19px",
      lineHeight: 1.8,
      color: "#444",
      marginBottom: "22px",
    }}
  >
    Still family-run, we remain dedicated to offering simple, memorable days on the water — from peaceful creeks and hidden beaches to some of Cornwall’s most unspoilt scenery.
  </p>

  <p
    style={{
      fontSize: "18px",
      fontWeight: 600,
      color: "#0f2f4f",
      marginBottom: "18px",
    }}
  >
    No experience is needed for most boats.
  </p>

  <p
    style={{
      fontSize: "18px",
      lineHeight: 1.7,
      color: "#555",
    }}
  >
    Whether it’s your first time on the water or part of a long-standing family tradition, we’ll help you find the right boat for your day.
  </p>
</div>

      {/* 🌊 SECTION TITLE */}
      <div
        style={{
          textAlign: "center",
          padding: "30px 20px 10px",
          background: "#ffffff",
        }}
      >
        <h2 style={{ color: "#0f2f4f" }}>
          Plan your perfect day on the water
        </h2>

        <p style={{ opacity: 0.7 }}>
          Select your boat and when and where you'd like to depart - leave the rest to us.
        </p>
      </div>

      {/* 🚢 BOOKING WIZARD (NOW RESTORED) */}
      <div style={{ paddingBottom: "80px" }}>
        <BookingWizard />
      </div>

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

{/* 🌊 EXPERIENCE GALLERY / STORY SECTION */}
<div
  style={{
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "100px 24px",
    background:
  "linear-gradient(to bottom, #ffffff, #f5f8fa)",
  }}
>
  {/* SECTION HEADER */}
  <div
    style={{
      maxWidth: "760px",
      margin: "0 auto 70px",
      textAlign: "center",
    }}
  >
    <p
      style={{
        color: "#0f2f4f",
        fontWeight: 700,
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "13px",
        marginBottom: "18px",
      }}
    >
      Explore the Helford
    </p>

    <h2
      style={{
        fontSize: "clamp(34px, 5vw, 58px)",
        lineHeight: 1.08,
        color: "#0f2f4f",
        marginBottom: "24px",
      }}
    >
      Hidden creeks, quiet beaches and unforgettable days on the water.
    </h2>

    <p
      style={{
        fontSize: "19px",
        lineHeight: 1.8,
        color: "#555",
      }}
    >
      From peaceful family adventures to traditional sailing on one of
      Cornwall’s most beautiful rivers, every trip on the Helford feels a
      little different.
    </p>
  </div>

{/* 🌊 EDITORIAL STORY LAYOUT */}
<div
  style={{
    display: "grid",
    gap: isMobile ? "18px" : "42px",
  }}
>

  {/* ================= ROW 1 ================= */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.6fr",
      gap: "22px",
      alignItems: "stretch",
    }}
  >

    {/* TALL SAIL IMAGE */}
    <div
      onClick={() => isMobile && setActiveImage("/drascombe.jpg")}
      style={{
        borderRadius: "28px",
        overflow: "hidden",
        boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
        cursor: "pointer",
        minHeight: isMobile ? "420px" : "760px",
      }}
    >
      <img
        src="/drascombe.jpg"
        alt="Traditional sailing on the Helford"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>

    {/* RIGHT LANDSCAPE COLUMN */}
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr auto",
        gap: "22px",
      }}
    >

      {/* LARGE LANDSCAPE */}
      <div
        onClick={() =>
          isMobile &&
          setActiveImage("/St-Anthony-in-Meneage.jpg")
        }
        style={{
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
          cursor: "pointer",
          minHeight: isMobile ? "240px" : "420px",
        }}
      >
        <img
          src="/St-Anthony-in-Meneage.jpg"
          alt="The Helford River"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* SMALL LANDSCAPE */}
      <div
        onClick={() =>
          isMobile &&
          setActiveImage("/Bass-Boat-Bosahan-Beach.jpg")
        }
        style={{
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
          cursor: "pointer",
          minHeight: isMobile ? "180px" : "300px",
        }}
      >
        <img
          src="/Bass-Boat-Bosahan-Beach.jpg"
          alt="Cornish coastline"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

    </div>
  </div>

  {/* ================= ROW 2 ================= */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr",
      gap: "22px",
      alignItems: "stretch",
    }}
  >

    {/* LEFT LANDSCAPE COLUMN */}
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1.2fr 0.7fr",
        gap: "22px",
      }}
    >

      {/* LARGE LANDSCAPE */}
      <div
        onClick={() =>
          isMobile &&
          setActiveImage("/Rowing-on-Gillan-Creek.jpg")
        }
        style={{
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
          cursor: "pointer",
          minHeight: isMobile ? "240px" : "420px",
        }}
      >
        <img
          src="/Rowing-on-Gillan-Creek.jpg"
          alt="Exploring the Helford"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* VINTAGE IMAGE */}
      <div
        onClick={() =>
          isMobile &&
          setActiveImage("/St-Anthony-in-Meneage.jpg")
        }
        style={{
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
          cursor: "pointer",
          position: "relative",
          minHeight: isMobile ? "180px" : "260px",
        }}
      >
        <img
          src="/St-Anthony-in-Meneage.jpg"
          alt="Historic Helford boating"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: "contrast(1.02) saturate(0.92)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "18px",
            left: "18px",
            background: "rgba(15,47,79,0.82)",
            color: "#fff",
            padding: "10px 14px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          Family photographs from the Helford
        </div>
      </div>

    </div>

    {/* GIRL PORTRAIT */}
    <div
      onClick={() =>
        isMobile &&
        setActiveImage("/Bass-Boat-Daisy-up-creek.jpg")
      }
      style={{
        borderRadius: "28px",
        overflow: "hidden",
        boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
        cursor: "pointer",
        minHeight: isMobile ? "420px" : "760px",
      }}
    >
      <img
        src="/Bass-Boat-Daisy-up-creek.jpg"
        alt="Family boating on the Helford"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>

  </div>
</div>
    </div>
  </div>
</div>

{activeImage && (
  <div
    onClick={() => setActiveImage(null)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.88)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}
  >
    <img
      src={activeImage}
      alt=""
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        borderRadius: "18px",
        objectFit: "contain",
      }}
    />
  </div>
)}
              
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


