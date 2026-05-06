"use client";

import { useMemo, useState } from "react";
import { bundles } from "@/data/bundles";
import { categories } from "@/data/categories";
import { BundleCard } from "@/components/BundleCard";
import { Icon } from "@/components/Icon";

export function BundleDirectory() {
  const [activeCategory, setActiveCategory] = useState("alle-bundles");
  const [query, setQuery] = useState("");

  const bundleCategories = categories.filter(
    (category) => category.slug !== "alle"
  );

  const filteredBundles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return bundles.filter((bundle) => {
      const matchesCategory =
        activeCategory === "alle-bundles" || bundle.category === activeCategory;

      const searchableText = [
        bundle.name,
        bundle.badge,
        bundle.description,
        bundle.audience,
        bundle.notFor,
        ...bundle.tools,
        ...bundle.workflow,
        ...bundle.bestFor,
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
    <section id="bundles" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm font-semibold text-violet-200">
            <Icon name="spark" className="h-4 w-4" />
            KI-Bundles
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Kombinierte KI-Stacks für echte Workflows.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Bundles zeigen nicht nur einzelne Tools, sondern sinnvolle
            Kombinationen: Denk-KI, Recherche, Spezialtool, Produktion und
            Automatisierung.
          </p>
        </div>

        <label className="relative block w-full max-w-md">
          <span className="sr-only">Bundles suchen</span>
          <Icon
            name="search"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Suche nach Marketing, Video, Research..."
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 py-4 pl-12 pr-4 text-sm text-white outline-none ring-violet-300/20 transition placeholder:text-slate-500 focus:border-violet-300/40 focus:ring-4"
          />
        </label>
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {bundleCategories.map((category) => {
          const isActive = category.slug === activeCategory;

          return (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              className={
                isActive
                  ? "rounded-full bg-violet-300 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-violet-500/20"
                  : "rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-violet-300/30 hover:text-white"
              }
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <div className="mb-6 text-sm font-medium text-slate-400">
        {filteredBundles.length} Bundles gefunden
      </div>

      {filteredBundles.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {filteredBundles.map((bundle) => (
            <BundleCard key={bundle.slug} bundle={bundle} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
          <p className="text-lg font-bold text-white">
            Keine Bundles gefunden.
          </p>
          <p className="mt-2 text-slate-400">
            Probiere einen anderen Suchbegriff oder wähle eine andere Kategorie.
          </p>
        </div>
      )}
    </section>
  );
}