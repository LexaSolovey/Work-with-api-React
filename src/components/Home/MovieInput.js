import React, { Component } from 'react';


export default class CarInputs extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleMovieNameChange = this.handleMovieNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleMovieNameChange(event) {
    this.props.setValue({movieName: event.target.value});
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
        </form>
      </div>
    );
  }
}
