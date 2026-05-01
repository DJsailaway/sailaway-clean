import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const navRef = useRef();
  const router = useRouter();

  // Detect mobile safely (no hydration issues)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkStyle = {
    fontWeight: 700,
    padding: "10px 12px",
    textDecoration: "none",
    color: "#222",
    display: "block",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    borderRadius: "10px",
    minWidth: "220px",
    padding: "10px 0",
    zIndex: 1000,
  };

  const item = {
    padding: "10px 16px",
    fontWeight: 500,
    color: "#222",
    textDecoration: "none",
    display: "block",
  };

  const handleToggle = (menu) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === menu ? null : menu);
    }
  };

  const handleHover = (menu, action) => {
    if (!isMobile) {
      setOpenDropdown(action === "open" ? menu : null);
    }
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: "sticky",
        top: 0,
        background: "white",
        borderBottom: "1px solid #eee",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo-sailaway.jpg"
            alt="Logo"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
            <Link href="/" style={linkStyle}>Home</Link>

            {/* Boat Hire */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => handleHover("hire", "open")}
              onMouseLeave={() => handleHover("hire", "close")}
            >
              <div style={linkStyle}>Boat Hire ▾</div>

              {openDropdown === "hire" && (
                <div style={dropdownStyle}>
                  <Link href="/motor-boat-hire-helford" style={item}>Motor Boats</Link>
                  <Link href="/sailing-boat-hire-helford" style={item}>Sailing</Link>
                  <Link href="/kayak-hire-helford" style={item}>Kayaks & SUPs</Link>
                </div>
              )}
            </div>

            {/* Boatyard */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => handleHover("yard", "open")}
              onMouseLeave={() => handleHover("yard", "close")}
            >
              <div style={linkStyle}>Boatyard ▾</div>

              {openDropdown === "yard" && (
                <div style={dropdownStyle}>
                  <Link href="/gillan-creek-moorings" style={item}>Moorings</Link>
                  <Link href="/boat-launching-helford" style={item}>Launching</Link>
                  <Link href="/boat-storage-helford" style={item}>Storage</Link>
                  <Link href="/boatyard-services" style={item}>Services</Link>
                </div>
              )}
            </div>

            <Link href="/gillan-creek-ferry" style={linkStyle}>Ferry</Link>
            <Link href="/boat-hire-faq" style={linkStyle}>FAQs</Link>
            <Link href="/st-anthony-helford-river" style={linkStyle}>Location</Link>

            {/* Desktop CTA */}
<Link
  href="/#booking-wizard"
  style={{
    background: "#0f2f4f",
    color: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: 700,
    textDecoration: "none",
  }}
>
  Book
</Link>
          </div>
        )}

        {/* MOBILE BURGER */}
        {isMobile && (
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "mobile" ? null : "mobile")
            }
            style={{
              fontSize: "28px",
              background: "none",
              border: "none",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && openDropdown === "mobile" && (
        <div style={{ padding: "10px 24px", borderTop: "1px solid #eee" }}>
          <Link href="/" style={item}>Home</Link>

          <div onClick={() => handleToggle("hire")} style={item}>
            Boat Hire ▾
          </div>

          {openDropdown === "hire" && (
            <>
              <Link href="/motor-boat-hire-helford" style={item}>Motor Boats</Link>
              <Link href="/sailing-boat-hire-helford" style={item}>Sailing</Link>
              <Link href="/kayak-hire-helford" style={item}>Kayaks & SUPs</Link>
            </>
          )}

          <div onClick={() => handleToggle("yard")} style={item}>
            Boatyard ▾
          </div>

          {openDropdown === "yard" && (
            <>
              <Link href="/gillan-creek-moorings" style={item}>Moorings</Link>
              <Link href="/boat-launching-helford" style={item}>Launching</Link>
              <Link href="/boat-storage-helford" style={item}>Storage</Link>
              <Link href="/boatyard-services" style={item}>Services</Link>
            </>
          )}

          <Link href="/gillan-creek-ferry" style={item}>Ferry</Link>
          <Link href="/boat-hire-faq" style={item}>FAQs</Link>
          <Link href="/st-anthony-helford-river" style={item}>Location</Link>
        </div>
      )}
    </nav>
  );
}
