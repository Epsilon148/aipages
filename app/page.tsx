"use client";

import { useEffect, useMemo, useState } from "react";
import { bundles, type Bundle } from "@/data/bundles";
import { categories } from "@/data/categories";
import { tools, type Tool } from "@/data/tools";
import { MatrixText } from "@/components/MatrixText";

type Phase = "intro" | "accepted" | "denied" | "boot" | "terminal";
type ViewMode = "tools" | "bundles";

const bootPrompt = "AIPAGES BEITRETEN (Y/N)";

const bootLines = [
  "PROZESS WIRD GESTARTET",
  "ARCHIVKERN WIRD GEWECKT",
  "KI-WERKZEUGE WERDEN INDEXIERT",
  "BUNDLESTACKS WERDEN GELADEN",
  "FILTERSYSTEM WIRD AKTIVIERT",
  "AIPAGES BEREIT",
];

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[#164e63]/70 pb-4">
      <p className="text-[10px] uppercase tracking-[0.28em] text-[#14566a]">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-[#b7f3ff]">{value}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.32em] text-[#7cff9b]">
      {children}
    </p>
  );
}

function EmptyState({ mode }: { mode: ViewMode }) {
  return (
    <div className="border border-[#164e63] bg-black/70 p-6 text-sm uppercase tracking-[0.22em] text-[#14566a]">
      Keine Einträge gefunden. Suchsignal oder Kategorie ändern. Modus: {mode}.
    </div>
  );
}

export default function Home() {
  const [phase, setPhase] = useState<Phase>(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches
    ) {
      return "terminal";
    }

    return "intro";
  });

  const [typedLength, setTypedLength] = useState(0);
  const [bootIndex, setBootIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("tools");
  const [activeCategory, setActiveCategory] = useState("alle");
  const [query, setQuery] = useState("");
  const [activeToolSlug, setActiveToolSlug] = useState(tools[0]?.slug ?? "");
  const [activeBundleSlug, setActiveBundleSlug] = useState(
    bundles[0]?.slug ?? ""
  );

  useEffect(() => {
    if (phase !== "intro") return;

    setTypedLength(0);

    const startTimer = window.setTimeout(() => {
      const typingTimer = window.setInterval(() => {
        setTypedLength((current) => {
          if (current >= bootPrompt.length) {
            window.clearInterval(typingTimer);
            return current;
          }

          return current + 1;
        });
      }, 62);
    }, 420);

    return () => {
      window.clearTimeout(startTimer);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "intro" || typedLength < bootPrompt.length) return;

    function handleKeyDown(event: KeyboardEvent) {
      const key = event.key.toLowerCase();

      if (key === "y") setPhase("accepted");
      if (key === "n") setPhase("denied");
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [phase, typedLength]);

  useEffect(() => {
    if (phase === "accepted") {
      const timer = window.setTimeout(() => {
        setBootIndex(0);
        setPhase("boot");
      }, 620);

      return () => window.clearTimeout(timer);
    }

    if (phase === "denied") {
      const timer = window.setTimeout(() => {
        setPhase("intro");
      }, 1200);

      return () => window.clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== "boot") return;

    if (bootIndex >= bootLines.length) {
      const timer = window.setTimeout(() => {
        setPhase("terminal");
      }, 640);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setBootIndex((current) => current + 1);
    }, 360);

    return () => window.clearTimeout(timer);
  }, [phase, bootIndex]);

  const visibleTools = useMemo<Tool[]>(() => {
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
        tool.category,
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

  const visibleBundles = useMemo<Bundle[]>(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return bundles.filter((bundle) => {
      const matchesCategory =
        activeCategory === "alle" || bundle.category === activeCategory;

      const searchableText = [
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

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const activeTool =
    visibleTools.find((tool) => tool.slug === activeToolSlug) ??
    visibleTools[0] ??
    null;

  const activeBundle =
    visibleBundles.find((bundle) => bundle.slug === activeBundleSlug) ??
    visibleBundles[0] ??
    null;

  const resultCount =
    viewMode === "tools" ? visibleTools.length : visibleBundles.length;

  const activeCategoryName =
    categories.find((category) => category.slug === activeCategory)?.name ??
    activeCategory;

  function getCategoryLabel(slug: string) {
    return categories.find((category) => category.slug === slug)?.name ?? slug;
  }

  function resetArchive(mode: ViewMode) {
    setViewMode(mode);
    setActiveCategory("alle");
    setQuery("");
  }

  if (phase !== "terminal") {
    return (
      <main className="relative z-10 min-h-screen px-5 py-5">
        {phase === "intro" ? (
          <div className="pt-6">
            <MatrixText
              text={bootPrompt.slice(0, typedLength)}
              pixel={5}
              gap={2}
              charGap={7}
            />

            {typedLength >= bootPrompt.length ? (
              <div className="mt-8">
                <span className="terminal-cursor" />
              </div>
            ) : null}

            <p className="fixed bottom-5 left-5 text-[11px] uppercase tracking-[0.28em] text-[#14566a]">
              Taste Y oder N
            </p>
          </div>
        ) : null}

        {phase === "accepted" ? (
          <div className="pt-6">
            <MatrixText
              text="ACCEPTED"
              pixel={5}
              gap={2}
              charGap={8}
              onColor="#7cff9b"
              offColor="rgba(31, 107, 63, 0.14)"
            />
          </div>
        ) : null}

        {phase === "denied" ? (
          <div className="pt-6">
            <MatrixText
              text="ACCESS DENIED"
              pixel={5}
              gap={2}
              charGap={8}
            />
          </div>
        ) : null}

        {phase === "boot" ? (
          <div className="pt-6">
            <MatrixText
              text="AIPAGES ARCHIV"
              pixel={4}
              gap={2}
              charGap={7}
              onColor="#7cff9b"
              offColor="rgba(31, 107, 63, 0.14)"
            />

            <div className="mt-10 space-y-4">
              {bootLines.slice(0, bootIndex).map((line, index) => (
                <div
                  key={line}
                  className="flex flex-wrap items-center gap-x-6 gap-y-2"
                >
                  <MatrixText
                    text={String(index + 1).padStart(2, "0")}
                    pixel={3}
                    gap={1}
                    charGap={4}
                    onColor="#7cff9b"
                    offColor="rgba(31, 107, 63, 0.12)"
                  />
                  <MatrixText
                    text={line}
                    pixel={3}
                    gap={1}
                    charGap={5}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </main>
    );
  }

  return (
    <main className="relative z-10 min-h-screen px-3 py-3 sm:px-5 sm:py-5">
      <div className="mx-auto max-w-[1540px]">
        <header className="border border-[#164e63] bg-black/75 px-4 py-4 sm:px-5">
          <div className="grid gap-5 xl:grid-cols-[1fr_auto] xl:items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between xl:justify-start xl:gap-10">
              <div>
                <div className="hidden sm:block">
                  <MatrixText text="AIPAGES" pixel={5} gap={2} charGap={7} />
                </div>
                <div className="sm:hidden">
                  <MatrixText text="AIPAGES" pixel={4} gap={1} charGap={5} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-[0.32em] text-[#14566a]">
                  KI-ARCHIV // TOOL-DATENBANK // BUNDLE-KONTROLLE
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-[0.22em] text-[#14566a] sm:w-[360px]">
                <div className="border border-[#164e63] px-3 py-3">
                  <span className="block text-lg text-[#7ee7ff]">{tools.length}</span>
                  Tools
                </div>
                <div className="border border-[#164e63] px-3 py-3">
                  <span className="block text-lg text-[#7ee7ff]">{bundles.length}</span>
                  Bundles
                </div>
                <div className="border border-[#164e63] px-3 py-3">
                  <span className="block text-lg text-[#7cff9b]">{resultCount}</span>
                  Aktiv
                </div>
              </div>
            </div>

            <nav className="flex gap-2">
              <button
                type="button"
                onClick={() => resetArchive("tools")}
                className={
                  viewMode === "tools"
                    ? "flex-1 border border-[#7cff9b] bg-[#7cff9b]/10 px-4 py-3 text-xs uppercase tracking-[0.26em] text-[#7cff9b] xl:flex-none"
                    : "flex-1 border border-[#164e63] bg-transparent px-4 py-3 text-xs uppercase tracking-[0.26em] text-[#14566a] hover:text-[#7ee7ff] xl:flex-none"
                }
              >
                Tools
              </button>
              <button
                type="button"
                onClick={() => resetArchive("bundles")}
                className={
                  viewMode === "bundles"
                    ? "flex-1 border border-[#7cff9b] bg-[#7cff9b]/10 px-4 py-3 text-xs uppercase tracking-[0.26em] text-[#7cff9b] xl:flex-none"
                    : "flex-1 border border-[#164e63] bg-transparent px-4 py-3 text-xs uppercase tracking-[0.26em] text-[#14566a] hover:text-[#7ee7ff] xl:flex-none"
                }
              >
                Bundles
              </button>
            </nav>
          </div>
        </header>

        <section className="mt-4 grid gap-4 xl:grid-cols-[0.72fr_1fr]">
          <div className="border border-[#164e63] bg-black/65 p-4 sm:p-6">
            <SectionLabel>Suchzentrale</SectionLabel>
            <h1 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#d9fbff] sm:text-5xl xl:text-6xl">
              Finde KI-Tools. Verstehe Bundles. Kombiniere besser.
            </h1>
            <p className="terminal-copy mt-6 max-w-3xl">
              AI Pages ist ein dunkles KI-Archiv für einzelne Werkzeuge und
              sinnvolle Tool-Kombinationen. Suche nach Aufgabe, Kategorie oder
              Toolname und prüfe rechts den aktiven Eintrag.
            </p>
          </div>

          <div className="border border-[#164e63] bg-black/80 p-4 sm:p-6">
            <label className="block">
              <span className="mb-3 block text-[10px] uppercase tracking-[0.32em] text-[#7cff9b]">
                Suchsignal
              </span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={
                  viewMode === "tools"
                    ? "tool, aufgabe oder tag suchen"
                    : "bundle, workflow oder ziel suchen"
                }
                className="w-full border border-[#164e63] bg-[#020606] px-4 py-5 text-base uppercase tracking-[0.16em] text-[#7ee7ff] outline-none placeholder:text-[#14566a] focus:border-[#7cff9b] sm:text-lg"
              />
            </label>

            <div className="mt-5 grid gap-3 text-xs uppercase tracking-[0.22em] text-[#14566a] sm:grid-cols-3">
              <p className="border border-[#164e63] px-3 py-3">
                Modus: <span className="text-[#7ee7ff]">{viewMode}</span>
              </p>
              <p className="border border-[#164e63] px-3 py-3">
                Kategorie:{" "}
                <span className="text-[#7ee7ff]">{activeCategoryName}</span>
              </p>
              <p className="border border-[#164e63] px-3 py-3">
                Treffer: <span className="text-[#7cff9b]">{resultCount}</span>
              </p>
            </div>
          </div>
        </section>

        <section className="mt-4 grid gap-4 xl:grid-cols-[260px_0.72fr_1fr]">
          <aside className="border border-[#164e63] bg-black/72 p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <SectionLabel>Kategorien</SectionLabel>
              <button
                type="button"
                onClick={() => setActiveCategory("alle")}
                className="text-[10px] uppercase tracking-[0.22em] text-[#14566a] hover:text-[#7cff9b]"
              >
                Reset
              </button>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar xl:block xl:space-y-2 xl:overflow-visible xl:pb-0">
              {categories.map((category) => {
                const isActive = activeCategory === category.slug;

                return (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setActiveCategory(category.slug)}
                    className={
                      isActive
                        ? "min-w-max border border-[#7cff9b] bg-[#7cff9b]/10 px-3 py-3 text-left text-xs uppercase tracking-[0.2em] text-[#7cff9b] xl:w-full"
                        : "min-w-max border border-[#164e63] bg-transparent px-3 py-3 text-left text-xs uppercase tracking-[0.2em] text-[#14566a] hover:text-[#7ee7ff] xl:w-full"
                    }
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="border border-[#164e63] bg-black/72 p-4">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#164e63] pb-4">
              <SectionLabel>
                {viewMode === "tools" ? "Werkzeugregister" : "Bundleregister"}
              </SectionLabel>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#14566a]">
                {resultCount} Einträge
              </p>
            </div>

            <div className="max-h-[620px] space-y-2 overflow-y-auto pr-1 no-scrollbar">
              {viewMode === "tools" && visibleTools.length === 0 ? (
                <EmptyState mode={viewMode} />
              ) : null}

              {viewMode === "bundles" && visibleBundles.length === 0 ? (
                <EmptyState mode={viewMode} />
              ) : null}

              {viewMode === "tools"
                ? visibleTools.map((tool, index) => {
                    const isActive = activeTool?.slug === tool.slug;

                    return (
                      <button
                        key={tool.slug}
                        type="button"
                        onClick={() => setActiveToolSlug(tool.slug)}
                        onMouseEnter={() => setActiveToolSlug(tool.slug)}
                        className={
                          isActive
                            ? "block w-full border border-[#7cff9b] bg-[#7cff9b]/10 p-4 text-left"
                            : "block w-full border border-[#164e63] bg-[#020606] p-4 text-left hover:border-[#3ca7bf]"
                        }
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.26em] text-[#14566a]">
                              {String(index + 1).padStart(2, "0")} // {tool.badge}
                            </p>
                            <h2
                              className={
                                isActive
                                  ? "mt-2 text-xl font-black uppercase tracking-[-0.03em] text-[#7cff9b]"
                                  : "mt-2 text-xl font-black uppercase tracking-[-0.03em] text-[#d9fbff]"
                              }
                            >
                              {tool.name}
                            </h2>
                          </div>
                          <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-[#14566a]">
                            {tool.pricing}
                          </span>
                        </div>

                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6bb8c8]">
                          {tool.description}
                        </p>
                      </button>
                    );
                  })
                : visibleBundles.map((bundle, index) => {
                    const isActive = activeBundle?.slug === bundle.slug;

                    return (
                      <button
                        key={bundle.slug}
                        type="button"
                        onClick={() => setActiveBundleSlug(bundle.slug)}
                        onMouseEnter={() => setActiveBundleSlug(bundle.slug)}
                        className={
                          isActive
                            ? "block w-full border border-[#7cff9b] bg-[#7cff9b]/10 p-4 text-left"
                            : "block w-full border border-[#164e63] bg-[#020606] p-4 text-left hover:border-[#3ca7bf]"
                        }
                      >
                        <p className="text-[10px] uppercase tracking-[0.26em] text-[#14566a]">
                          {String(index + 1).padStart(2, "0")} // {bundle.badge}
                        </p>
                        <h2
                          className={
                            isActive
                              ? "mt-2 text-xl font-black uppercase tracking-[-0.03em] text-[#7cff9b]"
                              : "mt-2 text-xl font-black uppercase tracking-[-0.03em] text-[#d9fbff]"
                          }
                        >
                          {bundle.name}
                        </h2>
                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6bb8c8]">
                          {bundle.description}
                        </p>
                      </button>
                    );
                  })}
            </div>
          </section>

          <section className="border border-[#164e63] bg-black/82 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3 border-b border-[#164e63] pb-4">
              <SectionLabel>
                {viewMode === "tools" ? "Aktives Werkzeug" : "Aktives Bundle"}
              </SectionLabel>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#14566a]">
                Detailkanal
              </p>
            </div>

            {viewMode === "tools" && activeTool ? (
              <div>
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#14566a]">
                    {activeTool.badge} // {activeTool.pricing}
                  </p>
                  <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.06em] text-[#d9fbff] sm:text-6xl">
                    {activeTool.name}
                  </h2>
                </div>

                <p className="terminal-copy mt-8 max-w-4xl">
                  {activeTool.description}
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <DetailRow
                    label="Kategorie"
                    value={getCategoryLabel(activeTool.category)}
                  />
                  <DetailRow label="Preismodell" value={activeTool.pricing} />
                  <DetailRow label="Zielgruppe" value={activeTool.audience} />
                  <DetailRow label="Tags" value={activeTool.tags.join(" / ")} />
                </div>

                <a
                  href={activeTool.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block border border-[#7cff9b] bg-[#7cff9b]/10 px-5 py-4 text-xs uppercase tracking-[0.28em] text-[#7cff9b] hover:bg-[#7cff9b]/20"
                >
                  &gt; externes Ziel öffnen
                </a>
              </div>
            ) : null}

            {viewMode === "bundles" && activeBundle ? (
              <div>
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#14566a]">
                    {activeBundle.badge} // Bundle
                  </p>
                  <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.06em] text-[#d9fbff] sm:text-6xl">
                    {activeBundle.name}
                  </h2>
                </div>

                <p className="terminal-copy mt-8 max-w-4xl">
                  {activeBundle.description}
                </p>

                <div className="terminal-copy mt-8 border-t border-[#164e63] pt-6">
                  <SectionLabel>Warum diese Kombination funktioniert</SectionLabel>
                  <p className="mt-4">{activeBundle.why}</p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <DetailRow
                    label="Kategorie"
                    value={getCategoryLabel(activeBundle.category)}
                  />
                  <DetailRow label="Zielgruppe" value={activeBundle.audience} />
                  <DetailRow
                    label="Ideal für"
                    value={activeBundle.bestFor.join(" / ")}
                  />
                  <DetailRow label="Nicht ideal" value={activeBundle.notFor} />
                </div>

                <div className="terminal-copy mt-8 border-t border-[#164e63] pt-6">
                  <SectionLabel>Klickbare KI-Werkzeuge</SectionLabel>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {activeBundle.toolLinks.map((tool) => (
                      <a
                        key={`${activeBundle.slug}-${tool.name}`}
                        href={tool.url}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-[#164e63] px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#7ee7ff] hover:border-[#7cff9b] hover:text-[#7cff9b]"
                      >
                        &gt; {tool.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="terminal-copy mt-8 border-t border-[#164e63] pt-6">
                  <SectionLabel>Workflow</SectionLabel>
                  <div className="mt-4 space-y-2">
                    {activeBundle.workflow.map((step, index) => (
                      <p key={step}>
                        <span className="text-[#7cff9b]">&gt;</span>{" "}
                        {String(index + 1).padStart(2, "0")} {step}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        </section>

        <footer className="mt-4 flex flex-col gap-4 border border-[#164e63] bg-black/65 px-4 py-4 text-[10px] uppercase tracking-[0.28em] text-[#14566a] sm:flex-row sm:items-center sm:justify-between">
          <p>
            System bereit // {tools.length} Tools // {bundles.length} Bundles
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="/impressum" className="hover:text-[#7cff9b]">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-[#7cff9b]">
              Datenschutz
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
