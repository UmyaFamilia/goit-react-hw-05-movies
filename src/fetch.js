const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzdiNDI4MzI0OGZjMzY2NWFmMWI1ODUzYTYzODBiNyIsInN1YiI6IjY1NDkxM2I2ZDU1YzNkMDEzOTIwMWI2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G9Kt9B3SjHXWQSy-TMwHC2FuMk_yb5YQt_GoSOYQB1E',
  },
};

export default fetch(
  'https://api.themoviedb.org/3/trending/all/day?language=en-US',
  options
)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
