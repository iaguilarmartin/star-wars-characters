import React from 'react';
import styled from '@emotion/styled';

import fonts from '../../styles/fonts';

import { space } from '../../styles/spacing';

import Spinner from './Spinner';

const Section = styled.section`
  text-align: center;
  margin: ${space.x3};
  font-family: ${fonts.DethStar};
  letter-spacing: 1px;
`;

const LoadingAnimation = styled(Spinner)`
  margin: ${space.x3} auto;
`;

const LoadingCharacter = () => (
  <Section>
    <LoadingAnimation />
    Loading character information...
  </Section>
);

export default LoadingCharacter;
