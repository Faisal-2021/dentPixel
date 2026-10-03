"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { type EmailTemplate, type SchoolLead } from "../types/lead.types";
import { replaceTemplateVariables } from "../utils/template-variables";
import { getTemplates } from "@/features/templates/actions/template.actions";
import { getRecommendedTemplateKey } from "../schemas/lead.schema";
import { Loader2 } from "lucide-react";

interface SendEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: SchoolLead;
  onSend: (leadId: string, templateId: string) => Promise<void>;
}

export function SendEmailModal({ isOpen, onClose, lead, onSend }: SendEmailModalProps) {
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [isSending, setIsSending] = useState(false);
  const [isLoadingTemplates, setIsLoadingTemplates] = useState(true);

  useEffect(() => {
    if (isOpen) {
      getTemplates().then((data) => {
        setTemplates(data);
        
        // Find recommended template first
        const recommendedKey = getRecommendedTemplateKey(lead.status);
        let selectedTemplate = recommendedKey 
          ? data.find(t => t.key === recommendedKey)
          : null;
        
        // Fallback to default or first template
        if (!selectedTemplate) {
          selectedTemplate = data.find(t => t.is_default) || data[0];
        }
        
        if (selectedTemplate) {
          setSelectedTemplateId(selectedTemplate.id);
        }
        setIsLoadingTemplates(false);
      });
    }
  }, [isOpen, lead.status]);

  const selectedTemplate = templates.find(t => t.id === selectedTemplateId);
  const recommendedKey = getRecommendedTemplateKey(lead.status);

  const handleSend = async () => {
    if (!selectedTemplateId) return;
    setIsSending(true);
    try {
      await onSend(lead.id, selectedTemplateId);
      onClose();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0B1220] border-gray-800 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle>Send Email to {lead.school_name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-gray-300">Select Email Template</Label>
            {isLoadingTemplates ? (
              <div className="flex items-center gap-2 text-gray-400">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading templates...
              </div>
            ) : (
              <Select value={selectedTemplateId} onValueChange={setSelectedTemplateId}>
                <SelectTrigger className="bg-[#0F172A] border-gray-700">
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent className="bg-[#0B1220] border-gray-800">
                  {templates.map(t => (
                    <SelectItem key={t.id} value={t.id} className="text-white flex items-center justify-between">
                      <span>{t.name}</span>
                      {t.key === recommendedKey && (
                        <Badge className="ml-2 bg-[#2563EB] text-white border-none">Recommended</Badge>
                      )}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
          {selectedTemplate && (
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label className="text-gray-300">Preview Subject</Label>
                <div className="bg-[#0F172A] border border-gray-700 rounded-lg p-3 text-gray-200">
                  {replaceTemplateVariables(selectedTemplate.subject, lead)}
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Preview Body</Label>
                <div
                  className="bg-[#0F172A] border border-gray-700 rounded-lg p-3 text-gray-200 max-h-64 overflow-y-auto"
                  dangerouslySetInnerHTML={{
                    __html: replaceTemplateVariables(selectedTemplate.body_html, lead),
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="pt-4">
          <Button variant="ghost" onClick={onClose} disabled={isSending} className="text-gray-300">
            Cancel
          </Button>
          <Button onClick={handleSend} disabled={isSending || !selectedTemplateId} className="bg-[#2563EB] hover:bg-[#1D4ED8]">
            {isSending ? "Sending..." : "Send Email"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
