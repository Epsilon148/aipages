export type Category = {
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  {
    name: "Alle Tools",
    slug: "alle",
    description: "Alle einzelnen KI-Tools im AI Pages Verzeichnis.",
  },
  {
    name: "Produktivität",
    slug: "produktivitaet",
    description:
      "KI-Tools für Organisation, Aufgaben, Notizen, Planung und effizientes Arbeiten.",
  },
  {
    name: "Business & Office",
    slug: "business",
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
    slug: "automation-agents",
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