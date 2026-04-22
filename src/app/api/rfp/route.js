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
  const limit = checkRateLimit(`rfp:${ip}`);
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
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
    company_name,
    commercial_registration,
    tax_registration = "",
    job,
    phone,
    email,
    period_from = "",
    period_to = "",
    message,
    honeypot = "",
  } = body || {};

  if (honeypot) {
    console.warn("[/api/rfp] honeypot triggered — discarding silently");
    return NextResponse.json({ ok: true });
  }

  if (!company_name || company_name.trim().length < 3)
    return bad("Invalid company name");
  if (!commercial_registration || commercial_registration.trim().length < 10)
    return bad("Invalid commercial registration");
  if (!job || job.trim().length < 3) return bad("Invalid job title");
  if (!phone || !PHONE_REGEX.test(phone)) return bad("Invalid phone");
  if (!email || !EMAIL_REGEX.test(email)) return bad("Invalid email");
  if (!message || message.trim().length < 10) return bad("Invalid message");
  if (
    company_name.length > 200 ||
    email.length > 160 ||
    message.length > 5000
  )
    return bad("Input too long");

  const to = process.env.MAIL_TO || process.env.SMTP_USER;
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;

  const html = buildEmailHtml({
    title: "New RFP Submission / طلب عرض سعر جديد",
    rows: [
      { label: "Company / اسم الشركة", value: company_name },
      { label: "Commercial Reg. / السجل التجاري", value: commercial_registration },
      { label: "Tax Reg. / الرقم الضريبي", value: tax_registration },
      { label: "Job Title / المسمى الوظيفي", value: job },
      { label: "Phone / الجوال", value: phone },
      { label: "Email / البريد", value: email },
      { label: "Period From / من تاريخ", value: period_from },
      { label: "Period To / إلى تاريخ", value: period_to },
    ],
    message,
  });

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Al-Batel Website" <${from}>`,
      to,
      replyTo: email,
      subject: `New RFP — ${company_name}`,
      html,
      text: `Company: ${company_name}\nCR: ${commercial_registration}\nTax: ${tax_registration}\nJob: ${job}\nPhone: ${phone}\nEmail: ${email}\nFrom: ${period_from}\nTo: ${period_to}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[/api/rfp] send failed:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
