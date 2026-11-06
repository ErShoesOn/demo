import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/types";

type FaqListProps = {
  items: Faq[];
  tone?: "light" | "dark";
};

export function FaqList({ items, tone = "light" }: FaqListProps) {
  const isDark = tone === "dark";

  return (
    <div className={isDark ? "divide-white/10" : "divide-navy-100"}>
      {items.map((item) => (
        <details
          key={item.question}
          className={`group border-b py-5 ${
            isDark ? "border-white/10" : "border-navy-100"
          }`}
        >
          <summary
            className={`flex cursor-pointer list-none items-start justify-between gap-4 text-left text-[0.95rem] font-semibold leading-6 marker:hidden ${
              isDark ? "text-white" : "text-navy-950"
            }`}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`mt-0.5 h-5 w-5 shrink-0 transition-transform group-open:rotate-180 ${
                isDark ? "text-navy-300" : "text-navy-400"
              }`}
              aria-hidden="true"
            />
          </summary>
          <p
            className={`mt-3 max-w-3xl pr-8 text-sm leading-7 ${
              isDark ? "text-navy-100/75" : "text-slate-600"
            }`}
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
