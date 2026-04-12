import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/navbar";

export default function FAQPage() {
  const faqs = [
    {
      question: "Do I need a licence to hire a boat on the Helford River?",
      answer:
        "No licence is required. Our boats are designed for beginners and first-time boaters. We provide a full safety briefing before you set off, so you can enjoy a stress-free day on the water.",
      image: "/images/boat-hire-helford-river-beginners.jpg",
      alt: "Beginners enjoying self-drive boat hire on the Helford River"
    },
    {
      question: "Where can I go by boat on the Helford River?",
      answer:
        "You can explore scenic creeks, hidden anchorages, and quiet beaches along the Helford River. Popular spots include the tranquil waters near St Anthony and secluded bays accessible only by boat.",
      image: "/images/boat-hire-helford-river-creeks.jpg",
      alt: "Exploring secluded creeks and anchorages on the Helford River by boat"
    },
    {
      question: "Is boat hire suitable for beginners?",
      answer:
        "Absolutely! Our boats are easy to handle, and we provide guidance so even first-time boaters feel confident. Many families and couples hire boats with no previous experience.",
      image: "/images/boat-hire-helford-river-family.jpg",
      alt: "Family enjoying a beginner-friendly boat on the Helford River"
    },
    {
      question: "How long can I hire a boat for?",
      answer:
        "We offer flexible hire options, including half-day and full-day rentals. You can explore the Helford River at your own pace, whether it’s a short trip or a full day adventure.",
      image: "/images/boat-hire-helford-river-full-day.jpg",
      alt: "Self-drive boat cruising on the Helford River for a full-day hire"
    },
    {
      question: "What should I bring with me?",
      answer:
        "We recommend bringing food and drinks, sun protection, warm layers, and a phone or camera for photos. Comfortable clothing and footwear suitable for a boat are ideal.",
      image: "/images/boat-hire-helford-river-gear.jpg",
      alt: "Boat hire essentials for a day on the Helford River"
    },
    {
      question: "Is the Helford River safe for families and children?",
      answer:
        "Yes — the Helford River is calm and sheltered, making it perfect for a family day out. Our boats are stable, and we provide all necessary safety equipment.",
      image: "/images/boat-hire-helford-river-safety.jpg",
      alt: "Safe and calm waters for families on the Helford River"
    },
    {
      question: "What happens if the weather is bad?",
      answer:
        "If conditions are unsafe, we will offer to reschedule your booking or provide alternative options. Safety is our top priority.",
      image: "/images/boat-hire-helford-river-weather.jpg",
      alt: "Checking weather conditions before boating on the Helford River"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Boat Hire FAQs Helford River | SailAway Cornwall</title>
        <meta
          name="description"
          content="Frequently asked questions about boat hire on the Helford River, Cornwall."
        />
      </Head>

      <Navbar />

      {/* BANNER */}
      <div style={{ position: "relative", width: "100%", height: "260px" }}>
        <img
          src="/faq-banner.jpg"
          alt="Helford River boat hire FAQs"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }}
        />

        {/* Heading over image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 20px",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.7)"
          }}
        >
          <div>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
              Frequently Asked Questions
            </h1>
            <p style={{ fontSize: "1.1rem" }}>
              Everything you need to know before your day on the Helford River
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          fontFamily: "sans-serif",
          padding: "40px 20px",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <p>
          Below are some common questions about hiring a boat on the Helford River. If you can't find the answer, feel free to{" "}
          <a
            href="/contact"
            style={{ color: "#1e3a5f", textDecoration: "underline" }}
          >
            get in touch with us
          </a>.
        </p>

        {/* FAQ Accordion */}
        <div style={{ marginTop: "30px" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: "25px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "15px"
              }}
            >
              <h2
                onClick={() => toggleFAQ(index)}
                style={{
                  cursor: "pointer",
                  color: "#1e3a5f",
                  fontSize: "1.2em",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </h2>

              {openIndex === index && (
                <>
                  <p style={{ marginTop: "8px", lineHeight: "1.6" }}>
                    {faq.answer}
                  </p>

                  <img
                    src={faq.image}
                    alt={faq.alt}
                    style={{
                      maxWidth: "100%",
                      borderRadius: "8px",
                      marginTop: "12px"
                    }}
                  />
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a href="/">
            <button
              style={{
                padding: "14px 28px",
                backgroundColor: "#1e3a5f",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Book Your Boat Hire
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
