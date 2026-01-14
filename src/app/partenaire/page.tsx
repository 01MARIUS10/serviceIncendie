import { getPages, generateMetadata as generatePageMetadata } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

// Métadonnées SEO
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(3);
}

// Page Partenaire - Générée côté serveur
export default async function PartenairePage() {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === 3)!;

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TSOTRA - Réseau de Partenaires",
    description: pageData.description,
    url: `https://tsotra.com${pageData.url}`,
    image: pageData.ogImage,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="inline-block px-4 py-2 bg-green-600/20 rounded-full mb-4">
              <span className="text-green-400 font-semibold">Réseau Professionnel</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              🤝 Nos Partenaires
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              {pageData.description}
            </p>
            <div className="flex gap-4">
              <Link
                href="#reseau"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors"
              >
                Découvrir notre réseau
              </Link>
              <Link
                href="#devenir-partenaire"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium transition-colors"
              >
                Devenir partenaire
              </Link>
            </div>
          </section>

          {/* Types de partenariats */}
          <section id="reseau" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Types de Partenariats</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.features.map((feature, index) => (
                <article
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Collaboration stratégique pour des services de qualité.
                  </p>
                  <button className="text-green-400 hover:text-green-300 font-medium text-sm">
                    En savoir plus →
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Partenaires principaux (placeholder) */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Ils nous font confiance
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏆</div>
                    <p className="text-gray-400 text-sm">Partenaire {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Avantages */}
          <section className="mb-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Avantages du Partenariat
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-3">📈</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Développement Business
                </h3>
                <p className="text-gray-300">
                  Accédez à de nouvelles opportunités commerciales et élargissez votre réseau.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Expertise Partagée
                </h3>
                <p className="text-gray-300">
                  Bénéficiez de nos compétences et partagez les vôtres avec notre réseau.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🌐</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Visibilité Accrue
                </h3>
                <p className="text-gray-300">
                  Augmentez votre notoriété grâce à notre plateforme et nos canaux.
                </p>
              </div>
            </div>
          </section>

          {/* Processus de partenariat */}
          <section id="devenir-partenaire" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Comment Devenir Partenaire ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Prise de Contact</h3>
                <p className="text-gray-300 text-sm">
                  Contactez-nous pour discuter de votre projet de partenariat.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Évaluation</h3>
                <p className="text-gray-300 text-sm">
                  Analyse des synergies et des opportunités de collaboration.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Signature</h3>
                <p className="text-gray-300 text-sm">
                  Formalisation du partenariat et début de la collaboration.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Intéressé par un partenariat ?
            </h2>
            <p className="text-gray-300 mb-6">
              Rejoignez notre réseau de partenaires de confiance et développons ensemble.
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors"
            >
              Nous contacter
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
