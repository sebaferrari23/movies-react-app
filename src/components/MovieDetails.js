import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useDispatch } from "react-redux";
import {
  fetchMovie,
} from '../actions/moviesActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.section`
    padding: 40px 0 90px 0;
    position: relative;
    overflow: hidden;
    margin-top: 90px;
    min-height: calc(100vh - 180px);
    display: flex;
    align-items: center;
    & .go-back {
        color: #fff;
        display: inline-block;
        padding: 10px 0;
        text-decoration: none;
        margin-bottom: 30px;
        & > i {
            margin-right: 10px;
        }
    }
    &:before {
        display: block;
        content: '';
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(${props => props.image || ""});
        position: absolute;
        left: 0; right: 0; bottom: -10px; top: 0;
        z-index: -1;
        opacity: 0.2;
        filter: blur(10px) grayscale(80%);
    }
`
const MovieDetailsContent = styled.div`
    display: grid;
    grid-template-columns: 5fr 7fr;
    grid-gap: 50px;
    max-width: 980px;
    align-items: center;
    margin: 0 auto;
    & > img {
        max-width: 100%;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,.2);
        max-height: 600px;
    }
    & h2 {
        font-size: 40px;
        margin-top: 0;
    }
    & p {
        font-size: 18px;
        line-height: 150%;
        margin-bottom: 40px;
    }
`
const GenresList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin: -7px;
    & > li {
        display: inline-flex;
        align-items: center;
        padding: 0 25px;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 11px;
        height: 30px;
        border-radius: 30px;
        color: #151F2E;
        background-color: #fff;
        margin: 7px;
    }
`

const MovieDetails = ( { movie, match } ) => {

    let params = match.params;

    const dispatch = useDispatch();

    useEffect(() => {
        const loadMovie = () => {
            dispatch(fetchMovie(params.id));
        };

        loadMovie();

    }, [dispatch]);

    console.log(movie);

    const genresList = movie.genres && movie.genres.map((genre, index) => {
        return (
            <li key={index}>{ genre.name }</li>
        )
    });

    return (
        <Background image={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}>
            <div className="container">

                <Link className="go-back" to="/"><i className="fas fa-chevron-left"></i><strong>Go back</strong></Link>

                <MovieDetailsContent>
                    { movie.poster_path ? <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} /> : '' }
                    <div>
                        <h2>{ movie.title }</h2>
                        <p>{ movie.overview }</p>
                        <GenresList>{genresList}</GenresList>
                    </div>
                </MovieDetailsContent>

            </div>
        </Background>
    )
}

const mapStateToProps = state => ({
    movie: state.movies.movie
});

export default connect(mapStateToProps)(MovieDetails);
