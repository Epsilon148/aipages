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
    <section className="border-t border-black/10 pt-6">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-black">
        {title}
      </p>
      <div className="space-y-3 text-base leading-7 text-black/68">{children}</div>
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf7] px-5 py-6 text-black sm:px-8 sm:py-8">
      <section className="mx-auto max-w-[1100px]">
        <header className="flex items-center justify-between border-b border-black pb-5">
          <a
            href="/"
            className="text-2xl font-black uppercase tracking-[-0.075em] sm:text-3xl"
          >
            AI Pages
          </a>
          <a
            href="/"
            className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/50 transition hover:text-black"
          >
            Zurück
          </a>
        </header>

        <div className="grid gap-10 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-14">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-black">
              Rechtliches
            </p>
            <h1 className="mt-6 text-6xl font-black uppercase leading-[0.82] tracking-[-0.095em] sm:text-7xl lg:text-8xl">
              Datenschutz
            </h1>
            <p className="mt-8 max-w-xl text-xl font-semibold leading-8 tracking-[-0.035em] text-black/70">
              Diese Datenschutzhinweise beschreiben die aktuelle MVP-Version von
              {" "}{site.name}. Die finale Fassung sollte vor größerer
              Veröffentlichung rechtlich geprüft werden.
            </p>
          </div>

          <div className="grid gap-8 border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.035)] sm:p-7">
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
          </div>
        </div>
      </section>
    </main>
  );
}
