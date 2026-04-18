import Link from "next/link";

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  background = "#f5f5f5",
  align = "center"
}) {
  return (
    <div
      style={{
        margin: "50px 0",
        padding: "35px 25px",
        backgroundColor: background,
        borderRadius: "12px",
        textAlign: align
      }}
    >
      {title && (
        <h2 style={{ marginBottom: "10px" }}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p style={{ marginBottom: "20px", opacity: 0.85 }}>
          {subtitle}
        </p>
      )}

      {buttonText && buttonLink && (
        <Link href={buttonLink}>
          <button
            style={{
              padding: "14px 28px",
              backgroundColor: "#1e3a5f",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            {buttonText}
          </button>
        </Link>
      )}
    </div>
  );
}
