export default function ActivityCard({
  title,
  description,
  image,
  selected = false,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "16px",
        background: selected ? "#F3F8FC" : "#ffffff",
        border: selected
          ? "2px solid #C7A44D"
          : "1px solid #E5E7EB",
        borderRadius: "18px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        textAlign: "left",
        boxShadow: selected
          ? "0 8px 24px rgba(0,0,0,0.08)"
          : "0 2px 8px rgba(0,0,0,0.04)"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "999px",
          objectFit: "cover",
          flexShrink: 0
        }}
      />

      <div
        style={{
          flex: 1,
          minWidth: 0
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#123B5D",
            marginBottom: "6px"
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: "15px",
            color: "#64748B",
            lineHeight: 1.45
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          fontSize: "28px",
          color: "#123B5D",
          marginLeft: "8px"
        }}
      >
        ›
      </div>
    </button>
  );
}
