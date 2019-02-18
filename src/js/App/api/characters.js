const getCharacterFilms = character => {
  const promises = character.films.map(filmUrl =>
    fetch(filmUrl).then(response => response.json())
  );
  return Promise.all(promises);
};

// eslint-disable-next-line import/prefer-default-export
export const getCharacterDetails = async characterUrl => {
  const character = await fetch(characterUrl).then(response => response.json());
  character.films = await getCharacterFilms(character);
  return character;
};
