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

  display: "flex",
  flexDirection: "column",

  minHeight: 0,

  border: "2px solid red"
}}
  >
    {header}

    <div
  style={{
    flex: 1,
    minHeight: 0,
    border: "2px solid blue"
  }}
>
  {children}
</div>

    {footer}
  </div>
);
}
