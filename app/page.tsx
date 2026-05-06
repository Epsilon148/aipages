import { categories } from "@/data/categories";
import { bundles } from "@/data/bundles";
import { tools } from "@/data/tools";
import { BundleDirectory } from "@/components/BundleDirectory";
import { BundleStrip } from "@/components/BundleStrip";
import { Icon } from "@/components/Icon";
import { ToolDirectory } from "@/components/ToolDirectory";
import { site } from "@/lib/site";

const featuredTools = tools.filter((tool) => tool.featured).slice(0, 6);
const featuredBundles = bundles.filter((bundle) => bundle.featured).slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:py-32">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              <Icon name="spark" className="h-4 w-4" />
              KI-Tool-Verzeichnis für {site.domain}
            </p>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              {site.claim}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {site.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#tools"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-300 px-6 py-4 text-base font-black text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:bg-cyan-200"
              >
                Einzeltools entdecken
              </a>
              <a
                href="#bundles"
                className="inline-flex items-center justify-center rounded-2xl border border-violet-300/30 bg-slate-900 px-6 py-4 text-base font-bold text-violet-100 transition hover:border-violet-200 hover:bg-slate-800 hover:text-white"
              >
                KI-Bundles ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      <BundleStrip />

      <section id="kategorien" className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm font-semibold text-violet-200">
            <Icon name="bolt" className="h-4 w-4" />
            Kategorien
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tools einzeln entdecken oder als KI-Bundle kombinieren.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            AI Pages zeigt dir einzelne KI-Tools nach Kategorie und zusätzlich
            kuratierte Tool-Pakete für konkrete Workflows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.slice(2).map((category) => (
            <a
              key={category.slug}
              href="#tools"
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-violet-300/10 text-violet-200 ring-1 ring-violet-300/20">
                <Icon name="grid" className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-violet-950/20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm font-semibold text-violet-200">
                <Icon name="check" className="h-4 w-4" />
                Featured Bundles
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Empfohlene KI-Bundles für den Start.
              </h2>
            </div>
            <a
              href="#bundles"
              className="text-sm font-bold text-violet-200 transition hover:text-violet-100"
            >
              Alle Bundles ansehen →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredBundles.map((bundle) => (
              <div
                key={bundle.slug}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
              >
                <p className="mb-2 text-sm font-semibold text-violet-200">
                  {bundle.badge}
                </p>
                <h3 className="text-lg font-black text-white">
                  {bundle.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {bundle.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {bundle.tools.slice(0, 5).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-violet-300/10 px-3 py-1 text-xs text-violet-100 ring-1 ring-violet-300/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-cyan-950/20">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Icon name="check" className="h-4 w-4" />
                Featured Tools
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Einzelne KI-Tools für deinen Stack.
              </h2>
            </div>
            <a
              href="#tools"
              className="text-sm font-bold text-cyan-200 transition hover:text-cyan-100"
            >
              Alle Tools ansehen →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredTools.map((tool) => (
              <div
                key={tool.slug}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
              >
                <p className="mb-2 text-sm font-semibold text-cyan-200">
                  {tool.badge}
                </p>
                <h3 className="text-lg font-black text-white">{tool.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToolDirectory />
      <BundleDirectory />
    </>
  );
}