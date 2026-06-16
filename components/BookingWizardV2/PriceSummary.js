export default function PriceSummary() {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #E5E7EB",
        borderRadius: "20px",
        padding: "28px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)"
      }}
    >
      <div
        style={{
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#6B7280",
          marginBottom: "12px"
        }}
      >
        Your Day
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          fontSize: "16px",
          color: "#0F2F4F"
        }}
      >
        <div>🚤 Boat not selected</div>

        <div>⏱ Duration not selected</div>

        <div>📅 Date not selected</div>

        <div>📍 Location not selected</div>
      </div>

      <div
        style={{
          margin: "24px 0",
          borderTop: "1px solid #E5E7EB"
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div
          style={{
            fontSize: "15px",
            color: "#6B7280"
          }}
        >
          Estimated total
        </div>

        <div
          style={{
            fontSize: "34px",
            fontWeight: 700,
            color: "#0F2F4F"
          }}
        >
          £0
        </div>
      </div>
    </div>
  );
}
