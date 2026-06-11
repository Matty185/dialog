import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import MotionReveal from "@/components/MotionReveal";
import { resources } from "@/content/siteData";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "resources_page" });
  return {
    title: t("heading"),
    description:
      locale === "pl"
        ? "Artykuły i materiały o psychoterapii psychodynamicznej, wyborze terapeuty i pierwszej sesji."
        : "Articles and resources about psychodynamic psychotherapy, choosing a therapist, and your first session.",
  };
}

export default function ResourcesPage() {
  const t = useTranslations("resources_page");
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
              className="font-display text-brand-ink mb-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 500 }}
            >
              {t("heading")}
            </h1>
            <p className="font-body text-brand-muted text-base leading-relaxed max-w-2xl">
              {t("intro")}
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Resource cards — fed from siteData.ts (Supabase-ready shape) */}
      <section className="bg-brand-cream py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((resource, i) => (
              <MotionReveal key={resource.id} delay={i * 0.08}>
                {/* placeholder — is_placeholder flag used here */}
                <div className="bg-brand-paper border border-brand-border rounded-md p-8 flex flex-col gap-4 h-full hover:border-brand-teal transition-colors">
                  <h2 className="font-display text-brand-ink text-xl leading-snug font-medium">
                    {locale === "pl" ? resource.title_pl : resource.title_en}
                  </h2>
                  <p className="font-body text-brand-muted text-sm leading-relaxed flex-1">
                    {locale === "pl" ? resource.summary_pl : resource.summary_en}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-brand-muted">
                    {resource.is_placeholder ? t("coming_soon") : (
                      <>
                        {t("read_more")} <ArrowRight size={12} />
                      </>
                    )}
                  </span>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
