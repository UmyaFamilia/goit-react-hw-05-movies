import React, { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { Link, useParams, Route, Routes, useLocation } from 'react-router-dom';
import { Post } from 'components/components';
import { Deteils } from 'components/components';
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));
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

  return (
    <div>
      {film ? (
        <>
          <Link to={location.state?.from || '/Movies'}>
            <button>go to back</button>
          </Link>
          <Post>
            <img
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w400/${film.poster_path}`
                  : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image'
              }
              alt={film.title}
              style={{
                width: '400px',
              }}
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
          <Suspense>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      ) : (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src="alternate_image_url" alt="Alternate Image" />
      )}
    </div>
  );
};

export default FilmDatail;
