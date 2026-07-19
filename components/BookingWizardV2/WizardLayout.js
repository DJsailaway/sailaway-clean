export default function WizardLayout({
  children,
  footer
}) {
  return (
    <div
      style={{
        flex: 1,

        width: "100%",
        maxWidth: "960px",
        margin: "0 auto",

        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          flex: 1
        }}
      >
        {children}
      </div>

      {footer}
    </div>
  );
}
