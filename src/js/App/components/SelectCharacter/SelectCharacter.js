/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { space } from '../../styles/spacing';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { mediaQueries } from '../../styles/breakpoints';

import charactersData from './characters.json';

const Section = styled.section`
  display: flex;
  flex-direction: column;

  ${mediaQueries.md(css`
    align-items: center;
    flex-direction: row;
  `)}
`;

const Select = styled(ReactSelect)`
  margin-top: ${space.x1};
  font-family: ${fonts.Starjedi};
  outline: none;

  ${mediaQueries.md(css`
    width: 350px;
    margin-top: 0;
    margin-left: ${space.x1};
  `)}

  .react-select__control {
    background-color: ${colors.greyDark};
    border-color: ${colors.grey};
  }

  .react-select__value-container {
    outline: none;
  }

  .react-select__control--is-focused {
    border-color: ${colors.yellow} !important;
    box-shadow: 0 0 0 1px ${colors.yellow};
  }

  .react-select__single-value {
    color: ${colors.white};
  }

  .react-select__placeholder {
    font-size: ${fonts.sizes.s};
    font-style: italic;
  }

  .react-select__menu {
    background-color: ${colors.greyDark};
  }

  .react-select__option--is-focused {
    background-color: ${colors.grey};
  }

  .react-select__option--is-selected {
    background-color: ${colors.blue};
  }
`;

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
