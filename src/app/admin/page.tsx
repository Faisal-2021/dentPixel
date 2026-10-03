"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { getLeads } from "@/features/leads/actions/lead.actions";
import type { SchoolLead } from "@/features/leads/types/lead.types";
import { toast } from "sonner";

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
  };
  return (
    <Badge variant="outline" className={colors[status] || colors.new}>
      {status}
    </Badge>
  );
};

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<SchoolLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getLeads();
        setLeads(data);
      } catch (e) {
        toast.error("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const stats = {
    total: leads.length,
    contacted: leads.filter(l => l.email_sent).length,
    pending: leads.filter(l => l.status === "new" || l.status === "follow_up").length,
    converted: leads.filter(l => l.status === "converted").length,
  };

  const recentLeads = leads.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <Button variant="ghost" onClick={() => router.push("/admin/leads")} className="text-gray-300">
          View All Leads <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-[#0B1220] border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm font-medium">Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-400">{stats.total}</p>
          </CardContent>
        </Card>
        <Card className="bg-[#0B1220] border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm font-medium">Emails Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-400">{stats.contacted}</p>
          </CardContent>
        </Card>
        <Card className="bg-[#0B1220] border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm font-medium">Pending Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-yellow-400">{stats.pending}</p>
          </CardContent>
        </Card>
        <Card className="bg-[#0B1220] border-gray-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm font-medium">Converted</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-emerald-400">{stats.converted}</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Leads Table */}
      <Card className="bg-[#0B1220] border-gray-800 mt-8">
        <CardHeader>
          <CardTitle className="text-white">Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-10 text-gray-400">Loading...</div>
          ) : recentLeads.length === 0 ? (
            <div className="text-center py-10 text-gray-400">No leads yet</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-gray-800">
                  <TableHead className="text-gray-400">School</TableHead>
                  <TableHead className="text-gray-400">Contact</TableHead>
                  <TableHead className="text-gray-400">Email</TableHead>
                  <TableHead className="text-gray-400">Status</TableHead>
                  <TableHead className="text-gray-400">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentLeads.map((lead) => (
                  <TableRow key={lead.id} className="border-gray-800 cursor-pointer hover:bg-[#0F172A]" onClick={() => router.push(`/admin/leads/${lead.id}`)}>
                    <TableCell className="text-white font-medium">{lead.school_name}</TableCell>
                    <TableCell className="text-gray-300">{lead.contact_person_name || "-"}</TableCell>
                    <TableCell className="text-gray-300">{lead.email}</TableCell>
                    <TableCell>{getStatusBadge(lead.status)}</TableCell>
                    <TableCell className="text-gray-400">{new Date(lead.created_at).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
