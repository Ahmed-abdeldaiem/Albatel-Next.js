import { NextResponse } from "next/server";
import { buildEmailHtml, getTransporter } from "@/lib/mailer";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(?:\+966|0)?5\d{8}$/;

function bad(message, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request) {
  const ip = getClientIp(request);
  const limit = checkRateLimit(`contact:${ip}`);
  if (!limit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please try again later.",
      },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return bad("Invalid JSON body");
  }

  const {
    name,
    phone,
    email,
    message,
    consultation_type = "",
    branch = "",
    honeypot = "",
  } = body || {};

  if (honeypot) {
    console.warn("[/api/contact] honeypot triggered — discarding silently");
    return NextResponse.json({ ok: true });
  }

  if (!name || typeof name !== "string" || name.trim().length < 3)
    return bad("Invalid name");
  if (!email || !EMAIL_REGEX.test(email)) return bad("Invalid email");
  if (!phone || !PHONE_REGEX.test(phone)) return bad("Invalid phone");
  if (!message || typeof message !== "string" || message.trim().length < 10)
    return bad("Invalid message");
  if (name.length > 120 || email.length > 160 || message.length > 5000)
    return bad("Input too long");

  const to = process.env.MAIL_TO || process.env.SMTP_USER;
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;

  const html = buildEmailHtml({
    title: "New Contact Form Submission / طلب تواصل جديد",
    rows: [
      { label: "Name / الاسم", value: name },
      { label: "Phone / الجوال", value: phone },
      { label: "Email / البريد", value: email },
      { label: "Consultation / نوع الاستشارة", value: consultation_type },
      { label: "Branch / الفرع", value: branch },
    ],
    message,
  });

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Al-Batel Website" <${from}>`,
      to,
      replyTo: email,
      subject: `New Contact — ${name}`,
      html,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nConsultation: ${consultation_type}\nBranch: ${branch}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[/api/contact] send failed:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
