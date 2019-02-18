import React, { Component } from 'react';
import styled from '@emotion/styled';

import Header from './components/Header';
import FilmsList from './components/FilmsList';
import SelectCharacter from './components/SelectCharacter';
import LoadingCharacter from './components/LoadingCharacter';
import ErrorMessage from './components/ErrorMessage';

import { space } from './styles/spacing';
import { getCharacterDetails } from './api/characters';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  height: 100%;
  margin: 0 auto;
  padding: ${space.x25} 0;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: ${space.x4} 0;
  padding: ${space.x3};
  background-color: rgba(50, 51, 50, 0.6);
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
          {character && <FilmsList films={character.films} />}
        </Main>
      </Layout>
    );
  }
}

export default App;
