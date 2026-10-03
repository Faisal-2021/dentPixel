"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { EmailTemplateTabs } from "@/components/email-templates/EmailTemplateTabs";
import { EmailTemplateEditor } from "@/components/email-templates/EmailTemplateEditor";
import { EmailPreview } from "@/components/email-templates/EmailPreview";
import { MOCK_TEMPLATES, type EmailTemplate } from "@/components/email-templates/types";
import { toast } from "sonner";

export default function EmailTemplatesPage() {
  const [templates, setTemplates] = useState<EmailTemplate[]>(MOCK_TEMPLATES);
  const [activeTemplateId, setActiveTemplateId] = useState<string>(MOCK_TEMPLATES[0].id);
  const [originalTemplates, setOriginalTemplates] = useState<EmailTemplate[]>(MOCK_TEMPLATES);

  const activeTemplate = templates.find((t) => t.id === activeTemplateId)!;

  const handleUpdateTemplate = (updates: Partial<EmailTemplate>) => {
    setTemplates((prev) =>
      prev.map((t) =>
        t.id === activeTemplateId ? { ...t, ...updates } : t
      )
    );
  };

  const handleSave = () => {
    toast.success("Template saved!");
  };

  const handleReset = () => {
    setTemplates(originalTemplates);
    toast.success("Template reset!");
  };

  return (
    <div className="space-y-4 min-h-screen bg-gray-50 dark:bg-[#050A14]">
      {/* Top Nav */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-3 mb-3">
          <Button variant="ghost" className="text-gray-600 dark:text-gray-300" asChild>
            <Link href="/admin/leads">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Leads
            </Link>
          </Button>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            Email Templates
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Edit the templates used for outreach campaigns. Use variables like {"{{school_name}}"} — they will be replaced when the email is sent.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4">
        <EmailTemplateTabs
          templates={templates}
          activeTemplateId={activeTemplateId}
          onTemplateSelect={setActiveTemplateId}
        />
      </div>

      {/* Two Column Layout */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Editor */}
          <div className="h-[calc(100vh-180px)]">
            <EmailTemplateEditor
              template={activeTemplate}
              onUpdate={handleUpdateTemplate}
              onSave={handleSave}
              onReset={handleReset}
            />
          </div>

          {/* Preview */}
          <div className="h-[calc(100vh-180px)]">
            <EmailPreview template={activeTemplate} />
          </div>
        </div>
      </div>
    </div>
  );
}
