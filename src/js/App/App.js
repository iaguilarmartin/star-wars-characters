import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Header from './components/Header';
import FilmsList from './components/FilmsList';
import SelectCharacter from './components/SelectCharacter';
import LoadingCharacter from './components/LoadingCharacter';
import ErrorMessage from './components/ErrorMessage';
import { space } from './styles/spacing';
import { mediaQueries } from './styles/breakpoints';
import { getCharacterDetails } from './api/characters';

const Layout = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: ${space.x25} 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: ${space.x4} ${space.x2};
  padding: ${space.x3} ${space.x1};
  background-color: rgba(50, 51, 50, 0.6);

  ${mediaQueries.md(css`
    padding: ${space.x3};
  `)}
`;

class App extends Component {
  state = {
    loading: false,
    error: false,
    character: null
  };

  handleCharacterSelect = async ({ value }) => {
    try {
      this.setState({ loading: true, error: false, character: null });
      const character = await getCharacterDetails(value);
      this.setState({ character, loading: false });
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    const { character, loading, error } = this.state;

    return (
      <Layout>
        <Header />
        <Main>
          <SelectCharacter onSelectCharacter={this.handleCharacterSelect} />
          {loading && <LoadingCharacter />}
          {error && <ErrorMessage />}
          {character && (
            <FilmsList characterName={character.name} films={character.films} />
          )}
        </Main>
      </Layout>
    );
  }
}

export default App;
