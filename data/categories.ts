export type Category = {
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  {
    name: "Alle Einträge",
    slug: "alle",
    description: "Alle KI-Tools und KI-Bundles im AI Pages Verzeichnis.",
  },
  {
    name: "Newcomer",
    slug: "newcomer",
    description: "Neue KI-Tools, die frisch ins AI Pages Verzeichnis aufgenommen wurden.",
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
      "KI-Tools für Texte, Kampagnen, Social Media, Newsletter und Content-Produktion.",
  },
  {
    name: "Design & Kreativität",
    slug: "design-kreativitaet",
    description:
      "Tools für Bilder, Logos, Design, Branding, Video, Audio und kreative Konzepte.",
  },
  {
    name: "Medienproduktion",
    slug: "media",
    description:
      "KI-Tools für Foto, Video, Voice, Audio, Schnitt und generative Medienproduktion.",
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
  {
    name: "Coding & No-Code",
    slug: "coding-no-code",
    description:
      "Tools für Code, Prototypen, Web-Apps, No-Code-MVPs und technische Workflows.",
  },
  {
    name: "Websites & Landingpages",
    slug: "website-landingpages",
    description:
      "Tools und Bundles für Websites, Landingpages, Design, Copy und Conversion.",
  },
  {
    name: "SEO & GEO",
    slug: "seo-geo",
    description:
      "Tools für Suchmaschinen, KI-Sichtbarkeit, Content-Optimierung und Recherche.",
  },
  {
    name: "E-Commerce",
    slug: "e-commerce",
    description:
      "KI-Tools für Shops, Produktdaten, Produktbilder, Support, Ads und Verkauf.",
  },
];
