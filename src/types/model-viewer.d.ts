// Déclarations TypeScript pour @google/model-viewer

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': ModelViewerElement & React.HTMLAttributes<HTMLElement>;
  }
}

interface ModelViewerElement {
  ref?: any;
  src?: string;
  poster?: string;
  alt?: string;
  'camera-controls'?: boolean;
  'auto-rotate'?: boolean;
  'rotation-per-second'?: string;
  'interaction-prompt'?: string;
  'camera-orbit'?: string;
  'min-camera-orbit'?: string;
  'max-camera-orbit'?: string;
  'camera-target'?: string;
  'field-of-view'?: string;
  'environment-image'?: string;
  'skybox-image'?: string;
  exposure?: string;
  'shadow-intensity'?: string;
  'shadow-softness'?: string;
  'animation-name'?: string;
  'animation-crossfade-duration'?: string;
  autoplay?: boolean;
  ar?: boolean;
  'ar-modes'?: string;
  loading?: 'auto' | 'lazy' | 'eager';
}

export {};
