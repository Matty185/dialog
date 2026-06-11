import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { headers } from "next/headers";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://dialogtherapy.ie"
  ),
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

  const messages = await getMessages();
  const headersList = headers();
  const pathname = headersList.get("x-pathname") ?? "/";

  return (
    <html lang={locale === "pl" ? "pl-IE" : "en-IE"} className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-brand-cream text-brand-ink font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader pathname={pathname} />
          <main>{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
