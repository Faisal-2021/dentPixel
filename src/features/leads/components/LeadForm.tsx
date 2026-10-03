/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormData } from "../schemas/lead.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SchoolLead } from "../types/lead.types";

interface LeadFormProps {
  initialData?: SchoolLead;
  onSubmit: (data: LeadFormData) => Promise<void>;
  onCancel?: () => void;
}

export function LeadForm({ initialData, onSubmit, onCancel }: LeadFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema) as any,
    defaultValues: initialData ? {
      school_name: initialData.school_name,
      principal_name: initialData.principal_name || "",
      contact_person_name: initialData.contact_person_name || "",
      email: initialData.email,
      mobile: initialData.mobile || "",
      website: initialData.website || "",
      city: initialData.city || "",
      state: initialData.state || "",
      notes: initialData.notes || "",
      status: initialData.status,
    } : {
      school_name: "",
      principal_name: "",
      contact_person_name: "",
      email: "",
      mobile: "",
      website: "",
      city: "",
      state: "",
      notes: "",
      status: "new",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        school_name: initialData.school_name,
        principal_name: initialData.principal_name || "",
        contact_person_name: initialData.contact_person_name || "",
        email: initialData.email,
        mobile: initialData.mobile || "",
        website: initialData.website || "",
        city: initialData.city || "",
        state: initialData.state || "",
        notes: initialData.notes || "",
        status: initialData.status,
      });
    }
  }, [initialData, reset]);

  return (
    <Card className="bg-[#0B1220] border-gray-800">
      <CardHeader>
        <CardTitle className="text-white">{initialData ? "Edit Lead" : "Add New Lead"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit((data) => onSubmit(data as any))} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="school_name" className="text-gray-300">School Name *</Label>
              <Input
                id="school_name"
                placeholder="Enter school name"
                className="bg-[#0F172A] border-gray-700 text-white"
                {...register("school_name")}
              />
              {errors.school_name && (
                <p className="text-red-400 text-sm">{errors.school_name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="principal_name" className="text-gray-300">Principal Name</Label>
              <Input
                id="principal_name"
                placeholder="Enter principal name"
                className="bg-[#0F172A] border-gray-700 text-white"
                {...register("principal_name")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact_person_name" className="text-gray-300">Contact Person</Label>
              <Input
                id="contact_person_name"
                placeholder="Enter contact person name"
                className="bg-[#0F172A] border-gray-700 text-white"
                {...register("contact_person_name")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                className="bg-[#0F172A] border-gray-700 text-white"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-gray-300">Mobile</Label>
              <Input
                id="mobile"
                placeholder="Enter mobile number"
                className="bg-[#0F172A] border-gray-700 text-white"
                {...register("mobile")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website" className="text-gray-300">Website</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://example.com"
                className="bg-[#0F172A] border-gray-700 text-white"
                {...register("website")}
              />
              {errors.website && (
                <p className="text-red-400 text-sm">{errors.website.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="city" className="text-gray-300">City</Label>
              <Input
                id="city"
                placeholder="Enter city"
                className="bg-[#0F172A] border-gray-700 text-white"
                {...register("city")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state" className="text-gray-300">State</Label>
              <Input
                id="state"
                placeholder="Enter state"
                className="bg-[#0F172A] border-gray-700 text-white"
                {...register("state")}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-gray-300">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Add any notes here..."
              className="bg-[#0F172A] border-gray-700 text-white"
              rows={4}
              {...register("notes")}
            />
          </div>
          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={isSubmitting} className="bg-[#2563EB] hover:bg-[#1D4ED8]">
              {isSubmitting ? "Saving..." : initialData ? "Update Lead" : "Add Lead"}
            </Button>
            {onCancel && (
              <Button type="button" variant="ghost" onClick={onCancel} className="text-gray-300">
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
