import { useEffect, useState } from "react";

export default function WizardLayout({
  children,
  summary
}) {
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setShowSummary(window.innerWidth >= 1100);
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () =>
      window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: showSummary
          ? "minmax(0, 1fr) 320px"
          : "1fr",
        gap: "32px",
        width: "100%",
        alignItems: "start"
      }}
    >
      {/* Wizard */}

      <div
        style={{
          minWidth: 0
        }}
      >
        {children}
      </div>

      {/* Desktop Summary */}

      {showSummary && (
        <aside
          style={{
            position: "sticky",
            top: "100px",
            alignSelf: "start"
          }}
        >
          {summary}
        </aside>
      )}
    </div>
  );
}
    </div>
  );
}
