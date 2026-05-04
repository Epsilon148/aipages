import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20">
              <Icon name="spark" className="h-5 w-5" />
            </span>
            <div>
              <p className="font-black tracking-tight text-white">{site.name}</p>
              <p className="text-sm text-slate-400">{site.domain}</p>
            </div>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-400">
            {site.claim} Ein bewusst kleines Verzeichnis-MVP ohne Tracking,
            Cookies, Login oder Newsletter-Backend.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Navigation
          </h2>
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/" className="transition hover:text-white">
              Startseite
            </Link>
            <a href="/#kategorien" className="transition hover:text-white">
              Kategorien
            </a>
            <a href="/#tools" className="transition hover:text-white">
              Tool-Verzeichnis
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Rechtliches
          </h2>
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/impressum" className="transition hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition hover:text-white">
              Datenschutz
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="transition hover:text-white"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}