import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${site.name}.`,
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
        Anbieterkennzeichnung
      </p>

      <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
        Impressum
      </h1>

      <div className="mt-10 space-y-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-300 sm:p-8">
        <section>
          <h2 className="mb-3 text-xl font-bold text-white">
            Angaben gemäß § 5 DDG
          </h2>
          <p>{site.legalName}</p>
          <p>{site.legalStreet}</p>
          <p>{site.legalCity}</p>
          <p>{site.legalCountry}</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-white">Kontakt</h2>
          <p>
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
            Verantwortlich für den Inhalt
          </h2>
          <p>{site.legalName}</p>
          <p>{site.legalStreet}</p>
          <p>{site.legalCity}</p>
          <p>{site.legalCountry}</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-white">
            Hinweis zum Projektstatus
          </h2>
          <p className="leading-7">
            {site.name} befindet sich derzeit im Aufbau. Die Website ist ein
            kuratiertes Informationsangebot rund um KI-Tools, KI-Bundles und
            digitale Helfer für unterschiedliche Anwendungsbereiche.
          </p>
          <p className="mt-3 leading-7">
            Aktuell werden keine Produkte direkt verkauft, keine Zahlungen
            verarbeitet und keine Nutzerkonten angeboten.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-white">
            Haftung für externe Links
          </h2>
          <p className="leading-7">
            Diese Website enthält Links zu externen Websites Dritter. Auf deren
            Inhalte haben wir keinen Einfluss. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich.
          </p>
        </section>
      </div>
    </section>
  );
}