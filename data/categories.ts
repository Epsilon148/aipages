export type Category = {
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  {
    name: "Alle Tools",
    slug: "alle",
    description: "Alle KI-Tools und KI-Bundles im AI Pages Verzeichnis.",
  },
  {
    name: "KI-Bundles",
    slug: "ki-bundles",
    description:
      "Kuratierte Sammlungen und Tool-Kombinationen für konkrete KI-Workflows.",
  },
  {
    name: "Produktivität",
    slug: "produktivitaet",
    description:
      "KI-Tools für Organisation, Aufgaben, Notizen, Planung und effizientes Arbeiten.",
  },
  {
    name: "Business & Office",
    slug: "business-office",
    description:
      "Digitale Helfer für Dokumente, Tabellen, Präsentationen, Kommunikation und Büroprozesse.",
  },
  {
    name: "Marketing & Content",
    slug: "marketing-content",
    description:
      "KI-Tools für Texte, Kampagnen, Social Media, SEO, Newsletter und Content-Produktion.",
  },
  {
    name: "Design & Kreativität",
    slug: "design-kreativitaet",
    description:
      "Tools für Bilder, Logos, Design, Branding, Video, Audio und kreative Konzepte.",
  },
  {
    name: "Automatisierung",
    slug: "automatisierung",
    description:
      "No-Code- und KI-Tools für Workflows, Prozesse, Schnittstellen und wiederkehrende Aufgaben.",
  },
  {
    name: "Recherche & Wissen",
    slug: "recherche-wissen",
    description:
      "KI-Tools für Recherche, Lernen, Zusammenfassungen, Analyse und Wissensarbeit.",
  },
];