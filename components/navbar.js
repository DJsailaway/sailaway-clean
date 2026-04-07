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
    textAlign: "center",
    padding: "0 6px"
  });

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Motor Boats", href: "/motor-boat-hire-helford" },
    { name: "Sailing", href: "/sailing-boat-hire-helford" },
    { name: "Kayaks & SUPs", href: "/kayak-hire-helford" },
    { name: "Moorings", href: "/gillan-creek-moorings" },
    { name: "Launching", href: "/boat-launching-helford" },
    { name: "Storage", href: "/boat-storage-helford" },
    { name: "Boatyard Services", href: "/boatyard-services" },
    { name: "FAQs", href: "/boat-hire-faq" },
    { name: "Location", href: "/st-anthony-helford-river" }
  ];

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
        margin: "0 auto"
      }}>
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "space-between",
          gap: "0"
        }}>
          {menuItems.map((item, index) => (
            <div key={item.name} style={{ flex: 1 }}>
              <Link href={item.href} style={linkStyle(item.href)}>
                {item.name}
              </Link>
            </div>
          ))}

          {/* Book & Call buttons */}
          <Link href="/#booking" style={{
            padding: "6px 12px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "4px",
            fontWeight: 600,
            textDecoration: "none",
            marginLeft: "10px"
          }}>Book</Link>

          <Link href="tel:+441234567890" style={{
            padding: "6px 12px",
            backgroundColor: "#1e3a5f",
            color: "white",
            borderRadius: "4px",
            fontWeight: 600,
            textDecoration: "none",
            marginLeft: "8px"
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
          {menuItems.map(item => (
            <Link key={item.name} href={item.href} style={linkStyle(item.href)}>
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
            fontWeight: 600
          }}>Book</Link>
          <Link href="tel:+441234567890" style={{
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
