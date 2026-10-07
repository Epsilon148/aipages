import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

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
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return {
      title: "Tool nicht gefunden",
    };
  }

  return {
    title: `${tool.name} | AI Pages`,
    description: tool.description,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = tools
    .filter((item) => item.category === tool.category && item.slug !== tool.slug)
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
            {getCategoryLabel(tool.category)}
          </p>

          <h1 className="mt-6 break-words text-5xl font-black uppercase leading-[0.86] tracking-[-0.09em] sm:text-7xl lg:text-8xl">
            {tool.name}
          </h1>

          <p className="mt-7 max-w-3xl text-xl font-semibold leading-8 tracking-[-0.04em] text-black/72 sm:text-2xl sm:leading-9">
            {tool.description}
          </p>

          <div className="mt-9 grid gap-4">
            <Info label="Preis" value={tool.pricing} />
            <Info label="Zielgruppe" value={tool.audience} />
            <Info label="Tags" value={tool.tags.join(" / ")} />
            <Info label="Typ" value={tool.badge} />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              className="border border-black bg-black px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
            >
              Website öffnen
            </a>
            <a
              href="/"
              className="border border-black/15 bg-white px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:border-black"
            >
              Zum Verzeichnis
            </a>
          </div>
        </article>

        <aside className="min-w-0 border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.035)] sm:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
            Ähnliche Tools
          </p>

          <div className="mt-5 grid gap-2">
            {relatedTools.length > 0 ? (
              relatedTools.map((item) => (
                <a
                  key={item.slug}
                  href={`/tools/${item.slug}`}
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
                Noch keine ähnlichen Tools in dieser Kategorie.
              </p>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}
