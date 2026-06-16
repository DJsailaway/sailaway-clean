import BookingWizard from "../components/BookingWizardV2/BookingWizard";

export default function BookingDev() {
  return (
    <main
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
        padding: "16px",
        maxWidth: "1400px",
        margin: "0 auto"
      }}
    >
      <BookingWizard />
    </main>
  );
}
