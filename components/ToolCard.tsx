import type { Tool } from "@/data/tools";
import { Icon } from "@/components/Icon";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/20 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            {tool.badge}
          </p>
          <h3 className="text-xl font-bold tracking-tight text-white">
            {tool.name}
          </h3>
        </div>

        {tool.featured ? (
          <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-200">
            Top Pick
          </span>
        ) : null}
      </div>

      <p className="mb-4 flex-1 text-sm leading-6 text-slate-300">
        {tool.description}
      </p>

      <div className="mb-4 space-y-2 text-sm text-slate-300">
        <p>
          <span className="font-semibold text-slate-100">Für:</span>{" "}
          {tool.audience}
        </p>
        <p>
          <span className="font-semibold text-slate-100">Preis:</span>{" "}
          {tool.pricing}
        </p>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-200"
      >
        Tool ansehen
        <Icon name="external" className="h-4 w-4" />
      </a>
    </article>
  );
}