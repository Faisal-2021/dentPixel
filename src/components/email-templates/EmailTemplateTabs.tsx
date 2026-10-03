"use client";

import { type EmailTemplate } from "./types";
import { Button } from "@/components/ui/button";

interface EmailTemplateTabsProps {
  templates: EmailTemplate[];
  activeTemplateId: string;
  onTemplateSelect: (templateId: string) => void;
}

export function EmailTemplateTabs({
  templates,
  activeTemplateId,
  onTemplateSelect,
}: EmailTemplateTabsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-gray-200 dark:border-gray-800">
      {templates.map((template) => (
        <Button
          key={template.id}
          variant={activeTemplateId === template.id ? "default" : "ghost"}
          onClick={() => onTemplateSelect(template.id)}
          className={`
            whitespace-nowrap px-3 py-1.5 text-sm font-medium
            ${
              activeTemplateId === template.id
                ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            }
          `}
        >
          {template.name}
        </Button>
      ))}
    </div>
  );
}
