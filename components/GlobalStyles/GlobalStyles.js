import { COLORS, FAMILIES, WEIGHTS } from "../../constants";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  --white: ${COLORS.white};
  --gray-100: ${COLORS.gray[100]};
  --gray-200: ${COLORS.gray[200]};
  --gray-300: ${COLORS.gray[300]};
  --gray-400: ${COLORS.gray[400]};
  --blue-500: ${COLORS.blue[500]};
  --blue-600: ${COLORS.blue[600]};
  --blue-700: ${COLORS.blue[700]};

  --fw-light: ${WEIGHTS.light};
  --fw-regular: ${WEIGHTS.regular};
  --fw-semi-bold: ${WEIGHTS.semiBold};
  --fw-extra-bold: ${WEIGHTS.extraBold};
  
  --error: ${COLORS.error};

  --ff-sans-serif: ${FAMILIES.sansSerif};
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: var(--ff-sans-serif);
  background: ${({ theme }) => theme.body};
  /* transition: all 0.3s linear; */
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
