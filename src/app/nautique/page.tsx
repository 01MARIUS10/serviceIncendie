import { getPages, generateMetadata as generatePageMetadata } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

// Métadonnées SEO
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(2);
}

// Page Nautique - Générée côté serveur
export default async function NautiquePage() {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === 2)!;

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "TSOTRA - École Nautique",
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
            name: "TSOTRA École Nautique",
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

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-4">
              <span className="text-blue-400 font-semibold">École Nautique</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ⚓ Permis Bateau & Navigation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              {pageData.description}
            </p>
            <div className="flex gap-4">
              <Link
                href="#permis"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
              >
                Nos permis
              </Link>
              <Link
                href="#inscription"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium transition-colors"
              >
                S'inscrire
              </Link>
            </div>
          </section>

          {/* Permis Grid */}
          <section id="permis" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Formations Disponibles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.features.map((feature, index) => (
                <article
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-4">🚤</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Formation complète avec cours théoriques et pratiques en mer.
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    En savoir plus →
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Déroulement */}
          <section className="mb-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Comment ça marche ?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Inscription</h3>
                <p className="text-gray-300 text-sm">
                  Choisissez votre formation et inscrivez-vous en ligne.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Théorie</h3>
                <p className="text-gray-300 text-sm">
                  Cours théoriques et préparation à l'examen.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Pratique</h3>
                <p className="text-gray-300 text-sm">
                  Sorties en mer avec moniteur diplômé.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Permis</h3>
                <p className="text-gray-300 text-sm">
                  Obtenez votre permis bateau officiel.
                </p>
              </div>
            </div>
          </section>

          {/* Nos atouts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Nos Atouts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-3">⛵</div>
                <h3 className="text-xl font-semibold text-white mb-2">Bateaux Récents</h3>
                <p className="text-gray-300">
                  Flotte moderne et bien entretenue pour votre formation.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">👨‍🏫</div>
                <h3 className="text-xl font-semibold text-white mb-2">Moniteurs Diplômés</h3>
                <p className="text-gray-300">
                  Équipe de professionnels passionnés et expérimentés.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">📅</div>
                <h3 className="text-xl font-semibold text-white mb-2">Horaires Flexibles</h3>
                <p className="text-gray-300">
                  Formations adaptées à votre emploi du temps.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à prendre le large ?
            </h2>
            <p className="text-gray-300 mb-6">
              Inscrivez-vous dès maintenant et obtenez votre permis bateau avec TSOTRA.
            </p>
            <Link
              href="#inscription"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
            >
              S'inscrire maintenant
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
