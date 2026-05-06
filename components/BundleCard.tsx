import type { Bundle } from "@/data/bundles";
import { Icon } from "@/components/Icon";

type BundleCardProps = {
  bundle: Bundle;
};

export function BundleCard({ bundle }: BundleCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-violet-300/15 bg-violet-300/[0.06] p-5 shadow-2xl shadow-violet-950/20 transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-violet-300/[0.09]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 inline-flex rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-200">
            {bundle.badge}
          </p>
          <h3 className="text-xl font-bold tracking-tight text-white">
            {bundle.name}
          </h3>
        </div>

        {bundle.featured ? (
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            Bundle Pick
          </span>
        ) : null}
      </div>

      <p className="mb-4 text-sm leading-6 text-slate-300">
        {bundle.description}
      </p>

      <div className="mb-4">
        <p className="mb-2 text-sm font-bold text-slate-100">Enthaltene Tools</p>
        <div className="flex flex-wrap gap-2">
          {bundle.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4 space-y-2 text-sm text-slate-300">
        <p>
          <span className="font-semibold text-slate-100">Für:</span>{" "}
          {bundle.audience}
        </p>
        <p>
          <span className="font-semibold text-slate-100">Nicht ideal für:</span>{" "}
          {bundle.notFor}
        </p>
      </div>

      <div className="mb-5">
        <p className="mb-2 text-sm font-bold text-slate-100">Workflow</p>
        <ul className="space-y-2 text-sm leading-6 text-slate-300">
          {bundle.workflow.slice(0, 4).map((step) => (
            <li key={step} className="flex gap-2">
              <Icon
                name="check"
                className="mt-1 h-4 w-4 shrink-0 text-violet-200"
              />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {bundle.bestFor.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}