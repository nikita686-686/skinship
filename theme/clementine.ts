/**
 * Skinship — Clementine design system
 * Sunlit, glossy, alive. White + tangerine, crystal and gloss.
 */
export const colors = {
  white: '#FFFFFF',
  mist: '#FFF6F0',
  tangerine: '#FF6A3D',
  tangerineLight: '#FF9166',
  ember: '#E24E1B',
  sun: '#FFC98F',
  ink: '#241A15',
  sub: '#8A7264',
  faint: '#BFA08F',
  line: '#F3E3D9',
  glass: 'rgba(255,255,255,0.72)',
  glassBorder: 'rgba(255,255,255,0.9)',
};

// Gradients are arrays for expo-linear-gradient
export const gradients = {
  hero: ['#FF7A45', '#FF9E6B', '#FFC08C'] as const,
  button: ['#FF8A57', '#FF6A3D'] as const,
  peach: ['#FFD9C0', '#FFB68C'] as const,
  phone: ['#FFFFFF', '#FFE9DC'] as const,
};

export const radii = { sm: 12, md: 18, lg: 24, pill: 999 };
export const spacing = { xs: 6, sm: 10, md: 16, lg: 22, xl: 32 };

export const fonts = {
  // Loaded in app/_layout.tsx via @expo-google-fonts
  label: 'Jost_300Light',
  body: 'Jost_400Regular',
  bodyMed: 'Jost_500Medium',
  display: 'CormorantGaramond_500Medium',
  displayItalic: 'CormorantGaramond_400Regular_Italic',
  accent: 'Caveat_700Bold',
};

export const shadow = {
  glass: {
    shadowColor: '#E24E1B',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  button: {
    shadowColor: '#FF6A3D',
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
};
