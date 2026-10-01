import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import MotionReveal from "@/components/MotionReveal";
import { services, practitioner } from "@/content/siteData";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "services_page" });
  return {
    title: t("heading"),
    description:
      locale === "pl"
        ? "Psychoterapia indywidualna, par, rodzin, dzieci i młodzieży. Diagnoza psychologiczna. Dublin 7 i online."
        : "Individual, couples, family, child and adolescent psychotherapy. Psychological assessment. Dublin 7 and online.",
  };
}

export default function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = useTranslations("services_page");
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-cream border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-brand-teal-deep block mb-4">
              {t("eyebrow")}
            </span>
            <h1
              className="font-display text-brand-ink mb-6 leading-tight"
              style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 500 }}
            >
              {t("heading")}
            </h1>
            <div className="inline-block bg-brand-mint text-brand-teal-deep font-body text-sm font-medium px-5 py-2.5 rounded-md">
              {practitioner.pricing_pl && locale === "pl"
                ? t("pricing_note")
                : t("pricing_note")}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-brand-cream py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {services.map((service, i) => (
              <MotionReveal key={service.id} delay={i * 0.05}>
                <div
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-4 gap-6 border-b border-brand-border pb-12"
                >
                  <div className="lg:col-span-1">
                    <h2
                      className="font-display text-brand-teal-deep leading-snug"
                      style={{ fontSize: "clamp(1.1rem,2vw,1.35rem)", fontWeight: 500 }}
                    >
                      {locale === "pl" ? service.name_pl : service.name_en}
                    </h2>
                    <span className="font-body text-xs text-brand-muted mt-2 block">
                      {t("format_label")}: {locale === "pl" ? service.format_pl : service.format_en}
                    </span>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="font-body text-brand-muted leading-relaxed">
                      {locale === "pl" ? service.desc_pl : service.desc_en}
                    </p>
                    {/* TODO_CLIENT: Extended description for each service */}
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
