"use client";

import React, { useEffect, useRef } from "react";

/**
 * ShaderFire - Version optimisée avec contrôle d'intensité 
 * pour l'animation d'entrée du tétraèdre.
 */
interface ShaderFireProps {
  intensity?: number;
}

export default function ShaderFire({ intensity = 1.0 }: ShaderFireProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { 
      alpha: true, 
      premultipliedAlpha: false,
      preserveDrawingBuffer: true 
    });

    if (!gl) return;

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_intensity;

      vec2 hash2(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
      }

      float noise(vec2 p) {
        const float K1 = 0.366025404;
        const float K2 = 0.211324865;
        vec2 i = floor(p + (p.x + p.y) * K1);
        vec2 a = p - i + (i.x + i.y) * K2;
        vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec2 b = a - o + K2;
        vec2 c = a - 1.0 + 2.0 * K2;
        vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
        vec3 n = h * h * h * h * vec3(dot(a, hash2(i + 0.0)), dot(b, hash2(i + o)), dot(c, hash2(i + 1.0)));
        return dot(n, vec3(70.0));
      }

      float fbm(vec2 p) {
        float f = 0.0; float a = 0.5;
        for(int i = 0; i < 6; i++) {
          f += a * noise(p);
          p *= 2.02; a *= 0.5;
        }
        return f;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float t = u_time * 1.3;
        
        vec2 center = vec2(0.5, 0.05);
        float dist = distance(uv, center);

        vec2 flow = vec2(fbm(uv * 1.8 + t * 0.15), fbm(uv * 2.2 - t * 0.35));
        vec2 q = uv;
        q.x += flow.x * 0.22 * uv.y;
        q.y -= t * 0.65;

        float n = abs(fbm(q * 3.8));
        float fire = pow(1.0 - n, 3.5);
        float sphereBase = pow(max(1.0 - smoothstep(0.0, 0.42, dist), 0.0), 2.8);
        
        fire = mix(fire * 1.6, fire + sphereBase * 1.4, sphereBase);

        float mask = (1.0 - pow(uv.y, 1.4)) * smoothstep(0.0, 0.08, uv.y);
        mask *= (1.0 - pow(abs(uv.x - 0.5) * 2.1, 3.8));
        
        fire *= mask;

        vec3 color = vec3(0.0);
        color = mix(color, vec3(0.4, 0.0, 0.0), smoothstep(0.05, 0.25, fire));
        color = mix(color, vec3(0.8, 0.05, 0.0), smoothstep(0.20, 0.50, fire));
        color = mix(color, vec3(1.0, 0.3, 0.0), smoothstep(0.45, 0.80, fire));
        color = mix(color, vec3(1.0, 0.5, 0.1), smoothstep(0.75, 1.2, fire));

        float pulse = 0.5 + 0.5 * sin(t * 2.0);
        color += sphereBase * 0.15 * vec3(0.8, 0.2, 0.0) * pulse;

        // Application de l'intensité sur la couleur et l'alpha
        gl_FragColor = vec4(color * u_intensity, fire * 2.2 * u_intensity);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, createShader(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    
    const posLoc = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uIntensity = gl.getUniformLocation(prog, "u_intensity");

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = Math.floor(canvas!.clientWidth * dpr);
      canvas!.height = Math.floor(canvas!.clientHeight * dpr);
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }

    window.addEventListener("resize", resize);
    resize();

    let rafId: number;
    const startTime = performance.now();

    function render(now: number) {
      const t = (now - startTime) * 0.001;
      gl!.clearColor(0, 0, 0, 0);
      gl!.clear(gl!.COLOR_BUFFER_BIT);

      gl!.uniform1f(uTime, t);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uIntensity, intensity); // Utilisation de la prop d'intensité

      gl!.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    }

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
      gl.deleteProgram(prog);
    };
  }, [intensity]); // Re-render si l'intensité change

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block bg-transparent"
      style={{ pointerEvents: "none" }}
    />
  );
}