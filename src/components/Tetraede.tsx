'use client';

import { useEffect, useState, useRef, useCallback, use } from 'react';
import { getPageById, getFaceInfo, PageData } from '@/lib/data';

interface TetraedeProps {
  page: PageData | null;
}

export default function Tetraede({ page = null }: TetraedeProps) {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [faceInfo, setFaceInfo] = useState<{id:number,name:string,color:string}[]>([]);
  const [ready, setReady] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [dominantFace, setDominantFace] = useState(0);
  const [clickedFace, setClickedFace] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false); // Pour distinguer click vs drag
  const lastMouse = useRef({ x: 0, y: 0 });

  // Initialiser la face en fonction de l'URL
  useEffect(()=>{
    async function initialiseAll() {
    const f = await getFaceInfo();
    if (!initialized) return;
    if(page){initFace(page);}
    else{initDefaultFace()}
    setFaceInfo(f);
  }
    initialiseAll()
  }, [page, initialized]);

  const faceNormals = [
    { x: 0, y: 0.333, z: 0.943 },      // Face 0 (Cyan/Formation) - avant
    { x: 0.816, y: 0.333, z: -0.471 }, // Face 1 (Blue/Nautique) - droite arrière
    { x: -0.816, y: 0.333, z: -0.471 },// Face 2 (Green/Partenaire) - gauche arrière  
    { x: 0, y: -1, z: 0 }              // Face 3 (Red/Post-Incendie) - base
  ];

  const faceRotations = [
    { x: -26, y: 51 },     // pageId 0 (Accueil) - Vue d'ensemble (3 faces visibles)
    { x: 0, y: 0 },        // pageId 1 (Cyan/Formation) - Face 0 avant
    { x: 0, y: -120 },      // pageId 2 (Blue/Nautique) - Face 1 rotation droite
    { x: 0, y: 120 },     // pageId 3 (Green/Partenaire) - Face 2 rotation gauche
    { x: -90, y: 0 }       // pageId 4 (Red/Post-Incendie) - Face 3 base vers le haut
  ];

   

  // Initialiser le tétraèdre pour afficher une face spécifique
  const initFace = useCallback((page: PageData) => {
    if (!page) return;

    const pageIndex = page.id;
    if (pageIndex < 0 || pageIndex > 4) {
      console.warn('initFace: pageIndex doit être entre 0 et 4');
      return;
    }
    const rotation = faceRotations[pageIndex];
    setRotationX(rotation.x);
    setRotationY(rotation.y);
    setDominantFace(pageIndex ? pageIndex : 0);
    
  }, []);

  const initDefaultFace = useCallback(() => {
    const pageIndex = 0;
    
    const rotation = faceRotations[pageIndex];
    setRotationX(rotation.x);
    setRotationY(rotation.y);
    setDominantFace(pageIndex ? pageIndex : 0);
  }, []);

  // Calculer quelle face est la plus exposée vers la caméra
  const calculateDominantFace = useCallback((rotX: number, rotY: number) => {
    const radX = rotX * Math.PI / 180;
    const radY = rotY * Math.PI / 180;
    
    // Même logique que la rotation X3D (angle-axis)
    const angle = Math.sqrt(radX * radX + radY * radY);
    if (angle === 0) return 0; // Face rouge par défaut
    
    const axisX = radX / angle;
    const axisY = radY / angle;
    const axisZ = 0;
    
    // Rotation Rodrigues formula autour de l'axe (axisX, axisY, 0)
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    
    let maxDot = -Infinity;
    let dominant = 0;

    faceNormals.forEach((normal, index) => {
      const { x, y, z } = normal;
      
      // Rodrigues rotation: v' = v*cos(a) + (k×v)*sin(a) + k*(k·v)*(1-cos(a))
      const dot_kv = axisX * x + axisY * y + axisZ * z;
      
      // k × v (cross product)
      const crossX = axisY * z - axisZ * y;
      const crossY = axisZ * x - axisX * z;
      const crossZ = axisX * y - axisY * x;
      
      // v rotated
      const nx = x * cosA + crossX * sinA + axisX * dot_kv * (1 - cosA);
      const ny = y * cosA + crossY * sinA + axisY * dot_kv * (1 - cosA);
      const nz = z * cosA + crossZ * sinA + axisZ * dot_kv * (1 - cosA);

      // La caméra regarde vers +Z, donc on veut la face avec le plus grand nz
      if (nz > maxDot) {
        maxDot = nz;
        dominant = index;
      }
    });

    return dominant;
  }, []);

  // Charger X3DOM une seule fois
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.x3dom.org/download/x3dom.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://www.x3dom.org/download/x3dom.js';
    script.onload = () => {
      setTimeout(() => setReady(true), 300);
    };
    document.body.appendChild(script);

    return () => {
      document.querySelectorAll('script[src*="x3dom"]').forEach(s => s.remove());
      document.querySelectorAll('link[href*="x3dom"]').forEach(l => l.remove());
    };
  }, []);

  // Initialiser la scene X3D une seule fois
  useEffect(() => {
    if (!ready || !containerRef.current || initialized) return;

    containerRef.current.innerHTML = `
      <x3d width="100%" height="100%" style="border:none;">
        <scene>
          <navigationInfo type="none"></navigationInfo>
          <viewpoint position="0 0 8" fieldOfView="0.8"></viewpoint>
          <transform DEF="tetraRotation" rotation="0 1 0 0">
            <shape DEF="face0" onclick="window.clickFace(0)">
              <appearance>
                <material diffuseColor="0.024 0.714 0.831" emissiveColor="0.012 0.357 0.416"></material>
              </appearance>
              <indexedfaceset coordIndex="0 1 2 -1" solid="false">
                <coordinate point="0 2 0, -1.5 -1 1, 1.5 -1 1"></coordinate>
              </indexedfaceset>
            </shape>
            <shape DEF="face1" onclick="window.clickFace(1)">
              <appearance>
                <material diffuseColor="0.231 0.510 0.965" emissiveColor="0.116 0.255 0.483"></material>
              </appearance>
              <indexedfaceset coordIndex="0 1 2 -1" solid="false">
                <coordinate point="0 2 0, 1.5 -1 1, 0 -1 -1.5"></coordinate>
              </indexedfaceset>
            </shape>
            <shape DEF="face2" onclick="window.clickFace(2)">
              <appearance>
                <material diffuseColor="0.063 0.725 0.506" emissiveColor="0.031 0.363 0.253"></material>
              </appearance>
              <indexedfaceset coordIndex="0 1 2 -1" solid="false">
                <coordinate point="0 2 0, 0 -1 -1.5, -1.5 -1 1"></coordinate>
              </indexedfaceset>
            </shape>
            <shape DEF="face3" onclick="window.clickFace(3)">
              <appearance>
                <material diffuseColor="0.937 0.267 0.267" emissiveColor="0.469 0.133 0.133"></material>
              </appearance>
              <indexedfaceset coordIndex="0 1 2 -1" solid="false">
                <coordinate point="-1.5 -1 1, 0 -1 -1.5, 1.5 -1 1"></coordinate>
              </indexedfaceset>
            </shape>
          </transform>
        </scene>
      </x3d>
    `;

    // @ts-ignore
    if (window.x3dom) {
      // @ts-ignore
      window.x3dom.reload();
    }
    setInitialized(true);
  }, [ready, initialized]);

  
  // Handler pour le clic sur une face spécifique (pas le drag)
  const handleClickFace = useCallback(async (faceIndex: number) => {
    // Ignorer si c'était un drag
    if (hasDragged.current) return;
    
    // faceIndex 0-3 correspond à pageId 1-4
    const targetPageId = faceIndex + 1;
    
    if (faceInfo.length > 0 && faceInfo[targetPageId]) {
      console.log(`Face ${faceIndex} cliquée → Page ${targetPageId} (${faceInfo[targetPageId].name})`);
    }
    setClickedFace(faceIndex);
    const targetPage = await getPageById(targetPageId);
    if(targetPage){window.location.href = `${targetPage.url}`;}
    
    // Reset après un court délai pour l'animation
    setTimeout(() => setClickedFace(null), 300);
  }, [faceInfo]);

  // Enregistrer la fonction de clic dans window pour X3DOM
  useEffect(() => {
    // @ts-ignore
    window.clickFace = (faceIndex: number) => {
      handleClickFace(faceIndex);
    };
    
    return () => {
      // @ts-ignore
      delete window.clickFace;
    };
  }, [handleClickFace]);

  // Mettre a jour la rotation sans recharger (rotation pure, pas de translation)
  useEffect(() => {
    if (!initialized || !containerRef.current) return;

    const transform = containerRef.current.querySelector('[DEF="tetraRotation"]');
    if (transform) {
      console.log(rotationX,rotationY)
      const radX = rotationX * Math.PI / 180;
      const radY = rotationY * Math.PI / 180;
      // Rotation combinée X et Y autour du centre (pas de déplacement)
      const angle = Math.sqrt(radX * radX + radY * radY);
      const axisX = angle > 0 ? radX / angle : 0;
      const axisY = angle > 0 ? radY / angle : 1;
      transform.setAttribute('rotation', `${axisX} ${axisY} 0 ${angle}`);
    }
  }, [rotationX, rotationY, initialized]);

  // Drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    hasDragged.current = false; // Reset au début
    lastMouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    
    const deltaX = e.clientX - lastMouse.current.x;
    const deltaY = e.clientY - lastMouse.current.y;
    
    // Marquer comme drag si mouvement significatif (> 5px)
    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      hasDragged.current = true;
    }
    
    setRotationY(r => r + deltaX * 0.5);
    setRotationX(r => r + deltaY * 0.5);
    
    lastMouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    // Calculer la face dominante seulement si on a draggé
    if (hasDragged.current) {
      const newDominant = calculateDominantFace(rotationX, rotationY);
      setDominantFace(newDominant);
    }
  }, [rotationX, rotationY, calculateDominantFace]); 

  
  if (!ready) {
    return (
      <div className="min-h-[300px] bg-transparent flex items-center justify-center">
        <div className="text-white text-xl">Chargement X3DOM...</div>
      </div>
    );
  }

  return (
    <div className="min-h-[400px] bg-transparent flex flex-col items-center justify-center p-8">
      {/* <h1 className="text-3xl font-bold text-white mb-6">Tetraedre X3DOM</h1> */}
      
      {faceInfo.length > 0 && faceInfo[dominantFace] && (
        <div 
          className="mb-4 px-4 py-2 rounded-lg text-white font-bold transition-all duration-300"
          style={{ backgroundColor: faceInfo[dominantFace].color }}
        >
          Face dominante: {faceInfo[dominantFace].name} (Face {dominantFace})
        </div>
      )}

      {/* Indicateur de face cliquée - faceIndex + 1 = pageId pour la couleur */}
      {clickedFace !== null && faceInfo.length > 0 && faceInfo[clickedFace + 1] && (
        <div 
          className="mb-2 px-3 py-1 rounded-full text-sm text-white animate-pulse"
          style={{ backgroundColor: faceInfo[clickedFace + 1].color }}
        >
          🖱️ Click: {faceInfo[clickedFace + 1].name}
        </div>
      )}
      
      <div 
        ref={containerRef}
        className="w-[400px] h-[400px] bg-transparent rounded-xl cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />

      {/* <p className="mt-6 text-gray-400">Glissez pour tourner ou cliquez sur une face</p>
      <p className="mt-2 text-white text-lg">X: {rotationX.toFixed(0)}° | Y: {rotationY.toFixed(0)}°</p>
       */}
      {/* <button 
        onClick={() => { setRotationX(0); setRotationY(0); }}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
      >
        Reinitialiser
      </button> */}
    </div>
  );
}
