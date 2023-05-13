import React, { memo } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { Minus } from '../../Icons/Minus';
import { Plus } from '../../Icons/Plus';


const Container = styled.div`
cursor: pointer;
padding: 0 0.5rem;
display: flex;
flex-direction: column;
border-bottom: 1px solid ${props => props.theme.carouselColor};
margin: 3rem 0;
@media (max-width: 48em){
    margin: 2rem 0;
}
`;

const Title = styled.div`
font-size: ${props => props.theme.fontsm};
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.7rem 0  0.9rem 0;
`;

const Reveal = styled.div`
overflow: hidden;
display: block;
transition: all 0.3s ease-in-out;
box-sizing: border-box;
max-height: ${props => props.clicked ? 'auto': 0};
margin-top: ${props => props.clicked ? '0.4rem': 0};
margin-bottom: ${props => props.clicked ? '0.9rem': 0};
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
font-size: ${props => props.theme.fontsm};
font-weight: 300;
line-height: 1.1rem;
@media (max-width: 48em){
    font-size: ${props => props.theme.fontxs};
}
`;

const Name = styled.div`
display: flex;
align-items: center;
`;

const Indicator = styled.div`
font-size: ${props => props.theme.fontxxl};
display: flex;
align-items: center;
justify-content: center;

svg{
    width: 1rem;
    height: auto;
    fill: ${props => props.theme.carouselColor};
}

@media (max-width: 48em){
    font-size: ${props => props.theme.fontxl};
}
`;
function Accordion({title, children}) {
    const [collapse, setCollapse] = useState(false);
  return (
    <Container>
        <Title onClick={() => setCollapse((prevState) => !prevState)}>
            <Name>
               {title} 
            </Name>
            {
                collapse ? 
                <Indicator>
                    <Minus />
                </Indicator>:
                <Indicator>
                    <Plus />
                </Indicator>
            }
        </Title>
        <Reveal clicked={collapse}>
            {children}
        </Reveal>
    </Container>
  )
}

export default memo(Accordion)