import { getPages } from "@/lib/data";
import Link from "next/link";
import Tetraede from "@/components/Tetraede";
import RootLayout from "../layout";


// Page Accueil - Générée côté serveur
export default async function AccueilPage() {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === 0)!;

  // Schema.org JSON-LD pour le SEO structuré
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TSOTRA",
    description: pageData.description,
    url: "https://tsotra.com",
    logo: "https://tsotra.com/images/logo.png",
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
      "https://www.facebook.com/tsotra",
      "https://www.linkedin.com/company/tsotra",
      "https://twitter.com/tsotra",
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

      <main className="min-h-screen">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bienvenue chez TSOTRA
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            {pageData.description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pageData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 flex gap-4">
            <Link
              href="/formation"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-medium transition-colors"
            >
              Nos Formations
            </Link>
            <Link
              href="/nautique"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
            >
              École Nautique
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
