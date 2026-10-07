"use client";

import { useMemo, useState } from "react";
import { bundles } from "@/data/bundles";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

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

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-t border-black/10 pt-3 sm:grid-cols-[120px_1fr] sm:gap-4">
      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-black/35">
        {label}
      </p>
      <p className="text-sm leading-6 text-black/68">{value}</p>
    </div>
  );
}

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("tools");
  const [activeCategory, setActiveCategory] = useState("alle");
  const [query] = useState("");
  const [activeToolSlug, setActiveToolSlug] = useState(tools[0]?.slug ?? "");
  const [activeBundleSlug, setActiveBundleSlug] = useState(bundles[0]?.slug ?? "");

  const normalizedQuery = query.trim().toLowerCase();

  const visibleTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory = activeCategory === "alle" || tool.category === activeCategory;
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
      const matchesCategory = activeCategory === "alle" || bundle.category === activeCategory;
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

  const activeTool = visibleTools.find((tool) => tool.slug === activeToolSlug) ?? visibleTools[0] ?? null;
  const activeBundle =
    visibleBundles.find((bundle) => bundle.slug === activeBundleSlug) ?? visibleBundles[0] ?? null;

  const resultCount = viewMode === "tools" ? visibleTools.length : visibleBundles.length;

  function getCategoryLabel(slug: string) {
    return categories.find((category) => category.slug === slug)?.name ?? slug;
  }

  function switchMode(mode: ViewMode) {
    setViewMode(mode);
    setActiveCategory("alle");
  }

  return (
    <main className="min-h-screen bg-[#fbfbf7] text-black">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#fbfbf7]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[69px] max-w-[1540px] items-center justify-between gap-4 px-5 sm:px-8">
          <a href="/" className="flex items-baseline">
            <span className="text-2xl font-black uppercase tracking-[-0.075em] sm:text-3xl">
              AI Pages
            </span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="/impressum"
              className="hidden text-[10px] font-black uppercase tracking-[0.22em] text-black/35 hover:text-black sm:block"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="hidden text-[10px] font-black uppercase tracking-[0.22em] text-black/35 hover:text-black sm:block"
            >
              Datenschutz
            </a>
            <button
              type="button"
              onClick={() => switchMode("tools")}
              className={cx(
                "border px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition sm:px-5",
                viewMode === "tools" ? "border-black bg-black text-white" : "border-black/15 bg-white text-black hover:border-black"
              )}
            >
              Tools
            </button>
            <button
              type="button"
              onClick={() => switchMode("bundles")}
              className={cx(
                "border px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition sm:px-5",
                viewMode === "bundles" ? "border-black bg-black text-white" : "border-black/15 bg-white text-black hover:border-black"
              )}
            >
              Bundles
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-69px)] max-w-[1540px] items-center px-5 py-12 sm:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h1 className="max-w-6xl text-[15vw] font-black uppercase leading-[0.76] tracking-[-0.095em] text-black sm:text-[110px] lg:text-[132px] xl:text-[158px]">
              KI Tools.
              <br />
              Klar.
            </h1>
          </div>

          <div className="grid gap-8 lg:pb-2">
            <p className="max-w-2xl text-xl font-semibold leading-8 tracking-[-0.035em] text-black/72 sm:text-2xl sm:leading-9">
              Ein simples Verzeichnis für KI-Werkzeuge und KI-Bundles. Schnell
              finden, verstehen, kombinieren und direkt öffnen.
            </p>

            <div className="grid grid-cols-3 gap-8 sm:gap-12">
              <div>
                <p className="text-5xl font-black tracking-[-0.09em] sm:text-6xl">{tools.length}</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.26em] text-black/35">Tools</p>
              </div>
              <div>
                <p className="text-5xl font-black tracking-[-0.09em] sm:text-6xl">{bundles.length}</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.26em] text-black/35">Bundles</p>
              </div>
              <div>
                <p className="text-5xl font-black tracking-[-0.09em] sm:text-6xl">{resultCount}</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.26em] text-black/35">Aktiv</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1540px] px-5 pb-8 sm:px-8">
        <section className="grid gap-5 border-t border-black pt-6 lg:h-[calc(100vh-96px)] lg:min-h-[680px] lg:grid-cols-[300px_minmax(430px,0.78fr)_minmax(560px,1.22fr)] xl:grid-cols-[330px_minmax(470px,0.82fr)_minmax(640px,1.25fr)]">
          <aside className="min-h-0 border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(0,0,0,0.035)] lg:h-full lg:overflow-hidden">
            <Kicker>Kategorien</Kicker>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar lg:block lg:h-[calc(100%-34px)] lg:space-y-1 lg:overflow-y-auto lg:pb-0">
              {categories.map((category) => {
                const active = category.slug === activeCategory;
                return (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setActiveCategory(category.slug)}
                    className={cx(
                      "shrink-0 border px-3 py-2 text-left text-xs font-black uppercase tracking-[0.13em] transition lg:block lg:w-full",
                      active
                        ? "border-black bg-black text-white"
                        : "border-transparent bg-white text-black/45 hover:border-black/10 hover:bg-[#f4f4ee] hover:text-black"
                    )}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="min-h-0 overflow-hidden border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.035)] lg:h-full">
            <div className="flex items-center justify-between border-b border-black/10 p-4">
              <Kicker>{viewMode === "tools" ? "Werkzeuge" : "Bundles"}</Kicker>
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-black/35">
                {resultCount}
              </span>
            </div>

            <div className="max-h-[720px] overflow-y-auto no-scrollbar lg:h-[calc(100%-57px)] lg:max-h-none">
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
                          active ? "bg-black text-white" : "bg-white text-black hover:bg-[#f4f4ee]"
                        )}
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <p className={cx("text-[10px] font-black uppercase tracking-[0.24em]", active ? "text-white/45" : "text-black/35")}>
                              {String(index + 1).padStart(2, "0")} / {tool.badge}
                            </p>
                            <p className="mt-3 text-3xl font-black uppercase leading-[0.88] tracking-[-0.075em]">
                              {tool.name}
                            </p>
                          </div>
                          <span className={cx("text-[10px] font-black uppercase tracking-[0.2em]", active ? "text-white/45" : "text-black/35")}>
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
                          active ? "bg-black text-white" : "bg-white text-black hover:bg-[#f4f4ee]"
                        )}
                      >
                        <p className={cx("text-[10px] font-black uppercase tracking-[0.24em]", active ? "text-white/45" : "text-black/35")}>
                          {String(index + 1).padStart(2, "0")} / {bundle.badge}
                        </p>
                        <p className="mt-3 text-3xl font-black uppercase leading-[0.88] tracking-[-0.075em]">
                          {bundle.name}
                        </p>
                      </button>
                    );
                  })}
            </div>
          </section>

          <section className="min-h-0 overflow-hidden border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.045)] sm:p-7 lg:h-full">
            <Kicker>Detail</Kicker>

            {viewMode === "tools" && activeTool ? (
              <div className="mt-6 flex h-[calc(100%-24px)] flex-col overflow-hidden">
                <p className="text-[10px] font-black uppercase tracking-[0.26em] text-black/35">
                  {activeTool.badge} / {getCategoryLabel(activeTool.category)}
                </p>
                <h2 className="mt-3 text-5xl font-black uppercase leading-[0.82] tracking-[-0.095em] text-black sm:text-6xl xl:text-7xl">
                  {activeTool.name}
                </h2>
                <p className="mt-5 max-w-3xl text-lg font-semibold leading-7 tracking-[-0.035em] text-black/70">
                  {activeTool.description}
                </p>

                <div className="mt-6 grid gap-3">
                  <Info label="Preis" value={activeTool.pricing} />
                  <Info label="Zielgruppe" value={activeTool.audience} />
                  <Info label="Tags" value={activeTool.tags.join(" / ")} />
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={activeTool.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex border border-black bg-black px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
                  >
                    Website öffnen
                  </a>
                </div>
              </div>
            ) : null}

            {viewMode === "bundles" && activeBundle ? (
              <div className="mt-6 flex h-[calc(100%-24px)] flex-col overflow-hidden">
                <p className="text-[10px] font-black uppercase tracking-[0.26em] text-black/35">
                  {activeBundle.badge} / {getCategoryLabel(activeBundle.category)}
                </p>
                <h2 className="mt-3 text-4xl font-black uppercase leading-[0.86] tracking-[-0.09em] text-black sm:text-5xl xl:text-6xl">
                  {activeBundle.name}
                </h2>
                <p className="mt-5 max-w-3xl text-lg font-semibold leading-7 tracking-[-0.035em] text-black/70">
                  {activeBundle.description}
                </p>

                <div className="mt-6 border-t border-black/10 pt-4">
                  <Kicker>Warum sinnvoll</Kicker>
                  <p className="mt-3 text-sm leading-6 text-black/68">{activeBundle.why}</p>
                </div>

                <div className="mt-6 border-t border-black/10 pt-4">
                  <Kicker>Tools im Bundle</Kicker>
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

                <div className="mt-auto grid gap-3 pt-5">
                  <Info label="Zielgruppe" value={activeBundle.audience} />
                  <Info label="Ideal für" value={activeBundle.bestFor.join(" / ")} />
                  <Info label="Nicht ideal" value={activeBundle.notFor} />
                </div>
              </div>
            ) : null}
          </section>
        </section>
      </section>
    </main>
  );
}
