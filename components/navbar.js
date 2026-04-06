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
    padding: "0 8px"
  });

  // Menu items
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Motor Boats", href: "/motor-boat-hire-helford" },
    { name: "Sailing", href: "/sailing-boat-hire-helford" },
    { name: "Kayaks & SUPs", href: "/kayak-hire-helford" },
    { name: "Moorings", href: "/gillan-creek-moorings" },
    { name: "Launching & Dinghy Park", href: "/boat-launching-helford" },
    { name: "Storage", href: "/boat-storage-helford" },
    { name: "Boatyard Services", href: "/boatyard-services" },
    { name: "FAQs", href: "/boat-hire-faq" },
    { name: "Location", href: "/st-anthony-helford-river" }
  ];

  return (
    <div style={{
      borderBottom: "1px solid #eee",
      backgroundColor: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>

      {/* Top Bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "sans-serif"
      }}>

        {/* Logo */}
        <Link href="/">
          <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            {/* Replace placeholder with your logo path */}
            <img src="/logo-placeholder.png" alt="Sailaway Logo" style={{ height: "40px", marginRight: "10px" }} />
            {/* Optional text fallback */}
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Sailaway</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{
          display: "none",
          gap: "12px",
          fontSize: "0.95rem",
          alignItems: "center"
        }}>
          {menuItems.map((item, index) => (
            <div key={item.href} style={{ display: "flex", alignItems: "center" }}>
              <Link href={item.href} style={linkStyle(item.href)}>{item.name}</Link>
              {index < menuItems.length - 1 && (
                <span style={{ margin: "0 6px", color: "#ccc" }}>|</span>
              )}
            </div>
          ))}

          {/* Book Button */}
          <Link href="/#booking" style={{
            padding: "8px 14px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "600",
            marginLeft: "12px"
          }}>
            Book
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ fontSize: "1.6rem", cursor: "pointer" }}
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
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} style={linkStyle(item.href)}>
              {item.name}
            </Link>
          ))}

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
      `}</style>
    </div>
  );
}
