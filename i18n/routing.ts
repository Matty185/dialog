import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "./config";

// Route folders are named in Polish; EN gets its own translated slugs.
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed", // PL has no prefix, EN gets /en
  // Always serve Polish at unprefixed URLs, whatever the browser language;
  // English is only reached via /en (the PL/EN toggle).
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/o-mnie": { pl: "/o-mnie", en: "/about" },
    "/uslugi": { pl: "/uslugi", en: "/services" },
    "/zasoby": { pl: "/zasoby", en: "/resources" },
    "/kontakt": { pl: "/kontakt", en: "/contact" },
  },
});
