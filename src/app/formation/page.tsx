import { getPages, generateMetadata as generatePageMetadata } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// Métadonnées SEO
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(1);
}

// --- Données statiques pour la page Formation ---

interface Partenaire {
  nom: string;
  description: string;
  url: string;
  pays: string;
}

interface Certification {
  sigle: string;
  nomComplet: string;
  organisme: string;
  description: string;
  url: string;
}

interface Avantage {
  icone: string;
  titre: string;
  description: string;
}

const partenaires: Partenaire[] = [
  {
    nom: "NAFI",
    description:
      "National Association of Fire Investigators – Organisation américaine de référence pour la certification des enquêteurs incendie (CFEI).",
    url: "https://www.nafi.org/",
    pays: "🇺🇸 USA",
  },
  {
    nom: "IAAI",
    description:
      "International Association of Arson Investigators – Association internationale dédiée à la lutte contre les incendies criminels et à la formation des enquêteurs (CFI).",
    url: "https://www.firearson.com/",
    pays: "🇺🇸 USA",
  },
  {
    nom: "Groupe Arson",
    description:
      "Partenaire canadien spécialisé dans la formation CFEI NAFI. Centre de référence francophone pour la certification des enquêteurs incendie.",
    url: "https://groupearson.ca/",
    pays: "🇨🇦 Canada",
  },
];

const certifications: Certification[] = [
  {
    sigle: "CFEI",
    nomComplet: "Certified Fire and Explosion Investigator",
    organisme: "NAFI",
    description:
      "Programme de certification du National Association of Fire Investigator. 2F accompagne chaque candidat dans la préparation et la validation de cette certification reconnue internationalement.",
    url: "https://www.nafi.org/",
  },
  {
    sigle: "CFI",
    nomComplet: "Certified Fire Investigator",
    organisme: "IAAI",
    description:
      "2F intervient en qualité de Proctor-Évaluateur pour valider vos JPR (Job Performance Requirements) conformément au référentiel NFPA 1033.",
    url: "https://www.firearson.com/",
  },
];

const avantages: Avantage[] = [
  {
    icone: "🌍",
    titre: "Reconnaissance Internationale",
    description:
      "Seule entreprise française reconnue au titre d'instructeur auprès de la NAFI et de l'IAAI USA. Vos certifications sont valables dans le monde entier.",
  },
  {
    icone: "🎓",
    titre: "Expertise Terrain depuis +15 ans",
    description:
      "Des années de formation terrain, de coaching et de seconde analyse de dossiers. Un savoir-faire forgé par l'expérience concrète de centaines d'investigations.",
  },
  {
    icone: "🔬",
    titre: "Approche Scientifique",
    description:
      "Séminaires et congrès en sciences forensiques liant approche criminalistique et psycho-criminologique pour investiguer une scène d'incendie de manière construite.",
  },
  {
    icone: "📋",
    titre: "Proctor-Évaluateur IAAI",
    description:
      "Accompagnement dans le cadre de vos préparations au titre CFI – IAAI en qualité de Proctor-Évaluateur pour valider vos JPR conformément au NFPA 1033.",
  },
  {
    icone: "🤝",
    titre: "Réseau International",
    description:
      "Coopération avérée avec des institutions prestigieuses à l'international : NAFI (USA), IAAI (USA), Groupe Arson (Canada).",
  },
  {
    icone: "📜",
    titre: "Accompagnement Certification",
    description:
      "2F vous accompagne de la formation initiale jusqu'à l'obtention effective de votre certification, avec suivi personnalisé et révision de dossiers.",
  },
];

const formations = [
  {
    titre: "Certification CFEI – NAFI",
    description:
      "Programme complet de préparation à la certification Certified Fire and Explosion Investigator délivrée par le National Association of Fire Investigators.",
    duree: "Formation modulaire",
    badge: "CFEI",
    lien: "https://groupearson.ca/",
  },
  {
    titre: "Préparation CFI – IAAI",
    description:
      "Accompagnement et évaluation en qualité de Proctor pour valider vos Job Performance Requirements conformément au référentiel NFPA 1033.",
    duree: "Évaluation continue",
    badge: "CFI",
    lien: "https://www.firearson.com/",
  },
  {
    titre: "Formation Terrain & Coaching",
    description:
      "Formation pratique sur le terrain avec coaching individuel. Analyse de scènes d'incendie réelles, méthodologie d'investigation et rédaction de rapports.",
    duree: "Sessions régulières",
    badge: "TERRAIN",
    lien: "#contact",
  },
  {
    titre: "Révision & Analyse de Dossiers",
    description:
      "Seconde lecture et analyse critique de vos dossiers d'investigation. Revue méthodologique et recommandations pour renforcer vos conclusions.",
    duree: "Sur demande",
    badge: "ANALYSE",
    lien: "#contact",
  },
  {
    titre: "Séminaires Sciences Forensiques",
    description:
      "Séminaires et congrès en France et à l'international, spécialisés en enquête forensique avec une approche criminalistique et psycho-criminologique.",
    duree: "Événements annuels",
    badge: "SÉMINAIRE",
    lien: "#contact",
  },
  {
    titre: "Congrès Internationaux",
    description:
      "Organisation de congrès permettant à tout enquêteur d'investiguer une scène d'incendie de manière construite, avec pour objectif la découverte de la vérité post-incendie.",
    duree: "International",
    badge: "CONGRÈS",
    lien: "#contact",
  },
];

// Page Formation - Générée côté serveur
export default async function FormationPage() {
  const pages = await getPages();
  const pageData = pages.find((p) => p.id === 1)!;

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "2F - Fire Forensic | Formation RCCI",
    description: pageData.description,
    url: `https://tsotra.com${pageData.url}`,
    image: pageData.ogImage,
    offers: {
      "@type": "AggregateOffer",
      offerCount: formations.length,
      offers: formations.map((f) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: f.titre,
          description: f.description,
          provider: {
            "@type": "Organization",
            name: "2F - Fire Forensic",
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

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900"
      style={
        {
          ['--tw-gradient-via' as any]: '#480000',
          ['--tw-gradient-via-stops' as any]:
            'var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)',
          ['--tw-gradient-stops' as any]: 'var(--tw-gradient-via-stops)',
        } as React.CSSProperties
      }
      >
        <div className="container mx-auto px-4 py-16">

          {/* ============================================ */}
          {/* HERO SECTION */}
          {/* ============================================ */}
          <section className="mb-20">
            <div className="inline-block px-4 py-2 bg-red-600/20 rounded-full mb-4">
              <span className="text-red-400 font-montserrat-medium text-sm tracking-wider">
                2F — Fire Forensic
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-montserrat-bold text-white mb-6 leading-tight">
              Nous Formons les Experts<br />
              <span className="text-tsotra-red">de Demain</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-montserrat-regular mb-6 max-w-4xl leading-relaxed">
              Notre expertise va bien au-delà de l&apos;enquête incendie (Origine et cause).
              Nous sommes également reconnue à titre d&apos;entreprise de formation, offrant
              depuis plusieurs années de la formation terrain, du coaching ainsi que
              révision et seconde analyse de dossiers.
            </p>
            <p className="text-base text-gray-400 font-montserrat-regular mb-8 max-w-4xl leading-relaxed">
              Nous sommes <strong className="text-white">la seule entreprise française reconnue au titre
              d&apos;instructeur</strong> auprès d&apos;entités prestigieuses comme la{" "}
              <a href="https://www.nafi.org/" target="_blank" rel="noopener noreferrer" className="text-tsotra-red hover:underline font-montserrat-medium">NAFI</a>
              {" "}et l&apos;
              <a href="https://www.firearson.com/" target="_blank" rel="noopener noreferrer" className="text-tsotra-red hover:underline font-montserrat-medium">IAAI USA</a>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#formations"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-montserrat-medium transition-colors"
              >
                Découvrir nos formations
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-montserrat-medium transition-colors"
              >
                Nous contacter
              </Link>
              <a
                href="https://www.nafi.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-red-500/30 hover:border-red-500/60 rounded-lg text-red-400 font-montserrat-medium transition-colors"
              >
                NAFI.org ↗
              </a>
              <a
                href="https://www.firearson.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-red-500/30 hover:border-red-500/60 rounded-lg text-red-400 font-montserrat-medium transition-colors"
              >
                FireArson.com ↗
              </a>
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 1 : COOPÉRATION INTERNATIONALE */}
          {/* ============================================ */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                Coopération <span className="text-tsotra-red">Internationale</span>
              </h2>
              <p className="text-gray-400 font-montserrat-regular max-w-3xl mx-auto">
                Une collaboration avérée avec des institutions prestigieuses à l&apos;international dans le cadre de la formation et de la certification des enquêteurs incendie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partenaires.map((p) => (
                <a
                  key={p.nom}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-red-500/50 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-montserrat-bold text-white group-hover:text-tsotra-red transition-colors">
                      {p.nom}
                    </h3>
                    <span className="text-sm text-gray-500 font-montserrat-medium">
                      {p.pays}
                    </span>
                  </div>
                  <p className="text-gray-300 font-montserrat-regular text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <span className="text-red-400 group-hover:text-red-300 font-montserrat-medium text-sm">
                    Visiter le site ↗
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* ============================================ */}
          {/* SECTION 2 : CERTIFICATIONS */}
          {/* ============================================ */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                Accompagnement vers la <span className="text-tsotra-red">Certification</span>
              </h2>
              <p className="text-gray-400 font-montserrat-regular max-w-3xl mx-auto">
                2F vous accompagne dans l&apos;obtention de vos certifications internationales, de la formation initiale jusqu&apos;à la validation finale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((c) => (
                <div
                  key={c.sigle}
                  className="bg-gradient-to-br from-red-900/30 to-slate-900/50 border border-red-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-montserrat-bold text-tsotra-red">
                        {c.sigle}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat-bold text-white">
                        {c.nomComplet}
                      </h3>
                      <p className="text-red-400 font-montserrat-medium text-sm">
                        Organisme : {c.organisme}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-montserrat-regular leading-relaxed mb-4">
                    {c.description}
                  </p>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 font-montserrat-medium text-sm"
                  >
                    En savoir plus ↗
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================ */}
          {/* NOS FORMATIONS */}
          {/* ============================================ */}
          <section id="formations" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                Nos <span className="text-tsotra-red">Formations</span>
              </h2>
              <p className="text-gray-400 font-montserrat-regular max-w-3xl mx-auto">
                Entreprise de formation reconnue, FIRE FORENSIC offre des formations spécialisées, du coaching et un accompagnement complet vers la certification.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formations.map((f, index) => (
                <article
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-red-600/20 rounded-full text-red-400 font-montserrat-medium text-xs tracking-wider">
                      {f.badge}
                    </span>
                    <span className="text-gray-500 font-montserrat-regular text-xs">
                      {f.duree}
                    </span>
                  </div>
                  <h3 className="text-lg font-montserrat-bold text-white mb-3 group-hover:text-tsotra-red transition-colors">
                    {f.titre}
                  </h3>
                  <p className="text-gray-400 font-montserrat-regular text-sm leading-relaxed mb-4">
                    {f.description}
                  </p>
                  <a
                    href={f.lien}
                    target={f.lien.startsWith("http") ? "_blank" : undefined}
                    rel={f.lien.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-red-400 hover:text-red-300 font-montserrat-medium text-sm"
                  >
                    {f.lien.startsWith("http") ? "Voir le programme ↗" : "Nous contacter →"}
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* ============================================ */}
          {/* POURQUOI CHOISIR FIRE FORENSIC ? */}
          {/* ============================================ */}
          <section className="mb-20 bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                Pourquoi choisir <span className="text-tsotra-red">Fire Forensic</span> ?
              </h2>
              <p className="text-gray-400 font-montserrat-regular max-w-3xl mx-auto">
                Une expérience forgée au fil des années dans le domaine de la Recherche des Causes et Circonstances d&apos;Incendie (RCCI), reconnue par les plus grandes institutions internationales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {avantages.map((a, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-4xl mb-4">{a.icone}</div>
                  <h3 className="text-lg font-montserrat-bold text-white mb-2">
                    {a.titre}
                  </h3>
                  <p className="text-gray-400 font-montserrat-regular text-sm leading-relaxed">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================ */}
          {/* FORMULAIRE DE CONTACT */}
          {/* ============================================ */}
          <section id="contact" className="mb-20">
            <div className="bg-gradient-to-br from-red-900/20 to-slate-900/40 border border-red-500/20 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Colonne gauche : infos de contact */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white mb-4">
                    Contactez <span className="text-tsotra-red">Fire Forensic</span>
                  </h2>
                  <p className="text-gray-300 font-montserrat-regular mb-8 leading-relaxed">
                    Vous souhaitez en savoir plus sur nos formations, préparer une certification
                    ou organiser un séminaire ? Contactez-nous via le formulaire ou directement
                    par nos canaux de communication.
                  </p>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <p className="text-white font-montserrat-medium text-sm">Email</p>
                        <a
                          href="mailto:contact@fire-forensic.com"
                          className="text-red-400 hover:text-red-300 font-montserrat-regular text-sm"
                        >
                          contact@fire-forensic.com
                        </a>
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <p className="text-white font-montserrat-medium text-sm">Téléphone</p>
                        <a
                          href="tel:+33600000000"
                          className="text-red-400 hover:text-red-300 font-montserrat-regular text-sm"
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

                    {/* Liens formations */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-gray-500 font-montserrat-medium text-xs uppercase tracking-wider mb-3">
                        Liens formations partenaires
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <a href="https://groupearson.ca/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-xs font-montserrat-medium hover:bg-red-600/20 transition-colors">
                          CFEI NAFI → Groupe Arson ↗
                        </a>
                        <a href="https://www.firearson.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-xs font-montserrat-medium hover:bg-red-600/20 transition-colors">
                          CFI – FIT → IAAI.COM ↗
                        </a>
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
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-red-500/50 transition-colors"
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
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-red-500/50 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-red-500/50 transition-colors"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="sujet" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                        Sujet
                      </label>
                      <select
                        id="sujet"
                        name="sujet"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-montserrat-regular text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                      >
                        <option value="" className="bg-slate-900">Sélectionnez un sujet</option>
                        <option value="cfei" className="bg-slate-900">Formation CFEI – NAFI</option>
                        <option value="cfi" className="bg-slate-900">Préparation CFI – IAAI</option>
                        <option value="terrain" className="bg-slate-900">Formation terrain & coaching</option>
                        <option value="seminaire" className="bg-slate-900">Séminaires & congrès</option>
                        <option value="revision" className="bg-slate-900">Révision de dossiers</option>
                        <option value="autre" className="bg-slate-900">Autre demande</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-montserrat-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Décrivez votre projet ou posez vos questions..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 font-montserrat-regular text-sm focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 rounded-lg text-white font-montserrat-bold transition-colors"
                    >
                      Envoyer ma demande
                    </button>

                    <p className="text-gray-500 font-montserrat-regular text-xs text-center">
                      Nous vous répondrons dans les 48 heures ouvrées.
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
              Prêt à devenir un expert <span className="text-tsotra-red">certifié</span> ?
            </h2>
            <p className="text-gray-300 font-montserrat-regular mb-8 max-w-2xl mx-auto">
              Rejoignez la seule formation française reconnue par la NAFI et l&apos;IAAI.
              Obtenez vos certifications CFEI et CFI avec l&apos;accompagnement de Fire Forensic.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 bg-blue-900 hover:bg-blue-800 rounded-lg text-white font-montserrat-bold transition-colors"
              >
                Commencer ma formation
              </Link>
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-800 hover:bg-green-700 rounded-lg text-white font-montserrat-bold transition-colors"
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
