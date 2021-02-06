import obj from './Url';
import axios from 'axios';

export default function FetchMovieDetails (id) {    
    return axios.get(`${obj.Url}/movie/${id}?api_key=${obj.key}`)
}