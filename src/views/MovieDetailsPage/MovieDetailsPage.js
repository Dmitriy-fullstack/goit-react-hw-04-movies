import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cast from '../../components/Cast/Cast'
import Reviews from '../../components/Reviews/Reviews'
import FetchMovieDetails from '../../components/Fetch/FetchMovieDetails'
import {Route, Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Style from './MovieDetailsPage.module.css';

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
                <div className={Style.container}>
                    <div className ={Style.film_img}><img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="poster" /></div>
                    <div>
                        <h1>{title}</h1>
                        <h2 className={Style.film_data}><span className={Style.film_data_titles}>Overview:</span> {overview}</h2>
                        <p className={Style.film_data}><span className={Style.film_data_titles}>Budget:</span> {budget}</p>
                        <p className={Style.film_data}><span className={Style.film_data_titles}>Votes:</span> {vote_count}</p>
                        <p className={Style.film_data}><span className={Style.film_data_titles}>Vote average:</span> {vote_average}</p>
                        
                        <ul className ={Style.product_info}> <span className={Style.film_data_titles}>Genres:</span>
                            {genres !== undefined && genres.map(item => {
                                const { id, name } = item;
                                return (
                                    <li className={Style.genres_item} key={id}>
                                        {name}
                                    </li>
                                )
                            })}
                        </ul> 
                        <ul className={Style.product_info}> <span className={Style.film_data_titles}>Production countries:</span>
                            {production_countries !== undefined && production_countries.map(item => {                        
                                const { name } = item;
                                return (
                                    <li className={Style.production_countries_item} key={uuidv4()}>
                                        {name}
                                    </li>
                                )
                            })}
                        
                        </ul>
                        <ul> Production companies:
                            {production_companies !== undefined && production_companies.map(item => {                        
                                const { name } = item;
                                return (
                                    <li key={uuidv4()}>
                                        {name}
                                    </li>
                                )
                            })}
                        </ul> 
                    </div>
                </div>

                <div>
                    <Link to={`${this.props.match.url}/credits`}>Cast</Link>
                    <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
                    <Route exact path={`${this.props.match.url}/reviews`} component={Reviews}/>
                    <Route exact path={`${this.props.match.url}/credits`} component={Cast}/>
                    
                </div>


            </>
        )
    }
}


