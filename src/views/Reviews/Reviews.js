import { Component } from 'react';
import ReviewsList from '../../components/ReviewsList/ReviewsList'
import {FetchDetailsReviews} from '../../Services/fetch'

export default class Reviews extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        console.log(this.props);
        FetchDetailsReviews(this.props.id).then(data => this.setState({ reviews: data.results }))
    }
    // this.setState({ reviews: data.results })
    render() {
        return <ReviewsList reviews={this.state.reviews}></ReviewsList>
}
}