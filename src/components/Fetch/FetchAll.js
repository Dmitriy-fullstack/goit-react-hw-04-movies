import axios from 'axios';
import obj from './Url';


export default function FetchAll () {
    return axios.get(`${obj.Url}/trending/movie/day?api_key=${obj.key}`);
}