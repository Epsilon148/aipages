import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-cyan-300 ring-1 ring-white/10 shadow-lg shadow-cyan-400/20">
            <Image
              src="/logo.png"
              alt={`${site.name} Logo`}
              width={44}
              height={44}
              priority
              className="h-11 w-11 object-cover"
            />
          </span>
          <span>
            <span className="block text-base font-black tracking-tight text-white">
              {site.name}
            </span>
            <span className="block text-xs font-medium text-slate-400">
              {site.domain}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-300 md:flex">
          <a href="/#kategorien" className="transition hover:text-white">
            Kategorien
          </a>
          <a href="/#tools" className="transition hover:text-white">
            Tools
          </a>
          <Link href="/impressum" className="transition hover:text-white">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition hover:text-white">
            Datenschutz
          </Link>
        </nav>

        <a
          href="/#tools"
          className="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-200 sm:inline-flex"
        >
          Tools entdecken
        </a>
      </div>
    </header>
  );
}