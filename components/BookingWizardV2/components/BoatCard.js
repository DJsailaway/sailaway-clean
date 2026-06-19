export default function BoatCard({
  title,
  description,
  capacity,
  image,
  selected = false,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        border: selected ? "2px solid #123B5D" : "1px solid #E5E7EB",
        borderRadius: "20px",
        background: selected ? "#F6FAFD" : "#FFFFFF",
        overflow: "hidden",
        cursor: "pointer",
        padding: 0,
        textAlign: "left",
        transition: "all 0.25s ease",
        boxShadow: selected
          ? "0 10px 28px rgba(18,59,93,0.12)"
          : "0 6px 18px rgba(0,0,0,0.05)"
      }}
    >
      <div
        style={{
          aspectRatio: "16 / 9",
          overflow: "hidden",
          background: "#EEF2F7"
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }}
        />
      </div>

      <div
        style={{
          padding: "18px"
        }}
      >
        <div
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            color: "#123B5D",
            marginBottom: "6px"
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: "0.95rem",
            color: "#64748B",
            lineHeight: 1.5,
            marginBottom: "14px"
          }}
        >
          {description}
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 12px",
            borderRadius: "999px",
            background: "#EEF5FA",
            color: "#123B5D",
            fontSize: "0.9rem",
            fontWeight: 500
          }}
        >
          Up to {capacity}
        </div>
      </div>
    </button>
  );
}
