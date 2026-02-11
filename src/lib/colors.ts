/**
 * Couleurs centralisées du projet 
 * Palette: Navy #C7EEFF, Sky #C7EEFF, Orange #F77E03, Red #D62A28
 * Synchronisées avec globals.css et data.ts
 */

// Palette principale 
export const TSOTRA_PALETTE = {
  navy: '#C7EEFF',
  sky: '#C7EEFF',
  orange: '#F77E03',
  red: '#D62A28',
} as const;

// Couleurs par page (mapping avec data.ts)
export const PAGE_COLORS = {
  0: '#8B5CF6',  // Accueil - Purple
  1: '#06B6D4',  // Formation - Cyan
  2: '#3B82F6',  // Nautique - Blue
  3: '#10B981',  // Partenaire - Green
  4: '#EF4444',  // Post-Incendie - Red
} as const;

export const PAGE_COLOR_NAMES = {
  0: 'accueil',
  1: 'formation',
  2: 'nautique',
  3: 'partenaire',
  4: 'postIncendie',
} as const;

// Classes Tailwind par page
export const PAGE_BG_CLASSES = {
  0: 'bg-page-accueil',
  1: 'bg-page-formation',
  2: 'bg-page-nautique',
  3: 'bg-page-partenaire',
  4: 'bg-page-post-incendie',
} as const;

export const PAGE_TEXT_CLASSES = {
  0: 'text-page-accueil',
  1: 'text-page-formation',
  2: 'text-page-nautique',
  3: 'text-page-partenaire',
  4: 'text-page-post-incendie',
} as const;

// Helpers pour obtenir les couleurs
export function getPageColor(pageId: number): string {
  return PAGE_COLORS[pageId as keyof typeof PAGE_COLORS] || PAGE_COLORS[0];
}

export function getPageBgClass(pageId: number): string {
  return PAGE_BG_CLASSES[pageId as keyof typeof PAGE_BG_CLASSES] || PAGE_BG_CLASSES[0];
}

export function getPageTextClass(pageId: number): string {
  return PAGE_TEXT_CLASSES[pageId as keyof typeof PAGE_TEXT_CLASSES] || PAGE_TEXT_CLASSES[0];
}

// Helper pour obtenir le nom de la couleur
export function getPageColorName(pageId: number): string {
  return PAGE_COLOR_NAMES[pageId as keyof typeof PAGE_COLOR_NAMES] || PAGE_COLOR_NAMES[0];
}

// Poids de police Montserrat
export const FONT_WEIGHTS = {
  regular: 'font-montserrat-regular',
  medium: 'font-montserrat-medium',
  bold: 'font-montserrat-bold',
} as const;
