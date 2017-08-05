import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {fetchMovieData, fetchTopMoviesData} from '../utils/movie_api';
import {Row, Col, Image} from "react-bootstrap";

class MovieReturn extends Component {
  constructor(){
    super();
    this.state = {listOfMovies: []}
  }

  getListOfMovies(movieName){
     fetchMovieData(movieName)
     .then(({movieData}) => {
       this.setState({
         listOfMovies: movieData.results
       })
     });
   }

   getListOfTopMovies(){
     fetchTopMoviesData()
     .then(({movieData}) => {
       this.setState({
         listOfMovies: movieData.results
       })
     });
    }

   componentWillReceiveProps(nextProps) {
     this.getListOfMovies(nextProps.movieName);
   }

   componentWillMount(){
     this.getListOfTopMovies();
   }

  render() {
    let content;
    const imgSitePath = "https://image.tmdb.org/t/p/w500";
    if(this.state.listOfMovies.length!==0){
      let items = this.state.listOfMovies.map((item, index) =>
        <div key={index} className="itemOfMovies">
          <li>
            <Row>
              <Col md={3} sm={3}>
                <Image alt="Poster of movie" src={imgSitePath + item.poster_path} thumbnail/>
              </Col>
              <Col md={8} sm={8}>
                <h3>{`${item.title} (${item.release_date.substring(0,4)})`}</h3>
                <p>{item.overview}</p>
                <p>{`Rating: ${item.vote_average}`}</p>
                <p>{`Numder of voted: ${item.vote_count}`}</p>
              </Col>
            </Row>
          </li>
        </div>);
      content =
        <div className="content">
          <Row>
            <Col md={12} sm={12}>
              <div className="listHeader">
                <h3>List of movies</h3>
            </div>
            </Col>
          </Row>
          <ul>
            {items}
          </ul>
        </div>;
    } else {
      content =
        <div className="notFoundContent">
          <Row>
            <Col md={12} sm={12}>
              <h3>No matches found</h3>
            </Col>
          </Row>
        </div>;
    }
    return (
      <div className="carReturnWrapper">
        {content}
      </div>
    );
  }
}

MovieReturn.propTypes = {
  movieName: PropTypes.string.isRequired,
}

export default MovieReturn;
