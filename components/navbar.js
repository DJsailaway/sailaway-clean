import Link from "next/link";
import { useRouter } from "next/router";

const pages = [
  { name: "Home", url: "/" },
  { name: "Motor Boats", url: "/motor-boat-hire-helford" },
  { name: "Sailing", url: "/sailing-boat-hire-helford" },
  { name: "Kayaks & SUPs", url: "/kayak-hire-helford" },
  { name: "Moorings", url: "/gillan-creek-moorings" },
  { name: "Boat Launching & Dinghy Park", url: "/boat-launching-helford" },
  { name: "Boat Storage", url: "/boat-storage-helford" },
  { name: "Boatyard Services", url: "/boatyard-services" },
  { name: "FAQs", url: "/boat-hire-faq" },
  { name: "Location", url: "/st-anthony-helford-river" },
  { name: "Book", url: "/#booking", highlight: true }
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      borderBottom: "1px solid #eee",
      backgroundColor: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      flexWrap: "wrap"
    }}>
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Sailaway</div>

      {/* Links */}
      <div style={{ display: "flex", gap: "20px", fontSize: "0.95rem", flexWrap: "wrap" }}>
        {pages.map((page) => (
          <Link key={page.url} href={page.url} passHref legacyBehavior>
            <a style={{
              textDecoration: "none",
              color: page.highlight ? "#1e3a5f" : "#333",
              fontWeight: page.highlight ? "bold" : "normal",
              padding: "6px 8px",
              borderRadius: "4px",
              backgroundColor: router.pathname === page.url ? "#f0f0f0" : "transparent",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f0f0f0"; }}
            onMouseLeave={(e) => { 
              if (router.pathname !== page.url) e.currentTarget.style.backgroundColor = "transparent"; 
            }}
            >
              {page.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
