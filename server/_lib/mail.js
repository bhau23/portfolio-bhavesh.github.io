const nodemailer = require("nodemailer");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function row(label, value, highlight) {
  return (
    "<tr>" +
    '<td style="padding:12px 16px;border-bottom:1px solid #1f1f1f;color:#8a8a8a;' +
    'font-family:Consolas,monospace;font-size:11px;letter-spacing:2px;white-space:nowrap;vertical-align:top;">' +
    label +
    "</td>" +
    '<td style="padding:12px 16px;border-bottom:1px solid #1f1f1f;color:' +
    (highlight ? "#ff004f" : "#ededed") +
    ';font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">' +
    value +
    "</td></tr>"
  );
}

function buildEmail({ name, email, service, message, source, when }) {
  return (
    '<div style="background:#000000;padding:32px 16px;">' +
    '<table role="presentation" cellpadding="0" cellspacing="0" ' +
    'style="max-width:560px;margin:0 auto;background:#0a0a0a;border:1px solid #1f1f1f;border-top:3px solid #ff004f;width:100%;">' +
    "<tr><td style='padding:28px 24px 8px;'>" +
    '<div style="font-family:Consolas,monospace;font-size:10px;letter-spacing:4px;color:#ff004f;">■ BHAVESHAI.IN</div>' +
    '<div style="font-family:Arial,sans-serif;font-size:24px;font-weight:800;color:#ffffff;margin-top:10px;">New Enquiry Received</div>' +
    '<div style="font-family:Consolas,monospace;font-size:11px;color:#5a5a5a;margin-top:6px;letter-spacing:1px;">' +
    esc(when) + " · via " + esc(source) +
    "</div></td></tr>" +
    '<tr><td style="padding:20px 8px 8px;">' +
    '<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">' +
    row("NAME", esc(name), false) +
    row("EMAIL", '<a href="mailto:' + esc(email) + '" style="color:#ff004f;text-decoration:none;">' + esc(email) + "</a>", false) +
    row("SERVICE", esc(service), true) +
    row("MESSAGE", esc(message).replace(/\n/g, "<br/>"), false) +
    "</table></td></tr>" +
    '<tr><td style="padding:20px 24px 28px;">' +
    '<a href="mailto:' + esc(email) + '" ' +
    'style="display:inline-block;background:#ff004f;color:#000000;font-family:Consolas,monospace;' +
    'font-size:12px;font-weight:bold;letter-spacing:2px;padding:12px 24px;text-decoration:none;">REPLY TO ' +
    esc(name).toUpperCase() +
    " →</a>" +
    '<div style="font-family:Consolas,monospace;font-size:10px;color:#5a5a5a;margin-top:18px;letter-spacing:1px;">' +
    "REPLY WITHIN 24H — BHAV.AI PROMISED THEM 🤖" +
    "</div></td></tr>" +
    "</table></div>"
  );
}

/** Validates fields and sends the themed enquiry email. Throws on failure. */
async function sendEnquiryEmail({ name, email, service, message, source }) {
  const user = process.env.GMAIL_USER;
  const pass = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");
  const notify = process.env.NOTIFY_EMAIL || user;
  if (!user || !pass) throw new Error("Mail env not configured");

  name = String(name || "").trim().slice(0, 120);
  email = String(email || "").trim().slice(0, 160);
  service = String(service || "General enquiry").trim().slice(0, 160) || "General enquiry";
  message = String(message || "").trim().slice(0, 3000) || "(no message)";
  source = String(source || "Website").trim().slice(0, 60);

  if (!name || !EMAIL_RE.test(email)) throw new Error("Invalid fields");

  const when =
    new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit", hour12: false,
    }) + " IST";

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"BHAV.AI — bhaveshai.in" <${user}>`,
    to: notify,
    replyTo: email,
    subject: `⚡ New enquiry — ${name} (${source})`,
    html: buildEmail({ name, email, service, message, source, when }),
  });
}

module.exports = { sendEnquiryEmail, EMAIL_RE };
