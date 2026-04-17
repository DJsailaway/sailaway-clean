import Head from "next/head";
    <>
      <Head>
        <title>Boatyard Services Helford River | Moorings & Launching Cornwall</title>
        <meta
          name="description"
          content="Boatyard services on the Helford River including boat launching, moorings, and storage. Based in St Anthony, Cornwall."
        />
      </Head>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO IMAGE */}
      <SplitOverlayHero
        imageSrc="/helford-boatyard.jpg"
        imageAlt="Boat launching on the Helford River"
        title="Boatyard Services on the Helford River"
        topContent={
          <>
            <p>
              Reliable boatyard services including launching, moorings and storage from our base at St Anthony.
            </p>
          </>
        }
      />

      <div style={{ fontFamily: "sans-serif", padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>

        <p>
          We offer a range of boatyard services from our base at St Anthony on the Helford River, Cornwall. Whether you need launching, moorings, or general support, we provide a reliable and friendly service.
        </p>

        <h2>Our Services</h2>

        <ul>
          <li>Boat launching</li>
          <li>Moorings on the Helford River</li>
          <li>Seasonal boat storage</li>
        </ul>

        <h2>Boat Launching</h2>
        <p>
          Convenient and straightforward launching facilities for a range of boats, with easy access to the Helford River.
        </p>

        <h2>Moorings</h2>
        <p>
          Secure moorings in one of Cornwall’s most beautiful and sheltered rivers.
        </p>

        <h2>Location</h2>
        <p>
          Based in St Anthony on the Helford River, we are ideally located for access to the water and surrounding coastline.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a href="/contact">
            <button style={{
              padding: "14px 28px",
              backgroundColor: "#1e3a5f",
              color: "white",
              border: "none",
              borderRadius: "6px"
            }}>
              Contact us
            </button>
          </a>
        </div>

      </div>
    </>
  );
}

