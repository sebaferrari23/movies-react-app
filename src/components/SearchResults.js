import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Movie from './Movie'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
`

const SearchResults = ( { searchResults, voteAverage } ) => {

    const movieList = searchResults.length > 0 && searchResults
    .filter(movie => (movie.rating < voteAverage.max ) && (movie.rating > voteAverage.min) )
    .map((movie, index) => {
        return (
            <Movie 
                key={movie.id}
                id={movie.id} 
                title={movie.title} 
                poster={movie.poster}
                year={movie.year}
                rating={movie.rating}
            />
        )
    });

    return (
        <Grid>
            { movieList }
        </Grid>
    )
}

const mapStateToProps = state => ({
	voteAverage: state.movies.voteAverage,
    searchResults: state.movies.searchResults,
});

export default connect(mapStateToProps)(SearchResults);
