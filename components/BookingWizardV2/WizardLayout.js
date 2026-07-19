import { useEffect, useState } from "react";

export default function WizardLayout({
  children,
  footer
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
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "100%"
    }}
  >
    <div>
      {children}
    </div>

    {footer}
  </div>
);
}
