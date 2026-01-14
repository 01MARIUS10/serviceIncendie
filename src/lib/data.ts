
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
      title: "Accueil - TSOTRA | Solutions de Formation et Sécurité",
      description: "TSOTRA propose des formations professionnelles en sécurité incendie, nautisme et accompagnement d'entreprises. Expert en prévention et gestion des risques depuis 2010.",
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
        "TSOTRA"
      ],
      ogImage: "/images/tsotra-hero.jpg",
    },
    {
      id: 1,
      title: "Formation Professionnelle - TSOTRA",
      description: "Découvrez nos formations certifiées en sécurité incendie, gestion des risques et prévention. Formateurs agréés et programmes adaptés aux besoins de votre entreprise.",
      features: [
        "Formations certifiées CNPP",
        "Manipulation extincteurs",
        "Évacuation incendie",
        "SST et premiers secours",
      ],
      color: "#06B6D4", // Cyan
      colorName: "Cyan",
      url: "/formation",
      keywords: [
        "formation incendie",
        "formation sécurité",
        "SST",
        "premiers secours",
        "manipulation extincteur",
        "évacuation",
        "CNPP"
      ],
      ogImage: "/images/formation-hero.jpg",
    },
    {
      id: 2,
      title: "École Nautique - TSOTRA",
      description: "Passez votre permis bateau avec TSOTRA. Formation théorique et pratique pour permis côtier, fluvial et hauturier. Encadrement professionnel et bateaux récents.",
      features: [
        "Permis côtier et fluvial",
        "Formation hauturier",
        "Perfectionnement navigation",
        "Location de bateaux",
      ],
      color: "#155dfc", // Blue
      colorName: "Blue",
      url: "/nautique",
      keywords: [
        "permis bateau",
        "permis côtier",
        "permis fluvial",
        "école nautique",
        "formation navigation",
        "hauturier",
        "bateau école"
      ],
      ogImage: "/images/nautique-hero.jpg",
    },
    {
      id: 3,
      title: "Nos Partenaires - TSOTRA",
      description: "TSOTRA collabore avec des entreprises et organismes de référence pour offrir des services de qualité. Rejoignez notre réseau de partenaires de confiance.",
      features: [
        "Réseau d'entreprises certifiées",
        "Partenariats institutionnels",
        "Collaboration inter-services",
        "Mutualisation des compétences",
      ],
      color: "#10B981", // Green
      colorName: "Green",
      url: "/partenaire",
      keywords: [
        "partenaires TSOTRA",
        "réseau professionnel",
        "collaboration",
        "entreprises partenaires"
      ],
      ogImage: "/images/partenaires-hero.jpg",
    },
    {
      id: 4,
      title: "Expertise Post-Incendie - TSOTRA",
      description: "Service d'expertise et d'accompagnement après sinistre incendie. Diagnostic, coordination avec assurances et plan de remise en état sécurisé de vos locaux.",
      features: [
        "Diagnostic post-sinistre",
        "Expertise technique",
        "Coordination assurances",
        "Plan de remise en état",
      ],
      color: "#EF4444", // Red
      colorName: "Red",
      url: "/post-incendie",
      keywords: [
        "post-incendie",
        "expertise incendie",
        "sinistre",
        "diagnostic incendie",
        "remise en état",
        "assurance incendie"
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

// Métadonnées SEO pour la page Accueil
export async function generateMetadata(pageId: number): Promise<Metadata> {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === pageId)!;

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords?.join(", "),
    authors: [{ name: "TSOTRA" }],
    creator: "TSOTRA",
    publisher: "TSOTRA",
    
    // Open Graph
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `https://tsotra.com${pageData.url}`,
      siteName: "TSOTRA",
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
      creator: "@tsotra",
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
      canonical: `https://tsotra.com${pageData.url}`,
    },

    // Viewport et thème
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },
    
    themeColor: pageData.color,
    
    // Métadonnées additionnelles
    category: "Formation Professionnelle",
  };
}
