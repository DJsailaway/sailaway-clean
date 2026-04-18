import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();
  const navRef = useRef();

  // Close dropdowns when clicking outside
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

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: isActive(path) ? "#1e3a5f" : "#333",
    fontWeight: isActive(path) ? 600 : 400,
    padding: "8px 10px",
    display: "block"
  });

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "white",
    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
    borderRadius: "8px",
    padding: "8px 0",
    zIndex: 1000,
    minWidth: "200px"
  };

  return (
    <>
      <nav ref={navRef} style={{
        borderBottom: "1px solid #eee",
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>

          {/* 🔻 LOGO */}
          <Link href="/" aria-label="Home">
            <Image
              src="/logo-sailaway.jpg"
              alt="Sailaway St Anthony"
              width={140}
              height={50}
              priority
            />
          </Link>

          {/* 🔻 DESKTOP MENU */}
          <div className="desktop-menu" style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>

            <Link href="/" style={linkStyle("/")}>Home</Link>

            {/* Boat Hire */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenDropdown("hire")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={openDropdown === "hire"}
                onClick={() =>
                  setOpenDropdown(openDropdown === "hire" ? null : "hire")
                }
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                Boat Hire ▾
              </button>

              {openDropdown === "hire" && (
                <div style={dropdownStyle}>
                  <Link href="/motor-boat-hire-helford" style={linkStyle("")}>Motor Boats</Link>
                  <Link href="/sailing-boat-hire-helford" style={linkStyle("")}>Sailing</Link>
                  <Link href="/kayak-hire-helford" style={linkStyle("")}>Kayaks & SUPs</Link>
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
                aria-haspopup="true"
                aria-expanded={openDropdown === "yard"}
                onClick={() =>
                  setOpenDropdown(openDropdown === "yard" ? null : "yard")
                }
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                Boatyard ▾
              </button>

              {openDropdown === "yard" && (
                <div style={dropdownStyle}>
                  <Link href="/gillan-creek-moorings" style={linkStyle("")}>Moorings</Link>
                  <Link href="/boat-launching-helford" style={linkStyle("")}>Launching</Link>
                  <Link href="/boat-storage-helford" style={linkStyle("")}>Storage</Link>
                  <Link href="/boatyard-services" style={linkStyle("")}>Boatyard Services</Link>
                </div>
              )}
            </div>

            <Link href="/gillan-creek-ferry">Ferry</Link>
            <Link href="/boat-hire-faq">FAQs</Link>
            <Link href="/st-anthony-helford-river">Location</Link>

            {/* CTAs */}
            <Link href="/#booking" style={{
              padding: "6px 14px",
              backgroundColor: "#1e3a5f",
              color: "white",
              borderRadius: "6px",
              fontWeight: 600,
              textDecoration: "none"
            }}>
              Book
            </Link>

            <Link href="tel:+441234567890" style={{
              padding: "6px 14px",
              backgroundColor: "#1e3a5f",
              color: "white",
              borderRadius: "6px",
              fontWeight: 600,
              textDecoration: "none"
            }}>
              Call
            </Link>
          </div>

          {/* 🔻 BURGER */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              fontSize: "1.6rem",
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
          >
            ☰
          </button>
        </div>

        {/* 🔻 MOBILE MENU */}
        {menuOpen && (
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "16px 20px",
            borderTop: "1px solid #eee"
          }}>

            <Link href="/">Home</Link>

            {/* Mobile dropdowns */}
            <button onClick={() =>
              setOpenDropdown(openDropdown === "hire" ? null : "hire")
            }>
              Boat Hire
            </button>

            {openDropdown === "hire" && (
              <>
                <Link href="/motor-boat-hire-helford">Motor Boats</Link>
                <Link href="/sailing-boat-hire-helford">Sailing</Link>
                <Link href="/kayak-hire-helford">Kayaks & SUPs</Link>
              </>
            )}

            <button onClick={() =>
              setOpenDropdown(openDropdown === "yard" ? null : "yard")
            }>
              Boatyard
            </button>

            {openDropdown === "yard" && (
              <>
                <Link href="/gillan-creek-moorings">Moorings</Link>
                <Link href="/boat-launching-helford">Launching</Link>
                <Link href="/boat-storage-helford">Storage</Link>
                <Link href="/boatyard-services">Boatyard Services</Link>
              </>
            )}

            <Link href="/gillan-creek-ferry">Ferry</Link>
            <Link href="/boat-hire-faq">FAQs</Link>
            <Link href="/st-anthony-helford-river">Location</Link>
          </div>
        )}

        <style jsx>{`
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

      {/* 🔻 STICKY MOBILE BOOK BUTTON */}
      <div className="mobile-book">
        <Link href="/#booking">Book Now</Link>
      </div>

      <style jsx>{`
        .mobile-book {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #1e3a5f;
          text-align: center;
          padding: 14px;
          z-index: 999;
        }

        .mobile-book a {
          color: white;
          font-weight: 700;
          text-decoration: none;
          font-size: 1.1rem;
        }

        @media (min-width: 768px) {
          .mobile-book { display: none; }
        }
      `}</style>
    </>
  );
}
