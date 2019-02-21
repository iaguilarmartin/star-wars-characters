import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const mockCharacter = {
  name: 'Luke Skywalker',
  films: []
};

describe('<App/>', () => {
  it('renders', () => {
    shallow(<App />);
  });

  it('shows correct layout according to state', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({ loading: true });
    expect(wrapper.find('LoadingCharacter').exists()).toBe(true);

    wrapper.setState({ loading: false, error: true });
    expect(wrapper.find('ErrorMessage').exists()).toBe(true);
    expect(wrapper.find('LoadingCharacter').exists()).toBe(false);

    wrapper.setState({
      loading: false,
      error: false,
      character: mockCharacter
    });
    expect(wrapper.find('ErrorMessage').exists()).toBe(false);
    expect(wrapper.find('LoadingCharacter').exists()).toBe(false);
    expect(wrapper.find('FilmsList').exists()).toBe(true);
  });
});
