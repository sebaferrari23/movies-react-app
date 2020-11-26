import React from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
`

const MoviesContainer = ( { popularMovies, loading } ) => {

    const movieList = popularMovies.length > 0 && popularMovies.map((movie, index) => {
        return (
            <Movie 
                key={index}
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
    popularMovies: state.movies.popularMovies,
    loading: state.movies.loading,
});

export default connect(mapStateToProps)(MoviesContainer);