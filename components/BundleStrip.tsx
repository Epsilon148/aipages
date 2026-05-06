"use client";

import { useRef, useState } from "react";
import { bundles } from "@/data/bundles";
import { Icon } from "@/components/Icon";

export function BundleStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  function scrollBundles(direction: "left" | "right") {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    element.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = event.clientX;
    scrollLeftRef.current = element.scrollLeft;

    element.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const element = scrollRef.current;

    if (!element || !isDraggingRef.current) {
      return;
    }

    const deltaX = event.clientX - startXRef.current;
    element.scrollLeft = scrollLeftRef.current - deltaX;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      element.releasePointerCapture(event.pointerId);
    } catch {
      // ignore
    }
  }

  function handlePointerLeave() {
    isDraggingRef.current = false;
    setIsDragging(false);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-violet-950/30 sm:p-6">
        <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative mb-6">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-violet-200">
            <Icon name="spark" className="h-4 w-4" />
            KI-Bundles
          </p>

          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            Kuratierte Tool-Pakete für echte Workflows.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Entdecke kombinierte KI-Stacks für Business, Marketing, Design,
            Video, Automatisierung, Coding und Recherche.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollBundles("left")}
            aria-label="Bundles nach links scrollen"
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-slate-950/90 text-lg font-black text-white shadow-lg transition hover:border-violet-300/40 hover:bg-slate-900 md:grid"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollBundles("right")}
            aria-label="Bundles nach rechts scrollen"
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-slate-950/90 text-lg font-black text-white shadow-lg transition hover:border-cyan-300/40 hover:bg-slate-900 md:grid"
          >
            →
          </button>

          <div
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerLeave}
            className={`relative flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            } md:px-14`}
          >
            {bundles.map((bundle) => (
              <a
                key={bundle.slug}
                href="#bundles"
                className="group min-w-[280px] max-w-[280px] snap-start rounded-3xl border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.08] sm:min-w-[360px] sm:max-w-[360px]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-2 inline-flex rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-200">
                      {bundle.badge}
                    </p>
                    <h3 className="text-lg font-black leading-tight text-white">
                      {bundle.name}
                    </h3>
                  </div>

                  {bundle.featured ? (
                    <span className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[11px] font-black text-cyan-200">
                      Top
                    </span>
                  ) : null}
                </div>

                <p className="line-clamp-3 text-sm leading-6 text-slate-300">
                  {bundle.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {bundle.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300 ring-1 ring-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="text-sm font-black text-violet-200 transition group-hover:text-violet-100">
                    Bundle ansehen
                  </p>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-violet-300/10 text-violet-100 ring-1 ring-violet-300/20 transition group-hover:bg-violet-300 group-hover:text-slate-950">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => scrollBundles("left")}
            aria-label="Bundles nach links scrollen"
            className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-black text-white"
          >
            ← Zurück
          </button>
          <button
            type="button"
            onClick={() => scrollBundles("right")}
            aria-label="Bundles nach rechts scrollen"
            className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-black text-white"
          >
            Weiter →
          </button>
        </div>
      </div>
    </section>
  );
}