import { 
    FETCH_POPULAR_MOVIES, 
    FETCH_SEARCH_MOVIES, 
    SEARCH_MOVIES, 
    RATING_MOVIES, 
    FETCH_MOVIE, 
    LOADING 
} from './types'
import axios from 'axios'

const APIKey = '5b94f6505413a44cf706f0b88c36656a';
const url = 'https://api.themoviedb.org/3';
const posterUrl = 'https://image.tmdb.org/t/p/';
const popularMoviesUrl = `${url}/discover/movie`;
const searchMoviesUrl = `${url}/search/movie`;
const movieUrl = `${url}/movie`;

export const fetchPopularMovies = () => async dispatch => {
    try{
        const {data} = await axios.get(popularMoviesUrl, {
            params: {
                api_key: APIKey,
                language: 'en_US',
                page: 1,
                include_adult: false,
            }
        })
        const modifiedData = data['results'].map((movie) => ({
            id: movie['id'],
            backPoster: movie['backPoster'] ? posterUrl + 'w300/' + movie['backdrop_path'] : '',
            popularity: movie['popularity'],
            title: movie['title'],
            year: movie['release_date'] ? movie['release_date'].substring(0, movie['release_date'].indexOf('-')) : '',
            poster: movie['poster_path'] ?  posterUrl + 'w300' + movie['poster_path'] : '',
            overview: movie['overview'],
            rating: movie['vote_average'],
        }))
        dispatch( {
            type: FETCH_POPULAR_MOVIES,
            payload: modifiedData
        })
    }
    catch(e){
        dispatch( {
            type: FETCH_POPULAR_MOVIES,
            payload: console.log(e),
        })
    }

}

export const fetchSearchMovies = query => async dispatch => {
    if(query) {
        try{
            const {data} = await axios.get(searchMoviesUrl, {
                params: {
                    api_key: APIKey,
                    language: 'en_US',
                    page: 1,
                    include_adult: false,
                    query: query
                }
            })

            const modifiedData = data['results'] && data['results'].map((movie) => ({
                id: movie['id'],
                backPoster: movie['backPoster'] ? posterUrl + 'original' + movie['backdrop_path'] : '',
                popularity: movie['popularity'],
                title: movie['title'],
                year: movie['release_date'] ? movie['release_date'].substring(0, movie['release_date'].indexOf('-')) : '',
                poster: movie['poster_path'] ?  posterUrl + 'w300' + movie['poster_path'] : '',
                overview: movie['overview'],
                rating: movie['vote_average'],
            }))

            dispatch( {
                type: FETCH_SEARCH_MOVIES,
                payload: modifiedData
            })
        }
        catch(e){
            dispatch( {
                type: FETCH_SEARCH_MOVIES,
                payload: console.log(e),
            })
        }
    }
}

export const searchMovies = query => dispatch => {
    dispatch({
        type: SEARCH_MOVIES,
        payload: query
    });
};

export const ratingMovies = (min, max) => dispatch => {
    console.log(min, max);
    dispatch({
        type: RATING_MOVIES,
        payload: {min, max}
    });
};

export const fetchMovie = id => async dispatch => {
    try{
        const {data} = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: APIKey,
                language: 'en_US',
            }
        })
        dispatch({
            type: FETCH_MOVIE,
            payload: data
        })
    }
    catch(e){
        dispatch( {
            type: FETCH_MOVIE,
            payload: console.log(e),
        })
    }
};

export const setLoading = () => dispatch => {
    dispatch({
        type: LOADING
    });
};