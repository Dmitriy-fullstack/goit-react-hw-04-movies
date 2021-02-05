import React, { Component } from 'react'
import PropTypes from 'prop-types';
import FetchAll from '../../components/Fetch/FetchAll';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    state = {
        films: []
    }

    componentDidMount() {
        FetchAll().then(res => {
            console.log(res.data.results);
            this.setState({ films: res.data.results });
       })
    }

    render() {
        return (
            <>
               <h1>Trending today:</h1> 
               <ul>
                   {this.state.films.map(film => {
                       const { id, title, } = film;
                       return(
                       <li key={id}>
                            <Link to={`/movies/${id}`}><h2>{title}</h2></Link>
                       </li> )
                   })}
               </ul>
            </>
        )
    }
}


HomePage.propTypes = {
    films: PropTypes.array,
}