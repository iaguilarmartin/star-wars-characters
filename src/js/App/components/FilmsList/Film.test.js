import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import mockFilm from '../../../../../jest/mocks/film';

import Film from './Film';

describe('<Film/>', () => {
  it('renders', () => {
    shallow(<Film film={mockFilm} />);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<Film film={mockFilm} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('displays date in "dddd, MMM D YYYY" format', () => {
    const film = {
      ...mockFilm,
      release_date: '1980-05-18'
    };
    const wrapper = shallow(<Film film={film} />);
    expect(wrapper.find('ReleaseDate').text()).toContain(
      'Saturday, May 17 1980'
    );
  });
});
