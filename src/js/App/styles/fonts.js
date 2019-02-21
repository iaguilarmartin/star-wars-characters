import { css } from '@emotion/core';

const base = 10;

// Font sizes
const sizes = {
  base: `${base}px`,
  xxs: '1rem',
  xs: '1.2rem',
  s: '1.4rem',
  m: '1.6rem',
  l: '2rem',
  xl: '3rem',
  xxl: '4.2rem'
};

// Font names
const names = {
  AnakinMono: "'Anakin Mono'",
  DethStar: "'Death Star'",
  Starjhol: "'Star Wars Jedi Hole'",
  Starjout: "'Star Wars Jedi Outline'"
};

// Font faces
const faces = css`
  @font-face {
    font-family: ${names.AnakinMono};
    src: url('/assets/fonts/anakinmono.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: ${names.DethStar};
    src: url('/assets/fonts/Death Star.otf') format('opentype');
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
