import Image from "next/image";
import { useState, useEffect } from "react";

export default function SplitOverlayHero({
  imageSrc,
  imageAlt,
  title,
  topContent,
  bottomContent,
  height = "500px",
  overlayOpacity = 0.1,
  objectPosition = "center"
}) {

  const [offsetY, setOffsetY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.35);
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);
  
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: height,
        overflow: "hidden",
      }}
    >
      {/* IMAGE */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: objectPosition,
          zIndex: 0,
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.08s linear",
        }}
      />

      {/* SUBTLE WATER LIGHT EFFECT */}
        <div
          style={{
          position: "absolute",
          inset: 0,
          background:
          "linear-gradient(120deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.02) 65%, rgba(255,255,255,0.06) 100%)",
          backgroundSize: "200% 200%",
          animation: "waterShimmer 6s ease-in-out infinite",
          zIndex: 1,
          pointerEvents: "none",
  }}
/>

      {/* LIGHT OVERLAY (optional) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
          zIndex: 1
        }}
      />

      {/* TOP LEFT TEXT */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
          right: "30px",
          color: "white",
          zIndex: 2,
          maxWidth: "600px"
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>{title}</h1>
        {topContent}
      </div>

      {/* BOTTOM TEXT */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "30px",
          right: "30px",
          color: "white",
          zIndex: 2,
          maxWidth: "600px"
        }}
      >
        {bottomContent}
      </div>

              <style jsx>{`
        @keyframes waterShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
        
    </div>
  );
}
