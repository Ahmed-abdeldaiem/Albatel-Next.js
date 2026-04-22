import nodemailer from "nodemailer";

let cachedTransporter = null;

export function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error(
      "Missing SMTP credentials. Set SMTP_USER and SMTP_PASS in your environment variables."
    );
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return cachedTransporter;
}

export function escapeHtml(input) {
  if (input === null || input === undefined) return "";
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const LOGO_URL = "https://albatelcpa.com/BatelLogo1.png";

export function buildEmailHtml({ title, rows, message }) {
  const rowsHtml = rows
    .filter((r) => r.value)
    .map(
      (r) => `
        <tr>
          <td style="padding:10px 14px;background:#f1f5f9;border:1px solid #e2e8f0;font-weight:600;color:#0f172a;width:35%;vertical-align:top;">${escapeHtml(
            r.label
          )}</td>
          <td style="padding:10px 14px;border:1px solid #e2e8f0;color:#334155;vertical-align:top;">${escapeHtml(
            r.value
          )}</td>
        </tr>`
    )
    .join("");

  const messageBlock = message
    ? `
      <h3 style="margin:24px 0 10px;color:#0b1a3d;font-size:15px;">Message / الرسالة</h3>
      <div style="padding:14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;color:#334155;white-space:pre-wrap;line-height:1.7;">${escapeHtml(
        message
      )}</div>`
    : "";

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Tahoma,Arial,sans-serif;">
    <div style="max-width:640px;margin:0 auto;padding:24px;">
      <div style="background:linear-gradient(135deg,#0b1a3d 0%,#0f2860 50%,#0b4a3a 100%);padding:20px 24px;border-radius:12px 12px 0 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="left" valign="middle" style="color:#ffffff;">
              <div style="font-size:18px;font-weight:700;line-height:1.3;">${escapeHtml(
                title
              )}</div>
              <div style="margin-top:4px;color:rgba(255,255,255,0.8);font-size:12px;">Al-Batel CPA — Website Notification</div>
            </td>
            <td align="right" valign="middle" width="80">
              <img src="${LOGO_URL}" alt="Al-Batel" width="72" height="72" style="display:block;width:72px;height:72px;border:0;outline:none;background:#ffffff;border-radius:12px;padding:6px;" />
            </td>
          </tr>
        </table>
      </div>
      <div style="background:#ffffff;padding:22px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rowsHtml}
        </table>
        ${messageBlock}
        <p style="margin-top:24px;color:#94a3b8;font-size:12px;text-align:center;">
          This email was generated automatically from the Al-Batel website contact form.
        </p>
      </div>
    </div>
  </body>
</html>`;
}
