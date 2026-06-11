"use client";

import { useEffect } from "react";

export default function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale === "pl" ? "pl-IE" : "en-IE";
  }, [locale]);
  return null;
}
