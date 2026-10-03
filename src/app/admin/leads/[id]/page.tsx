"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Edit, Mail, Clock } from "lucide-react";
import { LeadForm } from "@/features/leads/components/LeadForm";
import { SendEmailModal } from "@/features/leads/components/SendEmailModal";
import { getLeadById, getLeadActivities, updateLead, changeLeadStatus } from "@/features/leads/actions/lead.actions";
import { sendLeadEmail } from "@/features/leads/actions/send-email.action";
import type { SchoolLead, LeadActivity } from "@/features/leads/types/lead.types";
import { LeadStatus, getRecommendedTemplateKey } from "@/features/leads/schemas/lead.schema";
import { toast } from "sonner";

export default function LeadDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [lead, setLead] = useState<SchoolLead | null>(null);
  const [activities, setActivities] = useState<LeadActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [sendEmailModal, setSendEmailModal] = useState<{ isOpen: boolean; lead: SchoolLead | null }>({ isOpen: false, lead: null });

  const loadLeadData = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const [leadData, activitiesData] = await Promise.all([
        getLeadById(id),
        getLeadActivities(id),
      ]);
      setLead(leadData);
      setActivities(activitiesData);
    } catch (e) {
      toast.error("Failed to load lead details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeadData();
  }, [id]);

  const handleUpdateLead = async (data: any) => {
    if (!id) return;
    try {
      await updateLead(id, data);
      toast.success("Lead updated!");
      setIsEditDialogOpen(false);
      loadLeadData();
    } catch (e) {
      toast.error("Failed to update lead");
    }
  };

  const handleStatusChange = async (newStatus: (typeof LeadStatus)[number]) => {
    if (!id || !lead) return;
    try {
      await changeLeadStatus(id, newStatus, lead.status);
      toast.success("Status updated!");
      loadLeadData();
    } catch (e) {
      toast.error("Failed to update status");
    }
  };

  const handleSendEmail = async (leadId: string, templateId: string) => {
    try {
      await sendLeadEmail(leadId, templateId);
      toast.success("Email sent!");
      loadLeadData();
    } catch (e) {
      toast.error("Failed to send email");
    }
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      new: "bg-blue-900/30 text-blue-400 border-blue-800",
      contacted: "bg-purple-900/30 text-purple-400 border-purple-800",
      interested: "bg-green-900/30 text-green-400 border-green-800",
      follow_up: "bg-yellow-900/30 text-yellow-400 border-yellow-800",
      meeting_scheduled: "bg-cyan-900/30 text-cyan-400 border-cyan-800",
      proposal_sent: "bg-orange-900/30 text-orange-400 border-orange-800",
      converted: "bg-emerald-900/30 text-emerald-400 border-emerald-800",
      not_interested: "bg-gray-900/30 text-gray-400 border-gray-800",
      cold_lead: "bg-slate-900/30 text-slate-400 border-slate-800",
    };
    return (
      <Badge variant="outline" className={colors[status] || colors.new}>
        {status}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-400">Loading...</div>
    );
  }

  if (!lead) {
    return (
      <div className="text-center py-20 text-gray-400">Lead not found</div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.back()} className="text-gray-300">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h2 className="text-2xl font-bold text-white">{lead.school_name}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#0B1220] border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Lead Information</CardTitle>
              <div className="flex gap-2">
                <Button onClick={() => setIsEditDialogOpen(true)} variant="ghost" className="text-gray-300">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button onClick={() => setSendEmailModal({ isOpen: true, lead })} className="bg-[#2563EB] hover:bg-[#1D4ED8]">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">School Name</p>
                  <p className="text-white font-medium">{lead.school_name}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Principal Name</p>
                  <p className="text-gray-200">{lead.principal_name || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Contact Person</p>
                  <p className="text-gray-200">{lead.contact_person_name || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-gray-200">{lead.email}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Mobile</p>
                  <p className="text-gray-200">{lead.mobile || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Website</p>
                  <p className="text-blue-400">{lead.website || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-200">{[lead.city, lead.state].filter(Boolean).join(", ") || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Status</p>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(lead.status)}
                    <Select value={lead.status} onValueChange={handleStatusChange}>
                      <SelectTrigger className="w-40 bg-[#0F172A] border-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0B1220] border-gray-800">
                        {LeadStatus.map(status => (
                          <SelectItem key={status} value={status} className="text-white">
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              {lead.notes && (
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-gray-400 text-sm">Notes</p>
                  <p className="text-gray-200 mt-2">{lead.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-[#0B1220] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Activity History
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activities.length === 0 ? (
                <p className="text-gray-400">No activities yet</p>
              ) : (
                <div className="space-y-4">
                  {activities.map(activity => (
                    <div key={activity.id} className="flex gap-4 pb-4 border-b border-gray-800 last:border-0">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center">
                          {activity.type === "lead_created" && <span className="text-blue-400">📋</span>}
                          {activity.type === "email_sent" && <span className="text-purple-400">✉️</span>}
                          {activity.type === "status_changed" && <span className="text-yellow-400">🔄</span>}
                          {activity.type === "note_added" && <span className="text-green-400">📝</span>}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{activity.title}</p>
                        {activity.description && <p className="text-gray-400 text-sm mt-1">{activity.description}</p>}
                        <p className="text-gray-500 text-xs mt-2">
                          {new Date(activity.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-[#0B1220] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Recommended Next Step</CardTitle>
            </CardHeader>
            <CardContent>
              {getRecommendedTemplateKey(lead.status) ? (
                <div className="space-y-3">
                  <p className="text-yellow-400">Send "{getRecommendedTemplateKey(lead.status)}" email</p>
                  <Button
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8]"
                    onClick={() => setSendEmailModal({ isOpen: true, lead })}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Recommended Email
                  </Button>
                </div>
              ) : (
                <p className="text-gray-400">Follow up manually based on the conversation</p>
              )}
            </CardContent>
          </Card>

          <Card className="bg-[#0B1220] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Email History</CardTitle>
            </CardHeader>
            <CardContent>
              {lead.email_sent ? (
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Last Sent</p>
                  <p className="text-white">{new Date(lead.email_sent_at!).toLocaleString()}</p>
                  {lead.last_email_template && (
                    <>
                      <p className="text-gray-400 text-sm mt-3">Template Used</p>
                      <p className="text-white">{lead.last_email_template}</p>
                    </>
                  )}
                </div>
              ) : (
                <p className="text-gray-400">No emails sent yet</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-[#0B1220] border-gray-800 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Lead</DialogTitle>
          </DialogHeader>
          <LeadForm initialData={lead} onSubmit={handleUpdateLead} onCancel={() => setIsEditDialogOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Send Email Modal */}
      {sendEmailModal.lead && (
        <SendEmailModal
          isOpen={sendEmailModal.isOpen}
          onClose={() => setSendEmailModal({ isOpen: false, lead: null })}
          lead={sendEmailModal.lead}
          onSend={handleSendEmail}
        />
      )}
    </div>
  );
}
