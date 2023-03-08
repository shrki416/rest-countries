export const COLORS = {
  white: `hsl(0 0% 100%)`,
  gray: {
    100: `hsl(0 0% 98%)`,
    200: `hsl(0 0% 91%)`,
    300: `hsl(0 0% 52%)`,
  },
  blue: {
    500: `hsl(207 23% 22%)`,
    600: `hsl(207 26% 17%)`,
    700: `hsl(200 15% 8%)`,
  },
  error: `hsl(0 100% 66%)`,
};

export const WEIGHTS = {
  light: 300,
  semiBold: 600,
  extraBold: 800,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
  mono: inconsolata.style.fontFamily,
  serif: lora.style.fontFamily,
  sansSerif: inter.style.fontFamily,
};
