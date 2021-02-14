import React, { Component } from 'react'
import PropTypes from 'prop-types'
import swal from 'sweetalert';

export default class SearchForm extends Component {
    state ={
        name: ''
    }

    onSubmit = (event) => {
            event.preventDefault();
            if(this.state.name.trim === '') {
                swal({
                    title: "error",
                    text: "Write your query",
                    icon: "error",
                })
                return
            }

        this.props.onSubmit(this.state.name);
    }

    handleInput = Event => {
        this.setState({name:Event.target.value.toLowerCase()})
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Enter the films name
                        <input type="text" onChange={this.handleInput}/>
                    </label>
                    <button type="submit">Search</button>
                </form> 
            </>
        )
    }
}

SearchForm.propTypes = {
value: PropTypes.string,
}


