"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  preferred_contact: z.enum(["email", "phone", "whatsapp"]),
  message: z.string().min(5, "Please add a message"),
  locale: z.string(),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full bg-brand-cream border border-brand-border text-brand-ink font-body text-sm px-4 py-3 rounded-md placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-teal transition-colors";
const labelClass =
  "block font-body font-semibold text-xs uppercase tracking-wider text-brand-muted mb-2";

export default function ContactForm() {
  const t = useTranslations("contact_page");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { preferred_contact: "email", locale: "pl" },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/DIALOG_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // Silent — form not critical path
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center mx-auto mb-5">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-teal-deep" stroke="currentColor" strokeWidth={2}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-brand-ink mb-2">{t("form_success_heading")}</h3>
        <p className="font-body text-brand-muted text-sm">{t("form_success_body")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      {/* Hidden locale field */}
      <input type="hidden" {...register("locale")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t("form_name")} *</label>
          <input
            {...register("name")}
            placeholder={t("form_name_placeholder")}
            className={cn(inputClass, errors.name && "border-red-400")}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>{t("form_email")} *</label>
          <input
            type="email"
            {...register("email")}
            placeholder={t("form_email_placeholder")}
            className={cn(inputClass, errors.email && "border-red-400")}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>{t("form_phone")}</label>
        <input
          type="tel"
          {...register("phone")}
          placeholder={t("form_phone_placeholder")}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>{t("form_contact")} *</label>
        <div className="flex gap-4">
          {(["email", "phone", "whatsapp"] as const).map((opt) => (
            <label key={opt} className="flex items-center gap-2 font-body text-sm text-brand-ink cursor-pointer">
              <input
                type="radio"
                value={opt}
                {...register("preferred_contact")}
                className="accent-brand-teal-deep"
              />
              {t(`form_contact_${opt}` as "form_contact_email" | "form_contact_phone" | "form_contact_whatsapp")}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>{t("form_message")} *</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder={t("form_message_placeholder")}
          className={cn(inputClass, "resize-none", errors.message && "border-red-400")}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="self-start bg-brand-teal-deep text-white font-body text-sm font-medium px-7 py-3.5 rounded-md hover:bg-brand-teal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? t("form_submitting") : t("form_submit")}
      </button>
    </form>
  );
}
