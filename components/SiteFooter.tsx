import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import { practitioner } from "@/content/siteData";
import { Link } from "@/i18n/navigation";

const navLinks = [
  { key: "about", href: "/o-mnie" },
  { key: "services", href: "/uslugi" },
  { key: "resources", href: "/zasoby" },
  { key: "contact", href: "/kontakt" },
] as const;

export default function SiteFooter() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const links = navLinks.map((l) => ({
    label: tNav(l.key),
    href: l.href,
  }));

  return (
    <footer className="bg-brand-ink text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo/dialog-logo.png"
              alt="Dialog Family Therapy Centre"
              width={140}
              height={56}
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-body font-semibold text-xs uppercase tracking-widest text-white/40 mb-5">
              {t("nav_heading")}
            </p>
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body font-semibold text-xs uppercase tracking-widest text-white/40 mb-5">
              {t("contact_heading")}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${practitioner.phone_raw}`}
                className="flex items-center gap-3 font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-brand-teal shrink-0" />
                {practitioner.phone}
              </a>
              <a
                href={`mailto:${practitioner.email}`}
                className="flex items-center gap-3 font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-brand-teal shrink-0" />
                {practitioner.email}
              </a>
              <a
                href={practitioner.address_maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                <MapPin size={14} className="text-brand-teal shrink-0 mt-0.5" />
                {practitioner.address}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30">
            © {new Date().getFullYear()} {t("credit")}
          </p>
          <p className="font-body text-xs text-white/30">
            {practitioner.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
