import React from 'react';

const Inpute = ({ search }) => {
  return (
    <form action="" onSubmit={search}>
      <input id="searchInput" type="text" />
      <button type="submit">search</button>
    </form>
  );
};

export default Inpute;
