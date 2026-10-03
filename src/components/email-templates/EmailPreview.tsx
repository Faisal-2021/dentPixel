"use client";

import { type EmailTemplate } from "./types";

interface EmailPreviewProps {
  template: EmailTemplate;
}

// Mock values for preview
const MOCK_VALUES = {
  school_name: "Greenwood High School",
  owner_name: "Dr. Sarah Johnson",
  city: "New York",
  email: "sarah.johnson@greenwood.edu",
  website: "https://greenwoodhigh.edu",
  meeting_link: "https://calendly.com/schoolpixel/30min",
};

function replaceVariables(text: string): string {
  return text
    .replace(/\{\{school_name\}\}/g, MOCK_VALUES.school_name)
    .replace(/\{\{owner_name\}\}/g, MOCK_VALUES.owner_name)
    .replace(/\{\{city\}\}/g, MOCK_VALUES.city)
    .replace(/\{\{email\}\}/g, MOCK_VALUES.email)
    .replace(/\{\{website\}\}/g, MOCK_VALUES.website)
    .replace(/\{\{meeting_link\}\}/g, MOCK_VALUES.meeting_link);
}

export function EmailPreview({ template }: EmailPreviewProps) {
  const previewSubject = replaceVariables(template.subject);
  const previewBody = replaceVariables(template.bodyHtml);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0B1220] border border-gray-200 dark:border-gray-800 rounded-xl p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Live Preview
      </h3>

      <div className="flex-1 bg-gray-50 dark:bg-[#0F172A] rounded-lg overflow-hidden shadow-inner border border-gray-200 dark:border-gray-800">
        {/* Email Client Header Mockup */}
        <div className="bg-gray-200 dark:bg-[#1E293B] px-4 py-2 border-b border-gray-300 dark:border-gray-700 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
            Email Preview
          </span>
        </div>

        {/* Email Subject Line */}
        <div className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0B1220]">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Subject:</div>
          <div className="font-medium text-gray-900 dark:text-white">
            {previewSubject}
          </div>
        </div>

        {/* Email Body Preview */}
        <div className="flex-1 overflow-y-auto">
          <div
            className="w-full bg-white"
            dangerouslySetInnerHTML={{ __html: previewBody }}
          />
        </div>
      </div>
    </div>
  );
}
