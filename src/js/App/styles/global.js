import { css } from '@emotion/core';

import normalize from './normalize';
import fonts from './fonts';
import colors from './colors';

export default css`
  ${normalize};
  ${fonts.faces};

  html {
    box-sizing: border-box;
    font-size: ${fonts.sizes.base};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    overflow-x: hidden;
    font-family: ${fonts.AnakinMono};
    font-size: ${fonts.sizes.m};
    color: ${colors.white};
    fill: ${colors.white};
    background: ${colors.black} url('/assets/images/stars.png') repeat left top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  fieldset {
    margin: 0;
    padding: 0;
  }

  fieldset {
    border: none;
  }

  #root {
    height: 100%;
  }
`;
