export const colors = {
  brand: {
    titanioBlue: '#0D4D9C',
    chromeSilverLight: '#D9D9D9',
    chromeSilverDark: '#999999',
    jetBlack: '#000000',
    highGlossWhite: '#FFFFFF',
    deepGraphiteGray: '#1C1C1C',
  },
  accents: {
    electricBlue: '#009DFF',
    safetyRed: '#E50914',
  },
} as const

export const gradients = {
  chrome: 'linear-gradient(135deg, #D9D9D9 0%, #FFFFFF 20%, #999999 50%, #FFFFFF 80%, #D9D9D9 100%)',
} as const

export const typography = {
  heading: {
    primary: '"Orbitron", "Eurostile Extended", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  },
  body: {
    primary: '"Roboto", "Montserrat", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  },
  accent: {
    condensed: '"Montserrat", "Roboto Condensed", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    italic: 'italic',
  },
} as const

export const shadows = {
  card: '0 8px 24px rgba(0, 0, 0, 0.35)',
  chromeEdgeGlow: '0 0 0 2px rgba(217, 217, 217, 0.4), 0 0 12px rgba(0, 157, 255, 0.45)',
} as const

export const radii = {
  button: '10px',
  card: '12px',
} as const

export const borders = {
  chrome: `1px solid ${colors.brand.chromeSilverLight}`,
  chromeDark: `1px solid ${colors.brand.chromeSilverDark}`,
} as const

export const zIndex = {
  header: 1000,
  modal: 2000,
  toast: 2500,
} as const

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
} as const

export const tokens = {
  colors,
  gradients,
  typography,
  shadows,
  radii,
  borders,
  zIndex,
  spacing,
} as const

export type DesignTokens = typeof tokens



