/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

import { Section, Select } from './SelectCharacter.styles';
import charactersData from './characters.json';

const options = charactersData.characters.map(({ name, url }) => ({
  value: url,
  label: name
}));

const SelectCharacter = ({ onSelectCharacter }) => (
  <Section>
    <label htmlFor="charactersSelect">Select a character:</label>
    <Select
      classNamePrefix="react-select"
      onChange={onSelectCharacter}
      inputId="charactersSelect"
      placeholder="List of characters"
      options={options}
    />
  </Section>
);

SelectCharacter.propTypes = {
  onSelectCharacter: PropTypes.func.isRequired
};

export default SelectCharacter;
