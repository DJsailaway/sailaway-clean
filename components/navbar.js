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

  // 🌊 LUXURY NAV STYLE (minimal, airy, refined)
  const navItemStyle = {
    display: "flex",
    alignItems: "center",
    height: "56px",
    padding: "0 16px",
    fontSize: "15.5px",
    fontWeight: 500,
    letterSpacing: "0.2px",
    color: "#1c1c1c",
    textDecoration: "none",
    position: "relative",
    cursor: "pointer",
  };

  const activeStyle = {
    ...navItemStyle,
    fontWeight: 600,
    color: "#0f2f4f",
  };

  // 🌫️ Luxury dropdown (glass effect feel)
  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    marginTop: "10px",
    minWidth: "240px",
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    borderRadius: "14px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
    animation: "fadeSlide 180ms ease-out",
  };

  const dropdownItem = {
    padding: "12px 18px",
    fontSize: "15px",
    fontWeight: 500,
    color: "#1c1c1c",
    textDecoration: "none",
  };

  const underlineHover = `
    .navLink {
      position: relative;
    }

    .navLink:after {
      content: "";
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 14px;
      height: 1px;
      background: #0f2f4f;
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 220ms ease;
      opacity: 0.7;
    }

    .navLink:hover:after {
      transform: scaleX(1);
    }

    @keyframes fadeSlide {
      from {
        opacity: 0;
        transform: translateY(-6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

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
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "18px 26px",
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
              width={280}
              height={100}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <div
            style={{
              display: isMobile ? "none" : "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Link
              href="/"
              className="navLink"
              style={isActive("/") ? activeStyle : navItemStyle}
            >
              Home
            </Link>

            {/* Boat Hire */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenDropdown("hire")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div style={navItemStyle} className="navLink">
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
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenDropdown("yard")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div style={navItemStyle} className="navLink">
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

            <Link
              href="/gillan-creek-ferry"
              className="navLink"
              style={isActive("/gillan-creek-ferry") ? activeStyle : navItemStyle}
            >
              Ferry
            </Link>

            <Link
              href="/boat-hire-faq"
              className="navLink"
              style={isActive("/boat-hire-faq") ? activeStyle : navItemStyle}
            >
              FAQs
            </Link>

            <Link
              href="/st-anthony-helford-river"
              className="navLink"
              style={
                isActive("/st-anthony-helford-river")
                  ? activeStyle
                  : navItemStyle
              }
            >
              Location
            </Link>

            {/* PRIMARY CTA */}
            <Link
              href="/#booking"
              style={{
                marginLeft: "6px",
                padding: "10px 18px",
                background: "#0f2f4f",
                color: "white",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "0.3px",
              }}
            >
              Book
            </Link>
          </div>

          {/* MOBILE */}
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
          <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/" style={navItemStyle}>Home</Link>
            <Link href="/gillan-creek-ferry" style={navItemStyle}>Ferry</Link>
            <Link href="/boat-hire-faq" style={navItemStyle}>FAQs</Link>
            <Link href="/st-anthony-helford-river" style={navItemStyle}>Location</Link>
          </div>
        )}
      </nav>

      {/* STYLES */}
      <style jsx>{underlineHover}</style>
    </>
  );
}
