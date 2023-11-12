import React, { useEffect, useState } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { Post } from 'components/components';
import { Deteils } from 'components/components';
const FilmDatail = () => {
  const location = useLocation();
  let { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const request = () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzdiNDI4MzI0OGZjMzY2NWFmMWI1ODUzYTYzODBiNyIsInN1YiI6IjY1NDkxM2I2ZDU1YzNkMDEzOTIwMWI2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G9Kt9B3SjHXWQSy-TMwHC2FuMk_yb5YQt_GoSOYQB1E',
        },
      })
        .then(response => response.json())
        .then(response => setFilm(response))
        .catch(err => console.error(err));
    };
    request();
  }, [id]);
  const showFilb = () => {};
  showFilb();
  return (
    <div>
      {film ? (
        <>
          <Link to={location.state?.from || '/Movies'}>
            <button>go to back</button>
          </Link>
          <Post>
            <img
              src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`}
              alt={film.title}
            />
            <div>
              <h2> {film.original_title}</h2>
              <p>popularity {film.popularity}</p>
              <h4> Overviwe </h4>
              <p> {film.overview}</p>
              <h4> Genres </h4>
              <p> {film.genres.map(a => a.name + ' ')}</p>
            </div>
          </Post>
          <Deteils>
            <p>Additional information</p>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <Link to="cast">cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </Deteils>
          <Outlet />
        </>
      ) : (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src="alternate_image_url" alt="Alternate Image" />
      )}
    </div>
  );
};

export default FilmDatail;
//https://api.themoviedb.org /3/movie/ {movie_id} /images
