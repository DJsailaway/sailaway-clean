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

  const baseLink = {
    textDecoration: "none",
    color: "#222",
    fontWeight: 600,
    fontSize: "16px",
    padding: "10px 12px",
    borderRadius: "6px",
    display: "block",
  };

  const activeLink = {
    ...baseLink,
    color: "#1e3a5f",
    fontWeight: 800,
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "white",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    borderRadius: "10px",
    padding: "10px 0",
    minWidth: "220px",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
  };

  const dropdownItem = {
    padding: "10px 16px",
    textDecoration: "none",
    color: "#222",
    fontWeight: 500,
  };

  return (
    <nav
      ref={navRef}
      style={{
        borderBottom: "1px solid #eee",
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px", // slightly more spacious
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* LOGO (larger like your Location page feel) */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo-sailaway.jpg"
            alt="Sailaway St Anthony"
            width={190}
            height={70}
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
            gap: "20px",
          }}
        >
          <Link href="/" style={isActive("/") ? activeLink : baseLink}>
            Home
          </Link>

          {/* Boat Hire */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setOpenDropdown("hire")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "16px",
                padding: "10px 12px",
              }}
            >
              Boat Hire ▾
            </button>

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
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "16px",
                padding: "10px 12px",
              }}
            >
              Boatyard ▾
            </button>

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

          <Link href="/gillan-creek-ferry" style={baseLink}>
            Ferry
          </Link>
          <Link href="/boat-hire-faq" style={baseLink}>
            FAQs
          </Link>
          <Link href="/st-anthony-helford-river" style={baseLink}>
            Location
          </Link>

          {/* CTA */}
          <Link
            href="/#booking"
            style={{
              ...baseLink,
              backgroundColor: "#1e3a5f",
              color: "white",
              fontWeight: 800,
            }}
          >
            Book
          </Link>
        </div>

        {/* BURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "1.8rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
          }}
          className="hamburger"
        >
          ☰
        </button>
      </div>

      {/* MOBILE */}
      {menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "16px 20px",
            borderTop: "1px solid #eee",
          }}
        >
          <Link href="/" style={baseLink}>Home</Link>
          <Link href="/gillan-creek-ferry" style={baseLink}>Ferry</Link>
          <Link href="/boat-hire-faq" style={baseLink}>FAQs</Link>
          <Link href="/st-anthony-helford-river" style={baseLink}>Location</Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
