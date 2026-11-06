import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
  tone?: "light" | "dark";
};

export function Breadcrumbs({ items, tone = "light" }: BreadcrumbsProps) {
  const isDark = tone === "dark";

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium ${
          isDark ? "text-navy-200" : "text-slate-500"
        }`}
      >
        <li>
          <Link
            href="/"
            className={`transition-colors ${
              isDark ? "hover:text-white" : "hover:text-navy-950"
            }`}
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <ChevronRight
                className={`h-3.5 w-3.5 ${isDark ? "text-navy-500" : "text-slate-300"}`}
                aria-hidden="true"
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-navy-950"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isDark ? "text-white" : "text-navy-900"}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
