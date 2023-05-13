import React from 'react'
import styled from 'styled-components'

const StyledBtn = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  outline: none;
  border: none;
  font-size: ${props => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(0.9);
  }

  &::after{
    content: " ";
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    border-radius: 50px;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
  }

  &:hover::after{
    transform:translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
  a{
    white-space: nowrap;
  }
  @media (max-width: 48em){
    padding: 0.7rem 2.1rem;
  }
`;

function Button({link, text}) {
  return (
    <StyledBtn >
      <a href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
      </a>
    </StyledBtn>
  )
}

export default Button