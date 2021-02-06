import obj from './Url';
import axios from 'axios';

export default function FetchDetailsReviews (id) {    
    return axios.get(`${obj.Url}/movie/${id}/reviews?api_key=${obj.key}`)
}