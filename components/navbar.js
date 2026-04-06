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

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Motor Boats", path: "/motor-boat-hire-helford" },
    { name: "Sailing", path: "/sailing-boat-hire-helford" },
    { name: "Kayaks & SUPs", path: "/kayak-hire-helford" },
    { name: "Moorings", path: "/gillan-creek-moorings" },
    { name: "Launching", path: "/boat-launching-helford" },
    { name: "Storage", path: "/boat-storage-helford" },
    { name: "Boatyard Services", path: "/boatyard-services" },
    { name: "FAQs", path: "/boat-hire-faq" },
    { name: "Location", path: "/st-anthony-helford-river" }
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
        padding: "10px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "sans-serif"
      }}>
        
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{
          display: "none",
          gap: "10px",
          fontSize: "0.95rem",
          alignItems: "center"
        }}>
          {menuItems.map((item, index) => (
            <div key={item.name} style={{ display: "flex", alignItems: "center" }}>
              <Link href={item.path} style={linkStyle(item.path)}>
                {item.name}
              </Link>
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
            fontWeight: "600"
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
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} style={linkStyle(item.path)}>
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
