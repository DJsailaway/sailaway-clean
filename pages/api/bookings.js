import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      bookings,
      total,
      location
    } = req.body;

    // Format boat breakdown
    const bookingDetails = bookings
      .map((b, i) => {
        return `
Boat ${i + 1}
--------------------
Boat: ${b.boat}
Category: ${b.category}
Duration: ${b.isMultiDay ? `${b.days} days` : b.duration}
`;
      })
      .join("\n");

    const emailContent = `
NEW BOOKING REQUEST

========================

CUSTOMER DETAILS
Name: ${name}
Email: ${email}
Phone: ${phone}

LOCATION
${location}

BOOKING DETAILS
${bookingDetails}

TOTAL PRICE: £${total}

========================
`;

    await resend.emails.send({
      from: "Sailaway Bookings <bookings@yourdomain.com>",
      to: "info@stanthony.co.uk",
      subject: "New Boat Booking Request",
      text: emailContent
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send booking email" });
  }
}
