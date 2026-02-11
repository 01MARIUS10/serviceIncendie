"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import { getPageById, getFaceInfo, PageData } from '@/lib/data';
import dynamic from 'next/dynamic';

const ShaderFire = dynamic(() => import('./ShaderFire'), { ssr: false });

interface TetraedeProps {
  page: PageData | null;
}

export default function Tetraede({ page = null }: TetraedeProps) {
  // Calcul des cibles pour éviter le flash de la face 0
  const faceRotations = [
    { x: -26, y: 51 }, { x: 0, y: 0 }, { x: 0, y: -120 }, { x: 0, y: 120 }, { x: -90, y: 0 }
  ];

  const targetX = faceRotations[page?.id || 0]?.x || 0;
  const targetY = faceRotations[page?.id || 0]?.y || 0;

  // On initialise l'état directement avec l'offset de départ de l'animation
  const [rotationX, setRotationX] = useState(targetX - 360);
  const [rotationY, setRotationY] = useState(targetY - 1440);
  const [fireIntensity, setFireIntensity] = useState(0);
  const [faceInfo, setFaceInfo] = useState<{ id: number, name: string, color: string }[]>([]);
  const [ready, setReady] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const shaderMaskRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  // 1. Animation Diagonale
  const startEntryAnimation = useCallback(() => {
    let startTime: number | null = null;
    const duration = 3800;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = progress < 0.5
        ? 8 * progress * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 4) / 2;

      // On part de l'offset vers la cible
      setRotationX((targetX - 360) + (360 * ease));
      setRotationY((targetY - 1440) + (1440 * ease));
      console.log('ease', ease)
      // setFireIntensity(ease);

      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [targetX, targetY]);

  // 2. Initialisation des données
  useEffect(() => {
    (async () => {
      const f = await getFaceInfo();
      setFaceInfo(f);
    })();
  }, []);

  // 3. Scripts X3DOM
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet'; link.href = 'https://www.x3dom.org/download/x3dom.css';
    document.head.appendChild(link);
    const script = document.createElement('script');
    script.src = 'https://www.x3dom.org/download/x3dom.js';
    script.onload = () => setTimeout(() => setReady(true), 300);
    document.body.appendChild(script);
    return () => {
      document.querySelectorAll('script[src*="x3dom"]').forEach(s => s.remove());
      document.querySelectorAll('link[href*="x3dom"]').forEach(l => l.remove());
    };
  }, []);

  // 4. Scène 3D avec injection de la rotation initiale
  useEffect(() => {
    if (!ready || !containerRef.current || initialized) return;

    const ptsStr = "0 1.63 0, -1.5 -0.82 0.86, 1.5 -0.82 0.86, 0 -0.82 -1.73";
    const points = [{ x: 0, y: 1.63, z: 0 }, { x: -1.5, y: -0.82, z: 0.86 }, { x: 1.5, y: -0.82, z: 0.86 }, { x: 0, y: -0.82, z: -1.73 }];
    const edges = [[0, 1], [0, 2], [0, 3], [1, 2], [2, 3], [3, 1]];

    // Calcul de la rotation initiale pour éviter le flash
    const rX = (targetX - 360) * Math.PI / 180;
    const rY = (targetY - 1440) * Math.PI / 180;
    const a = Math.sqrt(rX * rX + rY * rY);
    const initialRotAttr = a > 0 ? `${rX / a} ${rY / a} 0 ${a}` : "0 1 0 0";

    const renderEdges = edges.map(([aIdx, bIdx]) => {
      const a = points[aIdx], b = points[bIdx];
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, z: (a.z + b.z) / 2 };
      const d = { x: b.x - a.x, y: b.y - a.y, z: b.z - a.z };
      const len = Math.sqrt(d.x * d.x + d.y * d.y + d.z * d.z);
      const angle = Math.acos(d.y / len);
      return `<transform translation="${mid.x} ${mid.y} ${mid.z}" rotation="${d.z} 0 ${-d.x} ${angle}"><shape><appearance><material diffuseColor="0.8 0 0" emissiveColor="0.5 0.05 0"></material></appearance><cylinder radius="0.015" height="${len}"></cylinder></shape></transform>`;
    }).join('');

    containerRef.current.innerHTML = `
      <x3d id="tetraX3D" width="100%" height="100%" style="border:none; background:transparent;">
        <scene>
          <navigationInfo type="none"></navigationInfo>
          <directionalLight direction="0 -1 -1" intensity="1.8"></directionalLight>
          <viewpoint position="0 0 7" fieldOfView="0.8"></viewpoint>
          <transform DEF="tetraRotation" rotation="${initialRotAttr}">
            ${["0 1 2 -1", "0 2 3 -1", "0 3 1 -1", "1 3 2 -1"].map((idx, i) => `
              <shape DEF="face${i}" onclick="window.clickFace(${i})">
                <appearance><material diffuseColor="1 1 1"></material></appearance>
                <indexedfaceset coordIndex="${idx}" solid="true" ccw="true"><coordinate point="${ptsStr}"></coordinate></indexedfaceset>
              </shape>`).join('')}
            ${renderEdges}
          </transform>
        </scene>
      </x3d>`;

    const x3dElem = document.getElementById('tetraX3D');
    if (x3dElem) {
      x3dElem.addEventListener('downloadsfinished', () => {
        setTimeout(startEntryAnimation, 50);
      });
    }

    if ((window as any).x3dom) (window as any).x3dom.reload();
    setInitialized(true);
  }, [ready, initialized, startEntryAnimation, targetX, targetY]);

  // 5. Masque de feu & Projection (Inchangé)
  useEffect(() => {
    if (!shaderMaskRef.current || !containerRef.current || !initialized) return;
    const wrapper = containerRef.current.parentElement;
    if (!wrapper) return;
    const { width, height } = wrapper.getBoundingClientRect();
    const verts = [{ x: 0, y: 1.63, z: 0 }, { x: -1.5, y: -0.82, z: 0.86 }, { x: 1.5, y: -0.82, z: 0.86 }, { x: 0, y: -0.82, z: -1.73 }];
    const radX = (rotationX * Math.PI) / 180;
    const radY = (rotationY * Math.PI) / 180;
    const angle = Math.sqrt(radX * radX + radY * radY);
    const cosA = Math.cos(angle); const sinA = Math.sin(angle);
    const kx = angle > 0 ? radX / angle : 0; const ky = angle > 0 ? radY / angle : 0;

    const projected = verts.map(v => {
      const dot = kx * v.x + ky * v.y;
      const rx = v.x * cosA + (ky * v.z) * sinA + kx * dot * (1 - cosA);
      const ry = v.y * cosA + (-kx * v.z) * sinA + ky * dot * (1 - cosA);
      const rz = v.z * cosA + (kx * v.y - ky * v.x) * sinA;
      const zView = 7 - rz;
      const focal = (height / 2) / Math.tan(0.4);
      return { x: (width / 2) + (rx * focal) / zView, y: (height / 2) - (ry * focal) / zView };
    });

    const ptsSort = projected.map(p => [p.x, p.y]).sort((a, b) => a[0] - b[0]);
    const cross = (o: any, a: any, b: any) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lower: any[] = []; for (let p of ptsSort) { while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop(); lower.push(p); }
    const upper: any[] = []; for (let i = ptsSort.length - 1; i >= 0; i--) { while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], ptsSort[i]) <= 0) upper.pop(); upper.push(ptsSort[i]); }
    const hull = lower.concat(upper.slice(1, -1));
    const poly = hull.map(p => `${p[0].toFixed(1)}px ${p[1].toFixed(1)}px`).join(', ');
    shaderMaskRef.current.style.clipPath = `polygon(${poly})`;
  }, [rotationX, rotationY, initialized]);

  // 6. Logos
  useEffect(() => {
    if (!initialized || !containerRef.current || faceInfo.length === 0) return;
    const logos = ["/images/DEP-05.png", "/images/LOGO FIRE-01.png", "/images/LOGO FIRE-02.png", "/images/LOGO FIRE-04.png"];
    const logoSettings = [
      { scale: "1.5 1.5", trans: "-0.17 0.05", rot: "0" },
      { scale: "-2 2", trans: "-0.8 -0.1", rot: "0" },
      { scale: "2 2", trans: "-0.35 -0.1", rot: "0.075" },
      { scale: "2.1 2.1", trans: "-0.27 -0.37", rot: "0" }
    ];

    for (let i = 0; i < 4; i++) {
      const shape = containerRef.current.querySelector(`[DEF=face${i}]`);
      if (!shape) continue;
      const settings = logoSettings[i];
      shape.querySelector('appearance')!.innerHTML = `
        <material diffuseColor="1 1 1" emissiveColor="0.1 0.1 0.1"></material>
        <textureTransform scale="${settings.scale}" translation="${settings.trans}" rotation="${settings.rot}"></textureTransform>
        <ImageTexture url='${encodeURI(logos[i])}' repeatS='false' repeatT='false'></ImageTexture>`;
    }
  }, [faceInfo, initialized]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) hasDragged.current = true;
    setRotationY(r => r + dx * 0.5); setRotationX(r => r + dy * 0.5);
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    (window as any).clickFace = (i: number) => {
      if (!hasDragged.current) getPageById(i + 1).then(p => { if (p) window.location.href = p.url; });
    };
  }, []);

  useEffect(() => {
    const trans = containerRef.current?.querySelector('[DEF="tetraRotation"]');
    if (trans) {
      const rX = rotationX * Math.PI / 180, rY = rotationY * Math.PI / 180;
      const a = Math.sqrt(rX * rX + rY * rY);
      if (a > 0) trans.setAttribute('rotation', `${rX / a} ${rY / a} 0 ${a}`);
    }
  }, [rotationX, rotationY]);

  return (
    <div className="relative h-full w-full max-h-[550px] bg-transparent flex items-center justify-center overflow-hidden"
    
    >
      <div className="relative max-w-[550px] max-h-[550px] h-full w-full">
        <div ref={shaderMaskRef} className="absolute inset-0 w-full h-full z-5 pointer-events-none">
          {/* <ShaderFire intensity={fireIntensity} /> */}
        </div>
        <div
          ref={containerRef}
          className="absolute inset-0 bg-transparent cursor-grab active:cursor-grabbing z-10"
          onMouseDown={(e) => { isDragging.current = true; hasDragged.current = false; lastMouse.current = { x: e.clientX, y: e.clientY }; }}
          onMouseMove={handleMouseMove}
          onMouseUp={() => isDragging.current = false}
          onMouseLeave={() => isDragging.current = false}
        />
      </div>
    </div>


  );
}