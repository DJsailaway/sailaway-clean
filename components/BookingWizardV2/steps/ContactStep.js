import { useEffect, useState } from "react";

export default function ContactStep({
  value,
  onChange
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();

    window.addEventListener("resize", check);

    return () =>
      window.removeEventListener("resize", check);
  }, []);

  const inputStyle = {
    width: "100%",
    padding: isMobile ? "16px" : "18px",
    borderRadius: "16px",
    border: "1px solid #E5E7EB",
    fontSize: "1rem",
    color: "#123B5D",
    boxSizing: "border-box",
    outline: "none",
    background: "#FFFFFF"
  };

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
          fontSize: isMobile ? "1.4rem" : "1.6rem",
          fontWeight: 600
        }}
      >
        Your details
      </h1>

      <p
        style={{
          margin: 0,
          color: "#64748B",
          lineHeight: 1.5
        }}
      >
        We use these details to confirm your booking - no spam.
      </p>

      <input
        type="text"
        placeholder="Full name"
        value={value.name}
        onChange={(e) =>
          onChange({
            name: e.target.value
          })
        }
        style={inputStyle}
      />

      <input
        type="email"
        placeholder="Email address"
        value={value.email}
        onChange={(e) =>
          onChange({
            email: e.target.value
          })
        }
        style={inputStyle}
      />

      <input
        type="tel"
        placeholder="Telephone number"
        value={value.phone}
        onChange={(e) =>
          onChange({
            phone: e.target.value
          })
        }
        style={inputStyle}
      />

      <textarea
        placeholder="Anything you'd like us to know?"
        value={value.notes}
        onChange={(e) =>
          onChange({
            notes: e.target.value
          })
        }
        style={{
          ...inputStyle,
          minHeight: "120px",
          resize: "vertical"
        }}
      />
    </div>
  );
}
