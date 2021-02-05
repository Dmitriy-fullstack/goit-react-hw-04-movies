import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage/HomePage';
import MoviesPage from '../views/MoviesPage/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage/MovieDetailsPage';
import NotFound from '../views/NotFound';
import Buttons from './Buttons/Buttons';



export default class FilmSearch extends Component {
    

    render() {
        return (
            <>
            
                {/* <li><NavLink exact to="/">HomePage</NavLink></li>
                <li><NavLink to="/movies">MoviesPage</NavLink></li> */}
                <Buttons/>
                {/* <li><NavLink to="/movies/:movieId">MovieDetailsPage</NavLink></li> */}
            

            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/movies" component={MoviesPage}/>
                <Route path="/movies/:movieId" component={MovieDetailsPage}/>
                <Route path="" component={NotFound}/>
                {/* <Route path="/movies/:movieId/cast" component={Cast}/>
                <Route path="/movies/:movieId/reviews" component={Reviews}/> */}
            </Switch>
            </>
        )
    }
}
