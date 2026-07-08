const nodemailer = require("nodemailer");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SITE = "https://bhaveshai.in";

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* ---------- shared scaffolding (Gmail-safe, light card + brand header) ---------- */

function shell({ headerTag, headerTitle, headerSub, bodyHtml, footerNote }) {
  return `
<div style="background:#f2f2f4;padding:36px 12px;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" align="center"
         style="max-width:560px;width:100%;margin:0 auto;background:#ffffff;border:1px solid #e6e6ea;border-radius:14px;overflow:hidden;">
    <!-- brand header -->
    <tr>
      <td style="background:#0a0a0a;padding:26px 28px;border-bottom:3px solid #ff004f;">
        <div style="font-family:Consolas,'Courier New',monospace;font-size:11px;letter-spacing:4px;color:#ff004f;">
          &#9632;&nbsp;BHAVESHAI.IN
        </div>
        <div style="font-size:23px;font-weight:800;color:#ffffff;margin-top:10px;line-height:1.25;">
          ${headerTitle}
        </div>
        <div style="font-family:Consolas,'Courier New',monospace;font-size:11px;color:#9a9a9a;margin-top:8px;letter-spacing:1px;">
          ${headerSub}
        </div>
        <div style="display:inline-block;margin-top:14px;background:#ff004f;color:#ffffff;font-family:Consolas,'Courier New',monospace;font-size:10px;font-weight:bold;letter-spacing:2px;padding:5px 12px;border-radius:99px;">
          ${headerTag}
        </div>
      </td>
    </tr>
    <!-- body -->
    <tr><td style="padding:28px;">${bodyHtml}</td></tr>
    <!-- footer -->
    <tr>
      <td style="background:#fafafa;border-top:1px solid #eeeeef;padding:16px 28px;">
        <div style="font-size:12px;color:#9a9aa2;line-height:1.6;">
          ${footerNote}
        </div>
      </td>
    </tr>
  </table>
  <div style="max-width:560px;margin:14px auto 0;text-align:center;font-family:Consolas,'Courier New',monospace;font-size:10px;letter-spacing:2px;color:#b9b9c0;">
    SENT AUTOMATICALLY BY BHAV.AI &#129302; &nbsp;&middot;&nbsp; <a href="${SITE}" style="color:#ff004f;text-decoration:none;">BHAVESHAI.IN</a>
  </div>
</div>`;
}

function fieldRow(label, valueHtml) {
  return `
<tr>
  <td style="padding:0 0 18px;">
    <div style="font-family:Consolas,'Courier New',monospace;font-size:10px;letter-spacing:3px;color:#9a9aa2;padding-bottom:5px;">${label}</div>
    <div style="font-size:15px;color:#161618;line-height:1.55;">${valueHtml}</div>
  </td>
</tr>`;
}

function button(href, label) {
  return `
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 2px;">
  <tr>
    <td style="background:#ff004f;border-radius:10px;">
      <a href="${href}"
         style="display:inline-block;padding:13px 26px;color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;letter-spacing:0.4px;">
        ${label}
      </a>
    </td>
  </tr>
</table>`;
}

/* ---------- 1) notification to Bhavesh ---------- */

function ownerEmail({ name, email, service, message, source, when }) {
  const body = `
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
  ${fieldRow("NAME", esc(name))}
  ${fieldRow("EMAIL", `<a href="mailto:${esc(email)}" style="color:#ff004f;text-decoration:none;font-weight:bold;">${esc(email)}</a>`)}
  ${fieldRow("SERVICE", `<span style="display:inline-block;background:#fff0f4;color:#d40042;border:1px solid #ffd3e0;font-size:13px;font-weight:bold;padding:5px 12px;border-radius:99px;">${esc(service)}</span>`)}
  <tr>
    <td style="padding:0 0 22px;">
      <div style="font-family:Consolas,'Courier New',monospace;font-size:10px;letter-spacing:3px;color:#9a9aa2;padding-bottom:7px;">MESSAGE</div>
      <div style="background:#fafafa;border:1px solid #ececf0;border-left:3px solid #ff004f;border-radius:8px;padding:16px 18px;font-size:15px;color:#2a2a2e;line-height:1.65;">
        ${esc(message).replace(/\n/g, "<br/>")}
      </div>
    </td>
  </tr>
</table>
${button("mailto:" + esc(email), "Reply to " + esc(name) + " &rarr;")}`;

  return shell({
    headerTag: "ACTION NEEDED",
    headerTitle: "&#9889; New Enquiry Received",
    headerSub: `${esc(when)} &nbsp;&middot;&nbsp; via ${esc(source)}`,
    bodyHtml: body,
    footerNote:
      "You promised a reply within 24 hours &mdash; well, BHAV.AI promised it for you &#128521;",
  });
}

/* ---------- 2) confirmation to the client ---------- */

function clientEmail({ name, service, message, when }) {
  const firstName = esc(String(name).trim().split(/\s+/)[0] || name);
  const body = `
<div style="font-size:16px;color:#161618;line-height:1.7;">
  Hi <strong>${firstName}</strong>,&nbsp;&#128075;
</div>
<div style="font-size:15px;color:#3a3a40;line-height:1.75;margin-top:12px;">
  Thanks for reaching out! Your enquiry has landed safely with
  <strong>Bhavesh Kanoje</strong> and he will personally get back to you at this
  email address <strong>within 24 hours</strong>.
</div>

<div style="margin:22px 0;">
  <div style="font-family:Consolas,'Courier New',monospace;font-size:10px;letter-spacing:3px;color:#9a9aa2;padding-bottom:7px;">YOUR REQUEST</div>
  <div style="background:#fafafa;border:1px solid #ececf0;border-left:3px solid #ff004f;border-radius:8px;padding:16px 18px;">
    <div style="font-size:13px;font-weight:bold;color:#d40042;padding-bottom:6px;">${esc(service)}</div>
    <div style="font-size:14px;color:#3a3a40;line-height:1.65;">${esc(message).replace(/\n/g, "<br/>")}</div>
  </div>
</div>

<div style="font-size:15px;color:#3a3a40;line-height:1.75;">
  Meanwhile, feel free to explore his work:
</div>
${button(SITE + "/projects/", "Browse the project lab &rarr;")}
<div style="font-size:13px;color:#8a8a92;line-height:1.7;margin-top:18px;">
  &mdash; BHAV.AI, Bhavesh's digital twin (the funnier one) &#129302;
</div>`;

  return shell({
    headerTag: "ENQUIRY CONFIRMED",
    headerTitle: "&#10004; Got it, " + firstName + "!",
    headerSub: esc(when),
    bodyHtml: body,
    footerNote:
      "You are receiving this because you contacted Bhavesh via bhaveshai.in. Just reply to this email if you want to add anything.",
  });
}

/* ---------- sender ---------- */

/** Validates fields, notifies Bhavesh and sends the client a confirmation.
    Throws only if the OWNER notification fails (client copy is best-effort). */
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

  // 1) notification to Bhavesh — must succeed
  await transporter.sendMail({
    from: `"BHAV.AI — bhaveshai.in" <${user}>`,
    to: notify,
    replyTo: email,
    subject: `⚡ New enquiry — ${name} (${source})`,
    html: ownerEmail({ name, email, service, message, source, when }),
  });

  // 2) confirmation to the client — best-effort
  try {
    await transporter.sendMail({
      from: `"Bhavesh Kanoje — bhaveshai.in" <${user}>`,
      to: email,
      replyTo: user,
      subject: `✓ Got your enquiry, ${name.split(/\s+/)[0]} — reply within 24h`,
      html: clientEmail({ name, service, message, when }),
    });
  } catch (err) {
    console.error("Client confirmation failed:", err && err.message ? err.message : err);
  }
}

module.exports = { sendEnquiryEmail, EMAIL_RE };
