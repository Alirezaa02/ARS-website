import { Resend } from "resend";

const TO_EMAIL = "saebalireza02@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service isn't configured yet. Email saebalireza02@gmail.com directly." });
  }

  const { name, email, business, message, company } = req.body || {};

  // Honeypot field — real visitors never see or fill "company", bots fill every field.
  if (company) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "ARS Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}${business ? ` (${business})` : ""}`,
      text: [`Name: ${name}`, `Email: ${email}`, business ? `Business: ${business}` : null, "", message]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send. Try again or email directly." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(502).json({ error: "Failed to send. Try again or email directly." });
  }
}
