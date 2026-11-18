import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { indexingAllowed } from "@/lib/seo";

const aiCrawlers = [
  "Amazonbot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "ClaudeBot",
  "Diffbot",
  "Google-Extended",
  "GPTBot",
  "omgili",
  "anthropic-ai",
  "Claude-Web",
  "cohere-ai",
  "MistralAI-Training",
  "meta-externalagent",
  "GoogleOther",
  "Baiduspider",
  "PetalBot",
  "AwarioRssBot",
  "Google-CloudVertexBot",
  "QualifiedBot",
  "Cotoyogi",
  "ICC-Crawler",
  "atlassian-bot",
  "FishBot",
  "BorderxBot",
  "NavuBot",
  "SemrushBot-SWA",
  "WARDBot",
  "magpie-crawler",
  "KimiBot",
  "CitibotSiteCrawler",
  "PerplexityBot",
  "YouBot",
  "OAI-SearchBot",
  "Claude-SearchBot",
  "Applebot",
  "Amzn-SearchBot",
  "MistralAI-Index",
  "Kimi-SearchBot",
  "ShapBot",
  "Bravebot",
  "Anomura",
  "Element451Bot",
  "alphalens-bot",
  "Perplexity-User",
  "FireCrawl",
  "FirecrawlAgent",
  "Claude-User",
  "ChatGPT-User",
  "Google-Agent",
  "Google-GeminiNotebook",
  "Google-NotebookLM",
  "MistralAI-User",
  "Kimi-User",
  "Amzn-User",
  "meta-externalfetcher",
  "Retool",
  "Instapaper",
  "ChathiveCrawler",
];

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${siteConfig.url}/sitemap.xml`;

  if (!indexingAllowed()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiCrawlers.map((agent) => ({
        userAgent: agent,
        disallow: "/",
      })),
    ],
    sitemap,
  };
}
