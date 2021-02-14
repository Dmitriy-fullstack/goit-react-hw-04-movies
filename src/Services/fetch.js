import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3';
const key = '33ea10b4370517cf9bdff75f97443843';



function FetchAll(){
    return axios.get(`${BASE_URL}/trending/movie/day?api_key=${key}`);
}

function FetchByName (name) {
    return axios.get(`${BASE_URL}/search/movie?api_key=${key}&query=${name}`)
}

function FetchMovieDetails (id) {
    return axios.get(`${BASE_URL}/movie/${id}?api_key=${key}`)
}

function FetchDetailsCasts (id) {    
    return axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${key}`).then(res=>res.data)
}

function FetchDetailsReviews (id) { 
    return axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${key}`).then(res=>res.data)
}

export {FetchAll, FetchByName, FetchMovieDetails, FetchDetailsCasts, FetchDetailsReviews}