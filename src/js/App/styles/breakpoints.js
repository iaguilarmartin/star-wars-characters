import { css } from '@emotion/core';

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const mediaQueries = Object.keys(breakpoints).reduce(
  (result, size) => {
    // eslint-disable-next-line no-param-reassign
    result[size] = cls =>
      css`
        @media (min-width: ${breakpoints[size]}px) {
          ${cls};
        }
      `;
    return result;
  },
  {
    between: (from, to) => cls =>
      css`
        @media (min-width: ${from}px) and (max-width: ${to - 1}px) {
          ${cls};
        }
      `
  }
);
