import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";
import CTASection from "../components/CTASection";
import Button from "../components/Button";

// Boat Card component
function BoatCard({ title, description, imageSrc, href }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        background: "#fff",
      }}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
        <Image src={imageSrc} alt={title} fill style={{ objectFit: "cover" }} />
      </div>

      <div style={{ padding: "16px" }}>
        <h3 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{title}</h3>

        <p style={{ fontSize: "0.95rem", color: "#555", marginBottom: "12px" }}>
          {description}
        </p>

        {href && <Button href={href}>Check availability</Button>}
      </div>
    </div>
  );
}

export default function MotorBoatHire() {
  return (
    <>
      <Head>
        <title>Motor Boat Hire Helford River | Self Drive Boats Cornwall</title>
        <meta
          name="description"
          content="Hire a motor boat on the Helford River in Cornwall and explore at your own pace."
        />
      </Head>

      <Navbar />

      <div
        style={{
          fontFamily: "sans-serif",
          padding: "40px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Motor Boat Hire on the Helford River
        </h1>

        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
          Explore the beautiful Helford River at your own pace with our self-drive motor boat hire.
        </p>

        <p style={{ marginBottom: "30px" }}>
          Based in St Anthony, our boats are perfect for families, couples, and groups.
        </p>

        <h2>Our Motor Boats</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          <BoatCard
            title="Plymouth Pilot"
            description="Spacious and stable motor boat for up to 8 people."
            imageSrc="/Pilot.jpg"
            href="/?boat=Plymouth%20Pilot%20(8%20people)#booking"
          />

          <BoatCard
            title="Bass Boat"
            description="Ideal for smaller groups of up to 5 people."
            imageSrc="/Bass.jpg"
            href="/?boat=Bass%20Boat%20(5%20people)#booking"
          />
        </div>

        {/* 🔻 CTA MOVED TO BOTTOM */}
        <CTASection
          title="Prefer something more adventurous?"
          subtitle="Our sailing boats offer a more hands-on way to explore the Helford."
          buttonText="See our Sailing Boats"
          buttonLink="/sailing-boat-hire-helford"
        />
      </div>
    </>
  );
}

      </div>
    </>
  );
}
