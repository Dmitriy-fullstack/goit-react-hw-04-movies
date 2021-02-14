import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Buttons from "./Buttons/Buttons";

const HomePage = lazy(() =>
  import("../views/HomePage/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import(
    "../views/MoviesPage/MoviesPage.js" /* webpackChunkName: "movies-page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "../views/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "details-page" */
  )
);

export default function FilmSearch() {
  return (
    <Router>
      <Buttons />
      <Suspense fallback={<h1>Загружаю...</h1>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          {/* <Route path="" component={NotFound}/> */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
}
