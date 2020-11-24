import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import SearchBar from './SearchBar';

const Header = styled.header`
    height: 90px;
    background-color: #151F2E;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 900;
    box-shadow: 0 10px 30px rgba(0,0,0,.2);
    & .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
`
const Logo = styled(NavLink)`
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    position: relative;
    padding-left: 55px;
    &:hover {
        & > img {
            animation: App-logo-spin infinite 5s linear;
        }
    }
    & > img {
        max-width: 70px;
        position: absolute;
        left: -15px;
    }
    & > strong {
        font-size: 22px;
        text-transform: uppercase;
    }
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

const Navbar = () => {
    return (
        <Header>
            <div className="container">

                <Logo exact to="/movies-react-app">
                    <img src={logo} alt="Movies React App" />
                    <strong>Movies React App</strong>
                </Logo>
                
                <SearchBar />

            </div>
        </Header>
    )
}

export default Navbar
