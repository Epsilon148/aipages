export type BundleTool = {
  name: string;
  url: string;
};

export type Bundle = {
  name: string;
  slug: string;
  category: string;
  badge: string;
  description: string;
  why: string;
  audience: string;
  tools: string[];
  toolLinks: BundleTool[];
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
    why:
      "Dieses Bundle kombiniert allgemeines Denken, Quellenrecherche, lange Dokumente und multimodale Aufgaben. ChatGPT strukturiert und plant, Perplexity prüft Informationen mit Quellen, Claude verfeinert lange Texte und Gemini ergänzt Google-nahe sowie multimodale Workflows.",
    audience: "Freelancer, Gründer, Studierende, Creator und kleine Teams",
    tools: ["ChatGPT", "Claude", "Perplexity", "Google Gemini"],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Perplexity", url: "https://www.perplexity.ai" },
      { name: "Google Gemini", url: "https://gemini.google.com" },
    ],
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
    why:
      "Die Kombination deckt den kompletten frühen Business-Prozess ab: ChatGPT entwickelt Geschäftsmodell und Positionierung, Perplexity prüft Markt und Wettbewerber, Claude formuliert daraus saubere Reports und Canva macht die Ergebnisse präsentierbar.",
    audience:
      "Gründer, Selbstständige, Coaches, lokale Unternehmen und Agenturen",
    tools: ["ChatGPT", "Perplexity", "Claude", "Canva"],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Perplexity", url: "https://www.perplexity.ai" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Canva", url: "https://www.canva.com" },
    ],
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
    why:
      "Dieses Bundle verbindet Strategie, Text, Bild, Layout und Automatisierung. ChatGPT plant Kampagnen, Claude schärft Tonalität, Midjourney erzeugt visuelle Richtungen, Canva produziert Assets und Zapier automatisiert wiederkehrende Schritte.",
    audience: "Marketingteams, Agenturen, Creator, Coaches und Personal Brands",
    tools: ["ChatGPT", "Claude", "Canva", "Midjourney", "Zapier"],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Canva", url: "https://www.canva.com" },
      { name: "Midjourney", url: "https://www.midjourney.com" },
      { name: "Zapier", url: "https://zapier.com" },
    ],
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
    why:
      "Claude und ChatGPT liefern Struktur, Varianten und kreative Ausarbeitung. Midjourney übersetzt Ideen in Bildwelten, Canva macht daraus verwertbare Assets und Miro oder FigJam helfen, Konzepte visuell zu ordnen.",
    audience: "Designer, Kreative, Marken, Creator und Agenturen",
    tools: ["Claude", "ChatGPT", "Midjourney", "Canva", "Miro oder FigJam"],
    toolLinks: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Midjourney", url: "https://www.midjourney.com" },
      { name: "Canva", url: "https://www.canva.com" },
      { name: "Miro", url: "https://miro.com" },
      { name: "FigJam", url: "https://www.figma.com/figjam" },
    ],
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
    why:
      "Midjourney erzeugt Bildideen, Photoshop und Firefly übernehmen präzise Bearbeitung, Topaz verbessert technische Bildqualität und Canva macht daraus fertige Marketingformate.",
    audience: "Fotografen, E-Commerce-Teams, Designer und Social Media Manager",
    tools: [
      "Adobe Firefly",
      "Photoshop",
      "Midjourney",
      "Canva",
      "Topaz Photo AI",
    ],
    toolLinks: [
      { name: "Adobe Firefly", url: "https://firefly.adobe.com" },
      { name: "Photoshop", url: "https://www.adobe.com/products/photoshop.html" },
      { name: "Midjourney", url: "https://www.midjourney.com" },
      { name: "Canva", url: "https://www.canva.com" },
      { name: "Topaz Photo AI", url: "https://www.topazlabs.com/topaz-photo-ai" },
    ],
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
    why:
      "Das Bundle trennt Videoarbeit in klare Rollen: Midjourney liefert Styleframes, Runway oder Veo erzeugen Bewegung, ElevenLabs erzeugt Stimmen und CapCut übernimmt den schnellen Schnitt für Social-Formate.",
    audience: "Creator, Social-Media-Teams, Werber, Videografen und Marken",
    tools: ["Runway", "Google Gemini / Veo", "Midjourney", "CapCut", "ElevenLabs"],
    toolLinks: [
      { name: "Runway", url: "https://runwayml.com" },
      { name: "Google Gemini", url: "https://gemini.google.com" },
      { name: "Midjourney", url: "https://www.midjourney.com" },
      { name: "CapCut", url: "https://www.capcut.com" },
      { name: "ElevenLabs", url: "https://elevenlabs.io" },
    ],
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
    why:
      "ChatGPT definiert Markenfundament und Tonalität, Midjourney erzeugt visuelle Richtungen, Canva produziert schnelle Brand Assets, Figma eignet sich für UI-Systeme und Firefly für professionelle Bildbearbeitung.",
    audience: "Gründer, Marken, Designer, Agenturen und Selbstständige",
    tools: ["ChatGPT", "Midjourney", "Canva", "Figma", "Adobe Firefly"],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Midjourney", url: "https://www.midjourney.com" },
      { name: "Canva", url: "https://www.canva.com" },
      { name: "Figma", url: "https://www.figma.com" },
      { name: "Adobe Firefly", url: "https://firefly.adobe.com" },
    ],
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
    why:
      "ChatGPT plant Seitenstruktur und Conversion-Logik, Claude schreibt saubere Copy, Figma visualisiert Layouts, Framer oder Webflow setzen die Seite live um und Canva ergänzt schnelle Assets.",
    audience: "Agenturen, Gründer, lokale Dienstleister, SaaS-Teams und Coaches",
    tools: ["ChatGPT", "Claude", "Figma", "Framer oder Webflow", "Canva"],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Figma", url: "https://www.figma.com" },
      { name: "Framer", url: "https://www.framer.com" },
      { name: "Webflow", url: "https://webflow.com" },
      { name: "Canva", url: "https://www.canva.com" },
    ],
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
    why:
      "ChatGPT oder Claude strukturieren Wissen und Dialoglogik, Notion oder Google Drive dienen als Wissensbasis, Voiceflow oder Botpress bauen den Agenten und Zapier verbindet ihn mit CRM, E-Mail oder Ticketsystemen.",
    audience: "Support-Teams, SaaS, Dienstleister, Shops und lokale Unternehmen",
    tools: [
      "Voiceflow",
      "Botpress",
      "Zapier",
      "ChatGPT oder Claude",
      "Notion oder Google Drive",
    ],
    toolLinks: [
      { name: "Voiceflow", url: "https://www.voiceflow.com" },
      { name: "Botpress", url: "https://botpress.com" },
      { name: "Zapier", url: "https://zapier.com" },
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Notion", url: "https://www.notion.so" },
      { name: "Google Drive", url: "https://drive.google.com" },
    ],
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
    why:
      "Airtable speichert strukturierte Daten, Zapier verbindet einfache Standardprozesse, Make visualisiert komplexere Abläufe, n8n gibt technische Kontrolle und OpenAI oder Claude API liefern KI-Verständnis im Workflow.",
    audience: "Operations-Teams, Agenturen, technische Gründer und Power-User",
    tools: ["n8n", "Zapier", "Make", "OpenAI oder Claude API", "Airtable"],
    toolLinks: [
      { name: "n8n", url: "https://n8n.io" },
      { name: "Zapier", url: "https://zapier.com" },
      { name: "Make", url: "https://www.make.com" },
      { name: "OpenAI API", url: "https://platform.openai.com" },
      { name: "Claude API", url: "https://www.anthropic.com/api" },
      { name: "Airtable", url: "https://www.airtable.com" },
    ],
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
    why:
      "ChatGPT oder Codex planen Architektur und Debugging, Cursor oder Windsurf bringen KI direkt in die IDE, Claude Code hilft bei größeren Codebase-Aufgaben, Copilot beschleunigt tägliches Schreiben und Replit eignet sich für schnelle Prototypen.",
    audience:
      "Entwickler, SaaS-Gründer, Agenturen und technisch interessierte No-Code-Gründer",
    tools: [
      "Claude Code",
      "ChatGPT / Codex",
      "Cursor oder Windsurf",
      "GitHub Copilot",
      "Replit",
    ],
    toolLinks: [
      { name: "Claude Code", url: "https://www.anthropic.com/claude-code" },
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Codex", url: "https://openai.com/codex" },
      { name: "Cursor", url: "https://www.cursor.com" },
      { name: "Windsurf", url: "https://windsurf.com" },
      { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
      { name: "Replit", url: "https://replit.com" },
    ],
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
    why:
      "ChatGPT hilft bei Datenmodell und Logik, Airtable liefert eine schnelle Datenbasis, Softr baut einfache Portale, Bubble ermöglicht komplexere Apps und Zapier oder n8n verbinden externe Prozesse.",
    audience: "Gründer, Operations-Teams, Agenturen und No-Code-Builder",
    tools: ["ChatGPT", "Bubble", "Softr", "Airtable", "Zapier oder n8n"],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Bubble", url: "https://bubble.io" },
      { name: "Softr", url: "https://www.softr.io" },
      { name: "Airtable", url: "https://www.airtable.com" },
      { name: "Zapier", url: "https://zapier.com" },
      { name: "n8n", url: "https://n8n.io" },
    ],
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
    why:
      "Perplexity findet Quellen und aktuelle Informationen, Claude verarbeitet lange Dokumente, ChatGPT synthetisiert Entscheidungen, NotebookLM arbeitet mit eigenen Quellen und Notion speichert das Wissen dauerhaft.",
    audience:
      "Berater, Analysten, Studierende, Gründer, Teams und Wissensarbeiter",
    tools: ["Perplexity", "ChatGPT", "Claude", "NotebookLM", "Notion"],
    toolLinks: [
      { name: "Perplexity", url: "https://www.perplexity.ai" },
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "NotebookLM", url: "https://notebooklm.google.com" },
      { name: "Notion", url: "https://www.notion.so" },
    ],
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
    why:
      "Perplexity recherchiert Zielkunden und Trigger, Apollo oder Clay liefern Lead-Daten, ChatGPT schreibt personalisierte Nachrichten, HubSpot oder Pipedrive verwalten die Pipeline und Zapier automatisiert Follow-ups.",
    audience:
      "B2B-Agenturen, SaaS-Teams, Beratungen, Dienstleister und Vertriebsteams",
    tools: [
      "ChatGPT",
      "Perplexity",
      "Apollo oder Clay",
      "HubSpot oder Pipedrive",
      "Zapier",
    ],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Perplexity", url: "https://www.perplexity.ai" },
      { name: "Apollo", url: "https://www.apollo.io" },
      { name: "Clay", url: "https://www.clay.com" },
      { name: "HubSpot", url: "https://www.hubspot.com" },
      { name: "Pipedrive", url: "https://www.pipedrive.com" },
      { name: "Zapier", url: "https://zapier.com" },
    ],
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
    why:
      "ChatGPT schreibt Produkttexte und Kampagnen, Firefly oder Midjourney erzeugen Bildwelten, Canva produziert Shopbanner und Ads, Shopify Magic unterstützt im Shop, Zapier verbindet Prozesse und Botpress kann Support-Fragen abfangen.",
    audience: "Online-Shops, DTC-Marken, Creator-Shops und E-Commerce-Teams",
    tools: [
      "ChatGPT",
      "Midjourney oder Firefly",
      "Canva",
      "Shopify Magic",
      "Zapier",
      "Botpress",
    ],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Midjourney", url: "https://www.midjourney.com" },
      { name: "Adobe Firefly", url: "https://firefly.adobe.com" },
      { name: "Canva", url: "https://www.canva.com" },
      { name: "Shopify Magic", url: "https://www.shopify.com/magic" },
      { name: "Zapier", url: "https://zapier.com" },
      { name: "Botpress", url: "https://botpress.com" },
    ],
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
    why:
      "Ahrefs oder Semrush liefern SEO-Daten, Perplexity zeigt Quellen und AI-Search-Antworten, ChatGPT erstellt Briefings und Cluster, Surfer oder Frase optimieren Inhalte und Screaming Frog prüft Technik.",
    audience:
      "SEO-Teams, Content-Marketer, Agenturen, Publisher und Website-Betreiber",
    tools: [
      "ChatGPT",
      "Perplexity",
      "Ahrefs oder Semrush",
      "Screaming Frog",
      "Surfer oder Frase",
    ],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Perplexity", url: "https://www.perplexity.ai" },
      { name: "Ahrefs", url: "https://ahrefs.com" },
      { name: "Semrush", url: "https://www.semrush.com" },
      { name: "Screaming Frog", url: "https://www.screamingfrog.co.uk/seo-spider" },
      { name: "Surfer", url: "https://surferseo.com" },
      { name: "Frase", url: "https://www.frase.io" },
    ],
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
    why:
      "Perplexity liefert Trends und Fakten, ChatGPT erstellt Hooks und Skripte, Midjourney erzeugt Visuals, Canva baut Posts und Thumbnails und CapCut schneidet daraus kurze Social-Videos.",
    audience: "Creator, Personal Brands, Coaches, Marketer und kleine Teams",
    tools: ["ChatGPT", "Canva", "CapCut", "Midjourney", "Perplexity"],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Canva", url: "https://www.canva.com" },
      { name: "CapCut", url: "https://www.capcut.com" },
      { name: "Midjourney", url: "https://www.midjourney.com" },
      { name: "Perplexity", url: "https://www.perplexity.ai" },
    ],
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
    category: "produktivitaet",
    badge: "Premium",
    description:
      "Breites Power-User-Bundle für Strategie, Recherche, Texte, Bilder, Video, Design und Automatisierung.",
    why:
      "Dieses Bundle deckt fast den gesamten digitalen KI-Workflow ab: Denken, Recherche, Text, Bild, Video, Design und Automation. Es ist bewusst breit und eignet sich für Nutzer, die viele Aufgabenbereiche mit einem KI-Stack abdecken wollen.",
    audience:
      "Power-User, Agenturen, Gründer, Creator und kleine Teams mit breiten Anforderungen",
    tools: [
      "ChatGPT",
      "Claude",
      "Perplexity",
      "Gemini",
      "Midjourney",
      "Runway",
      "Canva",
      "Zapier",
      "n8n",
    ],
    toolLinks: [
      { name: "ChatGPT", url: "https://chatgpt.com" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Perplexity", url: "https://www.perplexity.ai" },
      { name: "Gemini", url: "https://gemini.google.com" },
      { name: "Midjourney", url: "https://www.midjourney.com" },
      { name: "Runway", url: "https://runwayml.com" },
      { name: "Canva", url: "https://www.canva.com" },
      { name: "Zapier", url: "https://zapier.com" },
      { name: "n8n", url: "https://n8n.io" },
    ],
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