import React, { Component } from "react";
import Like from "./common/like";
import { deleteMovie } from "../services/fakeMovieService";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  handleDelete = (id) => {
    this.setState(deleteMovie(id));
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    console.log(movies);
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    if (this.state.movies.length === 0)
      return <h2>There are no movies in this list</h2>;
    return (
      <div>
        <h2>There are {this.state.movies.length} movies in this list</h2>
        {this.renderTable()}
      </div>
    );
  }

  renderTable() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage } = this.state;
    const movies = paginate(this.state.movies, currentPage, pageSize);
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
