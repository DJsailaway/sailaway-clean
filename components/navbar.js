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
    borderRadius: "8px",
    display: "block",
    transition: "all 0.2s ease",
  };

  const activeLink = {
    ...baseLink,
    color: "#1e3a5f",
    fontWeight: 800,
  };

  const dropdownStyle = {
    position: "absolute",
    top: "110%",
    left: 0,
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(12px)", // ✨ glass effect
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
    borderRadius: "12px",
    padding: "8px 0",
    minWidth: "240px",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
    animation: "fadeIn 0.15s ease-out",
  };

  const dropdownItem = {
    padding: "10px 16px",
    textDecoration: "none",
    color: "#222",
    fontWeight: 500,
    transition: "background 0.2s ease",
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,

        // ✨ GLASS NAVBAR
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 22px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* LOGO (bigger again 🔥) */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo-sailaway.jpg"
            alt="Sailaway St Anthony"
            width={230}   // 🔥 increased again
            height={85}   // 🔥 increased again
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
            gap: "22px",
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
                color: "#222",
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
                color: "#222",
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
          className="hamburger"
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
            gap: "12px",
            padding: "16px 20px",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Link href="/" style={baseLink}>Home</Link>
          <Link href="/gillan-creek-ferry" style={baseLink}>Ferry</Link>
          <Link href="/boat-hire-faq" style={baseLink}>FAQs</Link>
          <Link href="/st-anthony-helford-river" style={baseLink}>Location</Link>
        </div>
      )}

      {/* ANIMATIONS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
