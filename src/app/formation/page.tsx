import { getPages, generateMetadata as generatePageMetadata } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

// Métadonnées SEO
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(1);
}

// Page Formation - Générée côté serveur
export default async function FormationPage() {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === 1)!;

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "TSOTRA - Centre de Formation",
    description: pageData.description,
    url: `https://tsotra.com${pageData.url}`,
    image: pageData.ogImage,
    offers: {
      "@type": "AggregateOffer",
      offerCount: pageData.features.length,
      offers: pageData.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: feature,
          provider: {
            "@type": "Organization",
            name: "TSOTRA",
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-600/20 rounded-full mb-4">
              <span className="text-cyan-400 font-semibold">Formation Professionnelle</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Formations Sécurité Incendie
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              {pageData.description}
            </p>
            <div className="flex gap-4">
              <Link
                href="#formations"
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-medium transition-colors"
              >
                Voir nos formations
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </section>

          {/* Formations Grid */}
          <section id="formations" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Nos Formations Certifiées</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.features.map((feature, index) => (
                <article
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-4">🔥</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Formation pratique et théorique adaptée aux normes en vigueur.
                  </p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    En savoir plus →
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Avantages */}
          <section className="mb-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Pourquoi choisir TSOTRA ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-3">✓</div>
                <h3 className="text-xl font-semibold text-white mb-2">Formateurs Agréés</h3>
                <p className="text-gray-300">
                  Équipe de formateurs certifiés avec une expérience terrain reconnue.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">✓</div>
                <h3 className="text-xl font-semibold text-white mb-2">Certifications Reconnues</h3>
                <p className="text-gray-300">
                  Formations conformes aux référentiels CNPP et INRS.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">✓</div>
                <h3 className="text-xl font-semibold text-white mb-2">Sur-Mesure</h3>
                <p className="text-gray-300">
                  Programmes adaptés aux besoins spécifiques de votre entreprise.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à former vos équipes ?
            </h2>
            <p className="text-gray-300 mb-6">
              Contactez-nous pour un devis personnalisé et un programme sur-mesure.
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-medium transition-colors"
            >
              Demander un devis
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
