import type { ReactNode } from "react";
import { AlertCircle, Info } from "lucide-react";

type NoticeProps = {
  title?: string;
  children: ReactNode;
  tone?: "light" | "gold" | "dark";
};

export function Notice({ title, children, tone = "gold" }: NoticeProps) {
  const isDark = tone === "dark";
  const isGold = tone === "gold";
  const Icon = isGold ? AlertCircle : Info;

  return (
    <div
      className={`rounded-2xl border p-5 ${
        isDark
          ? "border-white/10 bg-white/5 text-navy-100/85"
          : isGold
            ? "border-gold-300 bg-gold-100/60 text-slate-700"
            : "border-navy-100 bg-navy-50/70 text-slate-700"
      }`}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={`mt-0.5 h-4 w-4 shrink-0 ${
            isDark ? "text-gold-300" : "text-gold-700"
          }`}
          aria-hidden="true"
        />
        <div className="min-w-0">
          {title ? (
            <p
              className={`text-sm font-bold ${
                isDark ? "text-white" : "text-navy-950"
              }`}
            >
              {title}
            </p>
          ) : null}
          <div
            className={`text-sm leading-6 ${title ? "mt-1" : ""} ${
              isDark ? "text-navy-100/80" : "text-slate-700"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
