"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, ArrowRight, Stethoscope } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/aceternity/background-gradient-animation";
import { PlaceholdersAndVanishInput } from "@/components/aceternity/placeholders-and-vanish-input";
import { MovingBorderButton } from "@/components/aceternity/moving-border";
import { ThankYouState } from "./ThankYouState";
import { GuaranteeBadge } from "./GuaranteeBadge";
import { LINKS } from "@/config/links";
import { supabase } from "@/integrations/supabase/client";
import { sendLeadEmail } from "@/lib/sendLeadEmail";
import {
  nameSchema,
  clinicSchema,
  phoneINSchema,
  optionalEmailSchema,
  citySchema,
  messageSchema,
  demoFocusSchema,
  roleSchema,
  ROLE_OPTIONS,
} from "@/lib/validation";

const schema = z.object({
  clinicName: clinicSchema,
  yourName: nameSchema,
  role: roleSchema,
  phone: phoneINSchema,
  email: optionalEmailSchema,
  city: citySchema,
  demoFocus: demoFocusSchema,
  message: messageSchema,
});
type Values = z.input<typeof schema>;

const inputCls =
  "w-full h-11 rounded-xl bg-background/90 border border-border px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition aria-[invalid=true]:border-rose-500";

const errCls = "mt-1 text-xs text-rose-500 font-medium";

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [clinicName, setClinicName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      clinicName: "",
      yourName: "",
      role: undefined as unknown as Values["role"],
      phone: "",
      email: "",
      city: "",
      demoFocus: "",
      message: "",
    },
  });

  const onSubmit = async (raw: Values) => {
    const data = schema.parse(raw); // get transformed (normalized phone)
    const combinedMessage = [
      data.demoFocus ? `Specific Demo Request: ${data.demoFocus}` : null,
      data.message ? `Practice Notes: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      const { error } = await supabase.from("leads").insert({
        name: data.yourName,
        role: data.role,
        email: data.email || `noemail-${Date.now()}@dentpixel.com`,
        phone: data.phone,
        school: data.clinicName, // database column retained for backward compatibility
        city: data.city,
        message: combinedMessage,
        source: "contact-form",
      });
      if (error) throw error;

      let emailResult: { ok: boolean; visitor: string; internal: string; error?: string } | null = null;
      if (data.email) {
        emailResult = await sendLeadEmail({
          source: "contact-form",
          name: data.yourName,
          email: data.email,
          phone: data.phone,
          school: data.clinicName,
          role: data.role,
          city: data.city,
          message: combinedMessage,
        });
      }

      reset();
      setClinicName("");
      setSubmitted(true);

      if (!data.email) {
        toast.success("Request received!", {
          description: "We saved your practice details. We'll be in touch on WhatsApp within 24 hours.",
        });
      } else if (!emailResult?.ok || emailResult.visitor === "rejected") {
        toast.success("Request received!", {
          description:
            emailResult?.error ||
            "We saved your details. We'll be in touch directly on WhatsApp.",
        });
      } else {
        toast.success("Request received!", {
          description: "Confirmation email is on its way. Check your inbox.",
        });
      }
    } catch (err: any) {
      console.error("Contact submit failed details:", {
        message: err?.message,
        details: err?.details,
        hint: err?.hint,
        code: err?.code,
        error: err,
      });
      toast.error("Couldn't send right now", {
        description: "Please try again or message us on WhatsApp.",
      });
    }
  };

  return (
    <section id="contact" className="relative">
      <BackgroundGradientAnimation containerClassName="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs uppercase tracking-wider text-white mb-5 font-semibold backdrop-blur-sm">
              <Stethoscope className="w-3.5 h-3.5 text-cyan-300" /> Book a Live Demo
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Give Your Clinic a Modern Front Desk and Frictionless Management?
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-md leading-relaxed">
              Schedule a friendly 15-minute walkthrough. We&apos;ll show you how DentPixel works with your clinic&apos;s services, doctors, and schedule.
            </p>
            <div className="mt-10 space-y-5">
              <a href="mailto:hello@dentpixel.com" className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Email Us</div>
                  <div className="text-white font-medium group-hover:text-cyan-300 transition">hello@dentpixel.com</div>
                </div>
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5a] transition shadow-[0_4px_20px_rgba(37,211,102,0.35)]"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Location</div>
                  <div className="text-white font-medium">India 🇮🇳</div>
                  <div className="text-sm text-white/70">Serving dental clinics nationwide</div>
                </div>
              </div>
            </div>
          </div>

          {submitted ? (
            <ThankYouState
              title="Request received! 🎉"
              subtitle="We'll reach out within 24 hours with your free clinic demo. While you wait, chat with us directly on WhatsApp."
              whatsappMessage="Hi%2C%20I%20just%20submitted%20the%20clinic%20demo%20request%20form%20on%20DentPixel."
              onReset={() => setSubmitted(false)}
              resetLabel="Submit another request"
            />
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl bg-card/95 backdrop-blur-xl border border-border p-6 sm:p-8 shadow-2xl text-foreground"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block font-semibold">
                    Clinic Name *
                  </label>
                  <PlaceholdersAndVanishInput
                    name="clinicName"
                    value={clinicName}
                    onChange={(e) => {
                      setClinicName(e.target.value);
                      setValue("clinicName", e.target.value, { shouldValidate: true });
                    }}
                    useForm={false}
                    placeholders={[
                      "Apex Dental Studio…",
                      "SmileCraft Dental Care…",
                      "DentCare Clinic…",
                      "Zenith Dental Aesthetics…",
                    ]}
                  />
                  {errors.clinicName && <p className={errCls}>{errors.clinicName.message}</p>}
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block font-semibold">
                    Your Name *
                  </label>
                  <input
                    {...register("yourName")}
                    maxLength={60}
                    autoComplete="name"
                    aria-invalid={!!errors.yourName}
                    className={inputCls}
                    placeholder="Dr. Rajesh Singh"
                  />
                  {errors.yourName && <p className={errCls}>{errors.yourName.message}</p>}
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block font-semibold">
                    Your Role *
                  </label>
                  <select
                    {...register("role")}
                    defaultValue=""
                    aria-invalid={!!errors.role}
                    className={inputCls + " appearance-none cursor-pointer"}
                  >
                    <option value="" disabled className="bg-card text-muted-foreground">
                      Select role
                    </option>
                    {ROLE_OPTIONS.map((r) => (
                      <option key={r} className="bg-card text-foreground" value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.role && <p className={errCls}>{errors.role.message}</p>}
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block font-semibold">
                    Phone *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    maxLength={14}
                    aria-invalid={!!errors.phone}
                    className={inputCls}
                    placeholder="9876543210"
                  />
                  {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block font-semibold">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    aria-invalid={!!errors.email}
                    className={inputCls}
                    placeholder="dr.rajesh@clinic.com"
                  />
                  {errors.email && <p className={errCls}>{errors.email.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block font-semibold">
                    City
                  </label>
                  <input
                    {...register("city")}
                    maxLength={80}
                    autoComplete="address-level2"
                    aria-invalid={!!errors.city}
                    className={inputCls}
                    placeholder="e.g. Bangalore, Karnataka"
                  />
                  {errors.city && <p className={errCls}>{errors.city.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block font-semibold">
                    Anything specific you&apos;d like to see in the demo?{" "}
                    <span className="normal-case font-normal text-muted-foreground">(Optional)</span>
                  </label>
                  <textarea
                    {...register("demoFocus")}
                    rows={2}
                    maxLength={1000}
                    className="w-full rounded-xl bg-background/90 border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    placeholder="e.g. Tooth charting, multi-doctor scheduling, treatment-linked billing, patient recalls…"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block font-semibold">
                    Practice Notes / Additional Details{" "}
                    <span className="normal-case font-normal text-muted-foreground">(Optional)</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    maxLength={1000}
                    aria-invalid={!!errors.message}
                    className="w-full rounded-xl bg-background/90 border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition aria-[invalid=true]:border-rose-500"
                    placeholder="Tell us about your operatory setup, specialties, or current scheduling workflow."
                  />
                  {errors.message && <p className={errCls}>{errors.message.message}</p>}
                </div>
              </div>
              <div className="mt-6">
                <MovingBorderButton
                  as="button"
                  type="submit"
                  disabled={isSubmitting}
                  borderRadius="14px"
                  containerClassName="w-full !block"
                  className="!w-full !py-3 text-sm sm:text-base font-semibold inline-flex items-center justify-center gap-2 !bg-[#0F1F2E] !text-white"
                  duration={3000}
                >
                  {isSubmitting ? "Sending…" : <>Send My Free Clinic Demo Request <ArrowRight className="w-4 h-4" /></>}
                </MovingBorderButton>
                <div className="mt-4 flex justify-center">
                  <GuaranteeBadge />
                </div>
              </div>
            </form>
          )}
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}
