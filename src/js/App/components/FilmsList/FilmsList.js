import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { mediaQueries } from '../../styles/breakpoints';
import { space } from '../../styles/spacing';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import filmShape from './film-shape';
import Film from './Film';

const Section = styled.section`
  padding-top: ${space.x3};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  margin: ${space.x2} 0 ${space.x3};
  text-transform: uppercase;
  line-height: 1.5;

  span {
    color: ${colors.blue};
    padding: 0 ${space.x1};
    white-space: nowrap;
  }

  ${mediaQueries.md(css`
    font-size: ${fonts.sizes.l};
  `)}
`;

const FilmsList = ({ films, characterName }) => (
  <Section>
    <Header>
      Complete list of <span>{characterName}</span> films
    </Header>
    {films.map(film => (
      <Film key={film.episode_id} film={film} />
    ))}
  </Section>
);

FilmsList.propTypes = {
  characterName: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired
};

export default FilmsList;
