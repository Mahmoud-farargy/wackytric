import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
const StyledLogo =  styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${props => props.theme.fontxxxl};
    color: ${props => props.theme.text};
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 64em){
      font-size: ${props => props.theme.fontxxl};
    }
    @media (max-width: 30em){
      font-size: ${props => props.theme.fontxl};
    }
`;

function Logo() {
  return (
    <StyledLogo>
        <Link to="/">
            W.
        </Link>
    </StyledLogo>
  )
}

export default Logo