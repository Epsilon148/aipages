export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fbfbf7] px-4 py-6 text-black sm:px-8 sm:py-10">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1200px] items-center">
        <div className="w-full border-t border-black pt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
            404 / Nicht gefunden
          </p>

          <h1 className="mt-6 max-w-5xl text-[18vw] font-black uppercase leading-[0.76] tracking-[-0.095em] text-black sm:text-[120px] lg:text-[170px]">
            Seite
            <br />
            fehlt.
          </h1>

          <p className="mt-8 max-w-2xl text-lg font-semibold leading-7 tracking-[-0.035em] text-black/70 sm:text-2xl sm:leading-9">
            Diese Seite gibt es nicht oder der Link ist falsch. Zurück zum
            Verzeichnis und dort weitersuchen.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/"
              className="border border-black bg-white px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white"
            >
              Zur Startseite
            </a>
            <a
              href="/#tools"
              className="border border-black/15 bg-white px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:border-black hover:bg-black hover:text-white"
            >
              Zum Verzeichnis
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
