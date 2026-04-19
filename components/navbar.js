import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();
  const navRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => router.pathname === path;

  const linkStyle = {
    textDecoration: "none",
    color: "#222",
    fontWeight: 700,
    fontSize: "16px",
    padding: "12px",
    display: "flex",
    alignItems: "center",
  };

  const activeStyle = {
    ...linkStyle,
    color: "#1e3a5f",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "white",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    borderRadius: "10px",
    padding: "8px 0",
    minWidth: "220px",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
  };

  const dropdownItem = {
    padding: "10px 16px",
    textDecoration: "none",
    color: "#222",
    fontWeight: 600,
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "white",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo-sailaway.jpg"
              alt="Sailaway St Anthony"
              width={240}
              height={90}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <div
            className="desktop-menu"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <Link href="/" style={isActive("/") ? activeStyle : linkStyle}>
              Home
            </Link>

            {/* Boat Hire */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenDropdown("hire")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div style={linkStyle}>Boat Hire ▾</div>

              {openDropdown === "hire" && (
                <div style={dropdownStyle}>
                  <Link href="/motor-boat-hire-helford" style={dropdownItem}>
                    Motor Boats
                  </Link>
                  <Link href="/sailing-boat-hire-helford" style={dropdownItem}>
                    Sailing
                  </Link>
                  <Link href="/kayak-hire-helford" style={dropdownItem}>
                    Kayaks & SUPs
                  </Link>
                </div>
              )}
            </div>

            {/* Boatyard */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenDropdown("yard")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div style={linkStyle}>Boatyard ▾</div>

              {openDropdown === "yard" && (
                <div style={dropdownStyle}>
                  <Link href="/gillan-creek-moorings" style={dropdownItem}>
                    Moorings
                  </Link>
                  <Link href="/boat-launching-helford" style={dropdownItem}>
                    Launching
                  </Link>
                  <Link href="/boat-storage-helford" style={dropdownItem}>
                    Storage
                  </Link>
                  <Link href="/boatyard-services" style={dropdownItem}>
                    Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/gillan-creek-ferry"
              style={isActive("/gillan-creek-ferry") ? activeStyle : linkStyle}
            >
              Ferry
            </Link>

            <Link
              href="/boat-hire-faq"
              style={isActive("/boat-hire-faq") ? activeStyle : linkStyle}
            >
              FAQs
            </Link>

            <Link
              href="/st-anthony-helford-river"
              style={isActive("/st-anthony-helford-river") ? activeStyle : linkStyle}
            >
              Location
            </Link>

            {/* DESKTOP CTA */}
            <Link
              href="/#booking"
              style={{
                ...linkStyle,
                backgroundColor: "#1e3a5f",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Book
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "1.9rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
            }}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "16px 20px",
              background: "white",
            }}
          >
            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/gillan-creek-ferry" style={linkStyle}>Ferry</Link>
            <Link href="/boat-hire-faq" style={linkStyle}>FAQs</Link>
            <Link href="/st-anthony-helford-river" style={linkStyle}>Location</Link>
          </div>
        )}

        <style jsx>{`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            button {
              display: block !important;
            }
          }
        `}</style>
      </nav>

      {/* MOBILE CTA BAR (FIXED - MOBILE ONLY) */}
      <div
        className="mobile-cta-bar"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          zIndex: 9999,
          boxShadow: "0 -8px 25px rgba(0,0,0,0.15)",
        }}
      >
        <a
          href="tel:+441234567890"
          style={{
            flex: 1,
            background: "#0f2f4f",
            color: "white",
            textAlign: "center",
            padding: "16px",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          📞 Call
        </a>

        <a
          href="/#booking"
          style={{
            flex: 1,
            background: "#1e3a5f",
            color: "white",
            textAlign: "center",
            padding: "16px",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          🛶 Book
        </a>
      </div>

      {/* MOBILE ONLY VISIBILITY FIX */}
      <style jsx>{`
        @media (min-width: 769px) {
          .mobile-cta-bar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
