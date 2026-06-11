import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import MotionReveal from "@/components/MotionReveal";
import PlaceholderSilhouette from "@/components/PlaceholderSilhouette";
import { practitioner, services, testimonials } from "@/content/siteData";

// Hero is a client island for sequential animations
import HeroSection from "@/components/HeroSection";

const featuredServiceIds = [
  "individual-psychotherapy",
  "couples",
  "family-therapy",
  "online-sessions",
  "diagnosis",
  "codependency",
];

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const contactHref = locale === "pl" ? "/kontakt" : "/en/contact";
  const aboutHref = locale === "pl" ? "/o-mnie" : "/en/about";
  const servicesHref = locale === "pl" ? "/uslugi" : "/en/services";

  const featuredServices = featuredServiceIds
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean) as typeof services;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={t("hero.eyebrow")}
        name={practitioner.name}
        headline={t("hero.headline")}
        subline={t("hero.subline")}
        ctaPrimary={t("hero.cta_primary")}
        ctaSecondary={t("hero.cta_secondary")}
        ctaPrimaryHref={contactHref}
        ctaSecondaryHref={aboutHref}
      />

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionReveal>
            <p className="font-display text-2xl md:text-3xl text-brand-ink leading-relaxed mb-8">
              {t("intro.body")}
            </p>
            <Link
              href={aboutHref}
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-brand-teal-deep hover:text-brand-teal transition-colors"
            >
              {t("intro.cta")} <ArrowRight size={15} />
            </Link>
          </MotionReveal>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-paper py-20 md:py-32 border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="mb-12">
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-brand-teal-deep block mb-3">
              {t("services_section.eyebrow")}
            </span>
            <h2
              className="font-display text-brand-ink"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              {t("services_section.heading")}
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <MotionReveal key={service.id} delay={i * 0.08}>
                <div className="bg-brand-cream border border-brand-border rounded-md p-8 h-full hover:border-brand-teal transition-colors duration-300 hover:scale-[1.01]">
                  <h3 className="font-display text-lg text-brand-ink mb-3 leading-snug">
                    {locale === "pl" ? service.name_pl : service.name_en}
                  </h3>
                  <p className="font-body text-sm text-brand-muted leading-relaxed mb-4">
                    {locale === "pl" ? service.desc_pl : service.desc_en}
                  </p>
                  <span className="font-body text-xs text-brand-teal-deep font-medium">
                    {locale === "pl" ? service.format_pl : service.format_en}
                  </span>
                </div>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delay={0.2} className="mt-10 text-center">
            <Link
              href={servicesHref}
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-brand-teal-deep hover:text-brand-teal transition-colors"
            >
              {t("services_section.view_all")} <ArrowRight size={15} />
            </Link>
          </MotionReveal>
        </div>
      </section>

      {/* ── Impact strip ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-teal-deep to-brand-ink py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] items-center gap-12 lg:gap-0">

            {/* Quote */}
            <MotionReveal className="relative lg:pr-16">
              <span className="absolute -top-4 -left-2 font-display leading-none text-white/[0.07] select-none pointer-events-none" style={{ fontSize: "clamp(6rem,14vw,10rem)" }}>
                &ldquo;
              </span>
              <blockquote className="relative font-display text-2xl md:text-3xl text-white leading-relaxed mb-5">
                {t("impact.quote")}
              </blockquote>
              <p className="font-body text-white/60 text-base leading-relaxed">
                {t("impact.quote_sub")}
              </p>
            </MotionReveal>

            {/* Vertical divider */}
            <div className="hidden lg:block h-44 bg-white/15" />

            {/* Stat */}
            <MotionReveal delay={0.18} className="lg:pl-16">
              <p className="font-display text-brand-mint leading-none mb-4" style={{ fontSize: "clamp(5rem,12vw,8rem)" }}>
                {t("impact.stat")}
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-3">
                {t("impact.stat_body")}
              </p>
              <p className="font-body text-xs text-white/35 uppercase tracking-wide">
                {t("impact.stat_source")}
              </p>
            </MotionReveal>

          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-cream py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionReveal>
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-brand-teal-deep block mb-4">
                {t("approach.eyebrow")}
              </span>
              <h2
                className="font-display text-brand-ink mb-8 leading-tight"
                style={{ fontSize: "clamp(2rem,4vw,2.75rem)" }}
              >
                {t("approach.heading")}
              </h2>
              <div className="space-y-5 font-body text-brand-muted leading-relaxed">
                <p>{t("approach.p1")}</p>
                <p>{t("approach.p2")}</p>
                <p>{t("approach.p3")}</p>
              </div>
              {/* TODO_CLIENT: Approach copy to be approved */}
            </MotionReveal>

            <MotionReveal delay={0.2} className="flex flex-col items-center lg:items-end gap-8">
              <PlaceholderSilhouette size={260} />
              <blockquote className="font-display text-xl italic text-brand-teal-deep text-center lg:text-right max-w-xs leading-relaxed">
                &ldquo;{t("approach.heading")}&rdquo;
              </blockquote>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="bg-brand-mint/30 py-20 md:py-32 border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="mb-12 text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-brand-teal-deep block mb-3">
              {t("testimonials.eyebrow")}
            </span>
            <h2
              className="font-display text-brand-ink"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              {t("testimonials.heading")}
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <MotionReveal key={item.id} delay={i * 0.08}>
                {/* placeholder — replace when real testimonials arrive */}
                <div className="bg-brand-paper border border-brand-border rounded-md p-8 h-full">
                  <p className="font-display text-lg text-brand-ink leading-relaxed mb-6 italic">
                    &ldquo;{locale === "pl" ? item.quote_pl : item.quote_en}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <PlaceholderSilhouette size={36} />
                    <div>
                      <p className="font-body text-sm font-medium text-brand-ink">
                        {item.name_initial}
                      </p>
                      <p className="font-body text-xs text-brand-muted">
                        {locale === "pl" ? item.role_pl : item.role_en}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-ink py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionReveal>
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-brand-teal block mb-4">
                {t("final_cta.eyebrow")}
              </span>
              <h2
                className="font-display text-white mb-4 leading-tight"
                style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
              >
                {t("final_cta.heading")}
              </h2>
              <p className="font-body text-white/60 text-base leading-relaxed">
                {t("final_cta.body")}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.2} className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 text-white/70 font-body text-sm">
                <a
                  href={`tel:${practitioner.phone_raw}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-brand-teal" />
                  {practitioner.phone}
                </a>
                <a
                  href={`mailto:${practitioner.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail size={15} className="text-brand-teal" />
                  {practitioner.email}
                </a>
                <span className="flex items-center gap-3">
                  <MapPin size={15} className="text-brand-teal" />
                  {practitioner.address}
                </span>
              </div>
              <Link
                href={contactHref}
                className="self-start bg-brand-teal-deep text-white font-body text-sm font-medium px-7 py-3.5 rounded-md hover:bg-brand-teal transition-colors"
              >
                {t("final_cta.button")}
              </Link>
            </MotionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
