import React from 'react';
import { format } from 'date-fns';

import filmShape from './film-shape';
import CalendarIcon from './CalendarIcon';
import {
  Article,
  Container,
  Description,
  ReleaseDate,
  Title
} from './Film.styles';

const Film = ({ film }) => (
  <Article>
    <Container>
      <Title>{film.title}</Title>
      <ReleaseDate>
        <CalendarIcon />
        {format(new Date(film.release_date), 'dddd, MMM D YYYY')}
      </ReleaseDate>
      <Description>{film.opening_crawl}</Description>
    </Container>
  </Article>
);

Film.propTypes = {
  film: filmShape.isRequired
};

export default Film;
