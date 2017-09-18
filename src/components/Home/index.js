import React, { Component} from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import MovieInput from './MovieInput.js';
import MovieSearchResult from './MovieSearchResult.js';
import {Grid, Row, Col } from "react-bootstrap";


class App extends Component {

  constructor(props) {
    super(props);

    this.setValue = this.setValue.bind(this);
    this.state = {
      movieName : '',
    }

  }

  setValue (item) {
    this.setState({
      movieName: item.movieName,
    })
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col md={12} sm={12}>
              <MovieInput setValue={this.setValue} />
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <MovieSearchResult movieName={this.state.movieName} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
