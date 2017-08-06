import React, { Component } from 'react';


export default class CarInputs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
    };
    this.handleMovieNameChange = this.handleMovieNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  buttonClick() {
    this.props.setValue(this.state);
  }

  handleMovieNameChange(event) {
    this.setState({movieName: event.target.value})
  }

  render() {
    return (
      <div className="movieInput">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a name of movie..."
            value={this.state.movieName}
            onChange={this.handleMovieNameChange}
            required />
          <input type="submit" value="Submit" onClick={this.buttonClick}/>
        </form>
      </div>
    );
  }
}
