'use client';

import Image from 'next/image';
import Link from 'next/link';
import ExpertiseRCCI from './expertiseRCCI';

/* =====================================================
   Page d'accueil  / FIRE
   - Hero avec tétraèdre de feu
   - Présentation des deux entreprises (Fire Consulting + Fire Forensic)
   - Services principaux
   - Expertise judiciaire incendie
   - Expertise d'assurance amiable
   - Clients cibles (Magistrats, Inspecteurs, Experts, Industriels)
   ===================================================== */

export default function AccueilContent() {
  return (
    <div className="min-h-screen">

      {/* ============ DEUX ENTREPRISES ============ */}
      <section className="py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white text-center mb-4">
            Nos <span className="text-tsotra-orange">Entreprises</span>
          </h2>
          <p className="text-gray-400 text-center font-montserrat-regular mb-16 max-w-2xl mx-auto">
            Deux structures complémentaires au service de la prévention et l&apos;expertise incendie
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fire Consulting */}
            <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 rounded-2xl p-8 hover:border-tsotra-orange/50 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/LOGO FIRE-02.png"
                  alt="FABIEN FERNANDES - Fire Consulting"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-montserrat-bold text-white">
                    FABIEN FERNANDES
                  </h3>
                  <p className="text-tsotra-orange font-montserrat-medium text-sm tracking-widest uppercase">
                    Fire Consulting
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 font-montserrat-regular mb-6 leading-relaxed">
                Création et intégration de solutions en expertise incendie et nautique. 
                Accompagnement des entreprises dans la prévention des risques et la formation professionnelle.
              </p>

              <ul className="space-y-3">
                {[
                  'Création et intégration logo',
                  'Expertise incendie',
                  'Formation nautique',
                  'Prévention des risques',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400 font-montserrat-regular">
                    <span className="w-2 h-2 bg-tsotra-orange rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/formation"
                className="inline-flex items-center gap-2 mt-6 text-tsotra-orange font-montserrat-medium hover:underline"
              >
                Découvrir →
              </Link>
            </div>

            {/* Fire Forensic */}
            <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 rounded-2xl p-8 hover:border-tsotra-red/50 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/LOGO FIRE-04.png"
                  alt="FABIEN FERNANDES - Fire Forensic"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-montserrat-bold text-white">
                    FABIEN FERNANDES
                  </h3>
                  <p className="text-tsotra-red font-montserrat-medium text-sm tracking-widest uppercase">
                    Fire Forensic
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 font-montserrat-regular mb-6 leading-relaxed">
                Création et intégration de solutions en investigation post-incendie. 
                Expertise en désamiantage, plomb, mesure de sauvegarde et mesure conservatoire.
              </p>

              <ul className="space-y-3">
                {[
                  'Logo désamiantage & plomb',
                  'Mesure de sauvegarde',
                  'Mesure conservatoire',
                  'Investigation post-incendie',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400 font-montserrat-regular">
                    <span className="w-2 h-2 bg-tsotra-red rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/post-incendie"
                className="inline-flex items-center gap-2 mt-6 text-tsotra-red font-montserrat-medium hover:underline"
              >
                Découvrir →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ExpertiseRCCI />

      {/* ============ CLIENTS CIBLES ============ */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white text-center mb-16">
            À qui s&apos;adressent <span className="text-tsotra-orange">nos services</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: '⚖️', title: 'Magistrats', subtitle: 'OPJ' },
              { icon: '🔍', title: 'Inspecteurs', subtitle: "Gestionnaires d'assurance" },
              { icon: '📋', title: 'Experts', subtitle: "d'assurance" },
              { icon: '👨‍⚖️', title: 'Experts de', subtitle: 'Justice' },
              { icon: '🏭', title: 'Industriels', subtitle: '' },
            ].map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-tsotra-orange/20 flex items-center justify-center text-3xl mb-4 group-hover:bg-tsotra-orange/40 transition-all duration-300 group-hover:scale-110">
                  {client.icon}
                </div>
                <h3 className="text-white font-montserrat-bold text-sm">
                  {client.title}
                </h3>
                {client.subtitle && (
                  <p className="text-gray-500 font-montserrat-regular text-xs mt-1">
                    {client.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE JUDICIAIRE INCENDIE ============ */}
      <section className="py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-tsotra-red rounded-full" />
            <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white">
              Expertise judiciaire incendie
            </h2>
          </div>
          
          <p className="text-tsotra-orange font-montserrat-medium text-lg mb-8">
            Civile / Pénale / Administrative
          </p>

          <p className="text-gray-300 font-montserrat-regular text-lg leading-relaxed mb-10">
            Fernandes Fabien, expert de justice près la Cour d&apos;Appel de Poitiers, 
            dirigeant de l&apos;entreprise FIRE FORENSIC, intervient sur le territoire national 
            et ultra-marins ainsi cas l&apos;international auprès de ses partenaires historique.
          </p>

          <p className="text-gray-400 font-montserrat-regular mb-8">
            Les domaines expertales auxquelles l&apos;entreprise agis sont les suivants :
          </p>

          <div className="space-y-6">
            {/* Pénales */}
            <div className="bg-[#1a1a1a] border-l-4 border-tsotra-red rounded-r-xl p-6">
              <h3 className="text-white font-montserrat-bold text-lg mb-3">
                Pénales
              </h3>
              <p className="text-gray-400 font-montserrat-regular leading-relaxed">
                En matière d&apos;enquête préliminaire, enquête de flagrance et sous ordonnance 
                de commission d&apos;expert dans le cadre d&apos;instruction judiciaire aux fins de 
                déterminer le caractère intentionnel ou non d&apos;un incendie en criminalistique 
                et psycho-criminologie.
              </p>
            </div>

            {/* Civiles */}
            <div className="bg-[#1a1a1a] border-l-4 border-tsotra-orange rounded-r-xl p-6">
              <h3 className="text-white font-montserrat-bold text-lg mb-3">
                Civiles
              </h3>
              <p className="text-gray-400 font-montserrat-regular leading-relaxed">
                En matière de référé et d&apos;ordonne de jugement au fond aux fins de déterminer 
                l&apos;origine et la causalité d&apos;un incendie pour que les sinistrés puissent 
                percevoir le remboursement de leur préjudices matériels et immatériels.
              </p>
            </div>

            {/* Administratives */}
            <div className="bg-[#1a1a1a] border-l-4 border-tsotra-sky rounded-r-xl p-6">
              <h3 className="text-white font-montserrat-bold text-lg mb-3">
                Administratives
              </h3>
              <p className="text-gray-400 font-montserrat-regular leading-relaxed">
                Aux fins de vérifier les actions et ou inactions d&apos;un établissement 
                d&apos;un point de vues réglementaires, normatives suite à un sinistre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE D'ASSURANCE AMIABLE ============ */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-tsotra-orange rounded-full" />
            <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white">
              Expertise d&apos;assurance amiable
            </h2>
          </div>

          <p className="text-gray-300 font-montserrat-regular text-lg leading-relaxed mb-10">
            L&apos;entreprise FIRE FORENSIC intervient sur des sinistres à forts enjeux économiques 
            en investiguant chaque scène d&apos;incendie de manière méthodique et conforme aux 
            différentes référentiels et normes NFPA encadrant le travail de l&apos;enquêteur 
            et du forensicien incendie.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* En unilatéral */}
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 rounded-2xl p-8">
              <div className="absolute top-6 left-6 w-4 h-4 bg-tsotra-orange rounded-full" />
              <h3 className="text-xl font-montserrat-bold text-white mb-4 ml-8">
                En unilatéral
              </h3>
              <p className="text-gray-400 font-montserrat-regular leading-relaxed">
                Nous organisons une 1ère phase d&apos;investigation non destructive, 
                figeons la scène très rapidement pour éviter le dépérissement de la preuve, 
                et vous donnons une 1ère position du dossier.
              </p>
            </div>

            {/* En contradictoire */}
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 rounded-2xl p-8">
              <div className="absolute top-6 left-6 w-4 h-4 bg-tsotra-orange rounded-full" />
              <h3 className="text-xl font-montserrat-bold text-white mb-4 ml-8">
                En contradictoire
              </h3>
              <p className="text-gray-400 font-montserrat-regular leading-relaxed">
                Nous réalisons une expertise RCCI complète et destructive si, et seulement si, 
                toutes les parties sont convoquées, si leur accord est obtenu, si le litige peut 
                se résoudre rapidement à l&apos;amiable, et si nos mandants valident cette démarche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NAVIGATION RAPIDE ============ */}
      <section className="py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white text-center mb-16">
            Nos <span className="text-tsotra-orange">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Formation',
                desc: 'Formations certifiées en sécurité incendie et gestion des risques',
                href: '/formation',
                color: 'border-tsotra-sky',
                hoverBg: 'hover:bg-tsotra-sky/10',
                textColor: 'text-tsotra-sky',
              },
              {
                title: 'Nautique',
                desc: 'École nautique, permis côtier, fluvial et hauturier',
                href: '/nautique',
                color: 'border-blue-500',
                hoverBg: 'hover:bg-blue-500/10',
                textColor: 'text-blue-400',
              },
              {
                title: 'Partenaires',
                desc: 'Réseau de partenaires de confiance et collaborations',
                href: '/partenaire',
                color: 'border-green-500',
                hoverBg: 'hover:bg-green-500/10',
                textColor: 'text-green-400',
              },
              {
                title: 'Post-Incendie',
                desc: 'Expertise judiciaire et investigation forensique',
                href: '/post-incendie',
                color: 'border-tsotra-red',
                hoverBg: 'hover:bg-tsotra-red/10',
                textColor: 'text-tsotra-red',
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className={`group bg-[#1a1a1a] border ${service.color} rounded-xl p-6 ${service.hoverBg} transition-all duration-300 hover:scale-105 block`}
              >
                <h3 className={`text-xl font-montserrat-bold ${service.textColor} mb-3`}>
                  {service.title}
                </h3>
                <p className="text-gray-500 font-montserrat-regular text-sm leading-relaxed">
                  {service.desc}
                </p>
                <span className={`inline-block mt-4 ${service.textColor} font-montserrat-medium text-sm group-hover:translate-x-2 transition-transform`}>
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER CTA ============ */}
      <section className="py-16 px-4 bg-gradient-to-r from-tsotra-orange/20 to-tsotra-red/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-montserrat-bold text-white mb-4">
            Besoin d&apos;une expertise ?
          </h2>
          <p className="text-gray-400 font-montserrat-regular mb-8">
            Contactez-nous pour discuter de votre projet ou obtenir un devis personnalisé.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-tsotra-orange hover:bg-tsotra-orange/80 text-white font-montserrat-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
