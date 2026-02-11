import { getPages, generateMetadata as generatePageMetadata } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

// Métadonnées SEO
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(2);
}

// --- Données statiques pour la page Nautique ---

interface ExpertisePoint {
  icone: string;
  titre: string;
  description: string;
}

const expertisePoints: ExpertisePoint[] = [
  {
    icone: "🔥",
    titre: "Destruction des Matériaux Composites",
    description:
      "La particularité des incendies de bateaux est la destruction totale des matériaux composites, rendant l'analyse des traces et indices particulièrement complexe.",
  },
  {
    icone: "💧",
    titre: "Dégâts des Eaux d'Extinction",
    description:
      "Les dégâts occasionnés par les eaux d'extinction ajoutent une couche de complexité à l'investigation, altérant les preuves et indices sur la scène du sinistre.",
  },
  {
    icone: "⚠️",
    titre: "Instabilité des Structures",
    description:
      "L'instabilité des structures nécessite une attention particulière car les navires brûlés peuvent rapidement sombrer, emportant avec eux les traces et indices au fond de l'eau.",
  },
  {
    icone: "🧭",
    titre: "Construction Navale & Mécanique",
    description:
      "L'investigateur doit posséder des connaissances suffisantes en construction navale, mécanique, électricité et réglementation maritime pour mener une expertise rigoureuse.",
  },
];

const investigationPoints: ExpertisePoint[] = [
  {
    icone: "⚡",
    titre: "Cinétique d'Incendie Rapide",
    description:
      "La cinétique d'un incendie dans un navire est beaucoup plus rapide compte tenu des faibles volumes et de la nature des éléments de construction. Les volumes sont rapidement saturés en fumées.",
  },
  {
    icone: "💥",
    titre: "Accidents Thermiques",
    description:
      "Les incendies maritimes peuvent générer des accidents thermiques tels que les explosions de fumée ou les embrasements généralisés éclair, favorisant une destruction rapide des structures.",
  },
  {
    icone: "🌊",
    titre: "Submersion Post-Incendie",
    description:
      "Bien souvent un bateau coule après un incendie et il est très difficile de préserver les traces et les indices qui restent au fond de l'eau. Cela impose une rigueur technique exceptionnelle.",
  },
  {
    icone: "🌬️",
    titre: "Facteur Vent & Propagation",
    description:
      "Le vent joue un rôle important dans la propagation du feu et rend encore plus complexe la lecture des traces laissées par le feu sur les structures maritimes.",
  },
  {
    icone: "🔬",
    titre: "Compétence Scientifique Pointue",
    description:
      "L'investigation des incendies de navires est une phase complexe qui nécessite une compétence technique et scientifique pointue dans la lecture des effets du feu, la cinétique et les transferts thermiques.",
  },
  {
    icone: "⚖️",
    titre: "Démarche Scientifique Cohérente",
    description:
      "La cause et les responsabilités ne pourront être découvertes qu'à l'issue d'une démarche scientifique cohérente. Notre expérience nous permet de vous apporter des réponses à vos questions.",
  },
];

const typesNavires = [
  { nom: "Navires de Plaisance", icone: "⛵", description: "Voiliers, yachts, bateaux à moteur de loisir" },
  { nom: "Navires de Pêche", icone: "🎣", description: "Chalutiers, fileyeurs, caseyeurs" },
  { nom: "Marine Marchande", icone: "🚢", description: "Cargos, porte-conteneurs, tankers" },
  { nom: "Bateaux Fluviaux", icone: "🛥️", description: "Péniches, bateaux de croisière fluviale" },
];

// Page Nautique - Générée côté serveur
export default async function NautiquePage() {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === 2)!;

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "N2F - Nautical Fire Forensic",
    description: pageData.description,
    url: `https://tsotra.com${pageData.url}`,
    image: pageData.ogImage,
    serviceType: "Investigation Post-Incendie Nautique",
    areaServed: {
      "@type": "Place",
      name: "France et International",
    },
    provider: {
      "@type": "Organization",
      name: "N2F - Nautical Fire Forensic",
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

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">

          {/* ============================================ */}
          {/* HERO SECTION */}
          {/* ============================================ */}
          <section className="mb-20">
            <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-4">
              <span className="text-blue-400 font-montserrat-medium text-sm tracking-wider">
                N2F — Nautical Fire Forensic
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-montserrat-bold text-white mb-6 leading-tight">
              Investigation Post-Incendie<br />
              <span className="text-blue-400">Nautique</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-montserrat-regular mb-6 max-w-4xl leading-relaxed">
              Les incendies de navires de plaisance, de pêche ou de la marine marchande sont beaucoup moins fréquents
              que les incendies de bâtiments ou de véhicules. Les dommages issus de ces sinistres sont généralement plus
              importants et plus coûteux, les investigations sont par conséquent très complexes et nécessitent
              des <strong className="text-white">compétences particulières dans le domaine maritime</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#expertise"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-montserrat-medium transition-colors"
              >
                Notre expertise
              </Link>
              <Link
                href="#investigation"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-montserrat-medium transition-colors"
              >
                Investigation
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border border-blue-500/30 hover:border-blue-500/60 rounded-lg text-blue-400 font-montserrat-medium transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </section>

          {/* ============================================ */}
          {/* TYPES DE NAVIRES */}
          {/* ============================================ */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {typesNavires.map((navire) => (
                <div
                  key={navire.nom}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:border-blue-500/30 transition-all"
                >
                  <div className="text-3xl mb-3">{navire.icone}</div>
                  <h3 className="text-sm font-montserrat-bold text-white mb-1">
                    {navire.nom}
                  </h3>
                  <p className="text-gray-500 font-montserrat-regular text-xs">
                    {navire.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 1 : EXPERTISE */}
          {/* ============================================ */}
          <section id="expertise" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Colonne texte */}
              <div>
                <div className="inline-block px-3 py-1 bg-blue-600/20 rounded-full mb-4">
                  <span className="text-blue-400 font-montserrat-medium text-xs tracking-wider">
                    SECTION 1
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-6">
                  Notre <span className="text-blue-400">Expertise</span>
                </h2>
                <p className="text-gray-300 font-montserrat-regular leading-relaxed mb-6">
                  La particularité des incendies de bateaux est la destruction totale des matériaux composites
                  et les dégâts occasionnés par les eaux d&apos;extinction. À cela s&apos;ajoute l&apos;instabilité
                  des structures qui nécessite une attention particulière car les navires brûlés peuvent
                  rapidement sombrer.
                </p>
                <p className="text-gray-400 font-montserrat-regular leading-relaxed mb-8">
                  Il est nécessaire que l&apos;investigateur ait les connaissances suffisantes dans la
                  compréhension de la <strong className="text-white">construction navale</strong>, la{" "}
                  <strong className="text-white">mécanique</strong>, l&apos;
                  <strong className="text-white">électricité</strong> et bien entendu la{" "}
                  <strong className="text-white">réglementation</strong> en vigueur.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {expertisePoints.map((point) => (
                    <div
                      key={point.titre}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/30 transition-all"
                    >
                      <div className="text-2xl mb-2">{point.icone}</div>
                      <h3 className="text-sm font-montserrat-bold text-white mb-1">
                        {point.titre}
                      </h3>
                      <p className="text-gray-500 font-montserrat-regular text-xs leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colonne image / vidéo */}
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-slate-800">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/images/nautique-hero.jpg"
                  >
                    <source src="/videos/4109280-hd_1920_1080_30fps.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-white text-xs font-montserrat-medium">
                      Investigation maritime
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/50 border border-blue-500/20 rounded-2xl p-6">
                  <h3 className="text-lg font-montserrat-bold text-white mb-3">
                    ⚓ Pourquoi une expertise spécialisée ?
                  </h3>
                  <p className="text-gray-400 font-montserrat-regular text-sm leading-relaxed">
                    Les dommages issus de sinistres maritimes sont généralement plus importants
                    et plus coûteux que ceux des incendies terrestres. L&apos;investigation nécessite
                    des compétences transversales rarement réunies : construction navale, sciences
                    du feu, réglementation maritime et méthodologie forensique.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 2 : INVESTIGATION */}
          {/* ============================================ */}
          <section id="investigation" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Colonne image / vidéo (à gauche cette fois) */}
              <div className="space-y-6 order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-slate-800">
                  {/* Placeholder image – remplacer par une vraie image/vidéo d'investigation */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-slate-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🔍</div>
                      <p className="text-gray-400 font-montserrat-medium text-sm">
                        Investigation en cours
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-white text-xs font-montserrat-medium">
                      Analyse de sinistre
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/50 border border-blue-500/20 rounded-2xl p-6">
                  <h3 className="text-lg font-montserrat-bold text-white mb-3">
                    🔬 Démarche Scientifique
                  </h3>
                  <p className="text-gray-400 font-montserrat-regular text-sm leading-relaxed">
                    La cause et les responsabilités ne pourront être découvertes qu&apos;à l&apos;issue
                    d&apos;une <strong className="text-white">démarche scientifique cohérente</strong>.
                    Notre expérience nous permet de vous apporter des réponses à vos questions,
                    que ce soit pour les assureurs, les autorités ou les parties impliquées.
                  </p>
                </div>
              </div>

              {/* Colonne texte */}
              <div className="order-1 md:order-2">
                <div className="inline-block px-3 py-1 bg-blue-600/20 rounded-full mb-4">
                  <span className="text-blue-400 font-montserrat-medium text-xs tracking-wider">
                    SECTION 2
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-6">
                  <span className="text-blue-400">Investigation</span> Navale
                </h2>
                <p className="text-gray-300 font-montserrat-regular leading-relaxed mb-6">
                  La cinétique d&apos;un incendie qui se développe dans un navire est beaucoup plus rapide
                  compte tenu des faibles volumes et de la nature des éléments de construction. Ces volumes
                  sont rapidement saturés en fumées, ce qui peut contribuer à générer des accidents thermiques
                  tels que les explosions de fumée ou les embrasements généralisés éclair.
                </p>
                <p className="text-gray-400 font-montserrat-regular leading-relaxed mb-6">
                  L&apos;effondrement de ces structures nécessite la mise en œuvre de moyens techniques importants
                  pour réussir à découvrir les zones dans lesquelles le feu a pris naissance.
                  L&apos;investigation des incendies de navires est une phase complexe qui nécessite une
                  compétence technique et scientifique pointue dans la lecture des effets du feu,
                  la cinétique et les transferts thermiques qui en découlent.
                </p>
                <p className="text-gray-400 font-montserrat-regular leading-relaxed mb-8">
                  Une recherche de cause d&apos;incendie de navire impose une rigueur technique aussi bien
                  dans la collecte des témoignages que dans l&apos;expertise elle-même.
                </p>

                <div className="space-y-4">
                  {investigationPoints.map((point) => (
                    <div
                      key={point.titre}
                      className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/30 transition-all"
                    >
                      <div className="text-2xl flex-shrink-0 mt-0.5">{point.icone}</div>
                      <div>
                        <h3 className="text-sm font-montserrat-bold text-white mb-1">
                          {point.titre}
                        </h3>
                        <p className="text-gray-500 font-montserrat-regular text-xs leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* FORMULAIRE DE CONTACT */}
          {/* ============================================ */}
          <section id="contact" className="mb-20">
            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/40 border border-blue-500/20 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Colonne gauche : infos de contact */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                    Contactez <span className="text-blue-400">N2F</span>
                  </h2>
                  <p className="text-gray-300 font-montserrat-regular mb-8 leading-relaxed">
                    Vous avez besoin d&apos;une expertise post-incendie sur un navire ? Vous souhaitez
                    un rapport d&apos;investigation maritime ? Contactez notre équipe spécialisée
                    via le formulaire ou directement par nos canaux de communication.
                  </p>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <p className="text-white font-montserrat-medium text-sm">Email</p>
                        <a
                          href="mailto:contact@nautical-fire-forensic.com"
                          className="text-blue-400 hover:text-blue-300 font-montserrat-regular text-sm"
                        >
                          contact@nautical-fire-forensic.com
                        </a>
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <p className="text-white font-montserrat-medium text-sm">Téléphone</p>
                        <a
                          href="tel:+33600000000"
                          className="text-blue-400 hover:text-blue-300 font-montserrat-regular text-sm"
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

                    {/* Domaines d'intervention */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-gray-500 font-montserrat-medium text-xs uppercase tracking-wider mb-3">
                        Domaines d&apos;intervention
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {typesNavires.map((n) => (
                          <span
                            key={n.nom}
                            className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-montserrat-medium"
                          >
                            {n.icone} {n.nom}
                          </span>
                        ))}
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
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
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
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="type-navire" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                        Type de navire concerné
                      </label>
                      <select
                        id="type-navire"
                        name="type-navire"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-montserrat-regular text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      >
                        <option value="" className="bg-slate-900">Sélectionnez un type</option>
                        <option value="plaisance" className="bg-slate-900">Navire de plaisance</option>
                        <option value="peche" className="bg-slate-900">Navire de pêche</option>
                        <option value="marchande" className="bg-slate-900">Marine marchande</option>
                        <option value="fluvial" className="bg-slate-900">Bateau fluvial</option>
                        <option value="autre" className="bg-slate-900">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="sujet" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                        Nature de la demande
                      </label>
                      <select
                        id="sujet"
                        name="sujet"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-montserrat-regular text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      >
                        <option value="" className="bg-slate-900">Sélectionnez une demande</option>
                        <option value="expertise" className="bg-slate-900">Demande d&apos;expertise post-incendie</option>
                        <option value="investigation" className="bg-slate-900">Investigation de sinistre</option>
                        <option value="rapport" className="bg-slate-900">Rapport d&apos;expertise</option>
                        <option value="assurance" className="bg-slate-900">Expertise pour assurance</option>
                        <option value="autre" className="bg-slate-900">Autre demande</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                        Description du sinistre
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Décrivez le sinistre, le type de navire, les circonstances..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-montserrat-bold transition-colors"
                    >
                      Envoyer ma demande d&apos;expertise
                    </button>

                    <p className="text-gray-500 font-montserrat-regular text-xs text-center">
                      Intervention rapide – Nous vous répondrons dans les 24 heures.
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
            <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
              Besoin d&apos;une expertise <span className="text-blue-400">maritime</span> ?
            </h2>
            <p className="text-gray-300 font-montserrat-regular mb-8 max-w-2xl mx-auto">
              N2F – Nautical Fire Forensic met à votre disposition son expertise unique
              en investigation post-incendie nautique. Une démarche scientifique cohérente
              pour découvrir la vérité.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 bg-blue-900 hover:bg-blue-800 rounded-lg text-white font-montserrat-bold transition-colors"
              >
                Demander une expertise
              </Link>
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-900 hover:bg-green-800 rounded-lg text-white font-montserrat-bold transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
