const getCharacterFilms = character => {
  const promises = character.films.map(filmUrl =>
    fetch(filmUrl).then(response => response.json())
  );
  return Promise.all(promises);
};

// eslint-disable-next-line import/prefer-default-export
export const getCharacterDetails = async characterUrl => {
  const character = await fetch(characterUrl).then(response => response.json());
  const films = await getCharacterFilms(character);
  character.films = films.sort(
    (film1, film2) =>
      new Date(film2.release_date).getTime() -
      new Date(film1.release_date).getTime()
  );
  return character;
};
