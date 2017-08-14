import React, { Component } from 'react';
import "./movie.css";
import {Grid, Row, Col, Image, Table, Button } from "react-bootstrap";
import {fetchMovieData} from '../../utils/movie_api';
import {Link} from 'react-router-dom';

export default class Movie extends Component {
  constructor(){
    super();
    this.state = {
      movieData: {
        production_countries: [],
        production_companies: [],
        genres: [],
      }
    }
  }

  getMovieData(){
    const movieId = this.props.match.params.id;
    fetchMovieData(movieId)
    .then(({movieData}) => {
      this.setState({
        movieData: movieData,
      })
    });
   }

   componentWillMount(){
     this.getMovieData();
   }

   getNamesOfDescriptionItems(prop){
     const listOfCountries=prop;
     let names = '';
     listOfCountries.map((item, index) => {
       return names += listOfCountries.length===index+1 ? item.name : `${item.name}, `;
     });
     return names;
   }

  render() {
    const movieData = this.state.movieData;
    const imgSitePath = "https://image.tmdb.org/t/p/w500";

    const descriptionValues =
      <Table responsive striped className="descriptionTable">
        <tbody>
          <tr>
            <td className="type">Date of reliase</td>
            <td className="value">{movieData.release_date}</td>
          </tr>
          <tr>
            <td className="type">Country</td>
            <td className="value">{this.getNamesOfDescriptionItems(movieData.production_countries)}</td>
          </tr>
          <tr>
            <td className="type">Tagline</td>
            <td className="value">{movieData.tagline}</td>
          </tr>
          <tr>
            <td className="type">Genres</td>
            <td className="value">{this.getNamesOfDescriptionItems(movieData.genres)}</td>
          </tr>
          <tr>
            <td className="type">Budget</td>
            <td className="value">{`${movieData.budget} $`}</td>
          </tr>
          <tr>
            <td className="type">Production Companies</td>
            <td className="value">{this.getNamesOfDescriptionItems(movieData.production_companies)}</td>
          </tr>
          <tr>
            <td className="type">Rating</td>
            <td className="value">{movieData.vote_average}</td>
          </tr>
          <tr>
            <td className="type">Numder of voted</td>
            <td className="value">{movieData.vote_count}</td>
          </tr>
          <tr>
            <td className="type">Runtime</td>
            <td className="value">{`${movieData.runtime} min`}</td>
          </tr>
        </tbody>
      </Table>

    return (
      <div className="Movie">
        <Grid>
          <div className="movieInfo">
            <Row>
              <Col md={12} sm={12} xs={12}>
                <h3>{movieData.title}</h3>
              </Col>
            </Row>
            <Row>
              <Col md={3} sm={3} xs={4}>
                <Image alt="Poster of movie" src={imgSitePath + movieData.poster_path} thumbnail/>
              </Col>
              <Col md={7} sm={7} xs={8}>
                <div className="descriptionOFMovie">
                  {descriptionValues}
                </div>
              </Col>
            </Row>
            <div className="overview">
              <Row>
                <Col md={10} sm={10} mdOffset={1} smOffset={1}>
                  <h3>Overview</h3>
                  <p>{movieData.overview}</p>
                </Col>
              </Row>
              <div className="backBtn">
                <Row>
                  <Col md={2} sm={2} xs={2} mdOffset={5} smOffset={5} xsOffset={5}>
                    <Link to='/'>
                      <Button>Back</Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}
