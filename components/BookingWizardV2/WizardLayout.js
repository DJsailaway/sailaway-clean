export default function WizardLayout({
  header,
  children,
  footer
}) {
return (
  <div
    style={{
      height: "100%",
      width: "100%",
      maxWidth: "960px",
      margin: "0 auto",

      display: "grid",
      gridTemplateRows: "auto 1fr auto",

      minHeight: 0
    }}
  >
    {header}

    <div
      style={{
        minHeight: 0
      }}
    >
      {children}
    </div>

    {footer}
  </div>
);
