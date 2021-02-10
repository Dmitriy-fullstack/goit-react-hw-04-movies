import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import SearchForm from '../../components/SearchForm/SearchForm';
import FetchByName from '../../components/Fetch/FetchByName';
import Style from './moviesPage.module.css';

export default class MoviesPage extends Component {
    state ={
        films: [],        
        name: '',
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.name !== this.state.name) {
            FetchByName(this.state.name).then(res => {
                this.setState({ films: res.data.results, status: 'resolve' })
            }) 
        }
    }

    onHandleSubmit = name => {
        this.setState({name})
    }

    render() {
        const { films, status } = this.state;

            return (
                <>
                   <SearchForm onSubmit={this.onHandleSubmit}/> 
                   {status === 'resolve' && 
                   <ul>

                       {films.map(film => {
                           const {id, popularity, title} = film;
                            return (
                                <li key={id}>
                                    <Link to={`/movies/${id}`}>                                
                                        <h2>{title}</h2>
                                        <p>Rating: {popularity}</p>
                                    </Link>
                                </li>
                            )
                       })}
                   </ul>

                   }
                </>
            )
    }
}

MoviesPage.propTypes = {
    films:PropTypes.array,
    name:PropTypes.string,
    status:PropTypes.string, 
}

