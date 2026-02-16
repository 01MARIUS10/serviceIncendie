"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Investiguer",
    subtitle: "vos scènes",
    description:
      "Analyse approfondie des lieux sinistrés pour identifier les origines et causes de l'incendie.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Recherchez & Défendez",
    subtitle: "vos recours",
    description:
      "Construction d'un dossier technique solide pour soutenir vos actions en justice ou vos démarches assurantielles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Développez",
    subtitle: "une expertise technique",
    description:
      "Mobilisation de compétences scientifiques et techniques pour comprendre les mécanismes de propagation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Solutionnez efficacement",
    subtitle: "vos sinistres",
    description:
      "Résolution rapide et efficace des dossiers grâce à une méthodologie éprouvée et reconnue.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
];

export default function ExpertiseRCCI() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate line progress
            const duration = 1200;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              setLineProgress(progress);
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);

            // Stagger step reveals
            steps.forEach((_, i) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, i]);
              }, 400 + i * 350);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-[#0d1117] to-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ---- Header ---- */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-tsotra-orange text-white font-montserrat-bold text-sm tracking-widest uppercase mb-6">
            Expertise RCCI
          </span>
          <h2 className="text-3xl md:text-5xl font-montserrat-bold text-white leading-tight">
            Notre méthodologie <br className="hidden md:block" />
            <span className="text-tsotra-orange">en 4 étapes</span>
          </h2>
        </div>

        {/* ---- Timeline Desktop (horizontal) ---- */}
        <div className="hidden md:block relative mt-[180px]">
          {/* Background track */}
          <div className="absolute top-[60px] left-0 right-0 h-[3px] bg-white/10 rounded-full" />

          {/* Animated progress line */}
          <div
            className="absolute top-[60px] left-0 h-[3px] rounded-full bg-gradient-to-r from-tsotra-orange via-tsotra-red to-tsotra-orange"
            style={{
              width: `${lineProgress * 100}%`,
              transition: "none",
              boxShadow: "0 0 12px rgba(247,126,3,0.5)",
            }}
          />

          {/* Steps */}
          <div className="relative grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const isVisible = visibleSteps.includes(i);
              const isTop = i % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? `translateY(${isTop ? "-50%" : "-30px"})`
                      : `translateY(${isTop ? "-30px" : "30px"})`,
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Top content for even indices */}
                  {isTop && (
                    <div className="text-center mb-6 min-h-[100px] flex flex-col justify-end">
                      <h3 className="text-white font-montserrat-bold text-lg uppercase leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-tsotra-orange font-montserrat-medium text-sm mt-1 uppercase tracking-wide">
                        {step.subtitle}
                      </p>
                    </div>
                  )}

                  {/* Spacer for bottom items */}
                  {!isTop && <div className="min-h-[100px] mb-6" />}

                  {/* Dot / Node */}
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                        isVisible
                          ? "bg-tsotra-orange border-tsotra-orange text-white scale-100 shadow-[0_0_20px_rgba(247,126,3,0.4)]"
                          : "bg-transparent border-white/20 text-white/30 scale-75"
                      }`}
                    >
                      {step.icon}
                    </div>
                    {/* Vertical connector line */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-tsotra-orange/40 transition-all duration-500 ${
                        isTop ? "top-full mt-0" : "bottom-full mb-0"
                      }`}
                      style={{
                        height: isVisible ? "24px" : "0px",
                      }}
                    />
                  </div>

                  {/* Bottom content for odd indices */}
                  {!isTop && (
                    <div className="text-center mt-6 min-h-[100px] flex flex-col justify-start">
                      <h3 className="text-white font-montserrat-bold text-lg uppercase leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-tsotra-orange font-montserrat-medium text-sm mt-1 uppercase tracking-wide">
                        {step.subtitle}
                      </p>
                    </div>
                  )}

                  {/* Spacer for top items */}
                  {isTop && <div className="min-h-[100px] mt-6" />}
                </div>
              );
            })}
          </div>

          {/* Descriptions below */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const isVisible = visibleSteps.includes(i);
              return (
                <div
                  key={step.id}
                  className="text-center"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.8s ease",
                    transitionDelay: "0.3s",
                  }}
                >
                  <p className="text-gray-400 font-montserrat-regular text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---- Timeline Mobile (vertical) ---- */}
        <div className="md:hidden relative">
          {/* Vertical track */}
          <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-white/10 rounded-full" />

          {/* Animated progress line */}
          <div
            className="absolute left-6 top-0 w-[3px] rounded-full bg-gradient-to-b from-tsotra-orange via-tsotra-red to-tsotra-orange"
            style={{
              height: `${lineProgress * 100}%`,
              transition: "none",
              boxShadow: "0 0 12px rgba(247,126,3,0.5)",
            }}
          />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const isVisible = visibleSteps.includes(i);
              return (
                <div
                  key={step.id}
                  className="relative flex items-start gap-6 pl-0"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                        isVisible
                          ? "bg-tsotra-orange border-tsotra-orange text-white shadow-[0_0_20px_rgba(247,126,3,0.4)]"
                          : "bg-transparent border-white/20 text-white/30"
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-white font-montserrat-bold text-base uppercase leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-tsotra-orange font-montserrat-medium text-sm mt-0.5 uppercase tracking-wide">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-400 font-montserrat-regular text-sm mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}