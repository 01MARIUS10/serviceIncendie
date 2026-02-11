
import type { Metadata } from "next";

// Page data for SSR - fetched on server
export interface PageData {
  id: number;
  title: string;
  description: string;
  features: string[];
  color: string;
  colorName: string;
  url: string;
  keywords?: string[];
  ogImage?: string;
}

export async function getPages(): Promise<PageData[]> {
  // Simulation de données serveur - dans un vrai projet, ceci pourrait être une API ou DB
  const pages: PageData[] = [
    {
      id: 0,
      title: "Accueil -  Solutions de Formation et Sécurité",
      description: "Fire Forensic propose des formations professionnelles en sécurité incendie, nautisme et accompagnement d'entreprises. Expert en prévention et gestion des risques depuis 2010.",
      features: [
        "Formation sécurité incendie certifiée",
        "École de navigation et permis bateau",
        "Accompagnement des entreprises",
        "Expertise post-incendie",
      ],
      color: "#8B5CF6", // Purple
      colorName: "Purple",
      url: "/accueil",
      keywords: [
        "formation sécurité",
        "formation incendie",
        "permis bateau",
        "nautisme",
        "prévention incendie",
        "post-incendie",
        "formation professionnelle",
        "sécurité entreprise",
        "Fire Forensic",
      ],
      ogImage: "/images/tsotra-hero.jpg",
    },
    {
      id: 3,
      title: "Formation RCCI & Enquête Incendie - 2F Fire Forensic ",
      description: "Nous formons les experts de demain. FIRE FORENSIC (2F), seule entreprise française reconnue instructeur NAFI et IAAI USA, propose des formations RCCI, certifications CFEI et préparation CFI-IAAI conformément au NFPA 1033.",
      features: [
        "Certification CFEI – NAFI",
        "Préparation CFI – IAAI (Proctor-Évaluateur)",
        "Formation terrain & coaching",
        "Séminaires en sciences forensiques",
        "Révision et analyse de dossiers",
        "Congrès criminalistique & psycho-criminologie",
      ],
      color: "#06B6D4", // Cyan
      colorName: "Cyan",
      url: "/formation",
      keywords: [
        "formation RCCI",
        "enquête incendie",
        "CFEI",
        "NAFI",
        "IAAI",
        "fire forensic",
        "investigation incendie",
        "NFPA 1033",
        "certification incendie",
        "sciences forensiques",
        "formation enquêteur incendie"
      ],
      ogImage: "/images/formation-hero.jpg",
    },
    {
      id: 2,
      title: "N2F Nautical Fire Forensic - Investigation Post-Incendie Nautique",
      description: "N2F – Nautical Fire Forensic est spécialisée en investigation post-incendie nautique. Expertise des sinistres sur navires de plaisance, pêche et marine marchande nécessitant des compétences particulières dans le domaine maritime.",
      features: [
        "Expertise incendie navires de plaisance",
        "Investigation marine marchande",
        "Analyse de sinistres nautiques",
        "Recherche de cause d'incendie naval",
        "Rapport d'expertise maritime",
        "Démarche scientifique cohérente",
      ],
      color: "#155dfc", // Blue
      colorName: "Blue",
      url: "/nautique",
      keywords: [
        "incendie nautique",
        "expertise incendie bateau",
        "investigation navire",
        "post-incendie maritime",
        "N2F",
        "nautical fire forensic",
        "sinistre naval",
        "incendie plaisance",
        "marine marchande"
      ],
      ogImage: "/images/nautique-hero.jpg",
    },
    // {
    //   id: 3,
    //   title: "Nos Partenaires - TSOTRA",
    //   description: "TSOTRA collabore avec des entreprises et organismes de référence pour offrir des services de qualité. Rejoignez notre réseau de partenaires de confiance.",
    //   features: [
    //     "Réseau d'entreprises certifiées",
    //     "Partenariats institutionnels",
    //     "Collaboration inter-services",
    //     "Mutualisation des compétences",
    //   ],
    //   color: "#10B981", // Green
    //   colorName: "Green",
    //   url: "/partenaire",
    //   keywords: [
    //     "partenaires TSOTRA",
    //     "réseau professionnel",
    //     "collaboration",
    //     "entreprises partenaires"
    //   ],
    //   ogImage: "/images/partenaires-hero.jpg",
    // },
    {
      id: 4,
      title: "E2D Fire Protection Preservation - Post-Incendie, Désamiantage & Dépollution",
      description: "E2D – Fire Protection Preservation intervient après un sinistre incendie pour sécuriser les lieux, mettre en œuvre les mesures de sauvegarde et assurer la dépollution du site vis-à-vis des risques amiante et plomb.",
      features: [
        "Mesures de sauvegarde immédiates",
        "Mesures conservatoires",
        "Désamiantage réglementaire",
        "Dépollution plomb",
        "Curage et évacuation des déchets",
        "Sécurisation de site sinistré",
      ],
      color: "#EF4444", // Red
      colorName: "Red",
      url: "/post-incendie",
      keywords: [
        "post-incendie",
        "mesures de sauvegarde",
        "désamiantage",
        "dépollution plomb",
        "mesures conservatoires",
        "curage post-incendie",
        "sécurisation sinistre",
        "E2D",
        "fire protection preservation"
      ],
      ogImage: "/images/post-incendie-hero.jpg",
    },
  ];

  return pages;
}

export async function getPageById(pageId : number):Promise<PageData | undefined>{
  const pages = await getPages();
  return pages.find((p) => p.id === pageId);
}
export async function getPageByUrl(url: string): Promise<PageData | undefined> {
  const pages = await getPages();
  return pages.find((p) => p.url === url);
}

export async function getFaceInfo() {
  const page = await getPages();
  // filter(pa=>pa.id!=0)
  return page.map((p) => ({
    id: p.id,
    name: p.colorName,
    color: p.color,
  }));
}

// Informations globales pour la scène (comme une vidéo d'ambiance entourant le tétraèdre)
export async function getSceneInfo() {
  // Aucun média par défaut — n'utilise pas la vidéo fournie automatiquement.
  // Retourner `surroundFireVideo: null` empêche `Tetraede` d'injecter
  // des MovieTexture basés sur un fichier local non désiré.
  return {
    surroundFireVideo: null,
  };
}

// Métadonnées SEO pour la page Accueil
export async function generateMetadata(pageId: number): Promise<Metadata> {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === pageId)!;

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords?.join(", "),
    authors: [{ name: "Fire Forensic" }],
    creator: "Fire Forensic",
    publisher: "Fire Forensic",

    // Open Graph
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `https://fireforensic.com${pageData.url}`,
      siteName: "Fire Forensic",
      images: [
        {
          url: pageData.ogImage || "/images/og-default.jpg",
          width: 1200,
          height: 630,
          alt: pageData.title,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      images: [pageData.ogImage || "/images/og-default.jpg"],
      creator: "@fireforensic",
    },

    // Autres métadonnées
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    
    alternates: {
      canonical: `https://fireforensic.com${pageData.url}`,
    },

    // Note: viewport and themeColor should be exported separately per Next.js
    // recommendations. These values are intentionally omitted here to avoid
    // framework warnings about unsupported metadata placement.
    
    // Métadonnées additionnelles
    category: "Formation Professionnelle",
  };
}
