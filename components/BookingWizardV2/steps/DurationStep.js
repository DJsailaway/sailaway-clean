import { useState } from "react";

export default function DurationStep({
  value,
  onChange
}) {
  const isHourly = value?.durationMode === "hourly";

  const hourlyOptions = [
    { key: "1h", label: "1 Hour" },
    { key: "2h", label: "2 Hours" },
    { key: "half", label: "Half Day (4h)" },
    { key: "full", label: "Full Day (8h)" },
    { key: "week", label: "1 Week" }
  ];

  const cardStyle = (selected) => ({
    padding: "14px",
    borderRadius: "14px",
    border: selected ? "2px solid #123B5D" : "1px solid #E5E7EB",
    background: selected ? "#F8FBFD" : "#FFFFFF",
    cursor: "pointer",
    fontWeight: 600,
    color: "#123B5D",
    textAlign: "center",
    transition: "all 0.2s ease"
  });

  const modeButton = (active) => ({
    flex: 1,
    padding: "12px",
    borderRadius: "12px",
    border: active ? "2px solid #123B5D" : "1px solid #E5E7EB",
    background: active ? "#F8FBFD" : "#FFFFFF",
    fontWeight: 600,
    color: "#123B5D",
    cursor: "pointer"
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      
      {/* TITLE */}
      <h1
        style={{
          margin: 0,
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#123B5D"
        }}
      >
        Choose duration
      </h1>

      {/* MODE SWITCH */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={modeButton(isHourly)}
          onClick={() =>
            onChange({
              durationMode: "hourly"
            })
          }
        >
          Hourly / Day
        </button>

        <button
          style={modeButton(!isHourly)}
          onClick={() =>
            onChange({
              durationMode: "multi"
            })
          }
        >
          Multi-day
        </button>
      </div>

      {/* HOURLY OPTIONS */}
      {isHourly && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px"
          }}
        >
          {hourlyOptions.map((opt) => (
            <button
              key={opt.key}
              style={cardStyle(value?.durationKey === opt.key)}
              onClick={() =>
                onChange({
                  durationKey: opt.key
                })
              }
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* MULTI-DAY SELECTOR */}
      {!isHourly && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            marginTop: "10px"
          }}
        >
          <button
            onClick={() =>
              onChange({
                days: Math.max(2, (value?.days || 2) - 1)
              })
            }
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              background: "#fff",
              fontSize: "22px",
              cursor: "pointer"
            }}
          >
            −
          </button>

          <div
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#123B5D",
              minWidth: "80px",
              textAlign: "center"
            }}
          >
            {value?.days || 2} days
          </div>

          <button
            onClick={() =>
              onChange({
                days: Math.min(31, (value?.days || 2) + 1)
              })
            }
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              background: "#fff",
              fontSize: "22px",
              cursor: "pointer"
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
