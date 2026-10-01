import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import MotionReveal from "@/components/MotionReveal";
import ContactForm from "@/components/ContactForm";
import { practitioner } from "@/content/siteData";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "contact_page" });
  return {
    title: t("heading"),
    description:
      locale === "pl"
        ? "Umów wizytę z Sylwią Matijuk. Psychoterapia w Dublinie i online. +353 89 472 5374."
        : "Book a session with Sylwia Matijuk. Psychotherapy in Dublin and online. +353 89 472 5374.",
  };
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = useTranslations("contact_page");
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-cream border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-brand-teal-deep block mb-4">
              {t("eyebrow")}
            </span>
            <h1
              className="font-display text-brand-ink leading-tight"
              style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 500 }}
            >
              {t("heading")}
            </h1>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-brand-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact details */}
            <MotionReveal className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="font-display text-xl text-brand-ink mb-5 font-medium">
                  {t("details_heading")}
                </h2>
                <div className="flex flex-col gap-4">
                  <a
                    href={`tel:${practitioner.phone_raw}`}
                    className="flex items-center gap-3 font-body text-sm text-brand-ink hover:text-brand-teal-deep transition-colors"
                  >
                    <Phone size={16} className="text-brand-teal shrink-0" />
                    <div>
                      <span className="block text-xs text-brand-muted uppercase tracking-wider mb-0.5">
                        {t("phone_label")}
                      </span>
                      {practitioner.phone}
                    </div>
                  </a>
                  <a
                    href={`mailto:${practitioner.email}`}
                    className="flex items-center gap-3 font-body text-sm text-brand-ink hover:text-brand-teal-deep transition-colors"
                  >
                    <Mail size={16} className="text-brand-teal shrink-0" />
                    <div>
                      <span className="block text-xs text-brand-muted uppercase tracking-wider mb-0.5">
                        {t("email_label")}
                      </span>
                      {practitioner.email}
                    </div>
                  </a>
                  <div className="flex items-start gap-3 font-body text-sm text-brand-ink">
                    <MapPin size={16} className="text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-brand-muted uppercase tracking-wider mb-0.5">
                        {t("address_label")}
                      </span>
                      {practitioner.address}
                    </div>
                  </div>
                  <div className="flex items-start gap-3 font-body text-sm text-brand-ink">
                    <Clock size={16} className="text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-brand-muted uppercase tracking-wider mb-0.5">
                        {t("hours_label")}
                      </span>
                      {/* TODO_CLIENT: Confirm working hours */}
                      {locale === "pl" ? practitioner.hours_pl : practitioner.hours_en}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="font-display text-lg text-brand-ink mb-4 font-medium">
                  {t("map_heading")}
                </h3>
                <div className="rounded-md overflow-hidden border border-brand-border aspect-[4/3]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.3!2d-6.2844!3d53.3528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e90a0c8b2e7%3A0x1234567890abcdef!2sPrussia%20St%2C%20Dublin%207!5e0!3m2!1sen!2sie!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dialog Family Therapy Centre location"
                  />
                </div>
              </div>
            </MotionReveal>

            {/* Form */}
            <MotionReveal delay={0.2} className="lg:col-span-3">
              <div className="bg-brand-paper border border-brand-border rounded-md p-8 md:p-10">
                <p className="font-body text-sm text-brand-muted leading-relaxed mb-8 p-4 bg-brand-mint/30 rounded-md border border-brand-mint">
                  {t("booking_note")}
                </p>
                <ContactForm />
              </div>
            </MotionReveal>

          </div>
        </div>
      </section>
    </>
  );
}
