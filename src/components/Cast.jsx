import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Cast = () => {
  const [actors, setActors] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const request = () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzdiNDI4MzI0OGZjMzY2NWFmMWI1ODUzYTYzODBiNyIsInN1YiI6IjY1NDkxM2I2ZDU1YzNkMDEzOTIwMWI2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G9Kt9B3SjHXWQSy-TMwHC2FuMk_yb5YQt_GoSOYQB1E',
        },
      })
        .then(response => response.json())
        .then(response => setActors(response.cast))
        .catch(err => console.error(err));
    };
    request();
  }, [id]);

  return (
    <>
      {actors.length ? (
        <ul style={{ listStyleType: 'none' }}>
          {actors.map(a => {
            return (
              <li key={a.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${a.profile_path}`}
                  alt={actors.character}
                />
                <p> name:{' ' + a.name}</p>
                <p>character: {' ' + a.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>nothing</div>
      )}
    </>
  );
};
export default Cast;
