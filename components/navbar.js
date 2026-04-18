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
    fontWeight: 700, // 🔥 ALL ITEMS BOLD
    fontSize: "16px",
    padding: "12px 12px",
    display: "flex",
    alignItems: "center",
    height: "100%",
  };

  const activeLink = {
    ...baseLink,
    color: "#1e3a5f",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
    borderRadius: "12px",
    padding: "8px 0",
    minWidth: "240px",
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
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center", // 🔥 fixes vertical alignment issue
            justifyContent: "space-between",
            padding: "18px 22px",
            maxWidth: "1200px",
            margin: "0 auto",
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
              height: "100%",
            }}
          >
            <Link href="/" style={isActive("/") ? activeLink : baseLink}>
              Home
            </Link>

            {/* Boat Hire */}
            <div
              style={{ position: "relative", display: "flex", alignItems: "center" }}
              onMouseEnter={() => setOpenDropdown("hire")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div style={baseLink}>
                Boat Hire ▾
              </div>

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
              style={{ position: "relative", display: "flex", alignItems: "center" }}
              onMouseEnter={() => setOpenDropdown("yard")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div style={baseLink}>
                Boatyard ▾
              </div>

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

            <Link href="/gillan-creek-ferry" style={isActive("/gillan-creek-ferry") ? activeLink : baseLink}>
              Ferry
            </Link>

            <Link href="/boat-hire-faq" style={isActive("/boat-hire-faq") ? activeLink : baseLink}>
              FAQs
            </Link>

            <Link href="/st-anthony-helford-river" style={isActive("/st-anthony-helford-river") ? activeLink : baseLink}>
              Location
            </Link>

            {/* DESKTOP CTA */}
            <Link
              href="/#booking"
              style={{
                ...baseLink,
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
              gap: "10px",
              padding: "16px 20px",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
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

      {/* MOBILE BOTTOM CTA BAR (ONLY MOBILE) */}
      <div
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
            textDecoration: "none",
            textAlign: "center",
            padding: "16px",
            fontWeight: 800,
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
            textDecoration: "none",
            textAlign: "center",
            padding: "16px",
            fontWeight: 800,
          }}
        >
          🛶 Book
        </a>
      </div>

      {/* HIDE BOTTOM BAR ON DESKTOP */}
      <style jsx>{`
        @media (min-width: 769px) {
          div[style*="position: fixed"][style*="bottom: 0"] {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
