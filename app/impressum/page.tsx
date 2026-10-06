import type { Metadata } from "next";
import { MatrixText } from "@/components/MatrixText";
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
    <main className="relative z-10 min-h-screen px-4 py-6 sm:px-6 sm:py-10">
      <section className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-8 inline-block text-xs uppercase tracking-[0.28em] text-[#14566a] hover:text-[#7cff9b]"
        >
          &lt; zurück zum Terminal
        </a>

        <div className="terminal-panel-strong px-4 py-5 sm:px-6 sm:py-7">
          <MatrixText text="IMPRESSUM" pixel={5} gap={2} charGap={7} />

          <p className="terminal-copy mt-8">
            Anbieterkennzeichnung für {site.name}. Diese Seite gehört zum
            öffentlichen KI-Tool-Verzeichnis unter {site.domain}.
          </p>

          <div className="terminal-copy mt-8 grid gap-8 border-t border-[#164e63] pt-6">
            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                Angaben gemäß § 5 DDG
              </p>
              <p>{site.legalName}</p>
              <p>{site.legalStreet}</p>
              <p>{site.legalCity}</p>
              <p>{site.legalCountry}</p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                Kontakt
              </p>
              <p>
                E-Mail:{" "}
                <a href={`mailto:${site.email}`} className="text-[#7ee7ff] hover:text-[#7cff9b]">
                  {site.email}
                </a>
              </p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                Verantwortlich für den Inhalt
              </p>
              <p>{site.legalName}</p>
              <p>{site.legalStreet}</p>
              <p>{site.legalCity}</p>
              <p>{site.legalCountry}</p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                Projektstatus
              </p>
              <p>
                {site.name} befindet sich im Aufbau. Die Website ist ein
                Informationsangebot rund um KI-Tools, KI-Bundles und digitale
                Helfer für unterschiedliche Anwendungsbereiche.
              </p>
              <p className="mt-3">
                Aktuell werden keine Produkte direkt verkauft, keine Zahlungen
                verarbeitet und keine Nutzerkonten angeboten.
              </p>
            </section>

            <section>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7cff9b]">
                Externe Links
              </p>
              <p>
                Diese Website enthält Links zu externen Websites Dritter. Auf
                deren Inhalte haben wir keinen Einfluss. Für die Inhalte der
                verlinkten Seiten ist der jeweilige Anbieter oder Betreiber
                verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
