import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {fetchSearchMoviesData, fetchTopMoviesData} from '../../utils/movie_api';
import {Row, Col, Image} from "react-bootstrap";
import {Link} from 'react-router-dom';

class MovieSearchResult extends Component {
  constructor(){
    super();
    this.state = {listOfMovies: []}
  }

  getListOfMovies(movieName){
     fetchSearchMoviesData(movieName)
     .then(({listOfFindMovies}) => {
       this.setState({
         listOfMovies: listOfFindMovies.results
       })
     });
   }

   getListOfTopMovies(){
     fetchTopMoviesData()
     .then(({listOfTopMovies}) => {
       this.setState({
         listOfMovies: listOfTopMovies.results
       })
     });
    }

   componentWillReceiveProps(nextProps) {
     nextProps.movieName!=='' ? this.getListOfMovies(nextProps.movieName) : this.getListOfTopMovies();
   }

   componentDidMount(){
     this.getListOfTopMovies();
   }

  render() {
    let content;
    const imgSitePath = "https://image.tmdb.org/t/p/w500";
    const titleListOfMovies = this.props.movieName==='' ? 'Top movies' : 'List of movies';
    if(this.state.listOfMovies.length!==0){
      let items = this.state.listOfMovies.map(item =>
        <div key={item.id} className="itemOfMovies">
          <li>
            <Row>
              <Col md={3} sm={3}>
                <Image alt="Poster of movie" src={imgSitePath + item.poster_path} thumbnail/>
              </Col>
              <Col md={8} sm={8}>
                <Link to={`${item.id}`}>
                  <h3>{`${item.title} (${item.release_date.substring(0,4)})`}</h3>
                </Link>
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
              <div className="titleListOfMovies">
                <h3>{titleListOfMovies}</h3>
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

MovieSearchResult.propTypes = {
  movieName: PropTypes.string.isRequired,
}

export default MovieSearchResult;
