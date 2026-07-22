export default function ReviewBooking({
  reviewData
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
        {JSON.stringify(reviewData, null, 2)}
      </pre>
    </div>
  );
}
