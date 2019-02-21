import React from 'react';
import styled from '@emotion/styled';

import fonts from '../../styles/fonts';
import { space } from '../../styles/spacing';

const Section = styled.section`
  text-align: center;
  margin: ${space.x3} 0;
  font-family: ${fonts.DethStar};
  letter-spacing: 1px;
`;

const Image = styled.img`
  display: block;
  margin: ${space.x2} auto;
`;

const ErrorMessage = () => (
  <Section>
    <Image alt="" src="/assets/images/porg.png" />
    ooopss something went wrong...
  </Section>
);

export default ErrorMessage;
