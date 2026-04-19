import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();
  const navRef = useRef();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // 🔥 UNIFIED NAV STYLE (FIXES VERTICAL ALIGNMENT COMPLETELY)
  const navItemStyle = {
    display: "flex",
    alignItems: "center",
    height: "52px",
    lineHeight: "52px",
    padding: "0 14px",
    fontWeight: 700,
    fontSize: "16px",
    color: "#1b1b1b",
    textDecoration: "none",
    cursor: "pointer",
    position: "relative",
    boxSizing: "border-box",
  };

  const activeStyle = {
    ...navItemStyle,
    color: "#1e3a5f",
  };

  // 🔥 Dropdown container (animated)
  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "rgba(255,255,255,0.98)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
    borderRadius: "12px",
    padding: "8px 0",
    minWidth: "230px",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,

    // animation
    animation: "dropdownFade 180ms ease-out",
  };

  const dropdownItem = {
    padding: "12px 16px",
    textDecoration: "none",
    color: "#222",
    fontWeight: 600,
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "white",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px 22px",
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
              width={260}
              height={95}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <div
            style={{
              display: isMobile ? "none" : "flex",
              alignItems: "stretch", // 🔥 FIXES VERTICAL ALIGNMENT ISSUE
              gap: "10px",
            }}
          >
            {/* Home */}
            <Link href="/" style={isActive("/") ? activeStyle : navItemStyle}>
              Home
              {isActive("/") && <div className="activeBar" />}
            </Link>

            {/* Boat Hire */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenDropdown("hire")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div style={navItemStyle}>Boat Hire ▾</div>

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
              <div style={navItemStyle}>Boatyard ▾</div>

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
              style={isActive("/gillan-creek-ferry") ? activeStyle : navItemStyle}
            >
              Ferry
            </Link>

            <Link
              href="/boat-hire-faq"
              style={isActive("/boat-hire-faq") ? activeStyle : navItemStyle}
            >
              FAQs
            </Link>

            <Link
              href="/st-anthony-helford-river"
              style={
                isActive("/st-anthony-helford-river")
                  ? activeStyle
                  : navItemStyle
              }
            >
              Location
            </Link>

            {/* CTA */}
            <Link
              href="/#booking"
              style={{
                ...navItemStyle,
                background: "#1e3a5f",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Book
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                fontSize: "1.9rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ☰
            </button>
          )}
        </div>

        {/* MOBILE MENU */}
        {menuOpen && isMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px 20px",
              gap: "10px",
            }}
          >
            <Link href="/" style={navItemStyle}>Home</Link>
            <Link href="/gillan-creek-ferry" style={navItemStyle}>Ferry</Link>
            <Link href="/boat-hire-faq" style={navItemStyle}>FAQs</Link>
            <Link href="/st-anthony-helford-river" style={navItemStyle}>Location</Link>
          </div>
        )}
      </nav>

      {/* MOBILE CTA BAR */}
      {isMobile && (
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
      )}

      {/* 🔥 ANIMATIONS + ACTIVE BAR */}
      <style jsx>{`
        .activeBar {
          position: absolute;
          bottom: 6px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: #1e3a5f;
          border-radius: 2px;
        }

        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
