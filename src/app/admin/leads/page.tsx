"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, Edit, Trash2, Mail } from "lucide-react";
import { LeadForm } from "@/features/leads/components/LeadForm";
import { SendEmailModal } from "@/features/leads/components/SendEmailModal";
import { getLeads, createLead, deleteLead } from "@/features/leads/actions/lead.actions";
import { sendLeadEmail } from "@/features/leads/actions/send-email.action";
import type { SchoolLead } from "@/features/leads/types/lead.types";
import { LeadStatus } from "@/features/leads/schemas/lead.schema";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

export default function LeadsPage() {
  const [leads, setLeads] = useState<SchoolLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<(typeof LeadStatus)[number] | null>(null);
  const [stateFilter, setStateFilter] = useState<string | null>(null);
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [sendEmailModal, setSendEmailModal] = useState<{ isOpen: boolean; lead: SchoolLead | null }>({ isOpen: false, lead: null });
  const router = useRouter();

  const loadLeads = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getLeads({
        search: search || undefined,
        status: statusFilter || undefined,
        state: stateFilter || undefined,
        city: cityFilter || undefined,
      });
      setLeads(data);
    } catch (e) {
      toast.error(`Failed to load leads: ${(e as Error).message}`);
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, stateFilter, cityFilter]);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  const stats = {
    total: leads.length,
    contacted: leads.filter(l => l.status === "contacted").length,
    interested: leads.filter(l => l.status === "interested").length,
    converted: leads.filter(l => l.status === "converted").length,
  };

  const uniqueStates = [...new Set(leads.map(l => l.state).filter(Boolean))];
  const uniqueCities = [...new Set(leads.map(l => l.city).filter(Boolean))];

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

  const handleAddLead = async (data: any) => {
    try {
      await createLead(data);
      toast.success("Lead created!");
      setIsAddDialogOpen(false);
      loadLeads();
    } catch (e) {
      toast.error(`Failed to create lead: ${(e as Error).message}`);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      await deleteLead(id);
      toast.success("Lead deleted!");
      loadLeads();
    } catch (e) {
      toast.error(`Failed to delete lead: ${(e as Error).message}`);
    }
  };

  const handleSendEmail = async (leadId: string, templateId: string) => {
    try {
      await sendLeadEmail(leadId, templateId);
      toast.success("Email sent!");
      loadLeads();
    } catch (e) {
      toast.error(`Failed to send email: ${(e as Error).message}`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Leads</h2>
        <Button onClick={() => setIsAddDialogOpen(true)} className="bg-[#2563EB] hover:bg-[#1D4ED8]">
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#0B1220] border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm">Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-400">{stats.total}</p>
          </CardContent>
        </Card>
        <Card className="bg-[#0B1220] border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm">Contacted</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-400">{stats.contacted}</p>
          </CardContent>
        </Card>
        <Card className="bg-[#0B1220] border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm">Interested</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-400">{stats.interested}</p>
          </CardContent>
        </Card>
        <Card className="bg-[#0B1220] border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm">Converted</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-emerald-400">{stats.converted}</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters & Search */}
      <Card className="bg-[#0B1220] border-gray-800">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <Input
                placeholder="Search by school, email or contact..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#0F172A] border-gray-700 text-white"
              />
            </div>
            <Select value={statusFilter || "all"} onValueChange={(v) => setStatusFilter(v === "all" ? null : (v as (typeof LeadStatus)[number]))}>
                <SelectTrigger className="bg-[#0F172A] border-gray-700">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-[#0B1220] border-gray-800">
                  <SelectItem value="all" className="text-white">All Statuses</SelectItem>
                  {LeadStatus.map(status => (
                    <SelectItem key={status} value={status} className="text-white">
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={stateFilter || "all"} onValueChange={(v) => setStateFilter(v === "all" ? null : v)}>
                <SelectTrigger className="bg-[#0F172A] border-gray-700">
                  <SelectValue placeholder="Filter by state" />
                </SelectTrigger>
                <SelectContent className="bg-[#0B1220] border-gray-800">
                  <SelectItem value="all" className="text-white">All States</SelectItem>
                  {uniqueStates.map(state => (
                    <SelectItem key={state} value={state!} className="text-white">
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={cityFilter || "all"} onValueChange={(v) => setCityFilter(v === "all" ? null : v)}>
                <SelectTrigger className="bg-[#0F172A] border-gray-700">
                  <SelectValue placeholder="Filter by city" />
                </SelectTrigger>
                <SelectContent className="bg-[#0B1220] border-gray-800">
                  <SelectItem value="all" className="text-white">All Cities</SelectItem>
                  {uniqueCities.map(city => (
                    <SelectItem key={city} value={city!} className="text-white">
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card className="bg-[#0B1220] border-gray-800">
        <CardContent className="pt-6">
          {loading ? (
            <div className="text-center py-10 text-gray-400">Loading...</div>
          ) : leads.length === 0 ? (
            <div className="text-center py-10 text-gray-400">No leads found</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-gray-800">
                  <TableHead className="text-gray-400">School</TableHead>
                  <TableHead className="text-gray-400">Contact</TableHead>
                  <TableHead className="text-gray-400">Email</TableHead>
                  <TableHead className="text-gray-400">Location</TableHead>
                  <TableHead className="text-gray-400">Status</TableHead>
                  <TableHead className="text-gray-400">Last Email</TableHead>
                  <TableHead className="text-gray-400 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id} className="border-gray-800">
                    <TableCell className="text-white font-medium">{lead.school_name}</TableCell>
                    <TableCell className="text-gray-300">{lead.contact_person_name || "-"}</TableCell>
                    <TableCell className="text-gray-300">{lead.email}</TableCell>
                    <TableCell className="text-gray-300">{[lead.city, lead.state].filter(Boolean).join(", ") || "-"}</TableCell>
                    <TableCell>{getStatusBadge(lead.status)}</TableCell>
                    <TableCell className="text-gray-300">
                      {lead.email_sent_at ? (
                        <div className="space-y-1">
                          <span className="text-white text-sm">{lead.last_email_template || "Email"}</span>
                          <div className="text-gray-500 text-xs">{new Date(lead.email_sent_at).toLocaleDateString()}</div>
                        </div>
                      ) : "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => router.push(`/admin/leads/${lead.id}`)}
                          title="View"
                        >
                          <Eye className="h-4 w-4 text-gray-400" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSendEmailModal({ isOpen: true, lead })}
                          title="Send Email"
                        >
                          <Mail className="h-4 w-4 text-gray-400" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteLead(lead.id)}
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4 text-red-400" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Add Lead Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="bg-[#0B1220] border-gray-800 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle>Add New Lead</DialogTitle>
          </DialogHeader>
          <LeadForm onSubmit={handleAddLead} onCancel={() => setIsAddDialogOpen(false)} />
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
