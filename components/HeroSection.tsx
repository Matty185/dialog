"use client";

import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  eyebrow: string;
  name: string;
  headline: string;
  subline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: ComponentProps<typeof Link>["href"];
  ctaSecondaryHref: ComponentProps<typeof Link>["href"];
}

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.15 },
  }),
};

export default function HeroSection({
  eyebrow,
  name,
  headline,
  subline,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryHref,
  ctaSecondaryHref,
}: Props) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-cream via-brand-mint/20 to-brand-cream pt-16">
      {/* Soft teal wash */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, #28A0B1 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={variants}
            className="mb-5"
          >
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-brand-teal-deep block">
              {eyebrow}
            </span>
            <span className="font-display text-brand-teal-deep text-lg block mt-0.5">
              {name}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={variants}
            className="font-display text-brand-ink leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 500 }}
          >
            {headline}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={variants}
            className="font-body text-brand-muted text-lg leading-relaxed mb-10 max-w-xl"
          >
            {subline}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={variants}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={ctaPrimaryHref}
              className="bg-brand-teal-deep text-white font-body text-sm font-medium px-7 py-3.5 rounded-md hover:bg-brand-teal transition-colors"
            >
              {ctaPrimary}
            </Link>
            <Link
              href={ctaSecondaryHref}
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-brand-teal-deep hover:text-brand-teal transition-colors"
            >
              {ctaSecondary} <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
