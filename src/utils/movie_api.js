import axios from 'axios';

const API_URL = 'https://api.themoviedb.org';
const ID_KEY = '777900dcf07908fd30eecbc9c9d178fc';

export {fetchMovieData, fetchTopMoviesData};

// function getRepos(username) {
//   const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
//   return axios.get(url).then(response => response.data);
// }

function fetchMovieData(movieName) {
  return axios.all([
    axios.get(`${API_URL}/3/search/movie?api_key=${ID_KEY}&query=${movieName}`),
  ])
  .then(([movie]) => ({
    movieData: movie.data,
  }));
}

function fetchTopMoviesData() {
  return axios.all([
    axios.get(`${API_URL}/3/movie/top_rated?api_key=${ID_KEY}&language=en-US&page=1`),
  ])
  .then(([movie]) => ({
    movieData: movie.data,
  }));
}
