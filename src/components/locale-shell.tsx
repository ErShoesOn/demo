"use client";

import React from "react";
import { TranslationsProvider } from "@/components/translations-provider";

export function LocaleShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TranslationsProvider>{children}</TranslationsProvider>;
}
