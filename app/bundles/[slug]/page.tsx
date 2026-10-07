import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bundles } from "@/data/bundles";
import { categories } from "@/data/categories";

function getCategoryLabel(slug: string) {
  return categories.find((category) => category.slug === slug)?.name ?? slug;
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-t border-black/10 pt-4 sm:grid-cols-[150px_1fr] sm:gap-6">
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/45">
        {label}
      </p>
      <p className="text-base font-semibold leading-7 tracking-[-0.03em] text-black/72">
        {value}
      </p>
    </div>
  );
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return bundles.map((bundle) => ({ slug: bundle.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const bundle = bundles.find((item) => item.slug === slug);

  if (!bundle) {
    return {
      title: "Bundle nicht gefunden",
    };
  }

  return {
    title: `${bundle.name} | AI Pages`,
    description: bundle.description,
    alternates: {
      canonical: `/bundles/${bundle.slug}`,
    },
  };
}

export default async function BundlePage({ params }: PageProps) {
  const { slug } = await params;
  const bundle = bundles.find((item) => item.slug === slug);

  if (!bundle) {
    notFound();
  }

  const relatedBundles = bundles
    .filter((item) => item.category === bundle.category && item.slug !== bundle.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[#fbfbf7] text-black">
      <header className="border-b border-black/10 bg-[#fbfbf7]">
        <div className="mx-auto flex min-h-[69px] w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <a href="/" className="text-xl font-black uppercase tracking-[-0.075em] sm:text-3xl">
            AI Pages
          </a>
          <a
            href="/"
            className="border border-black/15 bg-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-black transition hover:border-black"
          >
            Zurück
          </a>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-10 sm:px-8 sm:py-16 lg:grid-cols-[1fr_360px]">
        <article className="min-w-0 border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.035)] sm:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
            {getCategoryLabel(bundle.category)}
          </p>

          <h1 className="mt-6 break-words text-4xl font-black uppercase leading-[0.9] tracking-[-0.085em] sm:text-6xl lg:text-7xl">
            {bundle.name}
          </h1>

          <p className="mt-7 max-w-3xl text-xl font-semibold leading-8 tracking-[-0.04em] text-black/72 sm:text-2xl sm:leading-9">
            {bundle.description}
          </p>

          <div className="mt-9 border-t border-black/10 pt-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
              Warum sinnvoll
            </p>
            <p className="mt-4 text-base font-semibold leading-7 tracking-[-0.03em] text-black/72">
              {bundle.why}
            </p>
          </div>

          <div className="mt-9 border-t border-black/10 pt-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
              Workflow
            </p>
            <div className="mt-4 grid gap-3">
              {bundle.workflow.map((step, index) => (
                <div key={`${bundle.slug}-step-${step}`} className="flex gap-4 border border-black/10 p-4">
                  <p className="shrink-0 text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-black/70">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 grid gap-4">
            <Info label="Zielgruppe" value={bundle.audience} />
            <Info label="Ideal für" value={bundle.bestFor.join(" / ")} />
            <Info label="Nicht ideal" value={bundle.notFor} />
            <Info label="Typ" value={bundle.badge} />
          </div>
        </article>

        <aside className="min-w-0 border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.035)] sm:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
            Tools im Bundle
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {bundle.toolLinks.map((tool) => (
              <a
                key={`${bundle.slug}-${tool.name}`}
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="border border-black/15 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:border-black hover:bg-black hover:text-white"
              >
                {tool.name}
              </a>
            ))}
          </div>

          <div className="mt-9 border-t border-black/10 pt-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
              Ähnliche Bundles
            </p>

            <div className="mt-5 grid gap-2">
              {relatedBundles.length > 0 ? (
                relatedBundles.map((item) => (
                  <a
                    key={item.slug}
                    href={`/bundles/${item.slug}`}
                    className="block border border-black/10 bg-white p-4 transition hover:border-black hover:bg-black hover:text-white"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-black/35">
                      {item.badge}
                    </p>
                    <p className="mt-2 text-2xl font-black uppercase leading-[0.9] tracking-[-0.075em]">
                      {item.name}
                    </p>
                  </a>
                ))
              ) : (
                <p className="text-sm leading-6 text-black/60">
                  Noch keine ähnlichen Bundles in dieser Kategorie.
                </p>
              )}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
