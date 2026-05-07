"use client";

import { useEffect, useMemo, useState } from "react";
import { bundles } from "@/data/bundles";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { MatrixText } from "@/components/MatrixText";

type Phase = "intro" | "accepted" | "denied" | "boot" | "terminal";
type ViewMode = "tools" | "bundles";

const bootPrompt = "AIPAGES BEITRETEN (Y/N)";

const bootLines = [
  "PROZESS WIRD GESTARTET",
  "SYSTEMKERN WIRD GEWECKT",
  "SIGNAL WIRD GESUCHT",
  "VERBINDUNG WIRD AUFGEBAUT",
  "WERKZEUGDATEN WERDEN GEPRUEFT",
  "BUNDLESTACKS WERDEN GELADEN",
  "INTERFACE WIRD GELADEN",
  "AIPAGES BEREIT",
];

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");
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

  const visibleTools = useMemo(() => {
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

  const visibleBundles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return bundles.filter((bundle) => {
      const matchesCategory =
        activeCategory === "alle" || bundle.category === activeCategory;

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

  const activeTool =
    visibleTools.find((tool) => tool.slug === activeToolSlug) ??
    visibleTools[0] ??
    tools[0];

  const activeBundle =
    visibleBundles.find((bundle) => bundle.slug === activeBundleSlug) ??
    visibleBundles[0] ??
    bundles[0];

  const resultCount =
    viewMode === "tools" ? visibleTools.length : visibleBundles.length;

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
              TASTE Y ODER N
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
      <div className="mx-auto max-w-[1400px]">
        <header className="terminal-panel-strong mb-10 px-5 py-5">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <MatrixText text="AIPAGES" pixel={7} gap={2} charGap={8} />
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#3ca7bf]">
                TERMINAL INDEX // KI TOOLS UND KI BUNDLES
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

                <a
                  href="/impressum"
                  className="border border-[#164e63] bg-transparent px-4 py-3"
                >
                  <MatrixText text="LEGAL" pixel={3} gap={1} charGap={4} />
                </a>
              </nav>

              <p className="text-xs uppercase tracking-[0.28em] text-[#14566a]">
                SYSTEM BEREIT // {resultCount} EINTRAEGE
              </p>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <div className="max-w-[980px]">
            <MatrixText
              text="KI TOOLS FINDEN"
              pixel={6}
              gap={2}
              charGap={8}
            />

            <div className="mt-5">
              <MatrixText
                text="STACKS KOMBINIEREN"
                pixel={6}
                gap={2}
                charGap={8}
                onColor="#7cff9b"
                offColor="rgba(31, 107, 63, 0.14)"
              />
            </div>

            <p className="terminal-copy mt-8 max-w-4xl">
              AIPAGES IST EIN KURATIERTER INDEX FUER EINZELNE KI TOOLS UND
              KOMBINIERTE KI BUNDLES. WAEHLE EINEN MODUS, FILTERE NACH
              KATEGORIE UND OEFNE LINKS EINEN EINTRAG. DIE AKTIVE INFORMATION
              WIRD RECHTS ANGEZEIGT.
            </p>
          </div>
        </section>

        <section className="terminal-rule mb-10 pb-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#3ca7bf]">
                KATEGORIE SIGNAL
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {categories.map((category) => {
                  const isActive = activeCategory === category.slug;

                  return (
                    <button
                      key={category.slug}
                      type="button"
                      onClick={() => setActiveCategory(category.slug)}
                      className="border-0 bg-transparent px-0 py-1 text-left"
                    >
                      <span
                        className={
                          isActive
                            ? "text-xs uppercase tracking-[0.28em] text-[#7cff9b]"
                            : "text-xs uppercase tracking-[0.28em] text-[#14566a]"
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
                SUCHSIGNAL
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

        <div className="grid gap-12 xl:grid-cols-[0.58fr_1fr]">
          <section>
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[#3ca7bf]">
                {viewMode === "tools" ? "WERKZEUGREGISTER" : "BUNDLEREGISTER"}
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-[#14566a]">
                {resultCount} EINTRAEGE
              </p>
            </div>

            <div className="max-h-[680px] overflow-y-auto pr-3 no-scrollbar">
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
            <div className="terminal-panel-strong px-5 py-5 sm:px-6 sm:py-6">
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
                  <div className="mt-8">
                    <MatrixText
                      text={activeTool.name.toUpperCase()}
                      pixel={6}
                      gap={2}
                      charGap={8}
                    />
                  </div>

                  <p className="terminal-copy mt-8 max-w-4xl">
                    {activeTool.description}
                  </p>

                  <div className="terminal-copy mt-8 grid gap-2 border-t border-[#164e63] pt-6 md:grid-cols-2">
                    <p>
                      <span className="text-[#7cff9b]">&gt;</span> KATEGORIE:{" "}
                      {activeTool.category}
                    </p>
                    <p>
                      <span className="text-[#7cff9b]">&gt;</span> PREISMODELL:{" "}
                      {activeTool.pricing}
                    </p>
                    <p>
                      <span className="text-[#7cff9b]">&gt;</span> ZIELGRUPPE:{" "}
                      {activeTool.audience}
                    </p>
                    <p>
                      <span className="text-[#7cff9b]">&gt;</span> TAGS:{" "}
                      {activeTool.tags.join(" / ")}
                    </p>
                  </div>

                  <a
                    href={activeTool.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block border border-[#164e63] px-4 py-3 text-xs uppercase tracking-[0.25em] text-[#7cff9b]"
                  >
                    &gt; externes ziel oeffnen
                  </a>
                </div>
              ) : null}

              {viewMode === "bundles" && activeBundle ? (
                <div>
                  <div className="mt-8">
                    <MatrixText
                      text={activeBundle.name.toUpperCase()}
                      pixel={5}
                      gap={2}
                      charGap={7}
                    />
                  </div>

                  <p className="terminal-copy mt-8 max-w-4xl">
                    {activeBundle.description}
                  </p>

                  <div className="terminal-copy mt-8 border-t border-[#164e63] pt-6">
                    <p>
                      <span className="text-[#7cff9b]">&gt;</span> ZIELGRUPPE:{" "}
                      {activeBundle.audience}
                    </p>
                    <p>
                      <span className="text-[#7cff9b]">&gt;</span> TOOLS:{" "}
                      {activeBundle.tools.join(" / ")}
                    </p>
                    <p>
                      <span className="text-[#7cff9b]">&gt;</span> IDEAL FUER:{" "}
                      {activeBundle.bestFor.join(" / ")}
                    </p>
                  </div>

                  <div className="terminal-copy mt-8 border-t border-[#164e63] pt-6">
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
                  geladen
                </p>
                <p>
                  <span className="text-[#7cff9b]">&gt;</span> bundlestacks
                  geladen
                </p>
                <p>
                  <span className="text-[#7cff9b]">&gt;</span> menschliche
                  pruefung erforderlich
                </p>
                <p>
                  <span className="text-[#7cff9b]">&gt;</span> system bereit{" "}
                  <span className="terminal-cursor" />
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}