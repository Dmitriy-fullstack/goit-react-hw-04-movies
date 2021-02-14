import React, { Component } from "react";
import PropTypes from "prop-types";
import { FetchAll } from "../../Services/fetch";
import Style from "./homePage.module.css";
import MoviesListItems from "../../components/MovieListItems/MovieListItems";

export default class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    FetchAll().then((res) => {
      this.setState({ films: res.data.results });
    });
  }

  render() {
    return (
      <>
        <MoviesListItems
          location={this.props.location}
          films={this.state.films}
        />
      </>
    );
  }
}

HomePage.propTypes = {
  films: PropTypes.array,
};
