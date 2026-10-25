import { NextResponse } from "next/server";

/**
 * Contact form API – free-friendly version for Vercel
 *
 * Sends the message as an email using Resend (free tier: 3,000 emails/month).
 *
 * Required environment variable:
 *   RESEND_API_KEY=re_xxxxxxxx
 *
 * Optional:
 *   CONTACT_TO_EMAIL=deanj7798@gmail.com   (default)
 *   CONTACT_FROM_EMAIL=onboarding@resend.dev  (or your verified domain)
 */

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString()?.trim();
    const email = formData.get("email")?.toString()?.trim();
    const message = formData.get("message")?.toString()?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "deanj7798@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto;">
            <h2 style="margin-bottom: 8px;">New message from your portfolio</h2>
            <p style="color: #555; margin-top: 0;">Someone just contacted you via the contact form.</p>
            <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
              <tr>
                <td style="padding: 8px 0; color: #888; width: 80px;">Name</td>
                <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888;">Email</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
                </td>
              </tr>
            </table>
            <div style="background: #f4f4f5; border-radius: 8px; padding: 16px; white-space: pre-wrap; line-height: 1.5;">
${escapeHtml(message)}
            </div>
            <p style="color: #999; font-size: 13px; margin-top: 24px;">
              Reply directly to this email to answer ${escapeHtml(name)}.
            </p>
          </div>
        `,
        text: `New portfolio contact\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: err.message || "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
