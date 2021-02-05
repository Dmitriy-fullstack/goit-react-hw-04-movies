import axios from 'axios';
import obj from './Url';

export default function FetchByName (name) {
    return axios.get(`${obj.Url}/search/movie?api_key=${obj.key}&query=${name}`)
}