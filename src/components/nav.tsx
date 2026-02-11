"use client";

import { useState } from "react";
import TetraedeWrapper from "./TetraedeWrapper";

export default function Nav() {
  const [hovered, setHovered] = useState(false);

  // setTimeout(() => {setHovered(true)  },15000);
  const taille = '50vh';
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 h-16 flex flex-row-reverse items-center justify-between px-6 backdrop-blur-md">
      {/* Logo / Titre à gauche */}
      {/* <div className="flex items-center gap-3">
        <span className="text-lg font-montserrat-bold tracking-wider text-tsotra-orange">
          TSOTRA
        </span>
      </div> */}


      {/* Tétraèdre miniature à droite, grandit au hover */}
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`
            origin-center transition-all duration-500 ease-in-out scale-100
            ${hovered
              ? "opacity-100"
              : "opacity-80 bg-gray-800/80 backdrop-blur-sm hover:opacity-100"
            }
          `}
          style={{
            position: hovered ? "fixed" : "relative",
            top: hovered ? "0" : "auto",
            right: hovered ? "0" : "auto",
            width: hovered ? taille : "60px",
            height: hovered ? taille : "60px",
            transition: "transform 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out",
            zIndex: hovered ? 100 : 10,
          }}
        >
          <TetraedeWrapper />
        </div>

        {/* Halo subtil derrière le tétraèdre en hover */}
        {hovered && (
          <div className={`fixed top-0 right-0 w-[${taille}] h-[${taille}] bg-black/60 backdrop-blur-sm z-40 pointer-events-none`} />
        )}
      </div>
    </nav>
  );
}