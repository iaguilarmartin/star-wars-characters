import { css } from '@emotion/core';

const base = 10;

// Font sizes
const sizes = {
  base: `${base}px`,
  xxs: '1rem',
  xs: '1.2rem',
  s: '1.4rem',
  m: '1.6rem',
  l: '1.8rem',
  xl: '2rem',
  xxl: '3rem',
  xxxl: '3.6rem',
  xxxxl: '4.8rem',
  xxxxxl: '5.2rem'
};

// Font names
const names = {
  Starjedi: "'Star Wars Jedi'",
  Starjhol: "'Star Wars Jedi Hole'",
  Starjout: "'Star Wars Jedi Outline'"
};

// Font faces
const faces = css`
  @font-face {
    font-family: ${names.Starjedi};
    src: url('/assets/fonts/Starjedi.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: ${names.Starjhol};
    src: url('/assets/fonts/Starjhol.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: ${names.Starjout};
    src: url('/assets/fonts/Starjout.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }
`;

const fonts = {
  sizes,
  faces,
  ...names
};

export default fonts;
