import React from 'react'
import styled from 'styled-components'

const SpinnerStyled = styled.div`
	height: calc(100vh - 90px);
    position: fixed;
    width: 100%;
    z-index: 500;
    top: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > i {
        font-size: 80px;
        color: #fff;
    }
`

const Spinner = () => {
    return (
        <SpinnerStyled>
            <i className="fas fa-spinner fa-pulse"></i>
        </SpinnerStyled>
    )
}

export default Spinner
