export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://schoolpixel.in";
