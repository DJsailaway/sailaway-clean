export default function WizardLayout({
  children,
  summary
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) 320px",
        gap: "24px",
        alignItems: "start",
        width: "100%"
      }}
    >
      {/* Main wizard content */}
      <div
        style={{
          minWidth: 0
        }}
      >
        {children}
      </div>

      {/* Summary panel */}
      <aside
        style={{
          position: "sticky",
          top: "100px"
        }}
      >
        {summary}
      </aside>
    </div>
  );
}
