import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import {
  fetchPopularMovies,
} from '../actions/moviesActions';
import Movie from './Movie'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
`

const MoviesContainer = ( {  popularMovies } ) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const loadMovies = () => {
            dispatch(fetchPopularMovies());
        };

        loadMovies();

    }, [dispatch]);

    var movieList = popularMovies && popularMovies.map((movie, index) => {
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
    popularMovies: state.movies.popularMovies
});

export default connect(mapStateToProps)(MoviesContainer);
