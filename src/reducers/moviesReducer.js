import {
    SEARCH_MOVIES,
    FETCH_SEARCH_MOVIES,
    FETCH_POPULAR_MOVIES,
    FETCH_MOVIE,
    LOADING
} from '../actions/types';
  
const initialState = {
    query: '',
    searchMovies: [],
    popularMovies: [],
    loading: false,
    movie: []
}

const movies = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIES:
            return {
                ...state,
                query: action.payload,
                loading: false
            };
        case FETCH_SEARCH_MOVIES:
            return {
                ...state,
                searchMovies: action.payload,
                loading: false
            };
        case FETCH_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.payload,
                loading: false
            };
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

export default movies