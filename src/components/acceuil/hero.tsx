"use client";

import TetraedeWrapper from '../TetraedeWrapper';

export default function Hero() {
  
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Fond gradient sombre avec accent orange/rouge */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0a00] to-black z-0" />

      {/* Particules / ambiance feu */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tsotra-orange rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tsotra-red rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="w-[50vh] h-[50vh] flex align-center  mx-auto flex-column">
          <TetraedeWrapper />
        </div>
        <h1 className="text-3xl md:text-5xl font-montserrat-bold text-white mb-12 tracking-tight">
            <span className="text-tsotra-orange">Fabien Fernandez | Fire forensic</span>
          </h1>

          {/* <p className="text-xl md:text-2xl text-gray-300 font-montserrat-regular mb-4 max-w-3xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis neque  . 
          </p>

          <p className="text-lg text-gray-400 font-montserrat-regular mb-10 max-w-2xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus distinctio laudantium!
          </p> */}

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/formation"
            className="px-8 py-4 bg-tsotra-orange hover:bg-tsotra-orange/80 text-white font-montserrat-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25"
          >
            Nos Formations
          </a>
          <a
            href="/post-incendie"
            className="px-8 py-4 border-2 border-tsotra-red text-tsotra-red hover:bg-tsotra-red hover:text-white font-montserrat-bold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Expertise Incendie
          </a>
        </div>
      </div>
    </section>

  );
}