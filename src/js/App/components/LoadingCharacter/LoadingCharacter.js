import React from 'react';
import styled from '@emotion/styled';

import fonts from '../../styles/fonts';

const Section = styled.section`
  flex-grow: 1;
  position: relative;
  text-align: center;
`;

const LoadingMeassage = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-family: ${fonts.Starjedi};
`;

const LoadingCharacter = () => (
  <Section>
    <LoadingMeassage>Loading character information...</LoadingMeassage>
  </Section>
);

export default LoadingCharacter;
