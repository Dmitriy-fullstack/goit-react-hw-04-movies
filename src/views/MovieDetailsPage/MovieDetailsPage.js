import React, { Component, lazy } from "react";
import PropTypes from "prop-types";
import { FetchMovieDetails } from "../../Services/fetch";
import { Route, Link } from "react-router-dom";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import GoBack from "../../components/GoBack/GoBack";

export default class MovieDetailsPage extends Component {
  state = {
    film: {},
  };

  componentDidMount() {
    FetchMovieDetails(this.props.match.params.movieId).then((res) => {
      this.setState({ film: res.data });
    });
  }

  handleBack = () => {
    const { location, history } = this.props;
    console.log(location);

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push("/");
  };

  render() {
    const { location, match } = this.props;

    return (
      <>
        <GoBack handleBack={this.handleBack} />
        <MovieInfo film={this.state.film}></MovieInfo>
        <Link
          to={{
            pathname: `${match.url}/cast`,
            state: {
              from: location?.state?.from || "/",
            },
          }}
        >
          Cast
        </Link>
        <Link
          to={{
            pathname: `${match.url}/reviews`,
            state: {
              from: location?.state?.from || "/",
            },
          }}
        >
          Reviews
        </Link>

        <Route
          path={`${this.props.match.path}/cast`}
          render={(props) => <Cast id={this.props.match.params.movieId} />}
        />
        <Route
          path={`${this.props.match.path}/reviews`}
          render={(props) => <Reviews id={this.props.match.params.movieId} />}
        />
      </>
    );
  }
}
