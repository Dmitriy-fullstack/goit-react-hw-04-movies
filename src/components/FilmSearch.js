import React, { Suspense, lazy } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom';
// import HomePage from '../views/HomePage/HomePage';
// import MoviesPage from '../views/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../views/MovieDetailsPage/MovieDetailsPage';
import NotFound from '../views/NotFound';
import Buttons from './Buttons/Buttons';


const HomePage = lazy(() => import('../views/HomePage/HomePage.js' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(()=>import('../views/MoviesPage/MoviesPage.js' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(()=>import('../views/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "details-page" */))


export default function FilmSearch()  {
    
   
    return (
        <>
            <Buttons/>
            <Suspense fallback={<h1>Загружаю...</h1>}>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/movies/:movieId" component={MovieDetailsPage}/>
                    <Route path="/movies" component={MoviesPage}/>                
                    <Route path="" component={NotFound}/>
                </Switch>
            </Suspense>
        </>
    )
    
}
