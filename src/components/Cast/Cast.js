import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FetchDetailsCast from '../Fetch/FetchDetailsCast'
import Style from './cast.module.css';

export default class Cast extends Component {
    state ={
        cast: []
    }
    
    componentDidMount() {
        const splittedUrl = this.props.match.url.split('/', 3);        
        FetchDetailsCast(splittedUrl[2]).then(res => {
            this.setState({ cast: res.data.cast });
     })
    }

    render() {
        const casts = [
            ...this.state.cast           
        ]   
        return (
            <>
              <ul>
                {casts.map(cast => {
                    const { profile_path, id, name } = cast;
                    return (<li className={Style.cast_item} key={id}>
                                <img className={Style.cast_img} src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="profile" />
                                <p>{name}</p>
                            </li> 
                    )
                })}                
              </ul>  
            </>
        )
    }
}

Cast.propTypes = {
    cast: PropTypes.array,
}
