import React from 'react'
import PropTypes from 'prop-types'
import Style from '../../views/MovieDetailsPage/MovieDetailsPage.module.css'
import { v4 as uuidv4 } from 'uuid';


function MovieInfo({film}) {
    const { title, poster_path, overview, vote_average, genres, vote_count, production_countries, production_companies } = film;
    return (
       <>
            <div className={Style.container}>
               
                <div><img  src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="poster" /></div>
                <div className={Style.film_data_section}>
                
                    <h1>{title}</h1>
                    <h2 className={Style.film_data}><span className={Style.film_data_titles}>Overview:</span> {overview}</h2>
                        
                        <p className={Style.film_data}><span className={Style.film_data_titles}>Votes:</span> {vote_count}</p>
                        <p className={Style.film_data}><span className={Style.film_data_titles}>Vote average:</span> {vote_average}</p>
                    <ul className ={Style.product_info}>Genres:
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
                    <ul className={Style.product_info}> <span className={Style.film_data_titles}>Production companies:</span>
                            {production_companies !== undefined && production_companies.map(item => {                        
                                const { name } = item;
                                return (
                                    <li className={Style.production_countries_item} key={uuidv4()}>
                                        {name}
                                    </li>
                                )
                            })}
                    </ul> 
                </div>
                
            </div>
                <div>
                    <p>Additional information:</p>
                </div>
       </>
    )
}

MovieInfo.propTypes = {

}

export default MovieInfo

