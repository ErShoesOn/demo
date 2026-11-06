import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  children,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${
            isDark ? "text-gold-300" : "text-gold-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance text-3xl font-bold tracking-[-0.02em] sm:text-4xl ${
          isDark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-pretty text-base leading-7 ${
            isDark ? "text-navy-100/80" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
