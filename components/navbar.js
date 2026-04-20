import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
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

  const linkStyle = () => ({
    textDecoration: "none",
    color: "#222",
    fontWeight: 700,
    padding: "10px 12px",
    display: "flex",
    alignItems: "center",
  });

  const dropdownStyle = {
    position: "absolute",
    left: 0,
    background: "white",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    borderRadius: "10px",
    padding: "10px 0",
    zIndex: 1000,
    minWidth: "220px",
  };

  const dropdownItem = {
    padding: "10px 16px",
    display: "block",
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
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo-sailaway.jpg"
            alt="Sailaway"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* MENU */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <Link href="/" style={linkStyle()}>Home</Link>

          {/* BOAT HIRE */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setOpenDropdown("hire")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div style={linkStyle()}>Boat Hire ▾</div>

            {/* Hover bridge */}
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                height: "12px",
              }}
            />

            {openDropdown === "hire" && (
              <div
                style={{
                  ...dropdownStyle,
                  top: "calc(100% + 12px)",
                }}
              >
                <Link href="/motor-boat-hire-helford" style={dropdownItem}>Motor Boats</Link>
                <Link href="/sailing-boat-hire-helford" style={dropdownItem}>Sailing</Link>
                <Link href="/kayak-hire-helford" style={dropdownItem}>Kayaks & SUPs</Link>
              </div>
            )}
          </div>

          {/* BOATYARD */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setOpenDropdown("yard")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div style={linkStyle()}>Boatyard ▾</div>

            {/* Hover bridge */}
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                height: "12px",
              }}
            />

            {openDropdown === "yard" && (
              <div
                style={{
                  ...dropdownStyle,
                  top: "calc(100% + 12px)",
                }}
              >
                <Link href="/gillan-creek-moorings" style={dropdownItem}>Moorings</Link>
                <Link href="/boat-launching-helford" style={dropdownItem}>Launching</Link>
                <Link href="/boat-storage-helford" style={dropdownItem}>Storage</Link>
                <Link href="/boatyard-services" style={dropdownItem}>Services</Link>
              </div>
            )}
          </div>

          <Link href="/gillan-creek-ferry" style={linkStyle()}>Ferry</Link>
          <Link href="/boat-hire-faq" style={linkStyle()}>FAQs</Link>
          <Link href="/st-anthony-helford-river" style={linkStyle()}>Location</Link>

          {/* CTA */}
          <Link
            href="/#booking"
            style={{
              padding: "8px 18px",
              backgroundColor: "#0f2f4f",
              color: "white",
              borderRadius: "8px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
}
