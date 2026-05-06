export type Bundle = {
  name: string;
  slug: string;
  category: string;
  badge: string;
  description: string;
  audience: string;
  tools: string[];
  workflow: string[];
  bestFor: string[];
  notFor: string;
  featured: boolean;
};

export const bundles: Bundle[] = [
  {
    name: "Universal Productivity Bundle",
    slug: "universal-productivity-bundle",
    category: "produktivitaet",
    badge: "Allround",
    description:
      "Ein starkes Basis-Bundle für Denken, Schreiben, Planen, Recherche, Analyse und tägliche Arbeit.",
    audience: "Freelancer, Gründer, Studierende, Creator und kleine Teams",
    tools: ["ChatGPT", "Claude", "Perplexity", "Google Gemini"],
    workflow: [
      "ChatGPT für Struktur, Ideen und Arbeitspläne",
      "Perplexity für aktuelle Recherche und Quellen",
      "Claude für lange Texte, Feinschliff und Dokumente",
      "Gemini für Google-Kontext und multimodale Aufgaben",
    ],
    bestFor: ["Alltag", "Recherche", "Texte", "Planung"],
    notFor:
      "Nicht nötig, wenn du nur gelegentlich eine einzelne KI für kurze Fragen nutzt.",
    featured: true,
  },
  {
    name: "Business Builder Bundle",
    slug: "business-builder-bundle",
    category: "business",
    badge: "Business",
    description:
      "Tool-Kombination für Strategie, Marktanalyse, Positionierung, Businesspläne und Pitch-Unterlagen.",
    audience: "Gründer, Selbstständige, Coaches, lokale Unternehmen und Agenturen",
    tools: ["ChatGPT", "Perplexity", "Claude", "Canva"],
    workflow: [
      "ChatGPT für Geschäftsmodell, Angebot und Zielgruppenlogik",
      "Perplexity für Markt-, Wettbewerbs- und Trend-Recherche",
      "Claude für Businessplan, Report und klare Argumentation",
      "Canva für Pitch Deck, One-Pager und Präsentationen",
    ],
    bestFor: ["Strategie", "Marktanalyse", "Pitch Deck", "Positionierung"],
    notFor:
      "Nicht ideal, wenn du bereits ein fertiges Business-System hast und nur operative Automationen brauchst.",
    featured: true,
  },
  {
    name: "Marketing Machine Bundle",
    slug: "marketing-machine-bundle",
    category: "marketing-content",
    badge: "Marketing",
    description:
      "Bundle für Kampagnen, Social Media, Newsletter, Ads, Landingpage-Texte und Content-Produktion.",
    audience: "Marketingteams, Agenturen, Creator, Coaches und Personal Brands",
    tools: ["ChatGPT", "Claude", "Canva", "Midjourney", "Zapier"],
    workflow: [
      "ChatGPT für Kampagnenideen, Hooks und Redaktionspläne",
      "Claude für hochwertige Texte, Tonalität und E-Mail-Sequenzen",
      "Midjourney für Bildwelten, Moodboards und Kampagnenvisuals",
      "Canva für Posts, Ads, Karussells und Layouts",
      "Zapier für Lead-Weiterleitung und wiederkehrende Marketingprozesse",
    ],
    bestFor: ["Content", "Social Media", "Ads", "Newsletter"],
    notFor:
      "Nicht nötig, wenn du nur einzelne Posts ohne System oder Automatisierung erstellen willst.",
    featured: true,
  },
  {
    name: "Creative Studio Bundle",
    slug: "creative-studio-bundle",
    category: "design-kreativitaet",
    badge: "Creative",
    description:
      "Bundle für Ideenfindung, Branding, Storys, Moodboards, Kampagnenkonzepte und visuelle Richtungen.",
    audience: "Designer, Kreative, Marken, Creator und Agenturen",
    tools: ["Claude", "ChatGPT", "Midjourney", "Canva", "Miro oder FigJam"],
    workflow: [
      "Claude für kreative Ausarbeitung und stilistische Konsistenz",
      "ChatGPT für Varianten, Struktur und Zielgruppenlogik",
      "Midjourney für visuelle Exploration und Moodboards",
      "Canva für verwertbare Designs und Assets",
      "Miro oder FigJam für Workshop-Boards und Ideensammlung",
    ],
    bestFor: ["Branding", "Ideen", "Moodboards", "Kampagnen"],
    notFor:
      "Nicht ideal, wenn du nur präzise Bildretusche oder technische Designsysteme brauchst.",
    featured: true,
  },
  {
    name: "Photo Pro Bundle",
    slug: "photo-pro-bundle",
    category: "media",
    badge: "Photo",
    description:
      "Bundle für Bildbearbeitung, Produktbilder, Retusche, Social Assets, Compositing und Qualitätsverbesserung.",
    audience: "Fotografen, E-Commerce-Teams, Designer und Social Media Manager",
    tools: ["Adobe Firefly", "Photoshop", "Midjourney", "Canva", "Topaz Photo AI"],
    workflow: [
      "Midjourney für Konzeptbilder und Bildwelten",
      "Photoshop und Firefly für präzise Bearbeitung und Generative Fill",
      "Topaz Photo AI für Upscaling, Schärfung und Rauschreduzierung",
      "Canva für finale Social-, Ad- oder Marketing-Layouts",
    ],
    bestFor: ["Produktbilder", "Retusche", "Social Assets", "Compositing"],
    notFor:
      "Nicht nötig, wenn du nur einfache Grafiken ohne Bildbearbeitung erstellst.",
    featured: false,
  },
  {
    name: "Video Studio Bundle",
    slug: "video-studio-bundle",
    category: "media",
    badge: "Video",
    description:
      "Bundle für Reels, Ads, Erklärvideos, B-Roll, Storyboards, Voiceover und kurze Videoformate.",
    audience: "Creator, Social-Media-Teams, Werber, Videografen und Marken",
    tools: ["Runway", "Google Gemini / Veo", "Midjourney", "CapCut", "ElevenLabs"],
    workflow: [
      "ChatGPT oder Claude optional für Skript und Storyboard",
      "Midjourney für Keyframes und Styleframes",
      "Runway oder Veo für Bewegung und generative Videoideen",
      "ElevenLabs für Voiceover und Stimmen",
      "CapCut für Schnitt, Untertitel und Export",
    ],
    bestFor: ["Reels", "Ads", "Voiceover", "Kurzvideos"],
    notFor:
      "Nicht ideal, wenn du lange professionelle Filmproduktionen komplett ersetzen willst.",
    featured: true,
  },
  {
    name: "Brand Builder Bundle",
    slug: "brand-builder-bundle",
    category: "design-kreativitaet",
    badge: "Branding",
    description:
      "Bundle für Markenstrategie, Claim, visuelle Richtung, Brand Assets, UI-Systeme und professionelle Bildwelten.",
    audience: "Gründer, Marken, Designer, Agenturen und Selbstständige",
    tools: ["ChatGPT", "Midjourney", "Canva", "Figma", "Adobe Firefly"],
    workflow: [
      "ChatGPT für Positionierung, Claim, Tonalität und Zielgruppe",
      "Midjourney für visuelle Welt und Stilrichtungen",
      "Canva für Brand Assets und Templates",
      "Figma für UI- und Website-Systeme",
      "Firefly für professionelle Bildbearbeitung",
    ],
    bestFor: ["Branding", "Logo-Ideen", "Templates", "UI-Systeme"],
    notFor:
      "Nicht ausreichend, wenn du eine vollständige Markenstrategie ohne menschliche Designprüfung brauchst.",
    featured: true,
  },
  {
    name: "Website & Landingpage Bundle",
    slug: "website-landingpage-bundle",
    category: "website-landingpages",
    badge: "Website",
    description:
      "Bundle für Seitenstruktur, Conversion-Texte, Wireframes, Webdesign, Umsetzung und Begleitassets.",
    audience: "Agenturen, Gründer, lokale Dienstleister, SaaS-Teams und Coaches",
    tools: ["ChatGPT", "Claude", "Figma", "Framer oder Webflow", "Canva"],
    workflow: [
      "ChatGPT für Seitenstruktur, Angebot und Conversion-Logik",
      "Claude für Copywriting, FAQ und Nutzenargumentation",
      "Figma für Wireframes und Designsystem",
      "Framer oder Webflow für schnelle Umsetzung",
      "Canva für ergänzende Grafiken und Social Assets",
    ],
    bestFor: ["Websites", "Landingpages", "Conversion", "Webdesign"],
    notFor:
      "Nicht ideal, wenn du komplexe Web-Apps mit Datenbank, Login und individueller Backend-Logik bauen willst.",
    featured: true,
  },
  {
    name: "Customer Support Agent Bundle",
    slug: "customer-support-agent-bundle",
    category: "automation-agents",
    badge: "Bots",
    description:
      "Bundle für Website-Chatbots, Support-Bots, Lead-Bots, FAQ-Agenten und einfache Kundenservice-Automation.",
    audience: "Support-Teams, SaaS, Dienstleister, Shops und lokale Unternehmen",
    tools: ["Voiceflow", "Botpress", "Zapier", "ChatGPT oder Claude", "Notion oder Google Drive"],
    workflow: [
      "ChatGPT oder Claude für Bot-Prompts, FAQ und Eskalationslogik",
      "Notion oder Google Drive als Wissensbasis",
      "Voiceflow für Dialogdesign und Prototyping",
      "Botpress für robuste Support-Agenten",
      "Zapier für CRM-, E-Mail- und Ticket-Integrationen",
    ],
    bestFor: ["Support", "Lead-Bots", "FAQ", "Kundenservice"],
    notFor:
      "Nicht ohne Kontrolle für rechtlich, medizinisch oder finanziell kritische Entscheidungen einsetzen.",
    featured: true,
  },
  {
    name: "Automation Stack",
    slug: "automation-stack",
    category: "automation-agents",
    badge: "Automation",
    description:
      "Bundle für Geschäftsprozesse, Lead-Verarbeitung, Reports, API-Workflows und KI-gestützte Automationen.",
    audience: "Operations-Teams, Agenturen, technische Gründer und Power-User",
    tools: ["n8n", "Zapier", "Make", "OpenAI oder Claude API", "Airtable"],
    workflow: [
      "Airtable als strukturierte Datenbasis",
      "Zapier für einfache Standard-App-Automationen",
      "Make für visuelle Szenarien und flexible Workflows",
      "n8n für komplexe, kontrollierbare oder selbst gehostete Automationen",
      "OpenAI oder Claude API für Textverständnis und Entscheidungslogik",
    ],
    bestFor: ["Workflows", "Leads", "Reports", "APIs"],
    notFor:
      "Nicht geeignet für unkontrollierte kritische Aktionen ohne Freigabe, Monitoring und Rechtebegrenzung.",
    featured: true,
  },
  {
    name: "Coding Stack",
    slug: "coding-stack",
    category: "coding-no-code",
    badge: "Coding",
    description:
      "Bundle für Softwareentwicklung, Debugging, Prototypen, Refactoring, interne Tools und KI-native IDE-Workflows.",
    audience: "Entwickler, SaaS-Gründer, Agenturen und technisch interessierte No-Code-Gründer",
    tools: ["Claude Code", "ChatGPT / Codex", "Cursor oder Windsurf", "GitHub Copilot", "Replit"],
    workflow: [
      "ChatGPT oder Codex für Architektur, Debugging und Full-Stack-Planung",
      "Cursor oder Windsurf für KI-native Umsetzung in der IDE",
      "Claude Code für größere Codebase-Aufgaben und Refactors",
      "GitHub Copilot für tägliches Pair Programming",
      "Replit für schnelle Prototypen und kleine Deployments",
    ],
    bestFor: ["Code", "Debugging", "Prototypen", "Refactoring"],
    notFor:
      "Nicht als Ersatz für Code-Review, Tests und Sicherheitsprüfung bei produktiven Anwendungen verwenden.",
    featured: true,
  },
  {
    name: "No-Code MVP Bundle",
    slug: "no-code-mvp-bundle",
    category: "coding-no-code",
    badge: "No-Code",
    description:
      "Bundle für schnelle MVPs, Portale, interne Tools, einfache Web-Apps, Marktplätze und Dashboards.",
    audience: "Gründer, Operations-Teams, Agenturen und No-Code-Builder",
    tools: ["ChatGPT", "Bubble", "Softr", "Airtable", "Zapier oder n8n"],
    workflow: [
      "ChatGPT für Datenmodell, User Stories, Screens und Logik",
      "Airtable als schnelle Datenbasis",
      "Softr für einfache Portale und Airtable-basierte Apps",
      "Bubble für komplexere Web-Apps ohne klassischen Code",
      "Zapier oder n8n für Automationen und Integrationen",
    ],
    bestFor: ["MVPs", "Portale", "Interne Tools", "No-Code Apps"],
    notFor:
      "Nicht ideal für hochkomplexe, skalierungskritische Software mit individueller Backend-Architektur.",
    featured: false,
  },
  {
    name: "Research Stack",
    slug: "research-stack",
    category: "recherche-wissen",
    badge: "Research",
    description:
      "Bundle für Deep Research, Quellenarbeit, Zusammenfassungen, Wissensmanagement und bessere Entscheidungen.",
    audience: "Berater, Analysten, Studierende, Gründer, Teams und Wissensarbeiter",
    tools: ["Perplexity", "ChatGPT", "Claude", "NotebookLM", "Notion"],
    workflow: [
      "Perplexity für Quellen und aktuelle Webrecherche",
      "Claude für lange Dokumente und saubere Zusammenfassungen",
      "ChatGPT für Synthese, Entscheidungen und nächste Schritte",
      "NotebookLM für Q&A mit eigenen Quellen",
      "Notion als wiederverwendbare Wissensbasis",
    ],
    bestFor: ["Deep Research", "Quellen", "Zusammenfassungen", "Wissen"],
    notFor:
      "Nicht ausreichend für wissenschaftliche oder rechtliche Aussagen ohne Quellenprüfung.",
    featured: true,
  },
  {
    name: "Sales & Lead Bundle",
    slug: "sales-lead-bundle",
    category: "business",
    badge: "Sales",
    description:
      "Bundle für Zielkundenrecherche, Outreach, CRM-Pflege, Follow-ups und Leadgenerierung.",
    audience: "B2B-Agenturen, SaaS-Teams, Beratungen, Dienstleister und Vertriebsteams",
    tools: ["ChatGPT", "Perplexity", "Apollo oder Clay", "HubSpot oder Pipedrive", "Zapier"],
    workflow: [
      "Perplexity für Zielkunden- und Trigger-Recherche",
      "Apollo oder Clay für Leadlisten und Datenanreicherung",
      "ChatGPT für personalisierte Nachrichten und Einwandbehandlung",
      "HubSpot oder Pipedrive für Pipeline und CRM",
      "Zapier für Follow-ups und CRM-Automationen",
    ],
    bestFor: ["Leads", "Outreach", "CRM", "B2B"],
    notFor:
      "Nicht geeignet für Spam-Outreach oder unpersonalisierte Massenkampagnen.",
    featured: false,
  },
  {
    name: "E-Commerce Stack",
    slug: "e-commerce-stack",
    category: "e-commerce",
    badge: "Shop",
    description:
      "Bundle für Produkttexte, Produktbilder, Shop-Automationen, Ads, FAQ, Support und Kampagnen.",
    audience: "Online-Shops, DTC-Marken, Creator-Shops und E-Commerce-Teams",
    tools: ["ChatGPT", "Midjourney oder Firefly", "Canva", "Shopify Magic", "Zapier", "Botpress"],
    workflow: [
      "ChatGPT für Produktpositionierung, Produkttexte, FAQ und Kampagnen",
      "Midjourney oder Firefly für Produktwelten und Kampagnenbilder",
      "Canva für Ads, Shopbanner und Social Creatives",
      "Shopify Magic für Shop-nahe KI-Funktionen",
      "Zapier für Operations und Benachrichtigungen",
      "Botpress für einfache Support- oder FAQ-Bots",
    ],
    bestFor: ["Produkttexte", "Ads", "Shop", "Support"],
    notFor:
      "Nicht ausreichend, wenn du rechtlich geprüfte Produktclaims oder regulierte Produktberatung brauchst.",
    featured: true,
  },
  {
    name: "SEO & GEO Bundle",
    slug: "seo-geo-bundle",
    category: "seo-geo",
    badge: "SEO",
    description:
      "Bundle für Google-SEO, AI-Search-Optimierung, Content-Briefings, Wettbewerbsanalyse und technische Audits.",
    audience: "SEO-Teams, Content-Marketer, Agenturen, Publisher und Website-Betreiber",
    tools: ["ChatGPT", "Perplexity", "Ahrefs oder Semrush", "Screaming Frog", "Surfer oder Frase"],
    workflow: [
      "Ahrefs oder Semrush für Keywords, Backlinks und Wettbewerbsdaten",
      "Perplexity für AI-Search-Bild und Quellenlage",
      "ChatGPT für Content-Briefings, Cluster, Titles und Meta-Struktur",
      "Surfer oder Frase für Onpage-Optimierung",
      "Screaming Frog für technische Crawls",
    ],
    bestFor: ["SEO", "GEO", "Content-Briefings", "Audits"],
    notFor:
      "Nicht geeignet als Garantie für Rankings; SEO braucht Tests, Qualität und laufende Pflege.",
    featured: true,
  },
  {
    name: "Creator Social Bundle",
    slug: "creator-social-bundle",
    category: "marketing-content",
    badge: "Creator",
    description:
      "Bundle für TikTok, Instagram, YouTube Shorts, LinkedIn, Content-Recycling und schnelle Social-Produktion.",
    audience: "Creator, Personal Brands, Coaches, Marketer und kleine Teams",
    tools: ["ChatGPT", "Canva", "CapCut", "Midjourney", "Perplexity"],
    workflow: [
      "Perplexity für Trends, Fakten und aktuelle Themen",
      "ChatGPT für Hooks, Skripte und Captions",
      "Midjourney für visuelle Konzepte",
      "Canva für Karussells, Posts und Thumbnails",
      "CapCut für Reels, Shorts, Untertitel und Schnitt",
    ],
    bestFor: ["Shorts", "Reels", "LinkedIn", "Content Recycling"],
    notFor:
      "Nicht nötig, wenn du keine regelmäßige Content-Produktion planst.",
    featured: false,
  },
  {
    name: "Premium Allround Bundle",
    slug: "premium-allround-bundle",
    category: "ki-bundles",
    badge: "Premium",
    description:
      "Breites Power-User-Bundle für Strategie, Recherche, Texte, Bilder, Video, Design und Automatisierung.",
    audience: "Power-User, Agenturen, Gründer, Creator und kleine Teams mit breiten Anforderungen",
    tools: ["ChatGPT", "Claude", "Perplexity", "Gemini", "Midjourney", "Runway", "Canva", "Zapier", "n8n"],
    workflow: [
      "ChatGPT für Strategie, Struktur, Code und Agentenlogik",
      "Claude für lange Texte, Qualität und Dokumente",
      "Perplexity für Recherche und Quellen",
      "Gemini für Google-Ökosystem und multimodale Aufgaben",
      "Midjourney für starke Bildästhetik",
      "Runway für Video",
      "Canva für Designs und Layouts",
      "Zapier für einfache Automatisierung",
      "n8n für komplexere Workflows",
    ],
    bestFor: ["Power-User", "Agenturen", "Content", "Automation"],
    notFor:
      "Nicht sinnvoll, wenn du nur ein oder zwei einfache Aufgaben lösen willst.",
    featured: true,
  },
];