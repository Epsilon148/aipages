import type { Metadata } from "next";
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
    <section className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
        Datenschutz
      </p>

      <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
        Datenschutzerklärung
      </h1>

      <div className="mt-10 space-y-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-300 sm:p-8">
        <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-sm leading-6 text-amber-100">
          <p className="font-bold">Platzhalter-Hinweis</p>
          <p className="mt-2">
            Diese Datenschutzerklärung ist ein sauberer Platzhalter für die
            MVP-Phase. Bitte ersetze die Platzhalter durch deine echten Angaben
            und prüfe die finale Fassung vor Veröffentlichung rechtlich.
          </p>
        </div>

        <section>
          <h2 className="mb-3 text-xl font-bold text-white">
            1. Verantwortlicher
          </h2>
          <p>{site.legalName}</p>
          <p>{site.legalStreet}</p>
          <p>{site.legalCity}</p>
          <p>Deutschland</p>
          <p className="mt-3">
            E-Mail:{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-cyan-200 hover:text-cyan-100"
            >
              {site.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-white">
            2. Allgemeine Hinweise
          </h2>
          <p className="leading-7">
            {site.name} ist ein kleines Verzeichnis-MVP für KI-Tools im Bereich
            Webseiten, Landingpages und Online-Marketing. In der aktuellen
            Phase werden keine Nutzerkonten, keine Kommentare, keine
            Zahlungsfunktionen, kein Newsletter-Backend und kein eigenes
            Tracking eingesetzt.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-white">
            3. Hosting und Server-Logfiles
          </h2>
          <p className="leading-7">
            Beim Aufruf dieser Website können durch den Hosting-Anbieter
            technisch notwendige Zugriffsdaten verarbeitet werden. Dazu können
            insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
            Seiten, übertragene Datenmenge, Browsertyp, Betriebssystem und
            Referrer-URL gehören. Diese Verarbeitung dient der technischen
            Bereitstellung, Stabilität und Sicherheit der Website.
          </p>
          <p className="mt-3 leading-7">
            Hosting-Anbieter und konkrete Aufbewahrungsfristen müssen vor dem
            Livegang entsprechend dem tatsächlich genutzten Anbieter ergänzt
            werden.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-white">
            4. Kontakt per E-Mail
          </h2>
          <p className="leading-7">
            Wenn du uns per E-Mail kontaktierst, werden die von dir
            übermittelten Daten verarbeitet, um deine Anfrage zu beantworten.
            Die Daten werden nicht für Newsletter oder automatisierte
            Marketingkommunikation genutzt.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-white">
            5. Cookies, Tracking und externe Dienste
          </h2>
          <p className="leading-7">
            In der aktuellen MVP-Phase setzt diese Website keine eigenen
            Cookies, kein Analytics-Tracking, keine Werbenetzwerke, kein Login,
            keine Zahlungsdienste und kein Newsletter-Backend ein.
          </p>
          <p className="mt-3 leading-7">
            Externe Tool-Links führen zu Websites Dritter. Für deren Inhalte,
            Datenschutzpraktiken und eingesetzte Dienste sind die jeweiligen
            Anbieter verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-white">
            6. Deine Rechte
          </h2>
          <p className="leading-7">
            Betroffene Personen können je nach anwendbarer Rechtsgrundlage
            Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit und Widerspruch haben. Außerdem
            kann ein Beschwerderecht bei einer zuständigen Datenschutzbehörde
            bestehen.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-white">
            7. Stand dieser Datenschutzerklärung
          </h2>
          <p>Stand: Mai 2026</p>
        </section>
      </div>
    </section>
  );
}