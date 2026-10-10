"use client";

import { useMemo, useState } from "react";
import AIHeroNetwork from "@/components/AIHeroNetwork";
import ThemeToggle from "@/components/ThemeToggle";
import { beginnerFriendlyToolSlugs } from "@/data/beginner-friendly";
import { bundles } from "@/data/bundles";
import { categories } from "@/data/categories";
import { newcomerToolSlugs } from "@/data/newcomers";
import { tools } from "@/data/all-tools";

type ViewMode = "tools" | "bundles";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-black uppercase tracking-[0.32em] text-black/38">
      {children}
    </p>
  );
}

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
      {children}
    </p>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-t border-black/10 pt-3 sm:grid-cols-[120px_1fr] sm:gap-4">
      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-black/35">
        {label}
      </p>
      <p className="min-w-0 text-sm leading-6 text-black/68">{value}</p>
    </div>
  );
}

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("tools");
  const [activeCategory, setActiveCategory] = useState("alle");
  const [query, setQuery] = useState("");
  const [activeToolSlug, setActiveToolSlug] = useState(tools[0]?.slug ?? "");
  const [activeBundleSlug, setActiveBundleSlug] = useState(bundles[0]?.slug ?? "");
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();
  const isNewcomer = activeCategory === "newcomer";

  function getCategoryLabel(slug: string) {
    return categories.find((category) => category.slug === slug)?.name ?? slug;
  }

  const visibleTools = useMemo(() => {
    const sourceTools = isNewcomer
      ? tools.filter((tool) => newcomerToolSlugs.includes(tool.slug))
      : tools;

    return sourceTools.filter((tool) => {
      const matchesCategory = isNewcomer || activeCategory === "alle" || tool.category === activeCategory;
      const searchable = [
        tool.name,
        tool.badge,
        tool.pricing,
        tool.description,
        tool.audience,
        tool.category,
        getCategoryLabel(tool.category),
        ...tool.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, isNewcomer, normalizedQuery]);

  const visibleBundles = useMemo(() => {
    if (isNewcomer) return [];

    return bundles.filter((bundle) => {
      const matchesCategory = activeCategory === "alle" || bundle.category === activeCategory;
      const searchable = [
        bundle.name,
        bundle.badge,
        bundle.description,
        bundle.why,
        bundle.audience,
        bundle.notFor,
        bundle.category,
        getCategoryLabel(bundle.category),
        ...bundle.tools,
        ...bundle.workflow,
        ...bundle.bestFor,
        ...bundle.toolLinks.map((tool) => tool.name),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, isNewcomer, normalizedQuery]);

  const activeTool = visibleTools.find((tool) => tool.slug === activeToolSlug) ?? visibleTools[0] ?? null;
  const activeBundle =
    visibleBundles.find((bundle) => bundle.slug === activeBundleSlug) ?? visibleBundles[0] ?? null;

  const resultCount = viewMode === "tools" ? visibleTools.length : visibleBundles.length;
  const categoryCount = categories.filter(
    (category) => category.slug !== "alle" && category.slug !== "newcomer"
  ).length;

  function switchMode(mode: ViewMode) {
    setViewMode(mode);
    setActiveCategory("alle");
    setMobileDetailOpen(false);
  }

  function selectCategory(slug: string) {
    if (slug === "newcomer") {
      setViewMode("tools");
    }

    setActiveCategory(slug);
    setMobileDetailOpen(false);
  }

  function updateQuery(value: string) {
    setQuery(value);
    setMobileDetailOpen(false);
  }

  function selectTool(slug: string) {
    setActiveToolSlug(slug);
    setMobileDetailOpen(true);
  }

  function selectBundle(slug: string) {
    setActiveBundleSlug(slug);
    setMobileDetailOpen(true);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfbf7] text-black">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#fbfbf7]/92 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[64px] w-full max-w-[1540px] items-center justify-between px-4 py-3 sm:h-[69px] sm:px-8 sm:py-0">
          <a href="/" className="flex min-w-0 items-baseline">
            <span className="text-xl font-black uppercase tracking-[-0.075em] sm:text-3xl">
              AI Pages
            </span>
          </a>
          <ThemeToggle />
        </div>
      </header>

      <section className="relative mx-auto flex min-h-[72vh] w-full max-w-[1540px] items-center overflow-hidden px-4 py-10 sm:min-h-[calc(100vh-69px)] sm:px-8 sm:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 w-full -translate-y-1/2 opacity-70 sm:opacity-75">
          <AIHeroNetwork />
        </div>

        <div className="relative z-10 grid w-full min-w-0 gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-start">
          <div className="min-w-0">
            <h1 className="max-w-6xl text-[18vw] font-black uppercase leading-[0.78] tracking-[-0.095em] text-black sm:text-[110px] lg:text-[132px] xl:text-[158px]">
              KI Tools.
              <br />
              Klar.
            </h1>
          </div>

          <div className="grid min-w-0 gap-8 lg:justify-self-end lg:pt-2">
            <p className="max-w-2xl text-lg font-normal leading-7 tracking-[-0.025em] text-black sm:text-2xl sm:leading-8 lg:text-3xl lg:leading-[1.12] xl:text-[34px]">
              Ein simples Verzeichnis für KI-Werkzeuge und KI-Bundles. Schnell
              finden, verstehen, kombinieren und direkt öffnen.
            </p>

            <div className="grid w-full max-w-[560px] grid-cols-3 gap-4 pt-5 sm:gap-10">
              <div className="grid justify-items-center gap-2 text-center">
                <p className="text-5xl font-black leading-none tracking-[-0.085em] text-black sm:text-7xl">{tools.length}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-black">Tools</p>
              </div>
              <div className="grid justify-items-center gap-2 text-center">
                <p className="text-5xl font-black leading-none tracking-[-0.085em] text-black sm:text-7xl">{bundles.length}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-black">Bundles</p>
              </div>
              <div className="grid justify-items-center gap-2 text-center">
                <p className="text-5xl font-black leading-none tracking-[-0.085em] text-black sm:text-7xl">{categoryCount}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-black">Kategorien</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1540px] overflow-x-hidden px-4 pb-4 sm:px-6 xl:px-8">
        <section className="grid min-w-0 gap-3 border-t border-black pt-4 lg:h-[calc(100vh-128px)] lg:grid-cols-[240px_minmax(0,0.94fr)_minmax(0,1.06fr)] xl:grid-cols-[260px_minmax(0,0.96fr)_minmax(0,1.04fr)]">
          <aside className="flex min-w-0 min-h-0 flex-col border border-black bg-black shadow-[0_18px_60px_rgba(0,0,0,0.08)] lg:h-full lg:overflow-hidden">
            <div className="grid shrink-0 grid-cols-2">
              <button
                type="button"
                onClick={() => switchMode("tools")}
                className={cx(
                  "category-button px-2 py-4 text-center text-[13px] font-black uppercase leading-none tracking-[0.13em] outline-none ring-0 shadow-none transition focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0",
                  viewMode === "tools"
                    ? "category-button-active bg-white text-black outline-none ring-0 shadow-none"
                    : "bg-black text-white hover:bg-white/10"
                )}
              >
                Tools
              </button>
              <button
                type="button"
                onClick={() => switchMode("bundles")}
                className={cx(
                  "category-button px-2 py-4 text-center text-[13px] font-black uppercase leading-none tracking-[0.13em] outline-none ring-0 shadow-none transition focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0",
                  viewMode === "bundles"
                    ? "category-button-active bg-white text-black outline-none ring-0 shadow-none"
                    : "bg-black text-white hover:bg-white/10"
                )}
              >
                Bundles
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white">
                Kategorien
              </p>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar lg:block lg:min-h-0 lg:flex-1 lg:space-y-1 lg:overflow-y-auto lg:pb-0">
                {categories.map((category) => {
                  const active = category.slug === activeCategory;
                  return (
                    <button
                      key={category.slug}
                      type="button"
                      onClick={() => selectCategory(category.slug)}
                      className={cx(
                        "category-button shrink-0 border border-transparent bg-transparent px-3 py-2 text-left font-black uppercase leading-[1.15] tracking-[0.17em] text-white/70 transition-all duration-150 ease-out lg:block lg:w-full",
                        active
                          ? "category-button-active translate-x-2 text-[17px] text-white"
                          : "text-[12px] hover:translate-x-2 hover:text-[17px] hover:text-white"
                      )}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <section
            className={cx(
              "min-w-0 min-h-0 flex-col overflow-hidden border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.035)] lg:flex lg:h-full",
              mobileDetailOpen ? "hidden lg:flex" : "flex"
            )}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-black/10 p-3 sm:p-4">
              <ColumnLabel>{isNewcomer ? "Newcomer" : viewMode === "tools" ? "Tools" : "Bundles"}</ColumnLabel>
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-black">
                {resultCount}
              </span>
            </div>

            <div className="shrink-0 border-b border-black/10 p-3 sm:p-4">
              <label className="block text-[10px] font-medium uppercase tracking-[0.28em] text-black">
                Suche
              </label>
              <div className="mt-3 flex items-center gap-2 border border-black/15 bg-[#fbfbf7] px-3 py-3 focus-within:border-black">
                <input
                  value={query}
                  onChange={(event) => updateQuery(event.target.value)}
                  placeholder="Tool, Bundle oder Use Case eingeben"
                  className="min-w-0 flex-1 bg-transparent text-sm font-semibold tracking-[-0.02em] text-black outline-none placeholder:text-black/30"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => updateQuery("")}
                    className="text-[10px] font-black uppercase tracking-[0.18em] text-black/40 transition hover:text-black"
                  >
                    Löschen
                  </button>
                ) : null}
              </div>
            </div>

            <div className="max-h-[560px] flex-1 overflow-y-auto overflow-x-hidden no-scrollbar sm:max-h-[720px] lg:max-h-none">
              {viewMode === "tools" && visibleTools.length === 0 ? (
                <div className="p-4 text-sm text-black/45">Keine Tools gefunden.</div>
              ) : null}
              {viewMode === "bundles" && visibleBundles.length === 0 ? (
                <div className="p-4 text-sm text-black/45">Keine Bundles gefunden.</div>
              ) : null}

              {viewMode === "tools"
                ? visibleTools.map((tool, index) => {
                    const active = activeTool?.slug === tool.slug;
                    return (
                      <button
                        key={tool.slug}
                        type="button"
                        onClick={() => selectTool(tool.slug)}
                        onMouseEnter={() => setActiveToolSlug(tool.slug)}
                        className={cx(
                          "block w-full border-b border-black/10 p-4 text-left transition last:border-b-0",
                          active ? "bg-black text-white" : "bg-white text-black hover:bg-[#f4f4ee]"
                        )}
                      >
                        <div className="flex min-w-0 items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className={cx("text-[10px] font-black uppercase tracking-[0.24em]", active ? "text-white/45" : "text-black/35")}>
                              {String(index + 1).padStart(2, "0")} / {isNewcomer ? "Newcomer" : tool.badge}
                            </p>
                            <p className="mt-3 break-words text-2xl font-black uppercase leading-[0.88] tracking-[-0.075em] xl:text-[30px]">
                              {tool.name}
                            </p>
                          </div>
                          <span className={cx("shrink-0 text-[10px] font-black uppercase tracking-[0.2em]", active ? "text-white/45" : "text-black/35")}>
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
                        onClick={() => selectBundle(bundle.slug)}
                        onMouseEnter={() => setActiveBundleSlug(bundle.slug)}
                        className={cx(
                          "block w-full border-b border-black/10 p-4 text-left transition last:border-b-0",
                          active ? "bg-black text-white" : "bg-white text-black hover:bg-[#f4f4ee]"
                        )}
                      >
                        <div className="flex min-w-0 items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className={cx("text-[10px] font-black uppercase tracking-[0.24em]", active ? "text-white/45" : "text-black/35")}>
                              {String(index + 1).padStart(2, "0")} / {bundle.badge}
                            </p>
                            <p className="mt-3 break-words text-2xl font-black uppercase leading-[0.88] tracking-[-0.075em] xl:text-[30px]">
                              {bundle.name}
                            </p>
                          </div>
                          <span className={cx("hidden shrink-0 text-right text-[10px] font-black uppercase tracking-[0.2em] sm:block", active ? "text-white/45" : "text-black/35")}>
                            {getCategoryLabel(bundle.category)}
                          </span>
                        </div>
                      </button>
                    );
                  })}
            </div>
          </section>

          <section
            className={cx(
              "min-w-0 min-h-0 overflow-visible border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(0,0,0,0.045)] sm:p-5 lg:block lg:h-full lg:overflow-y-auto lg:overflow-x-hidden lg:no-scrollbar",
              mobileDetailOpen ? "block" : "hidden"
            )}
          >
            <button
              type="button"
              onClick={() => setMobileDetailOpen(false)}
              className="mb-5 inline-flex border border-black/15 bg-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-black transition hover:border-black lg:hidden"
            >
              ← Zurück
            </button>

            {viewMode === "tools" && activeTool ? (
              <div className="flex min-w-0 flex-col lg:min-h-full">
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
                  {isNewcomer ? "Newcomer" : getCategoryLabel(activeTool.category)}
                </p>
                <h2 className="mt-5 break-words text-4xl font-black uppercase leading-[0.86] tracking-[-0.085em] text-black sm:text-5xl xl:text-5xl 2xl:text-6xl">
                  {activeTool.name}
                </h2>
                <p className="mt-4 max-w-3xl text-base font-semibold leading-7 tracking-[-0.035em] text-black/70 xl:text-lg">
                  {activeTool.description}
                </p>

                <div className="mt-5 grid gap-3">
                  <Info label="Preis" value={activeTool.pricing} />
                  <Info label="Zielgruppe" value={activeTool.audience} />
                  <Info label="Tags" value={activeTool.tags.join(" / ")} />
                  <Info
                    label="Einstieg"
                    value={
                      beginnerFriendlyToolSlugs.includes(activeTool.slug)
                        ? "Einsteigerfreundlich"
                        : "Eher für Fortgeschrittene"
                    }
                  />
                </div>

                <div className="mt-7 flex flex-wrap gap-3 lg:mt-auto lg:pt-5">
                  <a
                    href={activeTool.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex border border-black bg-white px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white"
                  >
                    Website öffnen
                  </a>
                </div>
              </div>
            ) : null}

            {viewMode === "bundles" && activeBundle ? (
              <div className="flex min-w-0 flex-col lg:min-h-full">
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
                  {getCategoryLabel(activeBundle.category)}
                </p>
                <h2 className="mt-5 break-words text-3xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-black sm:text-4xl xl:text-5xl">
                  {activeBundle.name}
                </h2>
                <p className="mt-4 max-w-3xl text-base font-semibold leading-6 tracking-[-0.035em] text-black/70 xl:text-lg">
                  {activeBundle.description}
                </p>

                <div className="mt-5 border-t border-black/10 pt-3">
                  <ColumnLabel>Warum sinnvoll</ColumnLabel>
                  <p className="mt-2 text-sm leading-6 text-black/68">{activeBundle.why}</p>
                </div>

                <div className="mt-5 border-t border-black/10 pt-3">
                  <ColumnLabel>Tools im Bundle</ColumnLabel>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeBundle.toolLinks.map((tool) => (
                      <a
                        key={`${activeBundle.slug}-${tool.name}`}
                        href={tool.url}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-black/15 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:border-black hover:bg-black hover:text-white"
                      >
                        {tool.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-7 grid gap-2 lg:mt-auto lg:pt-4">
                  <Info label="Zielgruppe" value={activeBundle.audience} />
                  <Info label="Ideal für" value={activeBundle.bestFor.join(" / ")} />
                  <Info label="Nicht ideal" value={activeBundle.notFor} />
                </div>
              </div>
            ) : null}
          </section>
        </section>

        <footer className="mt-5 flex flex-col gap-3 border-t border-black/10 py-5 text-[11px] font-medium uppercase tracking-[0.22em] text-black sm:flex-row sm:items-center sm:justify-between">
          <p>AI Pages</p>
          <nav className="flex gap-5">
            <a href="/impressum" className="text-black/50 transition hover:text-black">
              Impressum
            </a>
            <a href="/datenschutz" className="text-black/50 transition hover:text-black">
              Datenschutz
            </a>
          </nav>
        </footer>
      </section>
    </main>
  );
}
