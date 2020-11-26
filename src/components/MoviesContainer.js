import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useDispatch } from "react-redux"
import PopularMovies from './PopularMovies'
import SearchResults from './SearchResults'
import { fetchPopularMovies, setLoading } from '../actions/moviesActions'
import styled from 'styled-components'
import Spinner from './Spinner'

const MovieContainerStyled = styled.section`
    padding: 50px 0;
    opacity: 1;
    & h2 {
        margin: 0 0 40px 0;
        font-size: 36px;
    }
`

const MoviesContainer = ( { searchResults, query, loading } ) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies());
        dispatch(setLoading(true));
    }, [dispatch]);

    var label = '';
    if(query && searchResults.length > 0) {
        label = `Search results for: ${query}`
    } else if(query && searchResults.length === 0){
        label = `No results found`
    } else {
        label = 'Most populars movies'
    }

    return (
        <MovieContainerStyled>
            { loading ? <Spinner /> :
                <div className="container">
                    <h2>{label}</h2>
                    {query && searchResults ? <SearchResults></SearchResults> : <PopularMovies></PopularMovies>}
                </div>
            }
        </MovieContainerStyled>
    )
}

const mapStateToProps = state => ({
    query: state.movies.query,
    searchResults: state.movies.searchResults,
    popularMovies: state.movies.popularMovies,
    loading: state.movies.loading
});

export default connect(mapStateToProps)(MoviesContainer);
