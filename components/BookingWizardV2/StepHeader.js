import { colours, spacing } from "./styles";

export default function StepHeader({
  currentStep = 0,
  steps = []
}) {
  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  return (
    <div
      style={{
        marginBottom: isMobile ? spacing.md : spacing.lg
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: isMobile ? "8px" : "16px",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: "8px"
        }}
      >
        {steps.map((step, index) => {
          const current = index === currentStep;
          const completed = index < currentStep;

          return (
            <div
              key={step}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
                minWidth: 0
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? "12px" : "14px",
                  fontWeight: current ? 700 : 600,
                  color:
                    current || completed
                      ? colours.primary
                      : colours.textSecondary,
                  whiteSpace: "nowrap",
                  transition: "all 0.25s ease"
                }}
              >
                {step}
              </div>

              <div
                style={{
                  marginTop: "8px",
                  width: "100%",
                  height: "3px",
                  borderRadius: "999px",
                  background: current
                    ? colours.accent
                    : completed
                    ? colours.primary
                    : colours.border,
                  transition: "all 0.25s ease"
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
