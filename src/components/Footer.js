import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.section`
    background-color: #151F2E;
    text-align: center;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > p {
        font-size: 12px;
        margin: 0;
        & > a {
            color: #61DBFB;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`

const Footer = () => {
    return (
        <FooterStyled>
            <p><strong>Movies App</strong> create with <a href="https://reactjs.org" target="_blank" rel="nofollow noopener noreferrer">React.js</a>, <a href="https://redux.js.org" target="_blank" rel="nofollow noopener noreferrer">Redux</a> and <a href="https://developers.themoviedb.org/3" target="_blank" rel="nofollow noopener noreferrer">The Movie Database API</a> by <strong>Sebastian Ferrari</strong>.</p>
        </FooterStyled>
    )
}

export default Footer
