import obj from './Url';
import axios from 'axios';

export default function FetchDetailsCasts (id) {    
    return axios.get(`${obj.Url}/movie/${id}/credits?api_key=${obj.key}`)
}