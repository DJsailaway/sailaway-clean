import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";

export default function GillanCreekFerry() {
  return (
    <>
      <Head>
        <title>Gillan Creek Ferry | Helford River Ferry Crossing</title>
      </Head>

      <Navbar />

      <SplitOverlayHero
        imageSrc="/gillan-creek-ferry.jpg"
        alt="Gillan Creek Ferry crossing"
        title="Gillan Creek Ferry"
        topContent={
          <>
            <p>
              A simple and scenic way to cross Gillan Creek on the Helford River.
            </p>
          </>
        }
        bottomContent={
          <>
            <p>
              Our ferry provides a convenient crossing between St Anthony and Gillan,
              perfect for walkers, locals, and visitors exploring the coastline.
            </p>
          </>
        }
      />

      <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>About the Ferry</h2>
        <p>
          The Gillan Creek Ferry offers a traditional river crossing, saving a long walk around the creek.
        </p>

        <h2>Who Uses It?</h2>
        <ul>
          <li>Walkers on coastal routes</li>
          <li>Visitors exploring the Helford area</li>
          <li>Locals needing a quick crossing</li>
        </ul>

        <h2>Location</h2>
        <p>Gillan Creek, Helford River, Cornwall.</p>

        <div style={{ marginTop: "40px" }}>
          <a href="/contact">
            <button style={{
              padding: "14px 28px",
              backgroundColor: "#1e3a5f",
              color: "white",
              border: "none",
              borderRadius: "6px"
            }}>
              Contact us about the ferry
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
