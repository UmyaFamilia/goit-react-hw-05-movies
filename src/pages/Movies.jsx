import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Inpute from '../components/Inpute';
import FilmList from '../components/FilmList';
const Movies = () => {
  const [films, setFilms] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzdiNDI4MzI0OGZjMzY2NWFmMWI1ODUzYTYzODBiNyIsInN1YiI6IjY1NDkxM2I2ZDU1YzNkMDEzOTIwMWI2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G9Kt9B3SjHXWQSy-TMwHC2FuMk_yb5YQt_GoSOYQB1E',
          },
        }
      )
        .then(response => response.json())
        .then(response => setFilms(response.results))
        .catch(err => console.error(err));
    }
  }, [query]);
  const search = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
  };

  return (
    <>
      <Inpute search={search} />

      {films ? <FilmList list={films} /> : <></>}
    </>
  );
};

export default Movies;
