import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import mockFilms from '../../../../../jest/mocks/films';

import FilmsList from './FilmsList';

const mockCharacter = 'Luke Sky Walker';

describe('<FilmsList/>', () => {
  it('renders', () => {
    shallow(<FilmsList characterName={mockCharacter} films={mockFilms} />);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(
      <FilmsList characterName={mockCharacter} films={mockFilms} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('displays character name and a list of films', () => {
    const wrapper = shallow(
      <FilmsList characterName={mockCharacter} films={mockFilms} />
    );
    expect(wrapper.find('span').text()).toBe(mockCharacter);
    expect(wrapper.find('Film').length).toBe(5);
  });
});
