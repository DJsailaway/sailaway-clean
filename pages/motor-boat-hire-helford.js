import Head from "next/head";
          />

          <BoatCard
            title="Bass Boat"
            description="Ideal for smaller groups of up to 5 people. Easy to handle and great for exploring the river."
            imageSrc="/Bass.jpg"
            href="/?boat=Bass%20Boat%20(5%20people)#booking"
          />

        </div>

        <h2>What to Expect</h2>

        <ul style={{ marginBottom: "30px", lineHeight: "1.8" }}>
          <li>✔ No experience needed</li>
          <li>✔ Full safety briefing before departure</li>
          <li>✔ Life jackets included</li>
          <li>✔ Flexible hire durations (1 hour to full day)</li>
          <li>✔ Easy access from St Anthony</li>
        </ul>

        <h2>Explore the Helford River</h2>

        <p style={{ marginBottom: "30px" }}>
          Cruise past peaceful creeks, hidden beaches, and wooded riverbanks. Stop for a picnic, swim in sheltered waters, or simply enjoy the scenery at your own pace.
        </p>

        <h2>Prices</h2>

        <p style={{ marginBottom: "30px" }}>
          Motor boat hire starts from £120. Half day and full day options available.
        </p>

        <div style={{
          backgroundColor: "#f5f5f5",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <h2>Check Availability</h2>
          <p style={{ marginBottom: "20px" }}>
            Use our booking form to check availability and request your preferred date and time.
          </p>

          <a href="/#booking">
            <button style={{
              padding: "14px 28px",
              fontSize: "1.1rem",
              backgroundColor: "#1e3a5f",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
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
