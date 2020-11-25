import React from 'react'
import { connect } from 'react-redux'
import PopularMovies from './PopularMovies'
import SearchMovies from './SearchMovies'
import styled from 'styled-components'

const MovieContainerStyled = styled.section`
    padding: 140px 0 50px 0;
    & h2 {
        margin: 0 0 40px 0;
        font-size: 36px;
    }
`

const MoviesContainer = ( { searchMovies, query } ) => {

    var label = '';
    if(query && searchMovies) {
        label = `Search results for: ${query}`
    } else {
        label = 'Most populars movies'
    }

    return (
        <MovieContainerStyled>
            <div className="container">
                <h2>{label}</h2>
                {query && searchMovies ? <SearchMovies></SearchMovies> : <PopularMovies></PopularMovies>}
            </div>
        </MovieContainerStyled>
    )
}

const mapStateToProps = state => ({
    query: state.movies.query,
    searchMovies: state.movies.searchMovies
});

export default connect(mapStateToProps)(MoviesContainer);
