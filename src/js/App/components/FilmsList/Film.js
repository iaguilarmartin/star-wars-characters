import React from 'react';
import { format } from 'date-fns';

import filmShape from './film-shape';
import CalendarIcon from './icons/Calendar';
import MoneyIcon from './icons/Money';
import FilmIcon from './icons/Film';
import {
  Article,
  Container,
  Description,
  ReleaseDate,
  Info,
  Title
} from './Film.styles';

const Film = ({
  film: {
    title,
    director,
    producer,
    release_date: releaseDate,
    opening_crawl: openingCrawl
  }
}) => (
  <Article>
    <Container>
      <Title>{title}</Title>
      <ReleaseDate>
        <CalendarIcon />
        {format(new Date(releaseDate), 'dddd, MMM D YYYY')}
      </ReleaseDate>
      <Info>
        <FilmIcon />
        {director}
      </Info>
      <Info>
        <MoneyIcon />
        {producer}
      </Info>
      <Description>{openingCrawl}</Description>
    </Container>
  </Article>
);

Film.propTypes = {
  film: filmShape.isRequired
};

export default Film;
