import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: router.pathname === path ? "#1e3a5f" : "#333",
    fontWeight: router.pathname === path ? 600 : 400,
    padding: "0 6px"
  });

  return (
    <nav style={{
      borderBottom: "1px solid #eee",
      backgroundColor: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      fontFamily: "sans-serif"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        flexWrap: "nowrap"
      }}>
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          flexWrap: "nowrap",
          overflowX: "auto"
        }}>
          <Link href="/" style={linkStyle("/")}>Home</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/motor-boat-hire-helford" style={linkStyle("/motor-boat-hire-helford")}>Motor Boats</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/sailing-boat-hire-helford" style={linkStyle("/sailing-boat-hire-helford")}>Sailing</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/kayak-hire-helford" style={linkStyle("/kayak-hire-helford")}>Kayaks & SUPs</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/gillan-creek-moorings" style={linkStyle("/gillan-creek-moorings")}>Moorings</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/boat-launching-helford" style={linkStyle("/boat-launching-helford")}>Launching</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/boat-storage-helford" style={linkStyle("/boat-storage-helford")}>Storage</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/boatyard-services" style={linkStyle("/boatyard-services")}>Boatyard Services</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/boat-hire-faq" style={linkStyle("/boat-hire-faq")}>FAQs</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/st-anthony-helford-river" style={linkStyle("/st-anthony-helford-river")}>Location</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/#booking" style={{
            padding: "6px 12px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "4px",
            fontWeight: 600,
            textDecoration: "none"
          }}>Book</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="tel:+441234567890" style={{
            padding: "6px 12px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "4px",
            fontWeight: 600,
            textDecoration: "none"
          }}>Call</Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          fontSize: "1.6rem",
          cursor: "pointer",
          display: "none"
        }}>☰</div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "16px 20px",
          fontFamily: "sans-serif",
          borderTop: "1px solid #eee"
        }}>
          <Link href="/" style={linkStyle("/")}>Home</Link>
          <Link href="/motor-boat-hire-helford" style={linkStyle("/motor-boat-hire-helford")}>Motor Boats</Link>
          <Link href="/sailing-boat-hire-helford" style={linkStyle("/sailing-boat-hire-helford")}>Sailing</Link>
          <Link href="/kayak-hire-helford" style={linkStyle("/kayak-hire-helford")}>Kayaks & SUPs</Link>
          <Link href="/gillan-creek-moorings" style={linkStyle("/gillan-creek-moorings")}>Moorings</Link>
          <Link href="/boat-launching-helford" style={linkStyle("/boat-launching-helford")}>Launching</Link>
          <Link href="/boat-storage-helford" style={linkStyle("/boat-storage-helford")}>Storage</Link>
          <Link href="/boatyard-services" style={linkStyle("/boatyard-services")}>Boatyard Services</Link>
          <Link href="/boat-hire-faq" style={linkStyle("/boat-hire-faq")}>FAQs</Link>
          <Link href="/st-anthony-helford-river" style={linkStyle("/st-anthony-helford-river")}>Location</Link>
          <Link href="/#booking" style={{
            padding: "10px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "5px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: 600
          }}>Book</Link>
          <Link href="tel:+441326231357" style={{
            padding: "10px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "5px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: 600
          }}>Call</Link>
        </div>
      )}

      <style jsx>{`
        a:hover { color: #1e3a5f; }

        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .hamburger { display: none !important; }
        }

        @media (max-width: 767px) {
          .desktop-menu { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
