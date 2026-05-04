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
        Rechtliches
      </p>

      <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
        Impressum
      </h1>

      <div className="mt-10 space-y-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-300 sm:p-8">
        <div>
          <h2 className="mb-3 text-xl font-bold text-white">
            Angaben gemäß § 5 TMG
          </h2>
          <p>{site.legalName}</p>
          <p>{site.legalStreet}</p>
          <p>{site.legalCity}</p>
          <p>Deutschland</p>
        </div>

        <div>
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
        </div>

        <div>
          <h2 className="mb-3 text-xl font-bold text-white">
            Verantwortlich für den Inhalt
          </h2>
          <p>{site.legalName}</p>
          <p>{site.legalStreet}</p>
          <p>{site.legalCity}</p>
        </div>

        <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-sm leading-6 text-amber-100">
          <p className="font-bold">Platzhalter-Hinweis</p>
          <p className="mt-2">
            Dieses Impressum ist ein sauberer Platzhalter für die MVP-Phase.
            Bitte ersetze Name, Anschrift und weitere Pflichtangaben vor
            Veröffentlichung durch deine echten Angaben und prüfe die finale
            Fassung rechtlich.
          </p>
        </div>
      </div>
    </section>
  );
}