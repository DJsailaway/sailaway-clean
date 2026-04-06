import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const links = [
    { name: "Home", href: "/" },
    { name: "Motor Boats", href: "/motor-boat-hire-helford" },
    { name: "Sailing", href: "/sailing-boat-hire-helford" },
    { name: "Kayaks & SUPs", href: "/kayak-hire-helford" },
    { name: "Moorings", href: "/gillan-creek-moorings" },
    { name: "Launching & Dinghy Park", href: "/boat-launching-helford" },
    { name: "Storage", href: "/boat-storage-helford" },
    { name: "Boatyard Services", href: "/boatyard-services" },
    { name: "FAQs", href: "/boat-hire-faq" },
    { name: "Location", href: "/st-anthony-helford-river" },
  ];

  const isActive = (href) => router.pathname === href;

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "white",
      borderBottom: "1px solid #eee",
      width: "100%"
    }}>
      {/* Navbar Container */}
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
          <div style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#000" }}>Sailaway</div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{
          display: "none",
          gap: "18px",
          alignItems: "center",
          fontSize: "0.95rem"
        }}>
          {links.map(link => (
            <Link key={link.href} href={link.href} style={{
              textDecoration: "none",
              color: isActive(link.href) ? "#1e3a5f" : "#333",
              fontWeight: isActive(link.href) ? 600 : 400
            }}>
              {link.name}
            </Link>
          ))}
          <Link href="/#booking" style={{
            padding: "8px 14px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: 600
          }}>Book</Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ fontSize: "1.6rem", cursor: "pointer" }}>☰</div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "15px 20px",
          fontFamily: "sans-serif",
          borderTop: "1px solid #eee"
        }}>
          {links.map(link => (
            <Link key={link.href} href={link.href} style={{
              textDecoration: "none",
              color: isActive(link.href) ? "#1e3a5f" : "#333",
              fontWeight: isActive(link.href) ? 600 : 400
            }}>
              {link.name}
            </Link>
          ))}
          <Link href="/#booking" style={{
            padding: "10px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "5px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: 600
          }}>Book</Link>
        </div>
      )}

      <style jsx>{`
        a:hover {
          color: #1e3a5f;
        }

        @media (min-width: 768px) {
          .desktop-menu { display: flex; }
          .hamburger { display: none; }
        }
      `}</style>
    </nav>
  );
}
