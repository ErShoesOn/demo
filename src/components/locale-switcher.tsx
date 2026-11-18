"use client";

import Link from "next/link";
import { useTranslations } from "@/components/translations-provider";
import { locales, localeDisplayNames, type Locale } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LocaleSwitcher() {
  const { setLocale, locale } = useTranslations();

  return (
    <div className="relative inline-block">
      <button
        onClick={() => {}}
        className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-700 transition-colors"
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={false}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        {localeDisplayNames[locale]}
      </button>
      <div
        role="menu"
        className="absolute right-0 mt-2 w-48 bg-white border border-navy-100 rounded-xl shadow-lg shadow-navy-950/10 p-1 z-50"
      >
        {locales.map((l) => (
          <Link
            key={l}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setLocale(l);
            }}
            role="menuitem"
            aria-current={l === locale ? "page" : undefined}
            className={`block px-4 py-2.5 text-sm rounded-lg ${
              l === locale
                ? "bg-navy-50 text-navy-900 font-bold"
                : "text-slate-600 hover:bg-navy-50 hover:text-navy-900"
            }`}
          >
            {localeDisplayNames[l]}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function LocaleSwitcherCompact() {
  const { setLocale, locale } = useTranslations();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      className="text-xs text-slate-600 bg-transparent border-none focus:ring-0 cursor-pointer"
      aria-label="Change language"
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {localeDisplayNames[l]}
        </option>
      ))}
    </select>
  );
}
