import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ratingMovies } from '../actions/moviesActions'
import StarRatings from 'react-star-ratings'
import styled from 'styled-components'

const RatingFilterStyled = styled.div`
    display: flex;
    align-items: center;
    & > span {
        text-transform: uppercase;
        font-size: 12px;
        margin-right: 15px;
    }
`

const RatingFilter = ({ratingMovies}) => {
    
    const [rating, setRating] = useState(0);

    const changeRating = (newRating) => {
        if(newRating === rating) {
            setRating(0);
            ratingMovies(0,10);
        } else {
            setRating(newRating);
            ratingMovies((newRating*2)-2,newRating*2);
        }
    }

    return (
        <RatingFilterStyled>
            <span>Rating:</span>
            <StarRatings 
                rating={rating}
                starRatedColor="#ffd700"
                starHoverColor="#ffd700"
                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
                starDimension='20px'
                starSpacing='2px'
            />
        </RatingFilterStyled>
    )
}


const mapStateToProps = state => ({
	voteAverageMin: state.movies.voteAverageMin,
	voteAverageMax: state.movies.voteAverageMax,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ratingMovies: (voteAverageMin, voteAverageMax) => dispatch(ratingMovies(voteAverageMin, voteAverageMax)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RatingFilter);
