import { colours, spacing, radius, shadows } from "./styles";
import { useEffect, useState } from "react";

export default function BottomActionBar({
  onBack,
  onNext,
  backLabel = "Back",
  nextLabel = "Continue",
  total = "£0",
  showTotal = true,
  disableNext = false
}) {

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        background: colours.card,
        borderTop: `1px solid ${colours.border}`,
        boxShadow: shadows.card,
        padding: isMobile
          ? `${spacing.sm}px 8px`
          : `${spacing.md}px ${spacing.lg}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: spacing.md,
        zIndex: 1000,
        backdropFilter: "blur(10px)",
        boxSizing: "border-box"
      }}
    >
      {/* Back Button */}

      <button
        onClick={onBack}
        style={{
          padding: isMobile
            ? `${spacing.sm}px ${spacing.md}px`
            : `${spacing.sm}px ${spacing.lg}px`,
          fontSize: isMobile ? "14px" : "16px",
          borderRadius: radius.md,
          border: `1px solid ${colours.border}`,
          background: colours.card,
          color: colours.primary,
          fontWeight: 600,
          cursor: "pointer",
          transition: "0.25s ease"
        }}
      >
        ← {backLabel}
      </button>

{/* Desktop Total */}
{showTotal && !isMobile && (
  <div
    style={{
      textAlign: "center",
      flex: "0 1 auto",
      minWidth: "80px",
    }}
  >
    <div
      style={{
        fontSize: "12px",
        color: colours.textSecondary,
        textTransform: "uppercase",
        letterSpacing: "0.05em"
      }}
    >
      Total
    </div>

    <div
      style={{
        fontSize: "28px",
        fontWeight: 700,
        color: colours.primary
      }}
    >
      {total}
    </div>
  </div>
)}

{/* Mobile Total */}
{showTotal && isMobile && (
  <div
    style={{
      fontSize: "16px",
      fontWeight: 700,
      color: colours.primary,
      flex: 1,
      textAlign: "center"
    }}
  >
    {total}
  </div>
)}

      {/* Continue Button */}

      <button
        onClick={onNext}
        disabled={disableNext}
        style={{
          padding: isMobile
            ? `${spacing.sm}px ${spacing.md}px`
            : `${spacing.sm}px ${spacing.xl}px`,
          fontSize: isMobile ? "14px" : "16px",
          whiteSpace: "nowrap",
          borderRadius: radius.md,
          border: "none",
          background: disableNext
            ? colours.border
            : colours.primary,
          color: "#fff",
          fontWeight: 600,
          cursor: disableNext ? "not-allowed" : "pointer",
          transition: "0.25s ease",
          opacity: disableNext ? 0.5 : 1
        }}
      >
        {nextLabel} →
      </button>
    </div>
  );
}
