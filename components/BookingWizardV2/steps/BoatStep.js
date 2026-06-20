import { useEffect, useState } from "react";
import BoatCard from "../components/BoatCard";
import { boats } from "../boats";

export default function BoatStep({
  activity,
  selectedBoat,
  onSelect
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();

    window.addEventListener("resize", check);

    return () =>
      window.removeEventListener("resize", check);
  }, []);

  const filteredBoats = boats.filter(
    (boat) => boat.activity === activity
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            color: "#123B5D",
            fontSize: isMobile ? "1.5rem" : "2rem",
            fontWeight: 600
          }}
        >
          Choose your boat
        </h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : filteredBoats.length === 2
            ? "1fr 1fr"
            : "1fr 1fr",
          gap: "16px"
        }}
      >
        {filteredBoats.map((boat) => (
          <BoatCard
            key={boat.id}
            title={boat.title}
            description={boat.description}
            capacity={boat.capacity}
            image={boat.image}
            compact={isMobile}
            selected={selectedBoat === boat.id}
            onClick={() => onSelect(boat.id)}
          />
        ))}
      </div>
    </div>
  );
}
