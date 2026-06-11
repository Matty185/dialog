import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed", // PL has no prefix, EN gets /en
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
