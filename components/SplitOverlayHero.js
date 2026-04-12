import Image from "next/image";

export default function SplitOverlayHero({
  imageSrc,
  alt,
  title,
  topContent,
  bottomContent,
  overlayStrength = "light"
}) {
  const overlayMap = {
    none: "rgba(0,0,0,0)",
    light: "rgba(0,0,0,0.10)",
    medium: "rgba(0,0,0,0.25)",
    dark: "rgba(0,0,0,0.40)"
  };

  const overlay = overlayMap[overlayStrength] || overlayMap.light;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      
      {/* HERO IMAGE */}
      <div style={{ position: "relative", width: "100%", height: "70vh", minHeight: "450px" }}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          style={{ objectFit: "cover" }}
        />

        {/* GRADIENT OVERLAY */}
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
            padding: "60px 40px",
            color: "white",
            textShadow: "0 2px 12px rgba(0,0,0,0.6)"
          }}
        >
          {/* TOP LEFT CONTENT */}
          <div style={{ maxWidth: "600px" }}>
            <h1 style={{ fontSize: "2.8rem", marginBottom: "20px" }}>
              {title}
            </h1>
            {topContent}
          </div>

          {/* BOTTOM CONTENT */}
          <div style={{ maxWidth: "700px", fontSize: "1.1rem" }}>
            {bottomContent}
          </div>
        </div>
      </div>
    </div>
  );
}
