import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage/HomePage';
import MoviesPage from '../views/MoviesPage/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage/MovieDetailsPage';
import NotFound from '../views/NotFound';
import Buttons from './Buttons/Buttons';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';



export default class FilmSearch extends Component {
    

    render() {
        return (
            <>
            <Buttons/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/movies/:movieId" component={MovieDetailsPage}/>
                <Route path="/movies" component={MoviesPage}/>                
                <Route path="" component={NotFound}/>
                <Route path="/movies/:movieId/cast" component={Cast}/>
                <Route path="/movies/:movieId/reviews" component={Reviews}/>
            </Switch>
            </>
        )
    }
}
