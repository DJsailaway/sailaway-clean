import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Active link styling
  const linkStyle = (path) => ({
    textDecoration: "none",
    color: router.pathname === path ? "#1e3a5f" : "#333",
    fontWeight: router.pathname === path ? "600" : "400",
    transition: "color 0.2s"
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
      {/* Top bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Sailaway</div>
        </Link>

        {/* Desktop menu */}
        <div className="desktop-menu" style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          fontSize: "0.95rem"
        }}>
          <Link href="/" style={linkStyle("/")}>Home</Link>
          <Link href="/motor-boat-hire-helford" style={linkStyle("/motor-boat-hire-helford")}>Motor Boats</Link>
          <Link href="/sailing-boat-hire-helford" style={linkStyle("/sailing-boat-hire-helford")}>Sailing</Link>
          <Link href="/kayak-hire-helford" style={linkStyle("/kayak-hire-helford")}>Kayaks & SUPs</Link>
          <Link href="/gillan-creek-moorings" style={linkStyle("/gillan-creek-moorings")}>Moorings</Link>
          <Link href="/boat-launching-helford" style={linkStyle("/boat-launching-helford")}>Launching & Dinghy Park</Link>
          <Link href="/boat-storage-helford" style={linkStyle("/boat-storage-helford")}>Storage</Link>
          <Link href="/boatyard-services" style={linkStyle("/boatyard-services")}>Boatyard Services</Link>
          <Link href="/boat-hire-faq" style={linkStyle("/boat-hire-faq")}>FAQs</Link>
          <Link href="/st-anthony-helford-river" style={linkStyle("/st-anthony-helford-river")}>Location</Link>

          {/* Book button */}
          <Link href="/#booking" style={{
            padding: "8px 14px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "600"
          }}>
            Book
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ fontSize: "1.6rem", cursor: "pointer" }}
        >
          ☰
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
          borderTop: "1px solid #eee",
          backgroundColor: "white"
        }}>
          <Link href="/" style={linkStyle("/")}>Home</Link>
          <Link href="/motor-boat-hire-helford" style={linkStyle("/motor-boat-hire-helford")}>Motor Boats</Link>
          <Link href="/sailing-boat-hire-helford" style={linkStyle("/sailing-boat-hire-helford")}>Sailing</Link>
          <Link href="/kayak-hire-helford" style={linkStyle("/kayak-hire-helford")}>Kayaks & SUPs</Link>
          <Link href="/gillan-creek-moorings" style={linkStyle("/gillan-creek-moorings")}>Moorings</Link>
          <Link href="/boat-launching-helford" style={linkStyle("/boat-launching-helford")}>Launching & Dinghy Park</Link>
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
            fontWeight: "600"
          }}>
            Book
          </Link>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        a:hover {
          color: #1e3a5f;
        }

        @media (min-width: 768px) {
          .hamburger {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .desktop-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
