"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Import dynamique pour éviter les erreurs SSR
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  ),
});

interface SplineSceneProps {
  rotation: number;
  onLoad?: () => void;
}

export default function SplineScene({ rotation, onLoad }: SplineSceneProps) {
  const splineRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (spline: any) => {
    splineRef.current = spline;
    setIsLoaded(true);
    onLoad?.();
  };

  useEffect(() => {
    if (splineRef.current && isLoaded) {
      // Rotation de l'objet 3D basée sur la navigation
      const obj = splineRef.current.findObjectByName("Scene");
      if (obj) {
        obj.rotation.y = rotation * (Math.PI / 180);
      }
    }
  }, [rotation, isLoaded]);

  return (
    <div className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
}
