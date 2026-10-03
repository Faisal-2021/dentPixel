export interface EmailTemplate {
  id: string;
  name: string;
  key: string;
  subject: string;
  bodyHtml: string;
}

export const VARIABLES = [
  "{{school_name}}",
  "{{owner_name}}",
  "{{city}}",
  "{{email}}",
  "{{website}}",
  "{{meeting_link}}",
];

export const MOCK_TEMPLATES: EmailTemplate[] = [
  {
    id: "1",
    key: "introduction",
    name: "Introduction Email",
    subject: "A quick idea for {{school_name}}",
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <p style="margin: 0 0 16px; line-height: 1.5;">Dear {{owner_name}},</p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          My name is [Your Name] from SchoolPixel — we specialize in creating modern, user-friendly websites for schools like {{school_name}} in {{city}}.
        </p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          I'd love to share a quick idea that could help improve your school's online presence and make it easier for parents to find the information they need.
        </p>
        <p style="margin: 0; line-height: 1.5;">
          Would you be open to a brief discussion about how we can make your website work harder for your school?
        </p>
        <p style="margin: 24px 0 0;">
          Best,<br>
          SchoolPixel Team
        </p>
      </div>
    `.trim(),
  },
  {
    id: "2",
    key: "website-audit",
    name: "Website Audit",
    subject: "A few observations about {{school_name}}'s website",
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <p style="margin: 0 0 16px; line-height: 1.5;">Dear {{owner_name}},</p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          I was recently looking at {{school_name}}'s website and wanted to share a few quick, friendly observations that might help improve the experience for your parents and visitors:
        </p>
        <ul style="margin: 0 0 16px; padding-left: 20px;">
          <li style="margin-bottom: 8px;">Mobile responsiveness on different devices</li>
          <li style="margin-bottom: 8px;">Admissions information accessibility</li>
          <li style="margin-bottom: 8px;">Parent portal access</li>
          <li style="margin-bottom: 8px;">Photo gallery organization</li>
        </ul>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          Would you like a free, no-obligation website review with specific recommendations for improvements?
        </p>
        <p style="margin: 24px 0 0;">
          Best,<br>
          SchoolPixel Team
        </p>
      </div>
    `.trim(),
  },
  {
    id: "3",
    key: "portfolio",
    name: "Portfolio Showcase",
    subject: "Recent school website projects we've completed",
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <p style="margin: 0 0 16px; line-height: 1.5;">Dear {{owner_name}},</p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          We wanted to share some of our recent school website projects that might give you an idea of what's possible for {{school_name}}:
        </p>
        <ul style="margin: 0 0 16px; padding-left: 20px;">
          <li style="margin-bottom: 8px;">Mobile-first design for on-the-go parents</li>
          <li style="margin-bottom: 8px;">Easy-to-use admission inquiry forms</li>
          <li style="margin-bottom: 8px;">Interactive photo and video galleries</li>
          <li style="margin-bottom: 8px;">Faculty and staff directories</li>
          <li style="margin-bottom: 8px;">Real-time notice board system</li>
        </ul>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          Would you like to see a quick demo of any of these features?
        </p>
        <p style="margin: 24px 0 0;">
          Best,<br>
          SchoolPixel Team
        </p>
      </div>
    `.trim(),
  },
  {
    id: "4",
    key: "follow-up",
    name: "Follow-Up Email",
    subject: "Just following up",
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <p style="margin: 0 0 16px; line-height: 1.5;">Hi {{owner_name}},</p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          I hope your week is going well! I just wanted to circle back to our recent conversation about {{school_name}}'s website.
        </p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          Would you be interested in a quick 10-minute call to discuss any questions you might have?
        </p>
        <p style="margin: 24px 0 0;">
          Best,<br>
          SchoolPixel Team
        </p>
      </div>
    `.trim(),
  },
  {
    id: "5",
    key: "final-follow-up",
    name: "Final Follow-Up",
    subject: "Last follow up from SchoolPixel",
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <p style="margin: 0 0 16px; line-height: 1.5;">Dear {{owner_name}},</p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          I hope this message finds you well. Just wanted to check in one last time about {{school_name}}'s website.
        </p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          If this isn't a priority right now, no worries at all. I completely understand how busy school leadership can be.
        </p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          If you'd like to revisit this conversation at any point in the future, please don't hesitate to reach out!
        </p>
        <p style="margin: 24px 0 0;">
          Best,<br>
          SchoolPixel Team
        </p>
      </div>
    `.trim(),
  },
  {
    id: "6",
    key: "meeting-request",
    name: "Meeting Request",
    subject: "Let's schedule a quick call about {{school_name}}'s website",
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <p style="margin: 0 0 16px; line-height: 1.5;">Dear {{owner_name}},</p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          Thank you for your interest in SchoolPixel! I'm excited to discuss how we can help with {{school_name}}'s website.
        </p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          I have a few times available this week for a quick call:
        </p>
        <ul style="margin: 0 0 16px; padding-left: 20px;">
          <li style="margin-bottom: 8px;">Tuesday at 2pm</li>
          <li style="margin-bottom: 8px;">Wednesday at 10am</li>
          <li style="margin-bottom: 8px;">Thursday at 3pm</li>
        </ul>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          Would any of these times work for you? If not, please let me know what works best and I'll adjust my schedule.
        </p>
        <p style="margin: 0; line-height: 1.5;">
          Or book a time that works for you: {{meeting_link}}
        </p>
        <p style="margin: 24px 0 0;">
          Best,<br>
          SchoolPixel Team
        </p>
      </div>
    `.trim(),
  },
  {
    id: "7",
    key: "proposal-follow-up",
    name: "Proposal Follow-Up",
    subject: "Following up on the website proposal for {{school_name}}",
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <p style="margin: 0 0 16px; line-height: 1.5;">Dear {{owner_name}},</p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          I hope you've had a chance to review the proposal I sent for {{school_name}}'s website.
        </p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          I just wanted to check if you have any questions, or if there's anything you'd like me to clarify?
        </p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          I'd be happy to walk you through any part of it in a quick call.
        </p>
        <p style="margin: 24px 0 0;">
          Best,<br>
          SchoolPixel Team
        </p>
      </div>
    `.trim(),
  },
  {
    id: "8",
    key: "re-engagement",
    name: "Re-engagement",
    subject: "Checking in about {{school_name}}'s website",
    bodyHtml: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <p style="margin: 0 0 16px; line-height: 1.5;">Dear {{owner_name}},</p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          I hope your school year is going well! I wanted to circle back since we last spoke about {{school_name}}'s website.
        </p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          We have some exciting new services and portfolio projects that I think you might find interesting.
        </p>
        <p style="margin: 0 0 16px; line-height: 1.5;">
          Would you like to revisit the conversation about upgrading your school's online presence?
        </p>
        <p style="margin: 24px 0 0;">
          Best,<br>
          SchoolPixel Team
        </p>
      </div>
    `.trim(),
  },
];
