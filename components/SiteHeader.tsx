"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "about", href_pl: "/o-mnie", href_en: "/en/about" },
  { key: "services", href_pl: "/uslugi", href_en: "/en/services" },
  { key: "resources", href_pl: "/zasoby", href_en: "/en/resources" },
  { key: "contact", href_pl: "/kontakt", href_en: "/en/contact" },
];

const routeMap: Record<string, Record<string, string>> = {
  "/": { en: "/en" },
  "/o-mnie": { en: "/en/about" },
  "/uslugi": { en: "/en/services" },
  "/zasoby": { en: "/en/resources" },
  "/kontakt": { en: "/en/contact" },
  "/en": { pl: "/" },
  "/en/about": { pl: "/o-mnie" },
  "/en/services": { pl: "/uslugi" },
  "/en/resources": { pl: "/zasoby" },
  "/en/contact": { pl: "/kontakt" },
};

export default function SiteHeader({ pathname }: { pathname: string }) {
  const t = useTranslations("nav");
  const tLang = useTranslations("lang_toggle");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const oppositeLocale = locale === "pl" ? "en" : "pl";
  const langHref = routeMap[pathname]?.[oppositeLocale] ?? (locale === "pl" ? "/en" : "/");

  const links = navLinks.map((l) => ({
    label: t(l.key as "about" | "services" | "resources" | "contact"),
    href: locale === "pl" ? l.href_pl : l.href_en,
  }));

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-brand-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={locale === "pl" ? "/" : "/en"} className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo/dialog-logo.png"
            alt="Dialog Family Therapy Centre"
            width={160}
            height={64}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-base text-brand-ink hover:text-brand-teal-deep transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={langHref}
            className="font-body text-xs font-semibold text-brand-muted hover:text-brand-teal-deep border border-brand-border rounded-sm px-2.5 py-1 transition-colors"
          >
            {tLang("switch_to")}
          </Link>
          <Link
            href={locale === "pl" ? "/kontakt" : "/en/contact"}
            className="bg-brand-teal-deep text-white font-body text-sm font-medium px-5 py-2 rounded-md hover:bg-brand-teal transition-colors"
          >
            {t("book")}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-brand-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-cream border-t border-brand-border px-4 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-brand-ink text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-brand-border">
            <Link
              href={locale === "pl" ? "/kontakt" : "/en/contact"}
              className="bg-brand-teal-deep text-white font-body text-sm font-medium px-5 py-2.5 rounded-md hover:bg-brand-teal transition-colors"
              onClick={() => setOpen(false)}
            >
              {t("book")}
            </Link>
            <Link
              href={langHref}
              className="font-body text-xs font-semibold text-brand-muted border border-brand-border rounded-sm px-2.5 py-1.5"
              onClick={() => setOpen(false)}
            >
              {tLang("switch_to")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
