import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  useEffect(() => {
    const request = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
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
        .then(response => setContent(response.results))
        .catch(err => console.error(err));
    };

    request();
  }, [id]);

  return (
    <div>
      {content ? (
        <ul style={{ listStyleType: 'none' }}>
          {content.map(a => {
            return (
              <li key={a.id}>
                <h4> author:{' ' + a.author}</h4>
                <p>{a.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>error</p>
      )}
    </div>
  );
};

export default Reviews;
