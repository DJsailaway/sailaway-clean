import { colours, spacing } from "./styles";

export default function StepHeader({
  title = "Book Your Boat",
  currentStep = 0,
  steps = []
}) {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      style={{
        marginBottom: spacing.lg
      }}
    >
      {/* Main Title */}
      <h1
        style={{
          margin: 0,
          marginBottom: spacing.sm,
          fontSize: isMobile ? "2rem" : "2.5rem",
          fontWeight: 700,
          color: colours.primary,
          lineHeight: 1.1
        }}
      >
        {title}
      </h1>

      {/* Desktop Progress */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            gap: spacing.md,
            flexWrap: "wrap",
            borderBottom: `1px solid ${colours.border}`,
            paddingBottom: spacing.sm
          }}
        >
          {steps.map((step, index) => {
            const current = index === currentStep;
            const completed = index < currentStep;

            return (
              <div
                key={step}
                style={{
                  paddingBottom: spacing.sm,
                  fontWeight: current ? 700 : 500,
                  color: current || completed
                    ? colours.primary
                    : colours.textSecondary,
                  borderBottom: current
                    ? `3px solid ${colours.accent}`
                    : "3px solid transparent",
                  transition: "all 0.25s ease"
                }}
              >
                {step}
              </div>
            );
          })}
        </div>
      )}

      {/* Mobile Progress */}
      {isMobile && (
        <div>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              color: colours.primary,
              marginBottom: spacing.sm
            }}
          >
            {steps[currentStep]}
          </div>

          <div
            style={{
              display: "flex",
              gap: 8
            }}
          >
            {steps.map((_, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  height: 6,
                  borderRadius: 999,
                  background:
                    index <= currentStep
                      ? colours.primary
                      : colours.border,
                  transition: "all 0.25s ease"
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
