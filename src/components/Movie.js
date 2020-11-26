import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'

const MovieCard = styled.article`
    & > a {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #151F2E;
        box-shadow: 0 10px 30px rgba(0,0,0,.2);
        &:before {
            display: block;
            content: '';
            padding-bottom: 150%;
        }
        & > img {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            transition: all .4s ease-in-out .2s;
            object-fit: cover;
        }
        & > img ~ .movie__content {
            opacity: 0;
            transition: all .4s ease-in-out;
            transform: translateY(10px);
        }
        & > .movie__content {
            position: absolute;
            width: 100%;
            z-index: 10;
            text-align: center;
            color: #fff;
            padding: 30px;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            & > h3 {
                font-size: 24px;
                margin: 0 0 10px 0;
            }
            & > p {
                margin: 0;
                font-weight: 700;
            }
            & > .star-ratings {
                position: absolute !important;
                bottom: 30px;
            }
        }
        &:hover {
            & > img {
                transform: scale(1.05);
                filter: grayscale(80%) contrast(120%) blur(1px);
                opacity: .3;
                transition: all .4s ease-in-out;
            }
            & > .movie__content {
                opacity: 1;
                transition: all .4s ease-in-out .2s;
                transform: translateY(0);
            }
        }
    }
`

const Movie = ({ title, poster, year, id, rating }) => {
    return (
        <MovieCard>
            <Link to={`/movie/${id}`}>
                { poster ? <img src={poster} alt={title} /> : '' }
                <div className="movie__content">
                    <h3>{title}</h3>
                    <p>{year}</p>

                    <StarRatings 
                        rating={Math.ceil(rating/2)}
                        starRatedColor="#ffd700"
                        numberOfStars={5}
                        name='rating'
                        starDimension='20px'
                        starSpacing='2px'
                    />

                </div>
            </Link>
        </MovieCard>
    )
}
export default Movie;
