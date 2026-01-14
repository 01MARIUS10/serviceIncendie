import { getPages, generateMetadata as generatePageMetadata } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

// Métadonnées SEO
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(4);
}

// Page Post-Incendie - Générée côté serveur
export default async function PostIncendiePage() {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === 4)!;

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TSOTRA - Expertise Post-Incendie",
    description: pageData.description,
    url: `https://tsotra.com${pageData.url}`,
    image: pageData.ogImage,
    serviceType: "Expertise et Diagnostic Post-Incendie",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="inline-block px-4 py-2 bg-red-600/20 rounded-full mb-4">
              <span className="text-red-400 font-semibold">Service d'Urgence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              🔥 Expertise Post-Incendie
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              {pageData.description}
            </p>
            <div className="flex gap-4">
              <Link
                href="tel:+33XXXXXXXXX"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
              >
                📞 Urgence 24/7
              </Link>
              <Link
                href="#services"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium transition-colors"
              >
                Nos services
              </Link>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Nos Services Post-Sinistre</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.features.map((feature, index) => (
                <article
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Accompagnement complet après sinistre incendie.
                  </p>
                  <button className="text-red-400 hover:text-red-300 font-medium text-sm">
                    En savoir plus →
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Processus d'intervention */}
          <section className="mb-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Notre Processus d'Intervention
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Appel d'Urgence</h3>
                <p className="text-gray-300 text-sm">
                  Contact immédiat, disponibilité 24/7 pour votre sinistre.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Diagnostic</h3>
                <p className="text-gray-300 text-sm">
                  Évaluation complète des dégâts et des risques résiduels.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Rapport</h3>
                <p className="text-gray-300 text-sm">
                  Rapport détaillé pour votre assurance et plan d'action.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Accompagnement</h3>
                <p className="text-gray-300 text-sm">
                  Suivi jusqu'à la remise en état complète de vos locaux.
                </p>
              </div>
            </div>
          </section>

          {/* Pourquoi nous choisir */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Pourquoi Faire Appel à TSOTRA ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Réactivité</h3>
                <p className="text-gray-300">
                  Intervention rapide 24h/24, 7j/7 partout en France.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🎓</div>
                <h3 className="text-xl font-semibold text-white mb-2">Expertise</h3>
                <p className="text-gray-300">
                  Experts certifiés en prévention et gestion des risques incendie.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🤝</div>
                <h3 className="text-xl font-semibold text-white mb-2">Accompagnement</h3>
                <p className="text-gray-300">
                  Support complet avec assurances et entreprises de rénovation.
                </p>
              </div>
            </div>
          </section>

          {/* Zone d'intervention */}
          <section className="mb-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Zone d'Intervention
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons sur l'ensemble du territoire français pour vos expertises
              post-incendie. Service d'urgence disponible 24h/24.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-red-600/20 rounded-full text-red-400">
                🇫🇷 France entière
              </span>
              <span className="px-4 py-2 bg-red-600/20 rounded-full text-red-400">
                ⏰ 24/7
              </span>
              <span className="px-4 py-2 bg-red-600/20 rounded-full text-red-400">
                🚨 Urgence
              </span>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Besoin d'une Expertise Post-Incendie ?
              </h2>
              <p className="text-white/90 mb-6">
                Notre équipe est disponible 24h/24 pour vous accompagner après un sinistre.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="tel:+33XXXXXXXXX"
                  className="inline-block px-8 py-4 bg-white hover:bg-gray-100 rounded-lg text-red-600 font-bold transition-colors"
                >
                  📞 Appeler Maintenant
                </Link>
                <Link
                  href="#contact"
                  className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium transition-colors"
                >
                  Formulaire de contact
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
