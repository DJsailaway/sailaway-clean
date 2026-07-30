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
      display: "flex",
      flexDirection: "column",
      background: "#F8FAFC",
      padding: "12px 20px",
      overflowY: "auto",
    }}
  >
      <div
        style={{
          width: "100%",
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

<div
  style={{
    background: "white",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
    padding: "16px",
  }}
>
  <Row label="Boat" value={boat} />

  <Row
    label="Duration"
    value={
      duration ||
      (durationKey === "multi"
        ? `${days} Days`
        : durationKey)
    }
  />

  <Row label="Date" value={date} />

  <Row label="Start time" value={startTime} />

  <Row label="Meet at" value={meetingPlace} />


  <Divider />


  <Row
    label="Name"
    value={customer?.name}
  />

  <Row
    label="Email"
    value={customer?.email}
  />

  <Row
    label="Phone"
    value={customer?.phone}
  />


  {customer?.notes && (
    <>
      <Divider />

      <div
        style={{
          padding: "8px 0",
        }}
      >
        <div
          style={{
            color: "#64748B",
            marginBottom: "4px",
          }}
        >
          Notes
        </div>

        <div
          style={{
            color: "#334155",
            lineHeight: 1.4,
          }}
        >
          {customer.notes}
        </div>
      </div>
    </>
  )}


  {price?.hasPrice && (
    <>
      <Divider />

      <Row
        label="Total"
        value={`£${price.total}`}
        highlight
      />
    </>
  )}

</div>

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

function Divider() {
  return (
    <div
      style={{
        borderTop: "1px solid #E5E7EB",
        margin: "8px 0",
      }}
    />
  );
}
