export type Category = {
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  {
    name: "Alle Tools",
    slug: "alle",
    description: "Alle KI-Tools im AI Pages Verzeichnis.",
  },
  {
    name: "AI Website Builder",
    slug: "ai-website-builder",
    description: "Tools zum Erstellen kompletter Webseiten mit KI-Unterstützung.",
  },
  {
    name: "Landingpage-Tools",
    slug: "landingpage-tools",
    description: "Tools für schnelle, conversion-orientierte Landingpages.",
  },
  {
    name: "KI-Texte",
    slug: "ki-texte",
    description: "KI-Tools für Website-Texte, Anzeigen, Blogartikel und Marketing-Copy.",
  },
  {
    name: "SEO-Tools",
    slug: "seo-tools",
    description: "Tools für Keyword-Recherche, SEO-Analysen und Content-Optimierung.",
  },
  {
    name: "Design & Logo",
    slug: "design-logo",
    description: "KI-Tools für Design, Markenauftritt, Logos und UI-Konzepte.",
  },
  {
    name: "No-Code Tools",
    slug: "no-code-tools",
    description: "Tools für Automatisierung, Formulare, Apps und interne Workflows.",
  },
];