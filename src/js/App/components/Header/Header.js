import React from 'react';
import styled from '@emotion/styled';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const StyledHeader = styled.header`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: ${fonts.sizes.xxl};
  font-family: ${fonts.Starjout};
  font-weight: normal;
  color: ${colors.white};

  small {
    color: ${colors.yellow};
    font-family: ${fonts.Starjhol};
    font-size: ${fonts.sizes.xl};
    display: block;
  }
`;

const Header = () => (
  <StyledHeader>
    <H1>
      Star Wars<small>Characters</small>
    </H1>
  </StyledHeader>
);
export default Header;
