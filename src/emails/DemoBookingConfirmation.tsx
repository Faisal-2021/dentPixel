import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button,
  Hr,
  Section,
  Row,
  Column,
  Link,
  Img,
  Preview,
} from "@react-email/components";
import * as React from "react";

export const WHATSAPP_LINK = "https://wa.me/917209886574";
export const PHONE_NUMBER = "+91-7209886574";
export const SITE_URL = "https://dentpixel.com";
export const LOGO_URL = "https://dentpixel.com/logo.png";

interface DemoBookingConfirmationProps {
  name: string;
  schoolName?: string;
  preferredDate?: string;
}

export const DemoBookingConfirmation = ({
  name,
  schoolName,
  preferredDate,
}: DemoBookingConfirmationProps) => {
  const formattedDate = preferredDate
    ? new Date(preferredDate + "T00:00:00").toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Html>
      <Head>
        <style>{`
          @media only screen and (max-width: 480px) {
            .sp-outer { padding: 16px 10px !important; }
            .sp-card { padding: 24px 18px !important; border-radius: 14px !important; }
            .sp-heading { font-size: 20px !important; }
            .sp-header-pad { padding: 24px 18px !important; }
            .sp-footer-pad { padding: 24px 18px !important; }
            .sp-cta-button { display: block !important; width: 100% !important; text-align: center !important; box-sizing: border-box !important; }
            .sp-trust-row { display: block !important; }
            .sp-trust-col { display: block !important; width: 100% !important; padding: 6px 0 !important; text-align: left !important; }
            .sp-trust-col + .sp-trust-col { border-top: 1px solid #1E2A3C !important; }
          }
        `}</style>
      </Head>
      <Preview>
        Your DentPixel demo request is confirmed — we&apos;ll be in touch shortly.
      </Preview>
      <Body style={main}>
        <Container style={outer} className="sp-outer">
          {/* Header band */}
          <Section style={header} className="sp-header-pad">
            <table role="presentation" cellPadding={0} cellSpacing={0} style={logoLockupWrap}>
              <tbody>
                <tr>
                  <td style={logoCell}>
                    <Img
                      src={LOGO_URL}
                      alt="DentPixel"
                      width="32"
                      height="32"
                      style={logoImage}
                    />
                  </td>
                  <td style={logoTextCell}>
                    <Text style={brandName}>
                      Dent<span style={brandAccent}>Pixel</span>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
            <Text style={brandTagline}>
              Connected website &amp; clinic system for dental practices.
            </Text>
          </Section>

          {/* Main card */}
          <Section style={card} className="sp-card">
            <table role="presentation" cellPadding={0} cellSpacing={0} style={badgeWrap}>
              <tbody>
                <tr>
                  <td style={badge}>✅ Demo request received</td>
                </tr>
              </tbody>
            </table>

            <Heading as="h1" style={heading} className="sp-heading">
              Hi {name}, you&apos;re on the list!
            </Heading>

            <Text style={paragraph}>
              We&apos;ve received your demo booking request
              {schoolName ? (
                <>
                  {" "}for <strong style={{ color: "#0B1220" }}>{schoolName}</strong>
                </>
              ) : null}
              . Our team will reach out within a few hours to confirm your slot
              and show you a free, live demo built for your school.
            </Text>

            {formattedDate && (
              <table role="presentation" cellPadding={0} cellSpacing={0} style={dateCardWrap}>
                <tbody>
                  <tr>
                    <td style={dateCard}>
                      <Text style={dateLabel}>📅 Preferred date</Text>
                      <Text style={dateValue}>{formattedDate}</Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}

            <Hr style={hrLight} />

            {/* What happens next */}
            <Text style={sectionLabel}>What happens next</Text>

            <table role="presentation" cellPadding={0} cellSpacing={0} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={stepNumber}>01</td>
                  <td style={stepText}>
                    We review your school&apos;s details and requirements.
                  </td>
                </tr>
                <tr>
                  <td style={stepNumber}>02</td>
                  <td style={stepText}>
                    We call or WhatsApp you to confirm your demo slot.
                  </td>
                </tr>
                <tr>
                  <td style={stepNumber}>03</td>
                  <td style={stepText}>
                    You get a free, live demo homepage — no payment required.
                  </td>
                </tr>
              </tbody>
            </table>

            <Hr style={hrLight} />

            <Text style={paragraphSmall}>
              Want a faster response? Reach us directly:
            </Text>

            <table role="presentation" cellPadding={0} cellSpacing={0} style={{ width: "100%", marginTop: "4px" }}>
              <tbody>
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <Button
                      href={WHATSAPP_LINK}
                      style={whatsappButton}
                      className="sp-cta-button"
                    >
                      💬 Chat on WhatsApp
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text style={contactText}>
                      📞{" "}
                      <Link
                        href={`tel:${PHONE_NUMBER.replace(/[^+\d]/g, "")}`}
                        style={contactLink}
                      >
                        {PHONE_NUMBER}
                      </Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Trust strip */}
          {/* <Section style={trustSection}>
            <Row className="sp-trust-row">
              <Column style={trustCol} className="sp-trust-col">
                <Text style={trustText}>50+ Schools · 18 States</Text>
              </Column>
              <Column style={trustCol} className="sp-trust-col">
                <Text style={trustText}>7-Day Delivery</Text>
              </Column>
              <Column style={trustCol} className="sp-trust-col">
                <Text style={trustText}>100% CBSE Compliant</Text>
              </Column>
            </Row>
          </Section> */}

          {/* Footer band */}
          <Section style={footer} className="sp-footer-pad">
            <table role="presentation" cellPadding={0} cellSpacing={0} style={footerLogoLockupWrap}>
              <tbody>
                <tr>
                  <td style={footerLogoCell}>
                    <Img
                      src={LOGO_URL}
                      alt="DentPixel"
                      width="20"
                      height="20"
                      style={footerLogoImage}
                    />
                  </td>
                  <td style={footerLogoTextCell}>
                    <Text style={footerBrand}>DentPixel</Text>
                  </td>
                </tr>
              </tbody>
            </table>
            <Text style={footerTagline}>
              Built exclusively for dental practices in India.
            </Text>
            <Text style={footerLinksRow}>
              <Link href={SITE_URL} style={footerLink}>
                dentpixel.com
              </Link>
              <span style={footerDot}> · </span>
              <Link href="mailto:hello@dentpixel.com" style={footerLink}>
                hello@dentpixel.com
              </Link>
              <span style={footerDot}> · </span>
              <Link href={WHATSAPP_LINK} style={footerLink}>
                WhatsApp
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default DemoBookingConfirmation;

export const DemoBookingConfirmationSubject =
  "Your DentPixel demo request has been received";

export const DemoBookingConfirmationText = (
  name: string,
  schoolName?: string,
) => {
  const lines = [
    `Hi ${name},`,
    "",
    `We've received your demo booking request${schoolName ? ` for ${schoolName}` : ""}. Our team will reach out within a few hours to confirm your slot and show you a free, live demo built for your school.`,
    "",
    "What happens next:",
    "1. We review your school's details and requirements.",
    "2. We call or WhatsApp you to confirm your demo slot.",
    "3. You get a free, live demo homepage — no payment required.",
    "",
    "Want a faster response? Reach us directly:",
    `• WhatsApp: ${WHATSAPP_LINK}`,
    `• Call: ${PHONE_NUMBER}`,
    "",
    "— Team DentPixel",
    "dentpixel.com · hello@dentpixel.com",
  ];
  return lines.join("\n");
};

/* ---------- Styles ---------- */

const fontFamily =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const main = {
  backgroundColor: "#EEF1F6",
  fontFamily,
  margin: 0,
  padding: 0,
};

const outer = {
  margin: "0 auto",
  padding: "32px 20px",
  maxWidth: "600px",
};

/* Header */
const header = {
  backgroundColor: "#050A14",
  borderRadius: "16px 16px 0 0",
  padding: "32px 32px 24px",
  textAlign: "center" as const,
};

const logoLockupWrap = {
  margin: "0 auto",
};

const logoCell = {
  verticalAlign: "middle" as const,
  paddingRight: "8px",
};

const logoImage = {
  display: "block",
  borderRadius: "8px",
};

const logoTextCell = {
  verticalAlign: "middle" as const,
};

const brandName = {
  margin: "0",
  fontSize: "24px",
  fontWeight: "800" as const,
  color: "#FFFFFF",
  letterSpacing: "-0.02em",
};

const brandAccent = {
  color: "#5B8DEF",
};

const brandTagline = {
  margin: "6px 0 0",
  fontSize: "13px",
  color: "#9AA7BD",
};

/* Card */
const card = {
  backgroundColor: "#FFFFFF",
  padding: "36px 32px",
  border: "1px solid #E5E9F0",
  borderTop: "none",
};

const badgeWrap = { marginBottom: "18px" };

const badge = {
  display: "inline-block",
  backgroundColor: "#E9F3EC",
  color: "#1C7C3F",
  fontSize: "12px",
  fontWeight: "700" as const,
  padding: "6px 12px",
  borderRadius: "999px",
  letterSpacing: "0.01em",
};

const heading = {
  margin: "0 0 14px",
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "800" as const,
  color: "#0B1220",
  letterSpacing: "-0.01em",
};

const paragraph = {
  margin: "0 0 8px",
  fontSize: "15px",
  lineHeight: "1.65",
  color: "#3D4759",
};

const paragraphSmall = {
  margin: "0 0 4px",
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#3D4759",
};

const dateCardWrap = { width: "100%", marginTop: "18px" };

const dateCard = {
  padding: "16px 18px",
  backgroundColor: "#F5F8FF",
  borderRadius: "10px",
  border: "1px solid #DCE6FB",
};

const dateLabel = {
  margin: "0",
  fontSize: "11px",
  fontWeight: "700" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
  color: "#5B8DEF",
};

const dateValue = {
  margin: "4px 0 0",
  fontSize: "16px",
  fontWeight: "700" as const,
  color: "#0B1220",
};

const hrLight = {
  borderColor: "#EEF1F6",
  margin: "24px 0",
};

const sectionLabel = {
  margin: "0 0 14px",
  fontSize: "12px",
  fontWeight: "700" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
  color: "#9AA7BD",
};

const stepNumber = {
  width: "34px",
  fontSize: "13px",
  fontWeight: "800" as const,
  color: "#C9D2E0",
  verticalAlign: "top" as const,
  paddingBottom: "14px",
};

const stepText = {
  fontSize: "14px",
  lineHeight: "1.55",
  color: "#3D4759",
  verticalAlign: "top" as const,
  paddingBottom: "14px",
};

const whatsappButton = {
  backgroundColor: "#25D366",
  color: "#FFFFFF",
  borderRadius: "10px",
  padding: "13px 22px",
  fontSize: "15px",
  fontWeight: "700" as const,
  textDecoration: "none",
  display: "inline-block",
};

const contactText = {
  margin: "0",
  fontSize: "14px",
  color: "#3D4759",
  fontWeight: "500" as const,
};

const contactLink = {
  color: "#0B1220",
  textDecoration: "none",
  fontWeight: "700" as const,
};

/* Trust strip */
const trustSection = {
  backgroundColor: "#0B1220",
  padding: "16px 24px",
};

const trustCol = {
  textAlign: "center" as const,
  padding: "4px 8px",
};

const trustText = {
  margin: "0",
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#9AA7BD",
  letterSpacing: "0.01em",
};

/* Footer */
const footer = {
  backgroundColor: "#050A14",
  borderRadius: "0 0 16px 16px",
  padding: "28px 32px 32px",
  textAlign: "center" as const,
};

const footerLogoLockupWrap = {
  margin: "0 auto 4px",
};

const footerLogoCell = {
  verticalAlign: "middle" as const,
  paddingRight: "6px",
};

const footerLogoImage = {
  display: "block",
  borderRadius: "5px",
  opacity: 0.9,
};

const footerLogoTextCell = {
  verticalAlign: "middle" as const,
};

const footerBrand = {
  margin: "0",
  fontSize: "15px",
  fontWeight: "800" as const,
  color: "#FFFFFF",
};

const footerTagline = {
  margin: "4px 0 14px",
  fontSize: "12px",
  color: "#9AA7BD",
};

const footerLinksRow = {
  margin: "0",
  fontSize: "12px",
  color: "#6B7A94",
};

const footerLink = {
  color: "#9AA7BD",
  textDecoration: "none",
  fontWeight: "600" as const,
};

const footerDot = {
  color: "#3D4759",
};