import { useState } from "react";
import { PRICING } from "../lib/pricing";

// derive boats dynamically
const BOATS = Object.keys(PRICING.boats);

const createBoat = () => ({
  boat: BOATS[0],
  duration: "2 hours",
  isMultiDay: false,
  days: 7
});

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [bookings, setBookings] = useState([createBoat()]);

  const [location, setLocation] = useState("St Anthony");
  const [customLocation, setCustomLocation] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // ---------------- PRICE LOGIC ----------------
  const calcBoatPrice = (b) => {
    const p = PRICING.boats[b.boat];
    if (!p) return 0;

    if (b.isMultiDay) {
      if (b.days <= 7) return p.multiDay?.[b.days] || 0;
      return (p.multiDay?.[7] || 0) + (b.days - 7) * p.extraDay;
    }

    return p.hourly?.[b.duration] || p.day?.[b.duration] || 0;
  };

  const deliveryFee = PRICING.locations[location] || 0;

  const total =
    bookings.reduce((sum, b) => sum + calcBoatPrice(b), 0) +
    deliveryFee;

  const updateBoat = (i, key, value) => {
    const copy = [...bookings];
    copy[i][key] = value;
    setBookings(copy);
  };

  const addBoat = () => setBookings([...bookings, createBoat()]);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const inputStyle = {
    width: "100%",
    padding: "16px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginBottom: "12px"
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "40px auto", display: "flex", gap: "20px" }}>

      {/* MAIN */}
      <div style={{ flex: 1, background: "#fff", padding: "30px", borderRadius: "16px" }}>

        <h2>Step {step} / 5</h2>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h3>Select Boats</h3>

            {bookings.map((b, i) => (
              <div key={i}>
                <select
                  value={b.boat}
                  onChange={(e) => updateBoat(i, "boat", e.target.value)}
                  style={inputStyle}
                >
                  {BOATS.map((boat) => (
                    <option key={boat}>{boat}</option>
                  ))}
                </select>
              </div>
            ))}

            <button onClick={addBoat}>+ Add boat</button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h3>Duration</h3>

            {bookings.map((b, i) => (
              <select
                key={i}
                value={b.duration}
                onChange={(e) => updateBoat(i, "duration", e.target.value)}
                style={inputStyle}
              >
                <option>1 hour</option>
                <option>2 hours</option>
                <option>Half day (4 hours)</option>
                <option>Full day (8 hours)</option>
              </select>
            ))}
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h3>Location</h3>

            {Object.keys(PRICING.locations).map((loc) => (
              <button
                key={loc}
                onClick={() => setLocation(loc)}
                style={{
                  padding: "10px",
                  margin: "5px",
                  border: location === loc ? "2px solid #0f2f4f" : "1px solid #ccc"
                }}
              >
                {loc}
              </button>
            ))}

            {location === "Other" && (
              <input
                style={inputStyle}
                placeholder="Enter location"
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
              />
            )}
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <h3>Summary</h3>

            {bookings.map((b, i) => (
              <div key={i}>
                {b.boat} — £{calcBoatPrice(b)}
              </div>
            ))}
          </>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <>
            <h3>Your Details</h3>

            <input style={inputStyle} placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input style={inputStyle} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
            <input style={inputStyle} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

            <button disabled={!name || !phone || !email}>
              Request booking
            </button>
          </>
        )}

        {/* NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          {step > 1 && <button onClick={back}>Back</button>}
          {step < 5 && <button onClick={next}>Next</button>}
        </div>
      </div>

      {/* SIDEBAR */}
      <div style={{
        width: "300px",
        position: "sticky",
        top: "20px",
        background: "#0f2f4f",
        color: "#fff",
        padding: "20px",
        borderRadius: "16px"
      }}>
        <h3>Total</h3>
        <div style={{ fontSize: "28px" }}>£{total}</div>
        <div style={{ fontSize: "14px", marginTop: "10px" }}>
          Includes location fee if applicable
        </div>
      </div>
    </div>
  );
}
