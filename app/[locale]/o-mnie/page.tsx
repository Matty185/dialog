import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import MotionReveal from "@/components/MotionReveal";
import PlaceholderSilhouette from "@/components/PlaceholderSilhouette";
import { practitioner } from "@/content/siteData";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("heading"),
    description:
      locale === "pl"
        ? "Sylwia Matijuk — psycholog i psychoterapeuta z 23-letnim doświadczeniem. Dublin 7."
        : "Sylwia Matijuk — psychologist and psychotherapist with 23 years of experience. Dublin 7.",
  };
}

export default function AboutPage() {
  const t = useTranslations("about");
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
              className="font-display text-brand-ink mb-3 leading-tight"
              style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 500 }}
            >
              {t("heading")}
            </h1>
            <p className="font-body text-brand-muted text-lg">{t("role")}</p>
          </MotionReveal>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-brand-cream py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <MotionReveal className="lg:col-span-2">
              <div className="prose prose-lg max-w-none font-body text-brand-muted leading-relaxed space-y-5">
                {t("bio_placeholder")
                  .split("\n\n")
                  .filter((p) => !p.startsWith("TODO_CLIENT"))
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                {/* TODO_CLIENT: Final bio to be provided by Sylwia */}
              </div>
            </MotionReveal>

            <MotionReveal delay={0.2} className="flex flex-col items-center gap-6 pt-2">
              <PlaceholderSilhouette size={240} />
              {/* TODO_CLIENT: Replace PlaceholderSilhouette with <Image> when photo is provided */}
              <blockquote className="font-display text-lg italic text-brand-teal-deep text-center leading-relaxed">
                &ldquo;{t("pullquote")}&rdquo;
              </blockquote>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-brand-paper border-t border-brand-border py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="mb-12">
            <h2
              className="font-display text-brand-ink"
              style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 500 }}
            >
              {t("credentials_heading")}
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience badge */}
            <MotionReveal>
              <div className="bg-brand-teal-deep text-white rounded-md p-8 flex items-center gap-6">
                <span className="font-display text-5xl font-light">{practitioner.experience_years}</span>
                <span className="font-body text-white/80 text-base leading-snug">
                  {t("experience_label")}
                </span>
              </div>
            </MotionReveal>

            {/* Education list */}
            {practitioner.education.map((edu, i) => (
              <MotionReveal key={i} delay={i * 0.08}>
                <div className="bg-brand-cream border border-brand-border rounded-md p-6">
                  <p className="font-body text-sm font-semibold text-brand-ink mb-1">
                    {locale === "pl" ? edu.institution_pl : edu.institution_en}
                  </p>
                  <p className="font-body text-sm text-brand-muted">
                    {locale === "pl" ? edu.degree_pl : edu.degree_en}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-brand-cream py-20 md:py-28 border-t border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <h2
              className="font-display text-brand-ink mb-8"
              style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 500 }}
            >
              {t("approach_heading")}
            </h2>
            <p className="font-body text-brand-muted leading-relaxed">
              {/* TODO_CLIENT: Approach paragraph to be provided */}
              {t("approach_placeholder")}
            </p>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
