import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cast from '../../components/Cast/Cast'
import Reviews from '../../components/Reviews/Reviews'
import FetchMovieDetails from '../../components/Fetch/FetchMovieDetails'

export default class MovieDetailsPage extends Component {
    
    state = {
        film: {},
    }

    componentDidMount() {
        FetchMovieDetails(this.props.match.params.movieId).then(res => {
            this.setState({ film: res.data });
        })
    }

    render() {

        const { budget, genres, title, vote_average, vote_count, production_countries, production_companies, poster_path, overview } = this.state.film;

        return (
            <>
              <h1>{title}</h1>
              <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="poster" />
              <h2>Overview: {overview}</h2>
              <p>Budget: {budget}</p>
              <p>Votes: {vote_count}</p>
              <p>Vote average: {vote_average}</p>
                
            </>
        )
    }
}


