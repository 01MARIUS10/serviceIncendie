'use client';

import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
    return (
        <section className="py-16 px-4 bg-gradient-to-r from-tsotra-orange/20 to-tsotra-red/20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-montserrat-bold text-white mb-4">
                    Besoin d&apos;une expertise ?
                </h2>
                <p className="text-gray-400 font-montserrat-regular mb-8">
                    Contactez-nous pour discuter de votre projet ou obtenir un devis personnalisé.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 bg-tsotra-orange hover:bg-tsotra-orange/80 text-white font-montserrat-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25"
                    >
                        Nous contacter
                    </Link>
                    <Link
                        href="/partenaire"
                        className="inline-block px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-montserrat-bold rounded-lg transition-all duration-300 hover:scale-105 border border-white/20"
                    >
                        Nos partenaires
                    </Link>
                </div>
            </div>
        </section>
    )
}