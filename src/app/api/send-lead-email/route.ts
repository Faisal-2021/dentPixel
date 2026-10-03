import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  nameSchema, emailSchema, phoneINSchema,
  schoolSchema, citySchema, messageSchema,
} from "@/lib/validation";

import { LINKS } from "@/config/links";

export const runtime = "nodejs";

const InputSchema = z.object({
  source: z.enum(["contact-form", "cbse-pdf", "clinic-pdf"]),
  name: nameSchema,
  email: emailSchema,
  phone: z.union([z.literal(""), phoneINSchema]).optional(),
  school: z.union([z.literal(""), schoolSchema]).optional(),
  role: z.string().trim().max(60).optional().or(z.literal("")),
  city: citySchema,
  message: messageSchema,
});

const RATE = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 60_000;
function rateLimited(ip: string) {
  const now = Date.now();
  const rec = RATE.get(ip);
  if (!rec || rec.reset < now) { RATE.set(ip, { count: 1, reset: now + WINDOW_MS }); return false; }
  rec.count += 1;
  return rec.count > LIMIT;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]!));

const BRAND = "DentPixel";
const TEAM_EMAIL = process.env.TEAM_EMAIL || "hello@dentpixel.com";
const WHATSAPP = LINKS.whatsapp;

function visitorContactHtml(name: string, school: string) {
  return `<!doctype html><html><body style="margin:0;background:#f5f7fb;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;">
    <div style="max-width:560px;margin:24px auto;background:#fff;padding:32px 28px;border-radius:14px;">
      <h1 style="font-size:22px;margin:0 0 12px;">Thanks, ${esc(name)} — we got your request 🎉</h1>
      <p style="font-size:15px;line-height:1.6;color:#334155;margin:0 0 14px;">
        We've received your inquiry${school ? ` for <strong>${esc(school)}</strong>` : ""}.
        Our clinic growth specialist will reach out within <strong>24 hours</strong>.
      </p>
      <a href="${WHATSAPP}" style="display:inline-block;background:#0EA5C9;color:#fff;text-decoration:none;font-weight:600;padding:11px 20px;border-radius:10px;font-size:14px;">Chat on WhatsApp</a>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0 16px;">
      <p style="font-size:13px;color:#64748b;margin:0;">Team ${BRAND} · Dental Practice Growth</p>
    </div>
  </body></html>`;
}

function visitorClinicPdfHtml(name: string, origin: string, pdfPath: string) {
  const url = pdfPath.startsWith("http") ? pdfPath : `${origin}${pdfPath}`;
  return `<!doctype html><html><body style="margin:0;background:#f5f7fb;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;">
    <div style="max-width:560px;margin:24px auto;background:#fff;padding:32px 28px;border-radius:14px;">
      <h1 style="font-size:22px;margin:0 0 12px;">Your Dental Clinic Standards Checklist 🦷</h1>
      <p style="font-size:15px;line-height:1.6;color:#334155;margin:0 0 14px;">Hi ${esc(name)}, if your checklist download didn't start automatically, you can access it here:</p>
      <p style="margin:0 0 22px;"><a href="${url}" style="display:inline-block;background:#0EA5C9;color:#fff;text-decoration:none;font-weight:600;padding:11px 20px;border-radius:10px;font-size:14px;">Download Checklist PDF</a></p>
      <a href="${WHATSAPP}" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;font-weight:600;padding:11px 20px;border-radius:10px;font-size:14px;">Message us on WhatsApp</a>
    </div>
  </body></html>`;
}

function visitorPdfHtml(name: string, origin: string, pdfPath: string) {
  const url = pdfPath.startsWith("http") ? pdfPath : `${origin}${pdfPath}`;
  return `<!doctype html><html><body style="margin:0;background:#f5f7fb;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;">
    <div style="max-width:560px;margin:24px auto;background:#fff;padding:32px 28px;border-radius:14px;">
      <h1 style="font-size:22px;margin:0 0 12px;">Your Compliance Checklist 📄</h1>
      <p style="font-size:15px;line-height:1.6;color:#334155;margin:0 0 14px;">Hi ${esc(name)}, if the download didn't start, grab it here:</p>
      <p style="margin:0 0 22px;"><a href="${url}" style="display:inline-block;background:#0EA5C9;color:#fff;text-decoration:none;font-weight:600;padding:11px 20px;border-radius:10px;font-size:14px;">Download PDF</a></p>
      <a href="${WHATSAPP}" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;font-weight:600;padding:11px 20px;border-radius:10px;font-size:14px;">Message us on WhatsApp</a>
    </div>
  </body></html>`;
}

function internalHtml(data: z.infer<typeof InputSchema>) {
  const rows: [string, string][] = [
    ["Source", data.source], ["Name", data.name], ["Role", data.role || "—"],
    ["School", data.school || "—"], ["Email", data.email], ["Phone", data.phone || "—"],
    ["City", data.city || "—"], ["Message", data.message || "—"],
    ["Submitted", new Date().toISOString()],
  ];
  const tr = rows.map(([k, v]) =>
    `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;width:120px;">${esc(k)}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;white-space:pre-wrap;">${esc(v)}</td></tr>`
  ).join("");
  return `<!doctype html><html><body style="margin:0;background:#f5f7fb;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
    <div style="max-width:640px;margin:24px auto;background:#fff;padding:24px;border-radius:12px;">
      <h2 style="margin:0 0 16px;font-size:18px;">New lead via ${esc(data.source)}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${tr}</table>
    </div>
  </body></html>`;
}

async function sendResend(payload: { from: string; to: string; subject: string; html: string; reply_to?: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY not configured");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  return res.json();
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  let body: unknown;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const parsed = InputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", issues: parsed.error.issues }, { status: 400 });
  }
  const data = parsed.data;
  const from = process.env.FROM_EMAIL || `${BRAND} <onboarding@resend.dev>`;
  const origin = new URL(request.url).origin;

  const visitorSubject =
    data.source === "contact-form"
      ? `We got your inquiry, ${data.name} — we'll reply within 24 hours`
      : data.source === "clinic-pdf"
      ? `Your Dental Clinic Standards Checklist + Free Clinic Audit Offer`
      : `Your Compliance Checklist + Free Website Audit Offer`;

  const visitorHtml =
    data.source === "contact-form"
      ? visitorContactHtml(data.name, data.school || "")
      : data.source === "clinic-pdf"
      ? visitorClinicPdfHtml(data.name, origin, LINKS.cbsePdf)
      : visitorPdfHtml(data.name, origin, LINKS.cbsePdf);

  const results = await Promise.allSettled([
    sendResend({ from, to: data.email, subject: visitorSubject, html: visitorHtml }),
    sendResend({
      from, to: TEAM_EMAIL, reply_to: data.email,
      subject: `New lead: ${data.school || data.name} (via ${data.source})`,
      html: internalHtml(data),
    }),
  ]);
  results.forEach((r, i) => { if (r.status === "rejected") console.error(`send ${i}:`, r.reason); });

  const visitor = results[0].status as "fulfilled" | "rejected";
  const internal = results[1].status as "fulfilled" | "rejected";
  const bothOk = visitor === "fulfilled" && internal === "fulfilled";
  const bothFailed = visitor === "rejected" && internal === "rejected";

  let status = 200;
  let ok = true;
  let error: string | undefined;
  if (bothFailed) {
    status = 502;
    ok = false;
    error = "Email delivery failed on both channels. Check RESEND_API_KEY and domain verification in Resend.";
  } else if (!bothOk) {
    // 207 Multi-Status: partial success
    status = 207;
    ok = true;
  }

  return NextResponse.json(
    { ok, visitor, internal, ...(error ? { error } : {}) },
    { status },
  );
}
