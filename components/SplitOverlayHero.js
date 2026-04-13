import Image from "next/image";

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
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: height,
        overflow: "hidden"
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
          zIndex: 0
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
    </div>
  );
}
