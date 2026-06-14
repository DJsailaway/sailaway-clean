import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingWizard from "../components/BookingWizard";

export default function BookingDev() {
  return (
    <>
      <Navbar />
      <main
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "40px 20px"
        }}
      >
        <BookingWizard />
      </main>
      <Footer />
    </>
  );
}
