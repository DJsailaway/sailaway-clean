import Head from "next/head";
import Navbar from "../components/navbar";
import SplitOverlayHero from "../components/SplitOverlayHero";
import CTASection from "../components/CTASection";

export default function Location() {
  return (
    <>
      <Head>
        <title>
          St Anthony on the Helford River | A Quiet Corner of Cornwall
        </title>

        <meta
          name="description"
          content="Discover St Anthony on the Helford River, Cornwall. Hidden beaches, peaceful creeks, local history and one of Cornwall's most beautiful places to explore by boat."
        />
      </Head>

      <Navbar />

      <SplitOverlayHero
        imageSrc="/st-anthony.jpg"
        imageAlt="St Anthony on the Helford River"
        title="St Anthony on the Helford River"
        overlayOpacity={0.15}
        objectPosition="center"
        showScrollCue={true}
        scrollTarget="page-content"
        scrollLabel="Explore"
        topContent={
          <div style={{ marginTop: "18px" }}>
            <button
              onClick={() =>
                document
                  .getElementById("directions")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
              }
              style={{
                background: "rgba(255,255,255,0.18)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.4)",
                padding: "10px 18px",
                borderRadius: "999px",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                fontWeight: 600,
              }}
            >
              📍 How to get here
            </button>
          </div>
        }
        bottomContent={null}
      />

      <div
        id="page-content"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "70px 20px",
          lineHeight: 1.8,
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "24px",
          }}
        >
          Some places are best discovered slowly.
        </h2>

        <p>
          St Anthony isn't on the way to anywhere else.
          The road winds through quiet Cornish lanes before
          arriving at the river and simply... stopping.
        </p>

        <p>
          Perhaps that's why this small hamlet has changed so
          little. The old cottages still face the water,
          boats still rest on their moorings with the tide,
          and long summer evenings are accompanied by little
          more than birdsong and the gentle clink of halyards.
        </p>

        <p>
          It is peaceful, beautifully unspoilt and perfectly
          placed for exploring one of Cornwall's most
          remarkable rivers.
        </p>

        <hr
          style={{
            margin: "70px 0",
            border: 0,
            borderTop: "1px solid #ddd",
          }}
        />

        <h2>A Place People Return To</h2>

        <p>
          Many families who visit St Anthony first arrived as
          children and now return with children and
          grandchildren of their own.
        </p>

        <p>
          There is something timeless about spending a day on
          the Helford: drifting up quiet creeks, dropping an
          anchor for lunch, swimming from deserted beaches and
          discovering little corners that never appear on the
          usual tourist maps.
        </p>

        <p>
          Of course, everyone has a first visit.
          The Helford has a habit of making those feel like
          the start of a tradition.
        </p>

        <hr
          style={{
            margin: "70px 0",
            border: 0,
            borderTop: "1px solid #ddd",
          }}
        />

        <h2>A Few Favourite Places</h2>

        <h3>Gear Farm</h3>

        <p>
          Ask almost any local where to find the best Cornish
          pasty and you'll probably be pointed towards
          Gear Farm.
        </p>

        <h3>The Shipwrights Arms</h3>

        <p>
          A waterside pub that feels perfectly suited to a
          relaxed lunch after a morning exploring the river.
        </p>

        <h3>Hidden Beaches</h3>

        <p>
          Grove Beach, Horseshoe Cove and Eastern Cove are
          quiet little beaches that many visitors never find.
          On a warm evening at high tide they become wonderful
          places to swim and simply enjoy being beside the
          water.
        </p>

        <h3>Gillan Creek</h3>

        <p>
          Head upstream on a high tide and the Helford becomes
          quieter with every bend until it feels like you have
          the river entirely to yourself.
        </p>

        <hr
          style={{
            margin: "70px 0",
            border: 0,
            borderTop: "1px solid #ddd",
          }}
        />

        <div
          style={{
            background: "#f7f7f5",
            padding: "40px",
            borderRadius: "14px",
          }}
        >
          <h2>A Family Connection</h2>

          <p>
            For our family, St Anthony isn't simply somewhere
            we work.
          </p>

          <p>
            My great-grandfather is buried in the churchyard
            overlooking the river, my grandfather rests there
            too, and my father still talks about cycling along
            the creek to catch the school bus before computers
            were part of everyday life.
          </p>

          <p>
            The Helford has shaped generations of our family,
            and introducing people to it remains one of the
            greatest pleasures of what we do.
          </p>
        </div>

        <hr
          style={{
            margin: "70px 0",
            border: 0,
            borderTop: "1px solid #ddd",
          }}
        />

        <div
          id="directions"
          style={{
          scrollMarginTop: "120px",
          }}
        >
          <h2>How to Get Here</h2>

          <p>
            Follow the signs towards Helford and St Anthony.
            The final approach narrows into quiet country
            lanes before opening onto the river.
          </p>

          <p>
            There is parking nearby and easy access to the
            beach, slipway and boating facilities.
          </p>

          <p>
            It is one of those increasingly rare places where
            there is no through traffic — just the river
            waiting at the end of the road.
          </p>
        </div>

        <CTASection
          title="Start exploring the Helford"
          subtitle="Hire a boat, discover hidden creeks or enjoy a day on one of Cornwall's most beautiful rivers."
          buttons={[
            {
              text: "Motor Boats",
              link: "/motor-boat-hire-helford",
            },
            {
              text: "Traditional Sailing",
              link: "/sailing-boat-hire-helford",
              variant: "secondary",
            },
            {
              text: "Kayaks & SUPs",
              link: "/kayak-hire-helford",
              variant: "secondary",
            },
          ]}
        />
      </div>
    </>
  );
}
