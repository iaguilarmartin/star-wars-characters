import { rem } from 'polished';

import fonts from './fonts';

export const pixelsToRem = value => rem(value, fonts.sizes.base);

const base = 8;

const sizes = [
  0.25,
  0.5,
  0.75,
  1,
  1.25,
  1.5,
  1.75,
  2,
  2.5,
  3,
  3.5,
  4,
  5,
  6,
  7,
  8,
  9
];

export const space = sizes.reduce((result, size) => {
  const value = { ...result };
  const sizeName = `x${size.toString().replace('.', '')}`;
  value[sizeName] = pixelsToRem(base * size);
  return value;
}, {});
