"use client";

import React from "react";
import { defaultLocale, isLocale, t, type Locale, type Translations } from "@/lib/i18n";
import { getCookie, setCookie } from "@/lib/cookies";

const translationsContext = React.createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof Translations) => string;
}>({ locale: defaultLocale, setLocale: () => {}, t: (key: string) => key });

export function TranslationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieLocale = getCookie("majestic_locale");
  const initialLocale: Locale = cookieLocale && isLocale(cookieLocale) ? cookieLocale : defaultLocale;
  const [locale, setLocaleState] = React.useState<Locale>(initialLocale);

  const setLocale = (newLocale: Locale) => {
    setCookie("majestic_locale", newLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <translationsContext.Provider
      value={{ locale, setLocale, t: (key: keyof Translations) => t(locale, key) }}
    >
      {children}
    </translationsContext.Provider>
  );
}

export function useTranslations() {
  return React.useContext(translationsContext);
}

export function useLocale() {
  return React.useContext(translationsContext).locale;
}
