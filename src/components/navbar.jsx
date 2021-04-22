import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Navbar extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    if (this.state.movies.length === 0) return;
    return (
      <div>
        <h2>There are {this.state.movies.length} movies in this list</h2>
      </div>
    );
  }
}

export default Navbar;
