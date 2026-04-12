import Image from "next/image";

export default function SplitOverlayHero({
  imageSrc,
  alt,
  title,
  topContent,
  bottomContent,
  overlayStrength = "auto"
}) {
  const overlayMap = {
    none: "rgba(0,0,0,0)",
    light: "rgba(0,0,0,0.10)",
    medium: "rgba(0,0,0,0.25)",
    dark: "rgba(0,0,0,0.40)",
    auto: "rgba(0,0,0,0.18)" // balanced default
  };

  const overlay = overlayMap[overlayStrength] || overlayMap.auto;

  return (
    <div style={{ position: "relative", width: "100%" }}>

      {/* HERO IMAGE */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "72vh",
          minHeight: "480px"
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          style={{ objectFit: "cover" }}
        />

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
              to bottom,
              ${overlay},
              rgba(0,0,0,0.05) 50%,
              ${overlay}
            )`
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "clamp(20px, 4vw, 60px)",
            color: "white",
            textShadow: "0 2px 12px rgba(0,0,0,0.6)"
          }}
        >
          {/* TOP */}
          <div style={{ maxWidth: "650px" }}>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px" }}>
              {title}
            </h1>
            {topContent}
          </div>

          {/* BOTTOM */}
          <div style={{ maxWidth: "750px", fontSize: "1.1rem" }}>
            {bottomContent}
          </div>
        </div>
      </div>
    </div>
  );
}
