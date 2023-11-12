import React, { useEffect } from 'react';
import FilmList from 'components/FilmList';
import { useState } from 'react';
const Home = () => {
  const [listFilme, setListFilme] = useState([]);

  useEffect(() => {
    const request = () => {
      fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
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
        .then(response => setListFilme(response.results))
        .catch(err => console.error(err));
    };
    request();
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <FilmList list={listFilme} />
    </>
  );
};

export default Home;
