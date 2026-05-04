import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { Icon } from "@/components/Icon";
import { ToolDirectory } from "@/components/ToolDirectory";
import { site } from "@/lib/site";

const featuredTools = tools.filter((tool) => tool.featured).slice(0, 6);

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
              Neues Verzeichnis für {site.domain}
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
                Tools entdecken
              </a>
              <a
                href="#kategorien"
                className="inline-flex items-center justify-center rounded-2xl border border-cyan-300/30 bg-slate-900 px-6 py-4 text-base font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-slate-800 hover:text-white"
              >
                Kategorien ansehen
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-4xl font-black text-white">{tools.length}</p>
              <p className="mt-2 text-sm font-medium text-slate-400">
                kuratierte Tools
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-4xl font-black text-white">
                {categories.length - 1}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-400">
                Kategorien
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-4xl font-black text-white">0</p>
              <p className="mt-2 text-sm font-medium text-slate-400">
                Cookies, Tracking oder Login
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="kategorien" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm font-semibold text-violet-200">
            <Icon name="bolt" className="h-4 w-4" />
            Kategorien
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Von Website-Buildern bis No-Code-Automation.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            AI Pages bündelt Tools, die besonders relevant für Webseiten,
            Landingpages und Online-Marketing sind.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.slice(1).map((category) => (
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
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Icon name="check" className="h-4 w-4" />
                Featured
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Empfohlene Tools für den Start.
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
    </>
  );
}