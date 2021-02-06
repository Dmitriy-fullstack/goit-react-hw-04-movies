import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FetchDetailsReviews from '../Fetch/FetchDetailsReviews'

export default class Reviews extends Component {
    static propTypes = {
        reviews:PropTypes.array,
    }

    state = {
        reviews: [],
    }

    componentDidMount() {
        const splittedUrl = this.props.match.url.split('/', 3);        
        FetchDetailsReviews(splittedUrl[2]).then(res => {
            
            if (res.data.results.length > 0) {
                this.setState({ reviews: res.data.results });                  
            }
        })
    }

    render() {
        return (
            <>
             <ul>
                {this.state.reviews.map(review => {                    
                    const { author, id, content } = review;
                    return (<li key={id}>
                                <h2>Author: {author}</h2>
                                <p>{content}</p>                        
                            </li> 
                    )
                })}
                {/* {this.state.reviews.length === 0 ? <span>Nothing found</span> : <span>And Others...</span>}                 */}
            </ul>   
            </>
        )
    }
}
