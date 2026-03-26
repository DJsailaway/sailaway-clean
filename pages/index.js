return (
  <div style={{ fontFamily: "sans-serif" }}>

    {/* CENTERED CONTENT */}
    <div style={{ padding: 20, maxWidth: "600px", margin: "0 auto" }}>
      <h1>Boat Hire on the Helford River</h1>
      <p>Relaxed, family-friendly experiences from St Anthony</p>

      <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        Plan your time on the water
      </h2>

      <p style={{ color: "#666", marginBottom: "30px" }}>
        Choose your boat, duration, and preferred start time
      </p>

      <p>
        I want a{" "}
        <select onChange={(e) => setBoat(e.target.value)}>
          <option>Motor Boat</option>
          <option>Sailing Boat</option>
          <option>Kayak / Paddleboard</option>
          <option>Rowing Boat</option>
        </select>{" "}
        for{" "}
        <select onChange={(e) => setDuration(e.target.value)}>
          <option>1 hour</option>
          <option>2 hours</option>
          <option>Half day (4 hours)</option>
          <option>Full day</option>
        </select>{" "}
        starting from{" "}
        <input type="datetime-local" onChange={(e) => setDate(e.target.value)} />
      </p>

      <h3>£{price}</h3>
      <button>Request booking</button>
    </div>

    {/* FULL WIDTH IMAGE */}
    <div style={{
      height: "70vh",
      backgroundImage: "url('/secondary.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      width: "100%",
      marginTop: "60px"
    }} />

  </div>
);
