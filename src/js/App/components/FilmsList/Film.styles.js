import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { space } from '../../styles/spacing';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { mediaQueries } from '../../styles/breakpoints';

export const Article = styled.article`
  margin-bottom: ${space.x2};
  padding: 0 ${space.x1};

  ${mediaQueries.md(css`
    width: 50%;
  `)};

  ${mediaQueries.lg(css`
    width: 33.3333%;
  `)};
`;

export const Container = styled.div`
  padding: ${space.x1} ${space.x2};
  background-color: rgba(76, 76, 76, 0.7);
  border-radius: 4px;
  border: 1px solid rgba(255, 0, 0, 0.45);
`;

export const Title = styled.h2`
  color: ${colors.yellow};
  font-family: ${fonts.DethStar};
  letter-spacing: 1px;
  font-size: ${fonts.sizes.m};
  font-weight: normal;
  margin-bottom: ${space.x05};
`;

export const Info = styled.span`
  display: flex;
  align-items: center;
  font-size: ${fonts.sizes.xxs};
  margin-bottom: ${space.x1};

  svg {
    height: 14px;
    margin-right: ${space.x1};
  }
`;

export const Description = styled.p`
  font-size: ${fonts.sizes.xxs};
  margin: ${space.x2} 0 ${space.x1};
  color: ${colors.greyLight};
`;

export const ReleaseDate = styled(Info)``;
