import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ErrorMessage from './ErrorMessage';

describe('<ErrorMessage/>', () => {
  it('renders', () => {
    shallow(<ErrorMessage />);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
