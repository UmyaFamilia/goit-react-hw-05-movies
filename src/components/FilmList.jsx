import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const FilmList = ({ list }) => {
  const location = useLocation();

  return (
    <ul style={{ listStyleType: 'none' }}>
      {list.map(element => {
        return (
          <li key={element.id}>
            <Link to={`/Movies/${element.id}`} state={{ from: location }}>
              {element.original_title}{' '}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FilmList;
