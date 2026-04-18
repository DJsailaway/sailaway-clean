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
    fontWeight: 500,
    fontFamily: "inherit",
    padding: "10px 12px",
    borderRadius: "6px",
  };

  const activeLink = {
    ...baseLink,
    color: "#1e3a5f",
    fontWeight: 700,
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "white",
    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
    borderRadius: "10px",
    padding: "8px 0",
    zIndex: 1000,
    minWidth: "220px",
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
          padding: "12px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* LOGO */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo-sailaway.jpg"
            alt="Sailaway St Anthony"
            width={140}
            height={50}
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
                padding: "10px 12px",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: 500,
                color: "#222",
              }}
            >
              Boat Hire ▾
            </button>

            {openDropdown === "hire" && (
              <div style={dropdownStyle}>
                <Link href="/motor-boat-hire-helford" style={baseLink}>
                  Motor Boats
                </Link>
                <Link href="/sailing-boat-hire-helford" style={baseLink}>
                  Sailing
                </Link>
                <Link href="/kayak-hire-helford" style={baseLink}>
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
                padding: "10px 12px",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: 500,
                color: "#222",
              }}
            >
              Boatyard ▾
            </button>

            {openDropdown === "yard" && (
              <div style={dropdownStyle}>
                <Link href="/gillan-creek-moorings" style={baseLink}>
                  Moorings
                </Link>
                <Link href="/boat-launching-helford" style={baseLink}>
                  Launching
                </Link>
                <Link href="/boat-storage-helford" style={baseLink}>
                  Storage
                </Link>
                <Link href="/boatyard-services" style={baseLink}>
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
              fontWeight: 700,
            }}
          >
            Book
          </Link>

          <Link
            href="tel:+441234567890"
            style={{
              ...baseLink,
              backgroundColor: "#1e3a5f",
              color: "white",
              fontWeight: 700,
            }}
          >
            Call
          </Link>
        </div>

        {/* BURGER (FIXED RESPONSIVE VISIBILITY) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            fontSize: "1.8rem",
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
            borderTop: "1px solid #eee",
          }}
        >
          <Link href="/" style={baseLink}>Home</Link>
          <Link href="/gillan-creek-ferry" style={baseLink}>Ferry</Link>
          <Link href="/boat-hire-faq" style={baseLink}>FAQs</Link>
          <Link href="/st-anthony-helford-river" style={baseLink}>Location</Link>
        </div>
      )}

      {/* RESPONSIVE FIX */}
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
