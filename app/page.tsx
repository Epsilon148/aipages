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
  "SYSTEMKERN WIRD GEWECKT",
  "SIGNAL WIRD GESUCHT",
  "VERBINDUNG WIRD AUFGEBAUT",
  "WERKZEUGDATEN WERDEN GEPRÜFT",
  "BUNDLESTACKS WERDEN GELADEN",
  "INTERFACE WIRD GELADEN",
  "AIPAGES BEREIT",
];

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="text-[#7cff9b]">&gt;</span> {label}: {value}
    </p>
  );
}

function EmptyState({ mode }: { mode: ViewMode }) {
  return (
    <div className="terminal-panel px-5 py-8 text-sm uppercase tracking-[0.22em] text-[#14566a]">
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
      }, 70);
    }, 500);

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
      }, 750);

      return () => window.clearTimeout(timer);
    }

    if (phase === "denied") {
      const timer = window.setTimeout(() => {
        setPhase("intro");
      }, 1400);

      return () => window.clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== "boot") return;

    if (bootIndex >= bootLines.length) {
      const timer = window.setTimeout(() => {
        setPhase("terminal");
      }, 750);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setBootIndex((current) => current + 1);
    }, 460);

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

  const categoryName =
    categories.find((category) => category.slug === activeCategory)?.name ??
    activeCategory;

  function getCategoryLabel(slug: string) {
    return categories.find((category) => category.slug === slug)?.name ?? slug;
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
              text="ACCEPTED"
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
    <main className="relative z-10 min-h-screen px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[1440px]">
        <header className="terminal-panel-strong mb-8 px-4 py-4 sm:mb-10 sm:px-5 sm:py-5">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="hidden sm:block">
                <MatrixText text="AIPAGES" pixel={7} gap={2} charGap={8} />
              </div>
              <div className="sm:hidden">
                <MatrixText text="AIPAGES" pixel={5} gap={1} charGap={5} />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#3ca7bf] sm:tracking-[0.24em]">
                KI TOOLS // KI BUNDLES // DIGITALES VERZEICHNIS
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <nav className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setViewMode("tools");
                    setActiveCategory("alle");
                    setQuery("");
                  }}
                  className="border border-[#164e63] bg-transparent px-4 py-3"
                >
                  <MatrixText
                    text="TOOLS"
                    pixel={3}
                    gap={1}
                    charGap={4}
                    onColor={viewMode === "tools" ? "#7cff9b" : "#7ee7ff"}
                    offColor={
                      viewMode === "tools"
                        ? "rgba(31, 107, 63, 0.14)"
                        : "rgba(20, 90, 110, 0.12)"
                    }
                  />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setViewMode("bundles");
                    setActiveCategory("alle");
                    setQuery("");
                  }}
                  className="border border-[#164e63] bg-transparent px-4 py-3"
                >
                  <MatrixText
                    text="BUNDLES"
                    pixel={3}
                    gap={1}
                    charGap={4}
                    onColor={viewMode === "bundles" ? "#7cff9b" : "#7ee7ff"}
                    offColor={
                      viewMode === "bundles"
                        ? "rgba(31, 107, 63, 0.14)"
                        : "rgba(20, 90, 110, 0.12)"
                    }
                  />
                </button>
              </nav>

              <p className="text-xs uppercase tracking-[0.28em] text-[#14566a]">
                System bereit // {resultCount} Einträge
              </p>
            </div>
          </div>
        </header>

        <section className="mb-10 sm:mb-12">
          <div className="max-w-[1000px]">
            <div className="hidden sm:block">
              <MatrixText
                text="KI TOOLS FINDEN"
                pixel={6}
                gap={2}
                charGap={8}
              />
              <div className="mt-5">
                <MatrixText
                  text="KI BUNDLES NUTZEN"
                  pixel={6}
                  gap={2}
                  charGap={8}
                  onColor="#7cff9b"
                  offColor="rgba(31, 107, 63, 0.14)"
                />
              </div>
            </div>

            <div className="sm:hidden">
              <MatrixText
                text="KI TOOLS FINDEN"
                pixel={4}
                gap={1}
                charGap={5}
              />
              <div className="mt-4">
                <MatrixText
                  text="KI BUNDLES NUTZEN"
                  pixel={4}
                  gap={1}
                  charGap={5}
                  onColor="#7cff9b"
                  offColor="rgba(31, 107, 63, 0.14)"
                />
              </div>
            </div>

            <p className="terminal-copy mt-8 max-w-4xl">
              AIPAGES IST EIN VERZEICHNIS FÜR KI-WERKZEUGE UND KI-BUNDLES.
              EINZELNE TOOLS ZEIGEN, WAS EIN SYSTEM KANN. BUNDLES ZEIGEN,
              WELCHE TOOLS ZUSAMMEN GUT FUNKTIONIEREN UND FÜR WELCHEN ZWECK
              SIE SINNVOLL SIND.
            </p>
          </div>
        </section>

        <section className="terminal-rule mb-10 pb-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#3ca7bf]">
                Kategorie Signal // {categoryName}
              </p>

              <div className="flex gap-x-6 gap-y-3 overflow-x-auto pb-2 no-scrollbar md:flex-wrap md:overflow-visible">
                {categories.map((category) => {
                  const isActive = activeCategory === category.slug;

                  return (
                    <button
                      key={category.slug}
                      type="button"
                      onClick={() => setActiveCategory(category.slug)}
                      className="shrink-0 border-0 bg-transparent px-0 py-1 text-left"
                    >
                      <span
                        className={
                          isActive
                            ? "whitespace-nowrap text-xs uppercase tracking-[0.24em] text-[#7cff9b] sm:tracking-[0.28em]"
                            : "whitespace-nowrap text-xs uppercase tracking-[0.24em] text-[#14566a] sm:tracking-[0.28em]"
                        }
                      >
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.28em] text-[#3ca7bf]">
                Suchsignal
              </span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={
                  viewMode === "tools" ? "tool suchen" : "bundle suchen"
                }
                className="w-full border border-[#164e63] bg-black px-4 py-3 text-sm uppercase tracking-[0.18em] text-[#7ee7ff] outline-none placeholder:text-[#14566a]"
              />
            </label>
          </div>
        </section>

        <div className="grid gap-10 xl:grid-cols-[0.58fr_1fr] xl:gap-12">
          <section>
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[#3ca7bf]">
                {viewMode === "tools" ? "Werkzeugregister" : "Bundleregister"}
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-[#14566a]">
                {resultCount} Einträge
              </p>
            </div>

            <div className="max-h-[430px] overflow-y-auto pr-2 no-scrollbar sm:max-h-[680px] sm:pr-3">
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
                        className="block w-full border-0 border-b border-[#164e63] bg-transparent py-5 text-left"
                      >
                        <p
                          className={
                            isActive
                              ? "mb-3 text-xs uppercase tracking-[0.35em] text-[#7cff9b]"
                              : "mb-3 text-xs uppercase tracking-[0.35em] text-[#14566a]"
                          }
                        >
                          {String(index + 1).padStart(2, "0")} // {tool.badge}
                        </p>

                        <MatrixText
                          text={tool.name.toUpperCase()}
                          pixel={4}
                          gap={1}
                          charGap={5}
                          onColor={isActive ? "#7cff9b" : "#3ca7bf"}
                          offColor={
                            isActive
                              ? "rgba(31, 107, 63, 0.14)"
                              : "rgba(20, 90, 110, 0.09)"
                          }
                        />
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
                        className="block w-full border-0 border-b border-[#164e63] bg-transparent py-5 text-left"
                      >
                        <p
                          className={
                            isActive
                              ? "mb-3 text-xs uppercase tracking-[0.35em] text-[#7cff9b]"
                              : "mb-3 text-xs uppercase tracking-[0.35em] text-[#14566a]"
                          }
                        >
                          {String(index + 1).padStart(2, "0")} // {bundle.badge}
                        </p>

                        <MatrixText
                          text={bundle.name.toUpperCase()}
                          pixel={4}
                          gap={1}
                          charGap={5}
                          onColor={isActive ? "#7cff9b" : "#3ca7bf"}
                          offColor={
                            isActive
                              ? "rgba(31, 107, 63, 0.14)"
                              : "rgba(20, 90, 110, 0.09)"
                          }
                        />
                      </button>
                    );
                  })}
            </div>
          </section>

          <section>
            <div className="terminal-panel-strong px-4 py-4 sm:px-6 sm:py-6">
              <div className="terminal-rule pb-5">
                <MatrixText
                  text={
                    viewMode === "tools"
                      ? "AKTIVES WERKZEUG"
                      : "AKTIVES BUNDLE"
                  }
                  pixel={3}
                  gap={1}
                  charGap={4}
                  onColor="#7cff9b"
                  offColor="rgba(31, 107, 63, 0.12)"
                />
              </div>

              {viewMode === "tools" && activeTool ? (
                <div>
                  <div className="mt-8 hidden sm:block">
                    <MatrixText
                      text={activeTool.name.toUpperCase()}
                      pixel={6}
                      gap={2}
                      charGap={8}
                    />
                  </div>
                  <div className="mt-8 sm:hidden">
                    <MatrixText
                      text={activeTool.name.toUpperCase()}
                      pixel={4}
                      gap={1}
                      charGap={5}
                    />
                  </div>

                  <p className="terminal-copy mt-8 max-w-4xl">
                    {activeTool.description}
                  </p>

                  <div className="terminal-copy mt-8 grid gap-2 border-t border-[#164e63] pt-6 md:grid-cols-2">
                    <DetailRow
                      label="KATEGORIE"
                      value={getCategoryLabel(activeTool.category)}
                    />
                    <DetailRow label="PREISMODELL" value={activeTool.pricing} />
                    <DetailRow label="ZIELGRUPPE" value={activeTool.audience} />
                    <DetailRow label="TAGS" value={activeTool.tags.join(" / ")} />
                  </div>

                  <a
                    href={activeTool.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block border border-[#164e63] px-4 py-3 text-xs uppercase tracking-[0.25em] text-[#7cff9b]"
                  >
                    &gt; externes Ziel öffnen
                  </a>
                </div>
              ) : null}

              {viewMode === "bundles" && activeBundle ? (
                <div>
                  <div className="mt-8 hidden sm:block">
                    <MatrixText
                      text={activeBundle.name.toUpperCase()}
                      pixel={5}
                      gap={2}
                      charGap={7}
                    />
                  </div>
                  <div className="mt-8 sm:hidden">
                    <MatrixText
                      text={activeBundle.name.toUpperCase()}
                      pixel={4}
                      gap={1}
                      charGap={5}
                    />
                  </div>

                  <p className="terminal-copy mt-8 max-w-4xl">
                    {activeBundle.description}
                  </p>

                  <div className="terminal-copy mt-8 border-t border-[#164e63] pt-6">
                    <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                      Warum diese Kombination effektiv ist
                    </p>
                    <p>{activeBundle.why}</p>
                  </div>

                  <div className="terminal-copy mt-8 border-t border-[#164e63] pt-6">
                    <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                      Klickbare KI-Werkzeuge
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {activeBundle.toolLinks.map((tool) => (
                        <a
                          key={`${activeBundle.slug}-${tool.name}`}
                          href={tool.url}
                          target="_blank"
                          rel="noreferrer"
                          className="border border-[#164e63] px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#7ee7ff] hover:text-[#7cff9b]"
                        >
                          &gt; {tool.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="terminal-copy mt-8 border-t border-[#164e63] pt-6">
                    <DetailRow
                      label="KATEGORIE"
                      value={getCategoryLabel(activeBundle.category)}
                    />
                    <DetailRow label="ZIELGRUPPE" value={activeBundle.audience} />
                    <DetailRow
                      label="IDEAL FÜR"
                      value={activeBundle.bestFor.join(" / ")}
                    />
                  </div>

                  <div className="terminal-copy mt-8 border-t border-[#164e63] pt-6">
                    <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                      Workflow
                    </p>

                    {activeBundle.workflow.map((step, index) => (
                      <p key={step}>
                        <span className="text-[#7cff9b]">&gt;</span>{" "}
                        {String(index + 1).padStart(2, "0")} {step}
                      </p>
                    ))}
                  </div>

                  <p className="terminal-copy mt-8 border-t border-[#164e63] pt-6">
                    <span className="text-[#7cff9b]">&gt;</span> NICHT IDEAL:{" "}
                    {activeBundle.notFor}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="mt-8">
              <MatrixText
                text="TERMINAL LOG"
                pixel={3}
                gap={1}
                charGap={4}
                onColor="#3ca7bf"
                offColor="rgba(20, 90, 110, 0.09)"
              />

              <div className="terminal-copy mt-5 grid gap-2 md:grid-cols-2">
                <p>
                  <span className="text-[#7cff9b]">&gt;</span> toolregister
                  geladen: {tools.length}
                </p>
                <p>
                  <span className="text-[#7cff9b]">&gt;</span> bundlestacks
                  geladen: {bundles.length}
                </p>
                <p>
                  <span className="text-[#7cff9b]">&gt;</span> menschliche Prüfung
                  empfohlen
                </p>
                <p>
                  <span className="text-[#7cff9b]">&gt;</span> system bereit{" "}
                  <span className="terminal-cursor" />
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#164e63] pt-5 text-xs uppercase tracking-[0.28em] text-[#14566a]">
                <a href="/impressum" className="hover:text-[#7cff9b]">
                  Impressum
                </a>
                <a href="/datenschutz" className="hover:text-[#7cff9b]">
                  Datenschutz
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
