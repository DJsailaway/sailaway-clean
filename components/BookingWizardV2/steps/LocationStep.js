```jsx
import { useState } from "react";

const locations = [
  { name: "Helford Village", price: 36 },
  { name: "Gillan", price: 0 },
  { name: "Durgan", price: 36 },
  { name: "Helford Passage", price: 36 },
  { name: "Port Navas", price: 36 },
  { name: "Flushing", price: 0 },
  { name: "Calamansac", price: 36 },
  { name: "Lorelei", price: 36 }
];

export default function LocationStep({
  value,
  onChange
}) {
  const [mode, setMode] = useState(
    value.mode || "boatyard"
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px"
      }}
    >
      <h1
        style={{
          margin: 0,
          color: "#123B5D",
          fontSize: "1.5rem",
          fontWeight: 600
        }}
      >
        Where would you like to meet us?
      </h1>

      <p
        style={{
          margin: 0,
          color: "#64748B"
        }}
      >
        For multi-day hires we can meet you at the boatyard or deliver to
        several locations around the Helford.
      </p>

      {/* ST ANTHONY */}

      <button
        onClick={() => {
          setMode("boatyard");

          onChange({
            mode: "boatyard",
            location: "St Anthony",
            deliveryCharge: 0
          });
        }}
        style={{
          padding: "22px",
          borderRadius: "18px",
          border:
            mode === "boatyard"
              ? "2px solid #123B5D"
              : "1px solid #E5E7EB",
          background:
            mode === "boatyard"
              ? "#F8FBFD"
              : "#FFFFFF",
          textAlign: "left",
          cursor: "pointer"
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: "1.1rem",
            color: "#123B5D"
          }}
        >
          📍 Meet us at St Anthony
        </div>

        <div
          style={{
            marginTop: "8px",
            color: "#64748B"
          }}
        >
          Collect your boat from our boatyard.
        </div>

        <div
          style={{
            marginTop: "14px",
            fontWeight: 600,
            color: "#15803D"
          }}
        >
          Included
        </div>
      </button>

      {/* DELIVERY */}

      <button
        onClick={() => {
          setMode("delivery");

          onChange({
            mode: "delivery"
          });
        }}
        style={{
          padding: "22px",
          borderRadius: "18px",
          border:
            mode === "delivery"
              ? "2px solid #123B5D"
              : "1px solid #E5E7EB",
          background:
            mode === "delivery"
              ? "#F8FBFD"
              : "#FFFFFF",
          textAlign: "left",
          cursor: "pointer"
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: "1.1rem",
            color: "#123B5D"
          }}
        >
          🌊 Meet us along the Helford
        </div>

        <div
          style={{
            marginTop: "8px",
            color: "#64748B"
          }}
        >
          We'll deliver your boat to a convenient location.
        </div>

        <div
          style={{
            marginTop: "14px",
            fontWeight: 600,
            color: "#123B5D"
          }}
        >
          From Included / +£36
        </div>
      </button>

      {mode === "delivery" && (
        <div
          style={{
            display: "grid",
            gap: "12px",
            marginTop: "6px"
          }}
        >
          {locations.map((location) => (
            <button
              key={location.name}
              onClick={() =>
                onChange({
                  mode: "delivery",
                  location: location.name,
                  deliveryCharge: location.price
                })
              }
              style={{
                padding: "18px",
                borderRadius: "16px",
                border:
                  value.location === location.name
                    ? "2px solid #123B5D"
                    : "1px solid #E5E7EB",
                background:
                  value.location === location.name
                    ? "#F8FBFD"
                    : "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <span>{location.name}</span>

              <strong>
                {location.price === 0
                  ? "Included"
                  : `+£${location.price}`}
              </strong>
            </button>
          ))}

          <button
            onClick={() =>
              onChange({
                mode: "delivery",
                location: "Other"
              })
            }
            style={{
              padding: "18px",
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
              background: "#FFFFFF",
              textAlign: "left",
              cursor: "pointer"
            }}
          >
            📍 Somewhere else…
          </button>

          {value.location === "Other" && (
            <textarea
              placeholder="Where would you like to meet us?"
              value={value.customLocation || ""}
              onChange={(e) =>
                onChange({
                  customLocation: e.target.value
                })
              }
              style={{
                minHeight: "90px",
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #D1D5DB",
                resize: "vertical"
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
```

