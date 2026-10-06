import type { Metadata } from "next";
import { MatrixText } from "@/components/MatrixText";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzhinweise von ${site.name}.`,
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <main className="relative z-10 min-h-screen px-4 py-6 sm:px-6 sm:py-10">
      <section className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-8 inline-block text-xs uppercase tracking-[0.28em] text-[#14566a] hover:text-[#7cff9b]"
        >
          &lt; zurück zum Terminal
        </a>

        <div className="terminal-panel-strong px-4 py-5 sm:px-6 sm:py-7">
          <MatrixText text="DATENSCHUTZ" pixel={5} gap={2} charGap={7} />

          <p className="terminal-copy mt-8">
            Diese Datenschutzhinweise beschreiben die aktuelle MVP-Version von
            {" "}{site.name}. Die finale Fassung sollte vor größerer
            Veröffentlichung rechtlich geprüft werden.
          </p>

          <div className="terminal-copy mt-8 grid gap-8 border-t border-[#164e63] pt-6">
            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                1. Verantwortlicher
              </p>
              <p>{site.legalName}</p>
              <p>{site.legalStreet}</p>
              <p>{site.legalCity}</p>
              <p>{site.legalCountry}</p>
              <p className="mt-3">
                E-Mail:{" "}
                <a href={`mailto:${site.email}`} className="text-[#7ee7ff] hover:text-[#7cff9b]">
                  {site.email}
                </a>
              </p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                2. Allgemeine Hinweise
              </p>
              <p>
                {site.name} ist ein Verzeichnis für KI-Tools und KI-Bundles. In
                der aktuellen Phase gibt es keine Nutzerkonten, keine
                Kommentarfunktion, keinen Shop, keine Zahlungsfunktion und kein
                Newsletter-Backend.
              </p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                3. Hosting und Server-Logfiles
              </p>
              <p>
                Die Website wird über Vercel bereitgestellt. Beim Aufruf der
                Website können technisch notwendige Zugriffsdaten verarbeitet
                werden, etwa IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene
                URL, Browserinformationen, Betriebssystem, Referrer und
                ähnliche technische Daten. Diese Verarbeitung dient der
                Bereitstellung, Stabilität und Sicherheit der Website.
              </p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                4. Vercel Web Analytics
              </p>
              <p>
                Zur einfachen Reichweitenmessung ist Vercel Web Analytics
                eingebunden. Nach Angaben von Vercel werden dabei keine
                Third-Party-Cookies gesetzt und die Auswertung erfolgt
                aggregiert beziehungsweise anonymisiert. Erfasst werden können
                technische und statistische Daten wie Seitenaufrufe, Referrer,
                Gerätetyp, Browser, Betriebssystem, Land oder Region und
                Zeitstempel.
              </p>
              <p className="mt-3">
                Die Nutzung dient dazu, zu verstehen, welche Seiten und Inhalte
                funktionieren und wie das Verzeichnis verbessert werden kann.
              </p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                5. Kontakt per E-Mail
              </p>
              <p>
                Wenn du uns per E-Mail kontaktierst, werden die von dir
                übermittelten Daten verarbeitet, um deine Anfrage zu beantworten.
                Diese Daten werden nicht für Newsletter oder automatisierte
                Marketingkommunikation genutzt.
              </p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                6. Externe Links
              </p>
              <p>
                Externe Tool-Links führen zu Websites Dritter. Für deren
                Inhalte, Datenschutzpraktiken und eingesetzte Dienste sind die
                jeweiligen Anbieter verantwortlich.
              </p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                7. Deine Rechte
              </p>
              <p>
                Betroffene Personen können je nach Rechtsgrundlage Rechte auf
                Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit und Widerspruch haben.
                Außerdem kann ein Beschwerderecht bei einer zuständigen
                Datenschutzbehörde bestehen.
              </p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                8. Stand
              </p>
              <p>Stand: Oktober 2026</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
