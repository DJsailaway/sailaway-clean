import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplitOverlayHero({
  imageSrc,
  alt,
  title,
  topContent,
  bottomContent,
  overlayStrength = "auto",
  objectFit = "cover",
  objectPosition = "center"
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const overlayMap = {
    none: "rgba(0,0,0,0)",
    light: "rgba(0,0,0,0.10)",
    medium: "rgba(0,0,0,0.25)",
    dark: "rgba(0,0,0,0.40)",
    auto: "rgba(0,0,0,0.18)"
  };

  const overlay = overlayMap[overlayStrength] || overlayMap.auto;

  return (
    <div style={{ position: "relative", width: "100%" }}>

      {/* HERO CONTAINER */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "72vh",
          minHeight: "480px",
          overflow: "hidden"
        }}
      >
        {/* IMAGE */}
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          style={{
            objectFit: objectFit,
            objectPosition: objectPosition
          }}
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
            textShadow: "0 2px 12px rgba(0,0,0,0.6)",

            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0px)" : "translateY(18px)",
            transition: "all 900ms ease"
          }}
        >
          {/* TOP SECTION */}
          <div style={{ maxWidth: "650px" }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginBottom: "16px",
                lineHeight: 1.1
              }}
            >
              {title}
            </h1>

            {topContent}
          </div>

          {/* BOTTOM SECTION */}
          <div style={{ maxWidth: "750px", fontSize: "1.1rem" }}>
            {bottomContent}
          </div>
        </div>
      </div>
    </div>
  );
}
