import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loyout from './components/Loyout';

const FilmDatail = lazy(() => import('./pages/FilmDatail'));
const Movies = lazy(() => import('./pages/Movies'));
const Home = lazy(() => import('./pages/Home'));
export const App = () => {
  return (
    <Loyout>
      <Suspense fallback={<div>fdv</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movies/:id/*" element={<FilmDatail />} />
        </Routes>
      </Suspense>
    </Loyout>
  );
};
