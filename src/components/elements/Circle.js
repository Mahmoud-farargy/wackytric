import React from 'react'
import CircleTextBlack from "../../assets/Rounded-Text-Black.png";
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
100%{
    transform: rotate(1turn);
}
`;
const StyledCircle = styled.div`
position: absolute;
bottom: 2rem;
right: 90%;
width: 6rem;
height: 6rem;
border: 1px solid ${props => props.theme.text};
border-radius: 50%;
user-select: none;

img{
    width: 100%;
    height:auto;
    object-fit: contain;
    animation: ${rotate} 6s  linear infinite reverse;
}

@media (max-width: 64em){
  width:4rem;
  height: 4rem;
  left: none;
  right: 2rem;
  bottom: 100%;
}
@media (max-width: 48em){
  right: 1rem;
}
`;
const InnerCircle = styled.span`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${props => props.theme.fontxl};

    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};

    @media (max-width: 64em){
    width: 2rem;
    height: 2rem;
    right: 1rem;
    font-size: ${props => props.theme.fontlg};
  }
`;


function Circle() {
  return (
    <StyledCircle >
        <InnerCircle>
              &#x2193;
        </InnerCircle>
        <img height='40' width='40' src={CircleTextBlack} alt="NFT" draggable={false} /> 
      
    </StyledCircle>
  )
}

export default Circle