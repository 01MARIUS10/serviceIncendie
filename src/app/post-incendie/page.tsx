import { getPages, generateMetadata as generatePageMetadata } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

// Métadonnées SEO
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(4);
}

// --- Données statiques pour la page Post-Incendie ---

interface Realite {
  icone: string;
  titre: string;
  description: string;
}

const realitesPostIncendie: Realite[] = [
  {
    icone: "🏚️",
    titre: "Structures fragilisées",
    description:
      "Après un incendie, les structures du bâtiment sont gravement affaiblies. Murs porteurs fissurés, planchers déformés, charpentes calcinées — le risque d'effondrement est réel et immédiat.",
  },
  {
    icone: "☁️",
    titre: "Contamination par les fumées",
    description:
      "Les résidus de combustion imprègnent l'ensemble du bâtiment. Les suies contiennent des composés toxiques qui se déposent sur toutes les surfaces et pénètrent les matériaux poreux.",
  },
  {
    icone: "💧",
    titre: "Dégâts des eaux d'extinction",
    description:
      "L'eau utilisée par les pompiers provoque des dégâts secondaires considérables : infiltrations, moisissures, dégradation des matériaux et risques électriques résiduels.",
  },
  {
    icone: "⚠️",
    titre: "Risques amiante & plomb",
    description:
      "Un incendie libère des fibres d'amiante et des particules de plomb piégées dans les matériaux de construction anciens. Ces substances hautement toxiques imposent une dépollution réglementaire stricte.",
  },
  {
    icone: "⚡",
    titre: "Installations techniques hors service",
    description:
      "Les réseaux électriques, de gaz, de plomberie et de ventilation sont endommagés. Leur remise en conformité doit être diagnostiquée avant toute intervention de reconstruction.",
  },
  {
    icone: "📋",
    titre: "Obligations réglementaires",
    description:
      "Le propriétaire est tenu de sécuriser le site sinistré dans les meilleurs délais. Des mesures conservatoires et de sauvegarde doivent être mises en œuvre conformément à la réglementation.",
  },
];

const etapesIntervention = [
  {
    numero: "01",
    titre: "Sécurisation immédiate du site",
    description:
      "Mise en place de palissades, balisage de la zone dangereuse et clôture du périmètre sinistré pour protéger les personnes et empêcher tout accès non autorisé.",
  },
  {
    numero: "02",
    titre: "Diagnostic et évaluation des risques",
    description:
      "Analyse complète de la structure, identification des risques résiduels (effondrement, amiante, plomb), évaluation des zones impactées et établissement d'un plan d'intervention.",
  },
  {
    numero: "03",
    titre: "Mesures de sauvegarde",
    description:
      "Étaiement des structures instables, bâchage des zones exposées aux intempéries, coupure et sécurisation des réseaux (électricité, gaz, eau) et protection des biens récupérables.",
  },
  {
    numero: "04",
    titre: "Mesures conservatoires",
    description:
      "Ventilation et assèchement des locaux, traitement anti-moisissures, préservation des éléments pour l'expertise d'assurance et documentation photographique complète.",
  },
  {
    numero: "05",
    titre: "Curage et évacuation",
    description:
      "Retrait des éléments calcinés, curage des zones sinistrées, tri sélectif des déchets et évacuation vers les filières de traitement et recyclage adaptées.",
  },
  {
    numero: "06",
    titre: "Rapport et coordination assurance",
    description:
      "Remise d'un rapport détaillé d'intervention, coordination avec les experts d'assurance et accompagnement dans les démarches administratives de remise en état.",
  },
];

const servicesDesamiantage: Realite[] = [
  {
    icone: "🔬",
    titre: "Diagnostic amiante avant travaux",
    description:
      "Avant toute intervention de démolition ou de curage, un repérage exhaustif des matériaux contenant de l'amiante est réalisé conformément à la réglementation en vigueur.",
  },
  {
    icone: "🛡️",
    titre: "Confinement et traitement",
    description:
      "Mise en place de zones de confinement étanches, installation d'extracteurs à filtration absolue et retrait méthodique des matériaux amiantés par des opérateurs certifiés.",
  },
  {
    icone: "📦",
    titre: "Conditionnement et évacuation",
    description:
      "Les déchets amiantés sont conditionnés en double emballage étiqueté, transportés par des véhicules agréés et acheminés vers des installations de stockage autorisées.",
  },
  {
    icone: "✅",
    titre: "Mesures d'empoussièrement & restitution",
    description:
      "Contrôles d'empoussièrement en cours et en fin de chantier. Le site n'est restitué qu'après validation des analyses attestant de l'absence de contamination résiduelle.",
  },
];

const servicesDeplombage: Realite[] = [
  {
    icone: "🎯",
    titre: "Diagnostic plomb avant travaux",
    description:
      "Repérage des peintures et revêtements contenant du plomb, en particulier dans les bâtiments construits avant 1949. Analyse par appareil à fluorescence X ou prélèvements en laboratoire.",
  },
  {
    icone: "🧹",
    titre: "Décapage et retrait",
    description:
      "Retrait des revêtements contaminés par décapage chimique, thermique ou mécanique. Aspiration des poussières avec filtration HEPA et nettoyage approfondi des surfaces traitées.",
  },
  {
    icone: "♻️",
    titre: "Gestion des déchets plombifères",
    description:
      "Collecte, conditionnement et évacuation des déchets contaminés vers les filières agréées. Traçabilité complète avec bordereau de suivi des déchets dangereux (BSDD).",
  },
  {
    icone: "📊",
    titre: "Contrôles de restitution",
    description:
      "Analyse des poussières au sol après intervention pour s'assurer que les seuils réglementaires sont respectés. Remise d'un rapport de fin de travaux conforme à la législation.",
  },
];

// Page Post-Incendie - Générée côté serveur
export default async function PostIncendiePage() {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === 4)!;

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "E2D - Fire Protection Preservation",
    description: pageData.description,
    url: `https://tsotra.com${pageData.url}`,
    image: pageData.ogImage,
    serviceType: [
      "Mesures de sauvegarde post-incendie",
      "Désamiantage",
      "Dépollution plomb",
    ],
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    provider: {
      "@type": "Organization",
      name: "E2D - Fire Protection Preservation",
      parentOrganization: {
        "@type": "Organization",
        name: "TSOTRA",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900/80 to-slate-900">
        <div className="container mx-auto px-4 py-16">

          {/* ============================================ */}
          {/* HERO SECTION */}
          {/* ============================================ */}
          <section className="mb-20">
            <div className="inline-block px-4 py-2 bg-yellow-600/20 rounded-full mb-4">
              <span className="text-yellow-400 font-montserrat-medium text-sm tracking-wider">
                E2D — Fire Protection Preservation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-montserrat-bold text-white mb-6 leading-tight">
              Après l&apos;incendie,<br />
              <span className="text-yellow-400">nous intervenons.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-montserrat-regular mb-6 max-w-4xl leading-relaxed">
              Un incendie ne s&apos;arrête pas quand les flammes s&apos;éteignent. Les structures sont fragilisées,
              les matériaux contaminés, l&apos;air pollué. E2D intervient immédiatement pour sécuriser le site,
              mettre en œuvre les mesures de sauvegarde et assurer la{" "}
              <strong className="text-white">dépollution complète vis-à-vis des risques amiante et plomb</strong>.
            </p>
            <p className="text-base text-gray-400 font-montserrat-regular mb-8 max-w-4xl leading-relaxed">
              De la sécurisation d&apos;urgence à la restitution d&apos;un site décontaminé, nous prenons en charge
              l&apos;intégralité de la chaîne d&apos;intervention post-sinistre conformément à la réglementation en vigueur.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#intervention"
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white font-montserrat-medium transition-colors"
              >
                Intervention post-incendie
              </Link>
              <Link
                href="#desamiantage"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-montserrat-medium transition-colors"
              >
                Désamiantage & dépollution
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border border-yellow-500/30 hover:border-yellow-500/60 rounded-lg text-yellow-400 font-montserrat-medium transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </section>

          {/* ============================================ */}
          {/* RÉALITÉS POST-INCENDIE */}
          {/* ============================================ */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                Les <span className="text-yellow-400">réalités</span> après un incendie
              </h2>
              <p className="text-gray-400 font-montserrat-regular max-w-3xl mx-auto">
                Un sinistre incendie laisse derrière lui un site dangereux, contaminé et instable.
                Comprendre ces réalités est essentiel pour agir vite et bien.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realitesPostIncendie.map((r) => (
                <div
                  key={r.titre}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-all"
                >
                  <div className="text-3xl mb-3">{r.icone}</div>
                  <h3 className="text-base font-montserrat-bold text-white mb-2">
                    {r.titre}
                  </h3>
                  <p className="text-gray-500 font-montserrat-regular text-sm leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 1 : INTERVENTION IMMÉDIATE */}
          {/* ============================================ */}
          <section id="intervention" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Colonne texte */}
              <div>
                <div className="inline-block px-3 py-1 bg-yellow-600/20 rounded-full mb-4">
                  <span className="text-yellow-400 font-montserrat-medium text-xs tracking-wider">
                    SECTION 1
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-6">
                  Intervention <span className="text-yellow-400">immédiate</span>
                </h2>
                <p className="text-gray-300 font-montserrat-regular leading-relaxed mb-6">
                  Dès la levée de doute par les services de secours, E2D intervient pour sécuriser le site
                  sinistré et mettre en place les mesures de sauvegarde indispensables. Chaque heure
                  compte pour limiter les dégâts secondaires et préserver les éléments nécessaires
                  à l&apos;expertise d&apos;assurance.
                </p>
                <p className="text-gray-400 font-montserrat-regular leading-relaxed mb-8">
                  Notre équipe assure la sécurisation du périmètre, l&apos;étaiement des structures
                  instables, le bâchage contre les intempéries et la coupure des réseaux dangereux.
                  Les mesures conservatoires préservent le site en l&apos;état pour les expertises
                  tout en protégeant les biens récupérables.
                </p>
              </div>

              {/* Colonne étapes */}
              <div className="space-y-4">
                {etapesIntervention.map((etape) => (
                  <div
                    key={etape.numero}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-yellow-500/30 transition-all"
                  >
                    <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-montserrat-bold text-sm">
                        {etape.numero}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-montserrat-bold text-white mb-1">
                        {etape.titre}
                      </h3>
                      <p className="text-gray-500 font-montserrat-regular text-xs leading-relaxed">
                        {etape.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 2 : DÉSAMIANTAGE & DÉPOLLUTION */}
          {/* ============================================ */}
          <section id="desamiantage" className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 bg-yellow-600/20 rounded-full mb-4">
                <span className="text-yellow-400 font-montserrat-medium text-xs tracking-wider">
                  SECTION 2
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                Désamiantage & <span className="text-yellow-400">Dépollution Plomb</span>
              </h2>
              <p className="text-gray-400 font-montserrat-regular max-w-3xl mx-auto">
                Un incendie libère des substances hautement toxiques piégées dans les matériaux
                de construction : fibres d&apos;amiante, particules de plomb, composés chimiques dangereux.
                E2D assure la dépollution complète conformément aux normes en vigueur.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Désamiantage */}
              <div>
                <div className="bg-gradient-to-br from-yellow-900/20 to-slate-900/50 border border-yellow-500/20 rounded-2xl p-8 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">☣️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat-bold text-white">
                        Désamiantage
                      </h3>
                      <p className="text-yellow-400 font-montserrat-medium text-xs tracking-wider">
                        Retrait de matériaux amiantés
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-montserrat-regular text-sm leading-relaxed mb-6">
                    L&apos;amiante, longtemps utilisée dans la construction pour ses propriétés isolantes et
                    ignifuges, devient extrêmement dangereuse lorsqu&apos;elle est libérée lors d&apos;un incendie.
                    Les fibres microscopiques se dispersent dans l&apos;air et contaminent l&apos;ensemble du bâtiment.
                    Leur inhalation provoque des pathologies graves et irréversibles.
                  </p>
                </div>

                <div className="space-y-4">
                  {servicesDesamiantage.map((s) => (
                    <div
                      key={s.titre}
                      className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-yellow-500/30 transition-all"
                    >
                      <div className="text-xl flex-shrink-0 mt-0.5">{s.icone}</div>
                      <div>
                        <h4 className="text-sm font-montserrat-bold text-white mb-1">
                          {s.titre}
                        </h4>
                        <p className="text-gray-500 font-montserrat-regular text-xs leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dépollution Plomb */}
              <div>
                <div className="bg-gradient-to-br from-yellow-900/20 to-slate-900/50 border border-yellow-500/20 rounded-2xl p-8 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🧪</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat-bold text-white">
                        Dépollution Plomb
                      </h3>
                      <p className="text-yellow-400 font-montserrat-medium text-xs tracking-wider">
                        Déplombage réglementaire
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-montserrat-regular text-sm leading-relaxed mb-6">
                    Le plomb présent dans les peintures et canalisations anciennes se disperse sous forme
                    de poussières et d&apos;écailles lors d&apos;un incendie. Ces particules contaminent les surfaces,
                    les sols et l&apos;air ambiant. Le saturnisme représente un risque sanitaire majeur,
                    notamment pour les enfants et les travailleurs intervenant sur le site.
                  </p>
                </div>

                <div className="space-y-4">
                  {servicesDeplombage.map((s) => (
                    <div
                      key={s.titre}
                      className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-yellow-500/30 transition-all"
                    >
                      <div className="text-xl flex-shrink-0 mt-0.5">{s.icone}</div>
                      <div>
                        <h4 className="text-sm font-montserrat-bold text-white mb-1">
                          {s.titre}
                        </h4>
                        <p className="text-gray-500 font-montserrat-regular text-xs leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* NOS GARANTIES */}
          {/* ============================================ */}
          <section className="mb-20 bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                Nos <span className="text-yellow-400">Garanties</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-base font-montserrat-bold text-white mb-2">Réactivité</h3>
                <p className="text-gray-400 font-montserrat-regular text-sm">
                  Intervention rapide dès la levée de doute par les services de secours. Disponibilité 24h/24.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-base font-montserrat-bold text-white mb-2">Conformité</h3>
                <p className="text-gray-400 font-montserrat-regular text-sm">
                  Toutes nos interventions respectent la réglementation en vigueur. Traçabilité complète des déchets dangereux.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">♻️</div>
                <h3 className="text-base font-montserrat-bold text-white mb-2">Environnement</h3>
                <p className="text-gray-400 font-montserrat-regular text-sm">
                  Tri sélectif, recyclage des matériaux récupérables et évacuation vers les filières de traitement agréées.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-base font-montserrat-bold text-white mb-2">Accompagnement</h3>
                <p className="text-gray-400 font-montserrat-regular text-sm">
                  Suivi complet du sinistre : coordination avec assureurs, experts et autorités jusqu&apos;à la restitution du site.
                </p>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* FORMULAIRE DE CONTACT */}
          {/* ============================================ */}
          <section id="contact" className="mb-20">
            <div className="bg-gradient-to-br from-yellow-900/20 to-slate-900/40 border border-yellow-500/20 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Colonne gauche : infos de contact */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                    Contactez <span className="text-yellow-400">E2D</span>
                  </h2>
                  <p className="text-gray-300 font-montserrat-regular mb-8 leading-relaxed">
                    Vous avez subi un sinistre incendie ? Vous avez besoin d&apos;une intervention
                    de sécurisation, de désamiantage ou de dépollution plomb ? Notre équipe
                    est disponible pour intervenir rapidement sur toute la France.
                  </p>

                  <div className="space-y-6">
                    {/* Urgence */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🚨</span>
                      </div>
                      <div>
                        <p className="text-white font-montserrat-medium text-sm">Urgence 24/7</p>
                        <a
                          href="tel:+33600000000"
                          className="text-red-400 hover:text-red-300 font-montserrat-bold text-sm"
                        >
                          +33 6 00 00 00 00
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <p className="text-white font-montserrat-medium text-sm">Email</p>
                        <a
                          href="mailto:contact@e2d-protection.com"
                          className="text-yellow-400 hover:text-yellow-300 font-montserrat-regular text-sm"
                        >
                          contact@e2d-protection.com
                        </a>
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <p className="text-white font-montserrat-medium text-sm">Téléphone</p>
                        <a
                          href="tel:+33600000000"
                          className="text-yellow-400 hover:text-yellow-300 font-montserrat-regular text-sm"
                        >
                          +33 6 00 00 00 00
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💬</span>
                      </div>
                      <div>
                        <p className="text-white font-montserrat-medium text-sm">WhatsApp</p>
                        <a
                          href="https://wa.me/33600000000"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 font-montserrat-regular text-sm"
                        >
                          Discuter sur WhatsApp ↗
                        </a>
                      </div>
                    </div>

                    {/* Zone d'intervention */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-gray-500 font-montserrat-medium text-xs uppercase tracking-wider mb-3">
                        Zone d&apos;intervention
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-yellow-600/10 border border-yellow-500/20 rounded-full text-yellow-400 text-xs font-montserrat-medium">
                          🇫🇷 France entière
                        </span>
                        <span className="px-3 py-1 bg-yellow-600/10 border border-yellow-500/20 rounded-full text-yellow-400 text-xs font-montserrat-medium">
                          ⏰ Disponible 24/7
                        </span>
                        <span className="px-3 py-1 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-xs font-montserrat-medium">
                          🚨 Urgence sinistre
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colonne droite : formulaire */}
                <div>
                  <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="prenom" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                          Prénom
                        </label>
                        <input
                          type="text"
                          id="prenom"
                          name="prenom"
                          placeholder="Votre prénom"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="nom" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          placeholder="Votre nom"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="votre@email.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="telephone" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        placeholder="+33 6 00 00 00 00"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="type-intervention" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                        Type d&apos;intervention souhaitée
                      </label>
                      <select
                        id="type-intervention"
                        name="type-intervention"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-montserrat-regular text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
                      >
                        <option value="" className="bg-slate-900">Sélectionnez une intervention</option>
                        <option value="securisation" className="bg-slate-900">Sécurisation de site sinistré</option>
                        <option value="sauvegarde" className="bg-slate-900">Mesures de sauvegarde</option>
                        <option value="conservatoire" className="bg-slate-900">Mesures conservatoires</option>
                        <option value="desamiantage" className="bg-slate-900">Désamiantage</option>
                        <option value="deplombage" className="bg-slate-900">Dépollution plomb</option>
                        <option value="curage" className="bg-slate-900">Curage et évacuation</option>
                        <option value="complet" className="bg-slate-900">Intervention complète</option>
                        <option value="autre" className="bg-slate-900">Autre demande</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="urgence" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                        Niveau d&apos;urgence
                      </label>
                      <select
                        id="urgence"
                        name="urgence"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-montserrat-regular text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
                      >
                        <option value="" className="bg-slate-900">Sélectionnez</option>
                        <option value="immediat" className="bg-slate-900">🚨 Immédiat – sinistre en cours</option>
                        <option value="urgent" className="bg-slate-900">⚡ Urgent – dans les 48h</option>
                        <option value="planifie" className="bg-slate-900">📅 Planifié – à programmer</option>
                        <option value="devis" className="bg-slate-900">📋 Demande de devis</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                        Description de la situation
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Décrivez le sinistre, l'état du site, les risques identifiés..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-yellow-500/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white font-montserrat-bold transition-colors"
                    >
                      Envoyer ma demande d&apos;intervention
                    </button>

                    <p className="text-gray-500 font-montserrat-regular text-xs text-center">
                      Urgences : réponse immédiate. Demandes planifiées : sous 24h.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* CTA FINAL */}
          {/* ============================================ */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-yellow-600/90 to-orange-600/90 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                Sinistre incendie ?<br />Nous intervenons immédiatement.
              </h2>
              <p className="text-white/90 font-montserrat-regular mb-8 max-w-2xl mx-auto">
                Sécurisation, mesures de sauvegarde, désamiantage, dépollution plomb —
                E2D prend en charge l&apos;intégralité de votre sinistre post-incendie.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+33600000000"
                  className="px-8 py-4 bg-white hover:bg-gray-100 rounded-lg text-yellow-700 font-montserrat-bold transition-colors"
                >
                  📞 Appeler maintenant
                </a>
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-900 hover:bg-green-800 rounded-lg text-white font-montserrat-bold transition-colors"
                >
                  💬 WhatsApp
                </a>
                <Link
                  href="#contact"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-montserrat-bold transition-colors"
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
