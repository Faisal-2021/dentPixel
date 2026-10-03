export interface LeadEmailPayload {
  source: "contact-form" | "cbse-pdf" | "clinic-pdf";
  name: string;
  email: string;
  phone?: string;
  school?: string;
  role?: string;
  city?: string;
  message?: string;
}

export interface LeadEmailResult {
  ok: boolean;
  visitor: "fulfilled" | "rejected" | "unknown";
  internal: "fulfilled" | "rejected" | "unknown";
  error?: string;
}

export async function sendLeadEmail(payload: LeadEmailPayload): Promise<LeadEmailResult> {
  try {
    const res = await fetch("/api/send-lead-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });

    let body: Partial<LeadEmailResult> = {};
    try {
      body = (await res.json()) as Partial<LeadEmailResult>;
    } catch {
      // ignore JSON parse errors; fall back to HTTP status check
    }

    if (!res.ok) {
      const error =
        body?.error ||
        `Email API returned ${res.status}${res.statusText ? " " + res.statusText : ""}`;
      console.warn("sendLeadEmail HTTP error:", { status: res.status, error, body });
      return {
        ok: false,
        visitor: body?.visitor ?? "unknown",
        internal: body?.internal ?? "unknown",
        error,
      };
    }

    const ok = body.ok === true;
    const visitor = body?.visitor ?? "unknown";
    const internal = body?.internal ?? "unknown";
    if (!ok || visitor === "rejected" || internal === "rejected") {
      console.warn("sendLeadEmail partial/full failure:", { visitor, internal, body });
    }
    return { ok, visitor, internal };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn("sendLeadEmail threw:", message);
    return { ok: false, visitor: "unknown", internal: "unknown", error: message };
  }
}
