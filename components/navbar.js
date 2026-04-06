import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

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

  const isActive = (path) => router.pathname === path;

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
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          justifyContent: "space-between"
        }}>
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} style={{
              textDecoration: "none",
              color: isActive(item.path) ? "#1e3a5f" : "#333",
              fontWeight: isActive(item.path) ? "600" : "400",
              padding: "0 6px"
            }}>
              {item.name}
            </Link>
          ))}

          {/* Book button */}
          <Link href="/#booking" style={{
            padding: "8px 16px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "600",
            marginLeft: "10px",
            whiteSpace: "nowrap"
          }}>
            Book
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          fontSize: "1.6rem",
          cursor: "pointer",
          display: "none"
        }}>
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
          borderTop: "1px solid #eee"
        }}>
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} style={{
              textDecoration: "none",
              color: isActive(item.path) ? "#1e3a5f" : "#333",
              fontWeight: isActive(item.path) ? "600" : "400"
            }}>
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

      <style jsx>{`
        a:hover {
          color: #1e3a5f;
        }

        @media (max-width: 767px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }

        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
