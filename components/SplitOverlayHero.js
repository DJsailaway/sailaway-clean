import Image from "next/image";

export default function SplitOverlayHero({
  imageSrc,
  alt,
  title,
  topContent,
  bottomContent
}) {
  return (
    <div style={{ position: "relative", width: "100%" }}>

      {/* IMAGE */}
      <Image
        src={imageSrc}
        alt={alt}
        width={2000}
        height={1200}
        priority
        style={{
          width: "100%",
          height: "auto",
          display: "block"
        }}
      />

      {/* GRADIENT OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.4))"
        }}
      />

      {/* TOP CONTENT */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          right: "5%",
          maxWidth: "600px",
          color: "white",
          textShadow: "0 2px 10px rgba(0,0,0,0.8)"
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            marginBottom: "16px",
            lineHeight: "1.2"
          }}
        >
          {title}
        </h1>

        <div style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" }}>
          {topContent}
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          right: "5%",
          maxWidth: "700px",
          color: "white",
          textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)"
        }}
      >
        {bottomContent}
      </div>
    </div>
  );
}
