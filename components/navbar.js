import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Helper for active link styling
  const linkStyle = (path) => ({
    textDecoration: "none",
    color: router.pathname === path ? "#1e3a5f" : "#333",
    fontWeight: router.pathname === path ? "600" : "400",
  });

  return (
    <div style={{
      borderBottom: "1px solid #eee",
      backgroundColor: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      
      {/* Top Bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "sans-serif",
        flexWrap: "wrap"
      }}>
        
        {/* Logo placeholder (remove if not needed) */}
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          {/* Logo or text could go here */}
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{
          display: "none",
          gap: "12px",
          alignItems: "center",
          flex: 1,
          justifyContent: "space-between",
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
          {/* Book Button */}
          <Link href="/#booking" style={{
            padding: "8px 14px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "600",
            whiteSpace: "nowrap"
          }}>
            Book
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "1.6rem",
            cursor: "pointer"
          }}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
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
          .desktop-menu {
            display: flex;
          }
          .hamburger {
            display: none;
          }
        }

        /* Responsive font & spacing */
        .desktop-menu a {
          font-size: 0.85rem;
          white-space: nowrap;
        }
        @media (min-width: 768px) {
          .desktop-menu a {
            font-size: 0.95rem;
          }
        }
        @media (min-width: 1200px) {
          .desktop-menu a {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
