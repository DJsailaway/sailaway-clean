import { useState } from "react";

// --- BOATS ---
const BOATS = {
  "Motor Boats": ["Plymouth Pilot (8 people)", "Bass Boat (5 people)"],
  "Sailing Boats": [
    "Drascombe Longboat (6 people)",
    "Wayfarer Dinghy (4 people)",
    "Pico Dinghy (2 people)",
    "Topper Dinghy (1 person)"
  ],
  "Rowing, Kayak & SUP": [
    "Double Kayak (2 people)",
    "Single Kayak (1 person)",
    "Stand-Up Paddleboard (1 person)",
    "Anarth Rowing Dinghy (4 people)"
  ]
};

// --- PRICING ---
const PRICING = {
  "Plymouth Pilot (8 people)": {
    "1 hour": 120,
    "2 hours": 200,
    "Half day (4 hours)": 350,
    "Full day (8 hours)": 600,
    multiDay: { 2: 1100, 3: 1500, 4: 1900, 5: 2200, 6: 2500, 7: 2800 },
    extraDay: 350
  },
  "Bass Boat (5 people)": {
    "1 hour": 120,
    "2 hours": 200,
    "Half day (4 hours)": 350,
    "Full day (8 hours)": 600,
    multiDay: { 2: 1100, 3: 1500, 4: 1900, 5: 2200, 6: 2500, 7: 2800 },
    extraDay: 350
  }
};

// --- SINGLE BOOKING BLOCK ---
function createEmptyBooking() {
  return {
    category: "Motor Boats",
    boat: BOATS["Motor Boats"][0],
    duration: "2 hours",
    isMultiDay: false,
    days: 7,
    location: "St Anthony"
  };
}

export default function BookingWizard() {
  const [bookings, setBookings] = useState([createEmptyBooking()]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // --- PRICE CALC ---
  const calculatePrice = (b) => {
    const p = PRICING[b.boat];

    if (!p) return 0;

    if (b.isMultiDay) {
      if (b.days <= 7) return p.multiDay?.[b.days] || 0;
      return (p.multiDay?.[7] || 0) + (b.days - 7) * (p.extraDay || 0);
    }

    return p[b.duration] || 0;
  };

  const totalPrice = bookings.reduce((sum, b) => sum + calculatePrice(b), 0);

  const updateBooking = (index, field, value) => {
    const updated = [...bookings];
    updated[index][field] = value;
    setBookings(updated);
  };

  const addBoat = () => {
    setBookings([...bookings, createEmptyBooking()]);
  };

  const removeBoat = (index) => {
    setBookings(bookings.filter((_, i) => i !== index));
  };

  const canSubmit = name && phone && email;

  return (
    <div style={{
      maxWidth: "800px",
      margin: "40px auto",
      padding: "30px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
    }}>
      <h2>Book your boats</h2>

      {/* BOOKINGS */}
      {bookings.map((b, i) => (
        <div key={i} style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "15px",
          marginBottom: "15px"
        }}>
          <strong>Boat {i + 1}</strong>

          {/* CATEGORY */}
          <select
            value={b.category}
            onChange={(e) => {
              const cat = e.target.value;
              updateBooking(i, "category", cat);
              updateBooking(i, "boat", BOATS[cat][0]);
            }}
            style={{ width: "100%", marginTop: "10px", padding: "10px" }}
          >
            {Object.keys(BOATS).map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          {/* BOAT */}
          <select
            value={b.boat}
            onChange={(e) => updateBooking(i, "boat", e.target.value)}
            style={{ width: "100%", marginTop: "10px", padding: "10px" }}
          >
            {BOATS[b.category].map((boat) => (
              <option key={boat}>{boat}</option>
            ))}
          </select>

          {/* DURATION */}
          <select
            value={b.duration}
            onChange={(e) => {
              updateBooking(i, "duration", e.target.value);
              updateBooking(i, "isMultiDay", false);
            }}
            style={{ width: "100%", marginTop: "10px", padding: "10px" }}
          >
            <option>1 hour</option>
            <option>2 hours</option>
            <option>Half day (4 hours)</option>
            <option>Full day (8 hours)</option>
          </select>

          {/* MULTI DAY */}
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => updateBooking(i, "isMultiDay", true)}
              style={{ padding: "8px", marginRight: "10px" }}
            >
              Multi-day
            </button>

            {b.isMultiDay && (
              <div style={{ marginTop: "10px" }}>
                <button onClick={() =>
                  updateBooking(i, "days", Math.max(2, b.days - 1))
                }>−</button>

                <span style={{ margin: "0 10px" }}>{b.days}</span>

                <button onClick={() =>
                  updateBooking(i, "days", Math.min(31, b.days + 1))
                }>+</button>
              </div>
            )}
          </div>

          <button
            onClick={() => removeBoat(i)}
            style={{ marginTop: "10px", color: "red" }}
          >
            Remove boat
          </button>

          <div style={{ marginTop: "10px", fontWeight: 600 }}>
            £{calculatePrice(b)}
          </div>
        </div>
      ))}

      {/* ADD BOAT */}
      <button onClick={addBoat} style={{
        padding: "12px",
        width: "100%",
        marginBottom: "20px"
      }}>
        + Add another boat
      </button>

      {/* TOTAL */}
      <h3>Total: £{totalPrice}</h3>

      {/* CONTACT */}
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
      <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "20px" }} />

      <button
        disabled={!canSubmit}
        style={{
          width: "100%",
          padding: "14px",
          background: canSubmit ? "#0f2f4f" : "#ccc",
          color: "#fff",
          border: "none",
          borderRadius: "8px"
        }}
      >
        Request booking
      </button>
    </div>
  );
}
