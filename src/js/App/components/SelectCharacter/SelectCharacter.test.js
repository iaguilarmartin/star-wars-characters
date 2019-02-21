import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SelectCharacter from './SelectCharacter';

describe('<LoadingCharacter/>', () => {
  it('renders', () => {
    shallow(<SelectCharacter onSelectCharacter={() => {}} />);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<SelectCharacter onSelectCharacter={() => {}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('calls handler function on select character', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(
      <SelectCharacter onSelectCharacter={mockHandler} />
    );
    wrapper.find('Select').simulate('change');
    expect(mockHandler).toHaveBeenCalled();
  });
});
