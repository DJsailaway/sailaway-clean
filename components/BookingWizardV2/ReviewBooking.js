export default function ReviewBooking({
  activity,
  selectedBoat,
  durationMode,
  durationKey,
  days,
  bookingDate,
  startTime,
  place,
  customer,
  price
}) {
  return (
    <div style={{ padding: "24px" }}>
      <h2>Review your booking</h2>

      <pre
        style={{
          background: "#F8FAFC",
          padding: "16px",
          borderRadius: "8px",
          overflow: "auto"
        }}
      >
        {JSON.stringify(
          {
            activity,
            selectedBoat,
            durationMode,
            durationKey,
            days,
            bookingDate,
            startTime,
            place,
            customer,
            price
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}
