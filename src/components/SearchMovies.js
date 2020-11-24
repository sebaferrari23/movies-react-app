import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Movie from './Movie'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
`

const SearchMovies = ( { searchMovies } ) => {

    const movieList = searchMovies && searchMovies.map((movie, index) => {
        return (
            <Movie 
                key={index}
                id={movie.id} 
                title={movie.title} 
                poster={movie.poster}
                year={movie.year}
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
    searchMovies: state.movies.searchMovies
});

export default connect(mapStateToProps)(SearchMovies);
