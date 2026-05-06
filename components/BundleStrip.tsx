"use client";

import { useRef } from "react";
import { bundles } from "@/data/bundles";
import { Icon } from "@/components/Icon";

export function BundleStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollBundles(direction: "left" | "right") {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const scrollAmount = direction === "left" ? -420 : 420;

    element.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 sm:px-8">
      <div className="rounded-[2rem] border border-violet-300/15 bg-violet-300/[0.05] p-5 shadow-2xl shadow-violet-950/20 sm:p-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-violet-200">
              <Icon name="spark" className="h-4 w-4" />
              KI-Bundles
            </p>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Kuratierte Tool-Pakete für konkrete Workflows.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Bundles kombinieren passende KI-Tools zu einem Stack: Denken,
              Recherche, Produktion, Design, Automatisierung oder Umsetzung.
            </p>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBundles("left")}
              aria-label="Bundles nach links scrollen"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-slate-950 text-white transition hover:border-violet-300/40 hover:bg-slate-900"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBundles("right")}
              aria-label="Bundles nach rechts scrollen"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-slate-950 text-white transition hover:border-violet-300/40 hover:bg-slate-900"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {bundles.map((bundle) => (
            <a
              key={bundle.slug}
              href="#bundles"
              className="group min-w-[280px] max-w-[280px] snap-start rounded-3xl border border-white/10 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-slate-900 sm:min-w-[360px] sm:max-w-[360px]"
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
                  <span className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[11px] font-bold text-cyan-200">
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
                    className="rounded-full bg-violet-300/10 px-2.5 py-1 text-xs text-violet-100 ring-1 ring-violet-300/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm font-bold text-violet-200 transition group-hover:text-violet-100">
                Bundle ansehen →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}