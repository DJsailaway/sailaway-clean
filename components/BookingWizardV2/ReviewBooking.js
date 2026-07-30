export default function ReviewBooking({ reviewData }) {
  if (!reviewData) {
    return null;
  }

  const {
    boat,
    duration,
    durationKey,
    days,
    date,
    startTime,
    meetingPlace,
    customer,
    price,
  } = reviewData;

  return (
    <div
      style={{
        flex: 1,
        padding: "24px 20px",
        background: "#F8FAFC",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            margin: "0 0 8px",
            color: "#123B5D",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          Review your booking
        </h1>

<Section title="Booking details">
  <Row
    label="Boat"
    value={boat}
  />

  <Row
    label="Duration"
    value={
      duration ||
      (durationKey === "multi"
        ? `${days} Days`
        : durationKey)
    }
  />

  <Row
    label="Date"
    value={date}
  />

  <Row
    label="Start time"
    value={startTime}
  />

  <Row
    label="Meet at"
    value={meetingPlace}
  />
</Section>


        {customer?.notes && (
          <Section title="Notes">
            <p
              style={{
                margin: 0,
                color: "#334155",
                lineHeight: 1.5,
              }}
            >
              {customer.notes}
            </p>
          </Section>
        )}


        {price?.hasPrice && (
          <Section title="Price">
            <Row
              label="Total"
              value={`£${price.total}`}
              highlight
            />
          </Section>
        )}

      </div>
    </div>
  );
}


function Section({ title, children }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        padding: "14px",
        marginBottom: "12px",
      }}
    >
      <h2
        style={{
          margin: "0 0 14px",
          color: "#123B5D",
          fontSize: "18px",
        }}
      >
        {title}
      </h2>

      {children}
    </div>
  );
}


function Row({ label, value, highlight }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        padding: "6px 0",
        borderBottom: "1px solid #F1F5F9",
      }}
    >
      <span
        style={{
          color: "#64748B",
        }}
      >
        {label}
      </span>

      <span
        style={{
          color: highlight ? "#123B5D" : "#334155",
          fontWeight: highlight ? 700 : 500,
          textAlign: "right",
        }}
      >
        {value || "-"}
      </span>
    </div>
  );
}
