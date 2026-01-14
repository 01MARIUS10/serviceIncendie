"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import SplineScene from "./SplineScene";

interface Page {
  id: number;
  title: string;
  content: React.ReactNode;
  color: string;
}

interface NavigationSliderProps {
  pages: Page[];
}

export default function NavigationSlider({ pages }: NavigationSliderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPages = pages.length;
  const rotationPerPage = 360 / totalPages;

  // Calcul de la rotation basée sur la page actuelle et l'offset de drag
  const currentRotation = currentPage * rotationPerPage + (dragOffset / 5);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (_: any, info: PanInfo) => {
    setDragOffset(info.offset.x);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    setDragOffset(0);

    const threshold = 100;
    const velocity = info.velocity.x;

    if (info.offset.x > threshold || velocity > 500) {
      // Swipe vers la droite - page précédente
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    } else if (info.offset.x < -threshold || velocity < -500) {
      // Swipe vers la gauche - page suivante
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }
  };

  // Navigation par clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
      } else if (e.key === "ArrowRight") {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalPages]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Spline 3D Scene - Positioned in center */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ rotate: currentRotation }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="w-full h-full"
        >
          <SplineScene rotation={0} />
        </motion.div>
      </div>

      {/* Draggable overlay */}
      <motion.div
        className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      />

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 z-30 p-8 md:p-12 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ color: pages[currentPage].color }}
            >
              {pages[currentPage].title}
            </motion.h1>
            <div className="text-lg md:text-xl text-gray-300">
              {pages[currentPage].content}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Page Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex gap-3">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPage
                ? "bg-white scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Navigation hints */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </motion.button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </motion.button>
      </div>

      {/* Drag instruction */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40 text-white/50 text-sm"
      >
        ← Glissez pour naviguer →
      </motion.div>
    </div>
  );
}
