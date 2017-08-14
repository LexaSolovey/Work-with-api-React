import axios from 'axios';

const API_URL = 'https://api.themoviedb.org';
const ID_KEY = '777900dcf07908fd30eecbc9c9d178fc';

export {fetchSearchMoviesData, fetchTopMoviesData, fetchMovieData};

function fetchSearchMoviesData(movieName) {
  return axios.all([
    axios.get(`${API_URL}/3/search/movie?api_key=${ID_KEY}&query=${movieName}`),
  ])
  .then(([listOfFindMovies]) => ({
    listOfFindMovies: listOfFindMovies.data,
  }));
}

function fetchTopMoviesData() {
  return axios.all([
    axios.get(`${API_URL}/3/movie/top_rated?api_key=${ID_KEY}&language=en-US&page=1`),
  ])
  .then(([listOfTopMovies]) => ({
    listOfTopMovies: listOfTopMovies.data,
  }));
}
function fetchMovieData(movieId) {
  return axios.all([
    axios.get(`${API_URL}/3/movie/${movieId}?api_key=${ID_KEY}`),
  ])
  .then(([movieData]) => ({
    movieData: movieData.data,
  }));
}
