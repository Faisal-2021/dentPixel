"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { LINKS } from "@/config/links";
import { emailSchema } from "@/lib/validation";

const schema = z.object({ email: emailSchema });
type Values = z.infer<typeof schema>;

export function NewsletterInline() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { email: "" } });

  const onSubmit = async ({ email }: Values) => {
    const { error } = await supabase.from("leads").insert({
      name: email.split("@")[0],
      email,
      phone: "",
      school: "",
      source: "blog-newsletter",
    });
    if (error) {
      toast.error("Could not subscribe — try again");
      return;
    }
    setDone(true);
    reset();
    toast.success("Subscribed — talk soon");
  };

  return (
    <div className="not-prose my-12 rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/10 via-[#7C3AED]/5 to-transparent p-6 sm:p-8 backdrop-blur">
      {!done ? (
        <>
          <div className="text-xs uppercase tracking-wider text-[#A5B4FC] font-semibold">
            Get the next one
          </div>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
            CBSE & school-website tips, twice a month.
          </h3>
          <p className="mt-2 text-white/60 text-[15px]">
            Practical, India-specific, no fluff. Unsubscribe any time.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-5 flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <input
                type="email"
                autoComplete="email"
                maxLength={254}
                {...register("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "newsletter-email-err" : undefined}
                placeholder="you@yourschool.in"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2563EB] transition-colors aria-[invalid=true]:border-red-400/60"
              />
              {errors.email && (
                <p id="newsletter-email-err" className="mt-1 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity sm:self-start"
            >
              {isSubmitting ? "Subscribing…" : "Subscribe"} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-2">
          <div className="text-xl font-display font-bold text-white">You're in. ✨</div>
          <p className="mt-2 text-white/60">
            Want to get a free school-website audit while you wait?
          </p>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE57] px-5 py-3 text-sm font-semibold text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp us now
          </a>
        </div>
      )}
    </div>
  );
}
