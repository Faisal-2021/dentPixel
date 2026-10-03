"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { VariableChips } from "./VariableChips";
import { type EmailTemplate } from "./types";

interface EmailTemplateEditorProps {
  template: EmailTemplate;
  onUpdate: (updates: Partial<EmailTemplate>) => void;
  onSave: () => void;
  onReset: () => void;
}

export function EmailTemplateEditor({
  template,
  onUpdate,
  onSave,
  onReset,
}: EmailTemplateEditorProps) {
  const bodyTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleVariableClick = (variable: string) => {
    const textarea = bodyTextareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    const newValue = value.substring(0, start) + variable + value.substring(end);

    onUpdate({ bodyHtml: newValue });

    // Move cursor after inserted variable
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + variable.length, start + variable.length);
    }, 0);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0B1220] border border-gray-200 dark:border-gray-800 rounded-xl p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Template Editor
      </h3>

      <div className="space-y-3 flex-1 overflow-y-auto">
        <div className="space-y-1">
          <Label htmlFor="template-name" className="text-gray-700 dark:text-gray-300 text-sm">
            Template Name
          </Label>
          <Input
            id="template-name"
            value={template.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            className="bg-gray-50 dark:bg-[#0F172A] border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="template-subject" className="text-gray-700 dark:text-gray-300 text-sm">
            Subject
          </Label>
          <Input
            id="template-subject"
            value={template.subject}
            onChange={(e) => onUpdate({ subject: e.target.value })}
            className="bg-gray-50 dark:bg-[#0F172A] border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="space-y-1 flex-1 flex flex-col">
          <Label htmlFor="template-body" className="text-gray-700 dark:text-gray-300 text-sm">
            Body (HTML)
          </Label>
          <Textarea
            ref={bodyTextareaRef}
            id="template-body"
            value={template.bodyHtml}
            onChange={(e) => onUpdate({ bodyHtml: e.target.value })}
            className="flex-1 bg-gray-50 dark:bg-[#0F172A] border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-mono text-sm resize-none"
          />
          <VariableChips onVariableClick={handleVariableClick} />
        </div>
      </div>

      <div className="flex gap-3 mt-4 pt-3 border-t border-gray-200 dark:border-gray-800">
        <Button onClick={onSave} className="bg-[#2563EB] hover:bg-[#1D4ED8]">
          Save Template
        </Button>
        <Button onClick={onReset} variant="ghost" className="text-gray-600 dark:text-gray-400">
          Reset Template
        </Button>
      </div>
    </div>
  );
}
