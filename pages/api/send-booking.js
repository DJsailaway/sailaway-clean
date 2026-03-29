import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { boat, duration, date } = req.body;

  try {
    await resend.emails.send({
      from: 'Bookings <onboarding@resend.dev>',
      to: ['info@stanthony.co.uk'], //
      subject: 'New Boat Booking Request',
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Boat:</strong> ${boat}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Date:</strong> ${date}</p>
      `
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Email failed' });
  }
}
