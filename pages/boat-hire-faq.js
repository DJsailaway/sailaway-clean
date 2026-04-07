import Head from "next/head";
import Navbar from "../components/navbar";

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>Boat Hire FAQs Helford River | SailAway Cornwall</title>
        <meta
          name="description"
          content="Frequently asked questions about boat hire on the Helford River, Cornwall. Safety, booking, locations, and everything you need to know before your day on the water."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
        
        <h1>Frequently Asked Questions – Boat Hire Helford River</h1>
        <p>
          Below are some common questions about hiring a boat on the Helford River. If you can't find the answer, feel free to <a href="/contact" style={{ color: "#1e3a5f", textDecoration: "underline" }}>get in touch with us</a>.
        </p>

        {/* FAQ Accordion */}
        <div style={{ marginTop: "30px" }}>

          {/* FAQ 1 */}
          <div style={{ marginBottom: "20px" }}>
            <h2>Do I need a licence to hire a boat on the Helford River?</h2>
            <p>
              No licence is required. Our boats are designed for beginners and first-time boaters. We provide a full safety briefing before you set off, so you can enjoy a stress-free day on the water.
            </p>
          </div>

          {/* FAQ 2 */}
          <div style={{ marginBottom: "20px" }}>
            <h2>Where can I go by boat on the Helford River?</h2>
            <p>
              You can explore scenic creeks, hidden anchorages, and quiet beaches along the Helford River. Popular spots include the tranquil waters near St Anthony and secluded bays accessible only by boat.
            </p>
          </div>

          {/* FAQ 3 */}
          <div style={{ marginBottom: "20px" }}>
            <h2>Is boat hire suitable for beginners?</h2>
            <p>
              Absolutely! Our boats are easy to handle, and we provide guidance so even first-time boaters feel confident. Many families and couples hire boats with no previous experience.
            </p>
          </div>

          {/* FAQ 4 */}
          <div style={{ marginBottom: "20px" }}>
            <h2>How long can I hire a boat for?</h2>
            <p>
              We offer flexible hire options, including half-day and full-day rentals. You can explore the Helford River at your own pace, whether it’s a short trip or a full day adventure.
            </p>
          </div>

          {/* FAQ 5 */}
          <div style={{ marginBottom: "20px" }}>
            <h2>What should I bring with me?</h2>
            <p>
              We recommend bringing food and drinks, sun protection, warm layers, and a phone or camera for photos. Comfortable clothing and footwear suitable for a boat are ideal.
            </p>
          </div>

          {/* FAQ 6 */}
          <div style={{ marginBottom: "20px" }}>
            <h2>Is the Helford River safe for families and children?</h2>
            <p>
              Yes — the Helford River is calm and sheltered, making it perfect for a family day out. Our boats are stable, and we provide all necessary safety equipment.
            </p>
          </div>

          {/* FAQ 7 */}
          <div style={{ marginBottom: "20px" }}>
            <h2>What happens if the weather is bad?</h2>
            <p>
              If conditions are unsafe, we will offer to reschedule your booking or provide alternative options. Safety is our top priority.
            </p>
          </div>

        </div>

        {/* Optional CTA */}
        <div style={{ marginTop: "40px" }}>
          <a href="/contact">
            <button style={{
              padding: "14px 28px",
              backgroundColor: "#1e3a5f",
              color: "white",
              border: "none",
              borderRadius: "6px"
            }}>
              Contact us about boat hire
            </button>
          </a>
        </div>

        {/* Suggested imagery */}
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <img
            src="/images/helford-river-aerial.jpg"
            alt="Aerial view of the Helford River in Cornwall with boats"
            style={{ maxWidth: "100%", borderRadius: "8px", marginBottom: "20px" }}
          />
          <p style={{ fontSize: "0.9em", color: "#555" }}>Aerial view of the Helford River – ideal for self-drive boat hire.</p>
        </div>

      </div>
    </>
  );
}
