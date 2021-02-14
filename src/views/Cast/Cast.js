import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FetchDetailsCasts} from '../../Services/fetch'
import CastList from '../../components/CastList/CastList'

export default class Cast extends Component {
    
    state = {
        cast: []
    }

    componentDidMount() {
                
        FetchDetailsCasts(this.props.id).then(data => this.setState({ cast: data.cast.slice(0, 6) }))
        
        
    }
    // this.setState({ cast: data.cast })
    render() {
        return (
            <>
                <CastList casts={this.state.cast}></CastList>
            </>
        )
    }
}
