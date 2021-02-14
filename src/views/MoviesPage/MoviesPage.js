import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchForm from "../../components/SearchForm/SearchForm";
import { FetchByName } from "../../Services/fetch";
import Style from "./moviesPage.module.css";
import MoviesListItems from "../../components/MovieListItems/MovieListItems";

export default class MoviesPage extends Component {
  state = {
    films: [],
    name: "",
    status: "idle",
  };
  componentDidMount() {
    const query = this.props.location.search.split("=")[1];

    if (!query) {
      return;
    }

    FetchByName(query).then((res) => {
      this.setState({ films: res.data.results, status: "resolve" });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      FetchByName(this.state.name).then((res) => {
        this.setState({ films: res.data.results, status: "resolve" });
        this.props.history.push(
          `${this.props.match.url}?query=${this.state.name}`
        );
      });
    }
  }

  onHandleSubmit = (name) => {
    this.setState({ name });
  };

  render() {
    const { films } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.onHandleSubmit} />
        <MoviesListItems location={this.props.location} films={films} />
      </>
    );
  }
}

MoviesPage.propTypes = {
  films: PropTypes.array,
  name: PropTypes.string,
  status: PropTypes.string,
};
