"use client";

import { useMemo, useState } from "react";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { Icon } from "@/components/Icon";
import { ToolCard } from "@/components/ToolCard";

export function ToolDirectory() {
  const [activeCategory, setActiveCategory] = useState("alle");
  const [query, setQuery] = useState("");

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "alle" || tool.category === activeCategory;

      const searchableText = [
        tool.name,
        tool.badge,
        tool.pricing,
        tool.description,
        tool.audience,
        ...tool.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section id="tools" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <Icon name="grid" className="h-4 w-4" />
            Tool-Verzeichnis
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Finde das passende KI-Tool für dein Webprojekt.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Filtere nach Kategorie oder suche direkt nach Anwendungsfall, Tool
            oder Schlagwort.
          </p>
        </div>

        <label className="relative block w-full max-w-md">
          <span className="sr-only">Tools suchen</span>
          <Icon
            name="search"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Suche nach SEO, Logo, Landingpage..."
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 py-4 pl-12 pr-4 text-sm text-white outline-none ring-cyan-300/20 transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-4"
          />
        </label>
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = category.slug === activeCategory;

          return (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              className={
                isActive
                  ? "rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
              }
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <div className="mb-6 text-sm font-medium text-slate-400">
        {filteredTools.length} Tools gefunden
      </div>

      {filteredTools.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
          <p className="text-lg font-bold text-white">Keine Tools gefunden.</p>
          <p className="mt-2 text-slate-400">
            Probiere einen anderen Suchbegriff oder wähle eine andere Kategorie.
          </p>
        </div>
      )}
    </section>
  );
}