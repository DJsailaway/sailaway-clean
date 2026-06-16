import { colours, spacing, radius, shadows } from "./styles";

export default function BottomActionBar({
  onBack,
  onNext,
  backLabel = "Back",
  nextLabel = "Continue",
  total = "£0",
  showTotal = true,
  disableNext = false
}) {
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
        padding: `${spacing.md}px ${spacing.lg}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: spacing.md,
        zIndex: 1000,
        backdropFilter: "blur(10px)"
      }}
    >
      {/* Back Button */}

      <button
        onClick={onBack}
        style={{
          padding: `${spacing.sm}px ${spacing.lg}px`,
          borderRadius: radius.md,
          border: `1px solid ${colours.border}`,
          background: colours.card,
          color: colours.primary,
          fontSize: "16px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "0.25s ease"
        }}
      >
        ← {backLabel}
      </button>

      {/* Total */}

      {showTotal && (
        <div
          style={{
            textAlign: "center",
            flex: 1
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

      {/* Continue Button */}

      <button
        onClick={onNext}
        disabled={disableNext}
        style={{
          padding: `${spacing.sm}px ${spacing.xl}px`,
          borderRadius: radius.md,
          border: "none",
          background: disableNext
            ? colours.border
            : colours.primary,
          color: "#fff",
          fontSize: "16px",
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
