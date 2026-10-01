import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HtmlLang from "@/components/HtmlLang";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://dialogtherapy.ie");

// Kept out of search engines until launch, since the site still has
// placeholder content. Set NEXT_PUBLIC_ALLOW_INDEXING=true to go live.
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: allowIndexing ? undefined : { index: false, follow: false },
  title: {
    default: "Dialog Family Therapy Centre — Sylwia Matijuk",
    template: "%s | Dialog Family Therapy Centre",
  },
  description:
    "Psychoterapia po polsku w Dublinie. Sylwia Matijuk — psycholog, psychoterapeuta, 23 lata doświadczenia. Terapia indywidualna, par, rodzin, dzieci i młodzieży.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLang locale={locale} />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </NextIntlClientProvider>
  );
}
