import React, { useLayoutEffect, useRef } from 'react'
import { useWindowScroll } from 'react-use';
import styled from 'styled-components'

const Button = styled.button`
width: 3rem;
height: 3rem;
border: none;
box-sizing: border-box;
margin: 0 auto;
padding:0;
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
font-size: ${props => props.theme.fontxl};
position: fixed;
right: 1rem;
bottom: 1rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
opacity:0;
transition: transform 0.2s ease, opacity 0.5s ease;

&:hover{
  transform: scale(1.2);
}

&:active{
  transform: scale(0.9);
}
`;
function ScrollToTop() {
  const btnRef = useRef(null);
  const scrollMeUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  const {y} = useWindowScroll();
  
  useLayoutEffect(() => {
    if(btnRef.current){
      if(y > 300){
        btnRef.current.style.opacity = '1';
        btnRef.current.style.pointerEvents = 'auto';
      }else{
        btnRef.current.style.opacity = '0';
        btnRef.current.style.pointerEvents = 'none';
      }
    }

    return () => {}
  },[y]);
  return (
    <Button onClick={() => scrollMeUp()} ref={btnRef} aria-labelledby='Scroll to top' aria-label='Scroll to top' title='Scroll to top' >
      &#x2191;
    </Button>
  )
}

export default ScrollToTop