"use client";

import { useMemo, useState } from "react";
import { bundles } from "@/data/bundles";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

type ViewMode = "tools" | "bundles";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("tools");
  const [activeCategory, setActiveCategory] = useState("alle");
  const [query, setQuery] = useState("");
  const [activeToolSlug, setActiveToolSlug] = useState(tools[0]?.slug ?? "");
  const [activeBundleSlug, setActiveBundleSlug] = useState(
    bundles[0]?.slug ?? ""
  );

  const normalizedQuery = query.trim().toLowerCase();

  const visibleTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "alle" || tool.category === activeCategory;

      const searchable = [
        tool.name,
        tool.badge,
        tool.pricing,
        tool.description,
        tool.audience,
        tool.category,
        ...tool.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, normalizedQuery]);

  const visibleBundles = useMemo(() => {
    return bundles.filter((bundle) => {
      const matchesCategory =
        activeCategory === "alle" || bundle.category === activeCategory;

      const searchable = [
        bundle.name,
        bundle.badge,
        bundle.description,
        bundle.why,
        bundle.audience,
        bundle.notFor,
        bundle.category,
        ...bundle.tools,
        ...bundle.workflow,
        ...bundle.bestFor,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, normalizedQuery]);

  const activeTool =
    visibleTools.find((tool) => tool.slug === activeToolSlug) ?? visibleTools[0] ?? null;

  const activeBundle =
    visibleBundles.find((bundle) => bundle.slug === activeBundleSlug) ??
    visibleBundles[0] ??
    null;

  const resultCount = viewMode === "tools" ? visibleTools.length : visibleBundles.length;
  const totalCount = tools.length + bundles.length;

  function getCategoryLabel(slug: string) {
    return categories.find((category) => category.slug === slug)?.name ?? slug;
  }

  function switchMode(mode: ViewMode) {
    setViewMode(mode);
    setActiveCategory("alle");
    setQuery("");
  }

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-black">
      <header className="border-b border-black/10 bg-[#f7f7f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <a href="/" className="group w-fit">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-black/45">
              KI-Verzeichnis
            </p>
            <p className="mt-1 text-2xl font-black uppercase tracking-[-0.06em] text-black sm:text-3xl">
              AI Pages
            </p>
          </a>

          <nav className="flex gap-2">
            <button
              type="button"
              onClick={() => switchMode("tools")}
              className={cx(
                "border px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition",
                viewMode === "tools"
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-white text-black hover:border-black"
              )}
            >
              Tools
            </button>
            <button
              type="button"
              onClick={() => switchMode("bundles")}
              className={cx(
                "border px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition",
                viewMode === "bundles"
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-white text-black hover:border-black"
              )}
            >
              Bundles
            </button>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12">
        <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-black/45">
              Suche. Vergleiche. Kombiniere.
            </p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.075em] text-black sm:text-7xl lg:text-8xl">
              KI Tools finden.
              <br />
              Besser bauen.
            </h1>
          </div>

          <div className="grid gap-5">
            <p className="max-w-xl text-base leading-7 text-black/65 sm:text-lg">
              Ein simples Verzeichnis für KI-Werkzeuge und KI-Bundles. Einzelne
              Tools zeigen, was ein System kann. Bundles zeigen, welche Tools
              zusammen sinnvoll funktionieren.
            </p>

            <div className="grid grid-cols-3 border border-black/10 bg-white">
              <div className="border-r border-black/10 p-4">
                <p className="text-3xl font-black tracking-[-0.06em]">{tools.length}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
                  Tools
                </p>
              </div>
              <div className="border-r border-black/10 p-4">
                <p className="text-3xl font-black tracking-[-0.06em]">{bundles.length}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
                  Bundles
                </p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-black tracking-[-0.06em]">{totalCount}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
                  Index
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-6 grid gap-4 lg:grid-cols-[260px_0.75fr_1fr] xl:grid-cols-[300px_0.78fr_1fr]">
          <aside className="border border-black/10 bg-white p-4 lg:sticky lg:top-5 lg:self-start">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-black/45">
              Kategorien
            </p>

            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
              {categories.map((category) => {
                const active = category.slug === activeCategory;

                return (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setActiveCategory(category.slug)}
                    className={cx(
                      "shrink-0 border px-3 py-2 text-left text-xs font-bold uppercase tracking-[0.12em] transition lg:block lg:w-full",
                      active
                        ? "border-black bg-black text-white"
                        : "border-transparent bg-white text-black/55 hover:border-black/20 hover:text-black"
                    )}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="grid gap-4">
            <div className="border border-black/10 bg-white p-4">
              <label className="block">
                <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.24em] text-black/45">
                  Suche
                </span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={viewMode === "tools" ? "Tool suchen" : "Bundle suchen"}
                  className="w-full border border-black/15 bg-[#f7f7f2] px-4 py-4 text-lg font-semibold tracking-[-0.02em] outline-none transition placeholder:text-black/30 focus:border-black"
                />
              </label>

              <div className="mt-4 flex items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black/45">
                <span>{viewMode === "tools" ? "Tool-Liste" : "Bundle-Liste"}</span>
                <span>{resultCount} Einträge</span>
              </div>
            </div>

            <div className="max-h-[680px] overflow-y-auto border border-black/10 bg-white no-scrollbar">
              {viewMode === "tools" && visibleTools.length === 0 ? (
                <div className="p-5 text-sm text-black/45">Keine Tools gefunden.</div>
              ) : null}

              {viewMode === "bundles" && visibleBundles.length === 0 ? (
                <div className="p-5 text-sm text-black/45">Keine Bundles gefunden.</div>
              ) : null}

              {viewMode === "tools"
                ? visibleTools.map((tool, index) => {
                    const active = activeTool?.slug === tool.slug;

                    return (
                      <button
                        key={tool.slug}
                        type="button"
                        onClick={() => setActiveToolSlug(tool.slug)}
                        onMouseEnter={() => setActiveToolSlug(tool.slug)}
                        className={cx(
                          "block w-full border-b border-black/10 p-5 text-left transition last:border-b-0",
                          active ? "bg-black text-white" : "bg-white text-black hover:bg-[#f1f1ec]"
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className={cx("text-[10px] font-black uppercase tracking-[0.22em]", active ? "text-white/45" : "text-black/35")}>
                              {String(index + 1).padStart(2, "0")} / {tool.badge}
                            </p>
                            <p className="mt-3 text-2xl font-black uppercase leading-none tracking-[-0.055em]">
                              {tool.name}
                            </p>
                          </div>
                          <span className={cx("text-xs font-bold uppercase tracking-[0.18em]", active ? "text-white/55" : "text-black/35")}>
                            {tool.pricing}
                          </span>
                        </div>
                      </button>
                    );
                  })
                : visibleBundles.map((bundle, index) => {
                    const active = activeBundle?.slug === bundle.slug;

                    return (
                      <button
                        key={bundle.slug}
                        type="button"
                        onClick={() => setActiveBundleSlug(bundle.slug)}
                        onMouseEnter={() => setActiveBundleSlug(bundle.slug)}
                        className={cx(
                          "block w-full border-b border-black/10 p-5 text-left transition last:border-b-0",
                          active ? "bg-black text-white" : "bg-white text-black hover:bg-[#f1f1ec]"
                        )}
                      >
                        <p className={cx("text-[10px] font-black uppercase tracking-[0.22em]", active ? "text-white/45" : "text-black/35")}>
                          {String(index + 1).padStart(2, "0")} / {bundle.badge}
                        </p>
                        <p className="mt-3 text-2xl font-black uppercase leading-none tracking-[-0.055em]">
                          {bundle.name}
                        </p>
                      </button>
                    );
                  })}
            </div>
          </section>

          <section className="border border-black/10 bg-white p-5 sm:p-7 lg:sticky lg:top-5 lg:self-start">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/45">
              Aktiver Eintrag
            </p>

            {viewMode === "tools" && activeTool ? (
              <div className="mt-8">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                  {activeTool.badge} / {getCategoryLabel(activeTool.category)}
                </p>
                <h2 className="mt-3 text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-black sm:text-6xl">
                  {activeTool.name}
                </h2>
                <p className="mt-6 text-lg leading-8 text-black/70">
                  {activeTool.description}
                </p>

                <div className="mt-8 grid gap-3 border-t border-black/10 pt-6">
                  <Info label="Preis" value={activeTool.pricing} />
                  <Info label="Zielgruppe" value={activeTool.audience} />
                  <Info label="Tags" value={activeTool.tags.join(" / ")} />
                </div>

                <a
                  href={activeTool.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex border border-black bg-black px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
                >
                  Website öffnen
                </a>
              </div>
            ) : null}

            {viewMode === "bundles" && activeBundle ? (
              <div className="mt-8">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                  {activeBundle.badge} / {getCategoryLabel(activeBundle.category)}
                </p>
                <h2 className="mt-3 text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-black sm:text-6xl">
                  {activeBundle.name}
                </h2>
                <p className="mt-6 text-lg leading-8 text-black/70">
                  {activeBundle.description}
                </p>

                <div className="mt-8 border-t border-black/10 pt-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/45">
                    Warum sinnvoll
                  </p>
                  <p className="mt-3 leading-7 text-black/70">{activeBundle.why}</p>
                </div>

                <div className="mt-8 border-t border-black/10 pt-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/45">
                    Tools im Bundle
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeBundle.toolLinks.map((tool) => (
                      <a
                        key={`${activeBundle.slug}-${tool.name}`}
                        href={tool.url}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-black/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-black transition hover:border-black hover:bg-black hover:text-white"
                      >
                        {tool.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-3 border-t border-black/10 pt-6">
                  <Info label="Zielgruppe" value={activeBundle.audience} />
                  <Info label="Ideal für" value={activeBundle.bestFor.join(" / ")} />
                  <Info label="Nicht ideal" value={activeBundle.notFor} />
                </div>
              </div>
            ) : null}
          </section>
        </section>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 py-6 text-[11px] font-bold uppercase tracking-[0.22em] text-black/40">
          <span>AI Pages / MVP</span>
          <div className="flex gap-5">
            <a href="/impressum" className="hover:text-black">Impressum</a>
            <a href="/datenschutz" className="hover:text-black">Datenschutz</a>
          </div>
        </footer>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-black/10 pb-3 last:border-b-0">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
        {label}
      </p>
      <p className="text-sm leading-6 text-black/70">{value}</p>
    </div>
  );
}
