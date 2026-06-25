export default function TimeCard({
  value,
  disabled,
  onClick
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        width: "100%",
        padding: "24px",
        borderRadius: "20px",
        border: "1px solid #E5E7EB",
        background: disabled ? "#F8FAFC" : "#FFFFFF",
        boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
        cursor: disabled ? "default" : "pointer",
        textAlign: "left",
        opacity: disabled ? .6 : 1,
        transition: "all .2s ease"
      }}
    >
      <div
        style={{
          fontSize: ".85rem",
          fontWeight: 600,
          color: "#64748B",
          textTransform: "uppercase",
          letterSpacing: ".05em"
        }}
      >
        🕘 Time
      </div>

      <div
        style={{
          marginTop: "14px",
          fontSize: "1.35rem",
          fontWeight: 600,
          color: "#123B5D"
        }}
      >
        {disabled
          ? "What time would you like to go?"
          : value || "Choose a time"}
      </div>

      <div
        style={{
          marginTop: "10px",
          color: "#64748B",
          fontSize: ".95rem"
        }}
      >
        {disabled
          ? "Select a date first"
          : value
          ? "Tap to change"
          : "Tap to choose"}
      </div>
    </button>
  );
}
