import { getPages, generateMetadata as generatePageMetadata } from "@/lib/data";
import type { Metadata } from "next";
import AccueilContent from "@/components/acceuil";

// Métadonnées SEO
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(0);
}

// Page Accueil - Générée côté serveur
export default async function AccueilPage() {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === 0)!;

  // Schema.org JSON-LD pour le SEO structuré
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fire FORENSIC",
    description: pageData.description,
    url: "https://fireforensic.com",
    logo: "https://fireforensic.com/images/logo.png",
    image: pageData.ogImage,
    telephone: "+33-X-XX-XX-XX-XX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Adresse à définir",
      addressLocality: "Ville",
      postalCode: "Code postal",
      addressCountry: "FR",
    },
    sameAs: [
      "https://www.facebook.com/fireforensic",
      "https://www.linkedin.com/company/fireforensic",
      "https://twitter.com/fireforensic",
    ],
    offers: pageData.features.map((feature) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: feature,
      },
    })),
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AccueilContent />
    </>
  );
}
