import React from 'react'
import { connect } from 'react-redux'
import {
  searchMovies,
  fetchSearchMovies,
  setLoading
} from '../actions/moviesActions'
import styled from 'styled-components'

const SearchBarStyled = styled.div`
    max-width: 400px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    & > i {
        position: absolute;
        right: 20px;
        pointer-events: none;
    }
    & > input {
        color: #fff;
        padding: 0 60px 0 20px;
        height: 50px;
        background-color: #2B3442;
        border-radius: 50px;
        border: 1px solid #2B3442;
		width: 100%;
		font-weight: 600;
		outline: none;
		font-family: 'Noto Sans', sans-serif;
		font-size: 14px;
		&:focus {
			border-color: #61DBFB;
		}
    }
`

const SearchBar = ({ query, searchMovies, fetchSearchMovies, setLoading }) => {

    const onChangeText = (value) => {
		searchMovies(value);
		if(value) {
			setLoading();
			fetchSearchMovies(value);
		}
	}

    return (
        <SearchBarStyled>
			<input 
				id="inputSearch"
                type="text" 
                value={query} 
                onChange={(e)=> onChangeText(e.target.value)}
                placeholder="Search movies..."
            />
			<i className="fas fa-search"></i>
        </SearchBarStyled>
    )
}

const mapStateToProps = state => ({
	query: state.movies.query,
	searchResults: state.movies.searchResults,
    loading: state.movies.loading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		searchMovies: (query) => dispatch(searchMovies(query)),
		fetchSearchMovies: (query) => dispatch(fetchSearchMovies(query)),
		setLoading: () => dispatch(setLoading(true)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);