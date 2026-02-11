import Image from 'next/image';
import Link from 'next/link';

// Interface pour typer les entreprises
interface Entreprise {
    id: string;
    nom: string;
    sousTitre: string;
    logo: string;
    logoAlt: string;
    description: string;
    services: string[];
    couleur: 'orange' | 'red' | 'blue' | 'yellow';
    lien: string;
    liensExternes?: { label: string; url: string }[];
}

// Données des entreprises
const entreprises: Entreprise[] = [
    {
        id: 'fire-consulting',
        nom: 'FABIEN FERNANDES',
        sousTitre: 'Fire Consulting',
        logo: '/images/LOGO FIRE-02.png',
        logoAlt: 'FABIEN FERNANDES - Fire Consulting',
        description: 'Cabinet de conseil et d\'accompagnement spécialisé en sécurité incendie, prévention des risques et formation professionnelle. Un interlocuteur unique pour l\'ensemble de vos besoins en matière de sécurité.',
        services: [
            'Conseil en sécurité incendie',
            'Accompagnement des entreprises',
            'Audit et prévention des risques',
            'Coordination des prestations',
        ],
        couleur: 'orange',
        lien: '/accueil',
    },
    {
        id: 'fire-forensic',
        nom: '2F - FIRE FORENSIC',
        sousTitre: 'Formation & Enquête Incendie',
        logo: '/images/LOGO FIRE-04.png',
        logoAlt: '2F - Fire Forensic - Formation et enquête incendie',
        description: 'Notre expertise va bien au-delà de l\'enquête incendie (Origine et cause). Entreprise de formation reconnue, nous sommes la seule entreprise française reconnue au titre d\'instructeur auprès d\'entités prestigieuses comme la NAFI et l\'IAAI USA.',
        services: [
            'Certification CFEI (NAFI)',
            'Préparation CFI – IAAI',
            'Formation terrain & coaching',
            'Séminaires en sciences forensiques',
            'Révision et analyse de dossiers',
        ],
        couleur: 'red',
        lien: '/formation',
        liensExternes: [
            { label: 'NAFI', url: 'https://www.nafi.org/' },
            { label: 'IAAI / Fire Arson', url: 'https://www.firearson.com/' },
            { label: 'Groupe Arson (CFEI)', url: 'https://groupearson.ca/' },
        ],
    },
    {
        id: 'n2f-nautical',
        nom: 'N2F - NAUTICAL FIRE FORENSIC',
        sousTitre: 'Investigation Post-Incendie Nautique',
        logo: '/images/LOGO FIRE-01.png',
        logoAlt: 'N2F - Nautical Fire Forensic',
        description: 'Spécialisée en investigation post-incendie nautique. Les incendies de navires nécessitent des compétences particulières dans le domaine maritime : destruction totale des matériaux composites, dégâts des eaux d\'extinction et instabilité des structures.',
        services: [
            'Investigation incendie navires de plaisance',
            'Expertise incendie marine marchande',
            'Analyse de sinistres nautiques',
            'Rapport d\'expertise maritime',
        ],
        couleur: 'blue',
        lien: '/nautique',
    },
    {
        id: 'e2d-protection',
        nom: 'E2D - FIRE PROTECTION PRESERVATION',
        sousTitre: 'Mesures de sauvegarde & Dépollution',
        logo: '/images/DEP-05.png',
        logoAlt: 'E2D - Fire Protection Preservation',
        description: 'Mesures de sauvegarde après sinistre incendie et dépollution de site vis-à-vis du risque amiante et plomb. Intervention rapide pour sécuriser et préserver les lieux sinistrés conformément à la réglementation en vigueur.',
        services: [
            'Mesures de sauvegarde post-incendie',
            'Mesures conservatoires',
            'Désamiantage & déplombage',
            'Dépollution de site sinistré',
        ],
        couleur: 'yellow',
        lien: '/post-incendie',
        liensExternes: [
            // { label: 'LC-2', url: 'https://lc-2.fr/' },
            // { label: 'CO2 Démolitions', url: 'https://co2-demolitions.fr/' },
            // { label: 'E2 Démolition', url: 'https://www.e2demolition.fr/' },
        ],
    },
];

// Map des couleurs Tailwind (classes complètes pour éviter le purge)
const colorMap = {
    orange: {
        text: 'text-tsotra-orange',
        bg: 'bg-tsotra-orange',
        border: 'hover:border-tsotra-orange/50',
    },
    red: {
        text: 'text-tsotra-red',
        bg: 'bg-tsotra-red',
        border: 'hover:border-tsotra-red/50',
    },
    blue: {
        text: 'text-blue-400',
        bg: 'bg-blue-400',
        border: 'hover:border-blue-400/50',
    },
    yellow: {
        text: 'text-yellow-400',
        bg: 'bg-yellow-400',
        border: 'hover:border-yellow-400/50',
    },
};

export default function Entreprise() {
    return (
        <section className="py-20 px-4 bg-[#0d0d0d]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-montserrat-bold text-white text-center mb-4">
                    Nos <span className="text-tsotra-orange">Entreprises</span>
                </h2>
                <p className="text-gray-400 text-center font-montserrat-regular mb-16 max-w-3xl mx-auto">
                    Quatre structures complémentaires au service de la prévention, la formation, l&apos;investigation et la préservation post-incendie
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {entreprises.map((entreprise) => {
                        const colors = colorMap[entreprise.couleur];

                        return (
                            <div
                                key={entreprise.id}
                                className={`group relative bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 rounded-2xl p-8 ${colors.border} transition-all duration-500`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <Image
                                        src={entreprise.logo}
                                        alt={entreprise.logoAlt}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-contain"
                                    />
                                    <div>
                                        <h3 className="text-xl font-montserrat-bold text-white leading-tight">
                                            {entreprise.nom}
                                        </h3>
                                        <p className={`${colors.text} font-montserrat-medium text-sm tracking-widest uppercase mt-1`}>
                                            {entreprise.sousTitre}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-300 font-montserrat-regular mb-6 leading-relaxed text-sm">
                                    {entreprise.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {entreprise.services.map((service, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-3 text-gray-400 font-montserrat-regular text-sm"
                                        >
                                            <span className={`w-2 h-2 ${colors.bg} rounded-full flex-shrink-0`} />
                                            {service}
                                        </li>
                                    ))}
                                </ul>

                                {/* Liens externes (partenaires, certifications) */}
                                {entreprise.liensExternes && entreprise.liensExternes.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {entreprise.liensExternes.map((ext, idx) => (
                                            <a
                                                key={idx}
                                                href={ext.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`text-xs ${colors.text} border border-current/30 rounded-full px-3 py-1 hover:bg-white/5 transition-colors`}
                                            >
                                                {ext.label} ↗
                                            </a>
                                        ))}
                                    </div>
                                )}

                                <Link
                                    href={entreprise.lien}
                                    className={`inline-flex items-center gap-2 ${colors.text} font-montserrat-medium hover:underline text-sm`}
                                >
                                    Découvrir →
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}