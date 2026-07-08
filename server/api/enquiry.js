const { applyCors, rateLimited } = require("../_lib/cors");
const { sendEnquiryEmail } = require("../_lib/mail");

module.exports = async (req, res) => {
  if (applyCors(req, res)) return;
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  if (rateLimited(req, 6)) return res.status(429).json({ error: "Too many requests" });

  const b = req.body || {};
  try {
    await sendEnquiryEmail({
      name: b.name,
      email: b.email,
      service: b.service,
      message: b.message,
      source: b.source,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    const msg = err && err.message ? err.message : String(err);
    console.error("Enquiry email failed:", msg);
    if (msg === "Invalid fields") return res.status(400).json({ error: msg });
    /* non-sensitive classification to make failures diagnosable:
       EAUTH = bad user/app-password · ECONNECTION/ETIMEDOUT = network */
    return res.status(502).json({
      error: "Email failed",
      code: (err && err.code) || null,
      rc: (err && err.responseCode) || null,
    });
  }
};
