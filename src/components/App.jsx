import { Routes, Route } from 'react-router-dom';
import { Conteiner, Header, Link } from './components';
import Home from 'pages/Home';
import FilmDatail from 'pages/FilmDatail';
import Cast from './Cast';
import Reviews from './Reviews';
import Movies from 'pages/Movies';
export const App = () => {
  return (
    <Conteiner>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:id" element={<FilmDatail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Conteiner>
  );
};
