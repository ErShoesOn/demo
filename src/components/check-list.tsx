import { Check, Info } from "lucide-react";

type CheckListProps = {
  items: string[];
  tone?: "light" | "dark";
  variant?: "check" | "info";
  className?: string;
};

export function CheckList({
  items,
  tone = "light",
  variant = "check",
  className = "",
}: CheckListProps) {
  const isDark = tone === "dark";
  const Icon = variant === "info" ? Info : Check;

  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-2.5 text-sm leading-6 ${
            isDark ? "text-navy-100/80" : "text-slate-700"
          }`}
        >
          <Icon
            className={`mt-0.5 h-4 w-4 shrink-0 ${
              isDark ? "text-gold-300" : "text-gold-700"
            }`}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
