import { useEffect, useState } from "react";

export default function WizardLayout({
  children,
  SummaryComponent
}) {
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setShowSummary(window.innerWidth >= 1100);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: showSummary
          ? "minmax(0, 1fr) 320px"
          : "1fr",
        gap: isMobile ? "12px" : "16px",
        width: "100%",
        alignItems: "start"
      }}
    >
      {/* Main wizard content */}
      <div style={{ minWidth: 0 }}>
        {children}
      </div>

      {/* Desktop Summary */}
      {showSummary && SummaryComponent && (
        <aside
          style={{
            position: "sticky",
            top: "100px",
            alignSelf: "start"
          }}
        >
          <SummaryComponent />
        </aside>
      )}
    </div>
  );
}
