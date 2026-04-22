import { NextResponse } from "next/server";
import { buildEmailHtml, getTransporter } from "@/lib/mailer";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";
import { getPublicationBySlug } from "@/app/data/publications";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(?:\+?\d{1,4})?[\d\s-]{7,15}$/;

const MAX_QUANTITY = 20;

function bad(message, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request) {
  const ip = getClientIp(request);
  const limit = checkRateLimit(`book-order:${ip}`);
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
    book_slug,
    quantity,
    name,
    phone,
    email,
    city,
    address = "",
    order_type = "individual",
    organization = "",
    notes = "",
    honeypot = "",
  } = body || {};

  if (honeypot) {
    console.warn("[/api/book-order] honeypot triggered — discarding silently");
    return NextResponse.json({ ok: true });
  }

  const pub = getPublicationBySlug(book_slug);
  if (!pub) return bad("Invalid book selection");

  const qty = Number(quantity);
  if (!Number.isInteger(qty) || qty < 1 || qty > MAX_QUANTITY)
    return bad(`Quantity must be between 1 and ${MAX_QUANTITY}`);

  if (!name || typeof name !== "string" || name.trim().length < 3)
    return bad("Invalid name");
  if (!email || !EMAIL_REGEX.test(email)) return bad("Invalid email");
  if (!phone || !PHONE_REGEX.test(String(phone).trim()))
    return bad("Invalid phone");
  if (!city || typeof city !== "string" || city.trim().length < 2)
    return bad("Invalid city");

  if (
    name.length > 120 ||
    email.length > 160 ||
    city.length > 80 ||
    address.length > 500 ||
    organization.length > 160 ||
    notes.length > 1000
  )
    return bad("Input too long");

  const validOrderTypes = ["individual", "organization", "library"];
  const orderTypeSafe = validOrderTypes.includes(order_type)
    ? order_type
    : "individual";

  const orderTypeLabels = {
    individual: "فردي / Individual",
    organization: "مؤسسة / Organization",
    library: "مكتبة أو جامعة / Library or University",
  };

  const bookTitle = `${pub.title.ar} / ${pub.title.en}`;
  const totalPrice = pub.price * qty;

  const to = process.env.MAIL_TO || process.env.SMTP_USER;
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;

  const html = buildEmailHtml({
    title: "New Book Order / طلب شراء كتاب جديد",
    rows: [
      { label: "Book / الكتاب", value: bookTitle },
      {
        label: "Quantity / الكمية",
        value: `${qty}`,
      },
      {
        label: "Unit Price / سعر النسخة",
        value: `${pub.price} SAR`,
      },
      {
        label: "Total / الإجمالي",
        value: `${totalPrice} SAR`,
      },
      { label: "Name / الاسم", value: name },
      { label: "Phone / الجوال", value: phone },
      { label: "Email / البريد", value: email },
      { label: "City / المدينة", value: city },
      { label: "Order Type / نوع الطلب", value: orderTypeLabels[orderTypeSafe] },
      { label: "Organization / الجهة", value: organization },
      { label: "Address / العنوان", value: address },
    ],
    message: notes,
  });

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Al-Batel Publications" <${from}>`,
      to,
      replyTo: email,
      subject: `📚 Book Order — ${pub.title.ar} × ${qty} — ${name}`,
      html,
      text: `Book: ${bookTitle}\nQty: ${qty}\nUnit: ${pub.price} SAR\nTotal: ${totalPrice} SAR\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nType: ${orderTypeLabels[orderTypeSafe]}\nOrg: ${organization}\nAddress: ${address}\n\nNotes:\n${notes}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[/api/book-order] send failed:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send order" },
      { status: 500 }
    );
  }
}
