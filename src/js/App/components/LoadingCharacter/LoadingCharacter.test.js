import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import LoadingCharacter from './LoadingCharacter';

describe('<LoadingCharacter/>', () => {
  it('renders', () => {
    shallow(<LoadingCharacter />);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<LoadingCharacter />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
