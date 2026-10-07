import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${site.name}.`,
  alternates: {
    canonical: "/impressum",
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
      <div className="space-y-2 text-base leading-7 text-black/68">{children}</div>
    </section>
  );
}

export default function ImpressumPage() {
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
              Impressum
            </h1>
            <p className="mt-8 max-w-xl text-xl font-semibold leading-8 tracking-[-0.035em] text-black/70">
              Anbieterkennzeichnung für {site.name}. Diese Seite gehört zum
              öffentlichen KI-Tool-Verzeichnis unter {site.domain}.
            </p>
          </div>

          <div className="grid gap-8 border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.035)] sm:p-7">
            <Section title="Angaben gemäß § 5 DDG">
              <p>{site.legalName}</p>
              <p>{site.legalStreet}</p>
              <p>{site.legalCity}</p>
              <p>{site.legalCountry}</p>
            </Section>

            <Section title="Kontakt">
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

            <Section title="Verantwortlich für den Inhalt">
              <p>{site.legalName}</p>
              <p>{site.legalStreet}</p>
              <p>{site.legalCity}</p>
              <p>{site.legalCountry}</p>
            </Section>

            <Section title="Projektstatus">
              <p>
                {site.name} befindet sich im Aufbau. Die Website ist ein
                Informationsangebot rund um KI-Tools, KI-Bundles und digitale
                Helfer für unterschiedliche Anwendungsbereiche.
              </p>
              <p>
                Aktuell werden keine Produkte direkt verkauft, keine Zahlungen
                verarbeitet und keine Nutzerkonten angeboten.
              </p>
            </Section>

            <Section title="Externe Links">
              <p>
                Diese Website enthält Links zu externen Websites Dritter. Auf
                deren Inhalte haben wir keinen Einfluss. Für die Inhalte der
                verlinkten Seiten ist der jeweilige Anbieter oder Betreiber
                verantwortlich.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
