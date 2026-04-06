import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: router.pathname === path ? "#1e3a5f" : "#333",
    fontWeight: router.pathname === path ? "600" : "400",
    padding: "8px 12px",
    textAlign: "center"
  });

  const links = [
    { href: "/", label: "Home" },
    { href: "/motor-boat-hire-helford", label: "Motor Boats" },
    { href: "/sailing-boat-hire-helford", label: "Sailing" },
    { href: "/kayak-hire-helford", label: "Kayaks & SUPs" },
    { href: "/gillan-creek-moorings", label: "Moorings" },
    { href: "/boat-launching-helford", label: "Launching & Dinghy Park" },
    { href: "/boat-storage-helford", label: "Storage" },
    { href: "/boatyard-services", label: "Boatyard Services" },
    { href: "/boat-hire-faq", label: "FAQs" },
    { href: "/st-anthony-helford-river", label: "Location" },
  ];

  return (
    <div style={{
      borderBottom: "1px solid #eee",
      backgroundColor: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
        fontFamily: "sans-serif"
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Sailaway</div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{
          display: "none",
          gap: "0",
          alignItems: "center",
        }}>
          {links.map((link, idx) => (
            <div key={link.href} style={{
              display: "flex",
              alignItems: "center"
            }}>
              <Link href={link.href} style={linkStyle(link.href)}>{link.label}</Link>
              {idx < links.length - 1 && (
                <span style={{ margin: "0 8px", color: "#ccc" }}>|</span>
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
          {links.map(link => (
            <Link key={link.href} href={link.href} style={linkStyle(link.href)}>
              {link.label}
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
