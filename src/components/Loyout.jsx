import React from 'react';

import { Conteiner, Header, Link } from './components';

const Loyout = ({ children }) => {
  return (
    <Conteiner>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </Header>
      {children}
    </Conteiner>
  );
};

export default Loyout;
