import Head from "next/head";
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px",
          marginBottom: "40px"
        }}>

          <BoatCard
            title="Drascombe Longboat"
            description="Traditional sailing boat for up to 6 people — perfect for relaxed cruising on the river."
            imageSrc="/sailing-boats-helford-river.jpg"
            href="/?boat=Drascombe%20Longboat%20(6%20people)#booking"
          />

          <BoatCard
            title="Wayfarer Dinghy"
            description="Versatile dinghy for up to 4 people — great for confident sailors exploring further afield."
            imageSrc="/sailing-hire-cornwall.jpg"
            href="/?boat=Wayfarer%20Dinghy%20(4%20people)#booking"
          />

          <BoatCard
            title="Topaz, Pico & Topper"
            description="Single or double-handed dinghies — ideal for more active sailing and experienced users."
            imageSrc="/sailing-hire-helford-river.jpg"
            href="/?boat=Topaz%20Pico%20Topper#booking"
          />

        </div>

        <h2>Important Information</h2>
        <ul style={{ marginBottom: "30px", lineHeight: "1.8" }}>
          <li>✔ Suitable for experienced sailors</li>
          <li>✔ Safety briefing provided</li>
          <li>✔ Life jackets included</li>
        </ul>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a href="/#booking">
            <button style={{
              padding: "14px 28px",
              backgroundColor: "#1e3a5f",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold"
            }}>
              Check availability
            </button>
          </a>
        </div>

      </div>
    </>
  );
}
