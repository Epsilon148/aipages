import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzhinweise von ${site.name}.`,
  alternates: {
    canonical: "/datenschutz",
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-black/10 pt-5">
      <p className="mb-4 text-[11px] font-black uppercase tracking-[0.32em] text-black">
        {title}
      </p>
      <div className="space-y-3 text-base leading-7 tracking-[-0.02em] text-black/68">
        {children}
      </div>
    </section>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/15 pt-4">
      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/40">
        {label}
      </p>
      <p className="mt-2 break-words text-sm font-semibold leading-6 tracking-[-0.02em] text-white/80">
        {value}
      </p>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfbf7] text-black">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#fbfbf7]/92 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[64px] w-full max-w-[1540px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:h-[69px] sm:flex-nowrap sm:px-8 sm:py-0">
          <a href="/" className="flex min-w-0 items-baseline">
            <span className="text-xl font-black uppercase tracking-[-0.075em] sm:text-3xl">
              AI Pages
            </span>
          </a>

          <nav className="flex shrink-0 items-center gap-2">
            <a
              href="/"
              className="border border-black/15 bg-white px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-black transition hover:border-black hover:bg-black hover:text-white sm:px-5 sm:py-3"
            >
              Zurück
            </a>
            <a
              href="/impressum"
              className="border border-black bg-black px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black sm:px-5 sm:py-3"
            >
              Impressum
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-[1540px] items-start px-4 pt-7 pb-5 sm:px-8 sm:pt-8 sm:pb-6">
        <div className="grid w-full min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.62fr)] lg:items-start">
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-black/38">
              Rechtliches
            </p>
            <h1 className="mt-5 max-w-6xl text-[16vw] font-black uppercase leading-[0.78] tracking-[-0.095em] text-black sm:text-[96px] lg:text-[118px] xl:text-[138px]">
              Datenschutz
            </h1>
          </div>

          <p className="max-w-2xl text-lg font-semibold leading-7 tracking-[-0.03em] text-black/70 sm:text-2xl sm:leading-8 lg:pt-8">
            Diese Datenschutzhinweise beschreiben die aktuelle MVP-Version von{" "}
            {site.name}. Die finale Fassung sollte vor größerer Veröffentlichung
            rechtlich geprüft werden.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1540px] px-4 pb-6 sm:px-6 xl:px-8">
        <div className="grid gap-3 border-t border-black pt-4 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="min-w-0 border border-black bg-black p-5 shadow-[0_18px_60px_rgba(0,0,0,0.08)] lg:sticky lg:top-[89px] lg:self-start">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white">
              AI Pages
            </p>
            <div className="mt-8 grid gap-5">
              <InfoLine label="Seite" value="Datenschutz" />
              <InfoLine label="Projekt" value="KI-Tool-Verzeichnis" />
              <InfoLine label="Stand" value="Oktober 2026" />
            </div>
          </aside>

          <article className="grid min-w-0 gap-5 border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.035)] sm:p-7 lg:p-8">
            <Section title="1. Verantwortlicher">
              <p>{site.legalName}</p>
              <p>{site.legalStreet}</p>
              <p>{site.legalCity}</p>
              <p>{site.legalCountry}</p>
              <p>
                E-Mail:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-black underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
                >
                  {site.email}
                </a>
              </p>
            </Section>

            <Section title="2. Allgemeine Hinweise">
              <p>
                {site.name} ist ein Verzeichnis für KI-Tools und KI-Bundles. In
                der aktuellen Phase gibt es keine Nutzerkonten, keine
                Kommentarfunktion, keinen Shop, keine Zahlungsfunktion und kein
                Newsletter-Backend.
              </p>
            </Section>

            <Section title="3. Hosting und Server-Logfiles">
              <p>
                Die Website wird über Vercel bereitgestellt. Beim Aufruf der
                Website können technisch notwendige Zugriffsdaten verarbeitet
                werden, etwa IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene
                URL, Browserinformationen, Betriebssystem, Referrer und
                ähnliche technische Daten. Diese Verarbeitung dient der
                Bereitstellung, Stabilität und Sicherheit der Website.
              </p>
            </Section>

            <Section title="4. Vercel Web Analytics">
              <p>
                Zur einfachen Reichweitenmessung ist Vercel Web Analytics
                eingebunden. Nach Angaben von Vercel werden dabei keine
                Third-Party-Cookies gesetzt und die Auswertung erfolgt
                aggregiert beziehungsweise anonymisiert. Erfasst werden können
                technische und statistische Daten wie Seitenaufrufe, Referrer,
                Gerätetyp, Browser, Betriebssystem, Land oder Region und
                Zeitstempel.
              </p>
              <p>
                Die Nutzung dient dazu, zu verstehen, welche Seiten und Inhalte
                funktionieren und wie das Verzeichnis verbessert werden kann.
              </p>
            </Section>

            <Section title="5. Kontakt per E-Mail">
              <p>
                Wenn du uns per E-Mail kontaktierst, werden die von dir
                übermittelten Daten verarbeitet, um deine Anfrage zu beantworten.
                Diese Daten werden nicht für Newsletter oder automatisierte
                Marketingkommunikation genutzt.
              </p>
            </Section>

            <Section title="6. Externe Links">
              <p>
                Externe Tool-Links führen zu Websites Dritter. Für deren
                Inhalte, Datenschutzpraktiken und eingesetzte Dienste sind die
                jeweiligen Anbieter verantwortlich.
              </p>
            </Section>

            <Section title="7. Deine Rechte">
              <p>
                Betroffene Personen können je nach Rechtsgrundlage Rechte auf
                Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit und Widerspruch haben.
                Außerdem kann ein Beschwerderecht bei einer zuständigen
                Datenschutzbehörde bestehen.
              </p>
            </Section>

            <Section title="8. Stand">
              <p>Stand: Oktober 2026</p>
            </Section>
          </article>
        </div>

        <footer className="mt-5 flex flex-col gap-3 border-t border-black/10 py-5 text-[11px] font-medium uppercase tracking-[0.22em] text-black sm:flex-row sm:items-center sm:justify-between">
          <p>AI Pages</p>
          <nav className="flex gap-5">
            <a href="/" className="text-black/50 transition hover:text-black">
              Start
            </a>
            <a href="/impressum" className="text-black/50 transition hover:text-black">
              Impressum
            </a>
          </nav>
        </footer>
      </section>
    </main>
  );
}
