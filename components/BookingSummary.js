```jsx
import { useState } from "react";

export default function BookingSummary({
  boat,
  duration,
  date,
  time,
  location,
  total,
  isMobile,
}) {
  const [expanded, setExpanded] = useState(false);

  const card = (
    <>
      <h3
        style={{
          margin: 0,
          fontSize: "22px",
          color: "#0f2f4f",
        }}
      >
        Your booking
      </h3>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gap: "12px",
          fontSize: "16px",
          color: "#444",
        }}
      >
        <div>
          <strong>Boat</strong>
          <br />
          {boat || "Choose a boat"}
        </div>

        <div>
          <strong>Duration</strong>
          <br />
          {duration || "-"}
        </div>

        <div>
          <strong>Date & time</strong>
          <br />
          {date || "Select a date"}
          {time && <> | {time}</>}
        </div>

        <div>
          <strong>Collect from</strong>
          <br />
          {location || "St Anthony"}
        </div>
      </div>

      <hr
        style={{
          margin: "22px 0",
          border: 0,
          borderTop: "1px solid #e5e5e5",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            color: "#666",
          }}
        >
          Estimated total
        </span>

        <span
          style={{
            fontSize: "34px",
            fontWeight: 700,
            color: "#0f2f4f",
          }}
        >
          £{total}
        </span>
      </div>

      <div
        style={{
          marginTop: "24px",
          display: "grid",
          gap: "8px",
          fontSize: "14px",
          color: "#666",
          lineHeight: 1.5,
        }}
      >
        <div>✓ No payment taken today</div>
        <div>✓ We'll confirm availability personally</div>
        <div>✓ Family-run on the Helford since the 1930s</div>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#ffffff",
          borderTop: "1px solid #ddd",
          boxShadow: "0 -8px 24px rgba(0,0,0,0.08)",
          zIndex: 999,
        }}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            width: "100%",
            background: "none",
            border: "none",
            padding: "18px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          <span>Your booking</span>
          <span>£{total}</span>
        </button>

        {expanded && (
          <div
            style={{
              padding: "0 20px 20px",
            }}
          >
            {card}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        position: "sticky",
        top: "100px",
        background: "#ffffff",
        borderRadius: "18px",
        padding: "28px",
        boxShadow: "0 10px 32px rgba(0,0,0,0.08)",
        border: "1px solid #ececec",
      }}
    >
      {card}
    </div>
  );
}
```
