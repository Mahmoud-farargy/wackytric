import React from 'react'
import styled from 'styled-components'

import cardImg1 from "../../assets/Nfts/bighead.svg";
import cardImg2 from "../../assets/Nfts/bighead-1.svg";
import cardImg3 from "../../assets/Nfts/bighead-2.svg";
import cardImg4 from "../../assets/Nfts/bighead-3.svg";
import cardImg5 from "../../assets/Nfts/bighead-4.svg";
import cardImg6 from "../../assets/Nfts/bighead-5.svg";

const Section = styled.section`
width: 100vw;
min-height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
display: flex;
justify-content: center;
align-items:center;
overflow: hidden;

@media (max-width: 48em){
  height:15em;
  flex-direction: column;
}
`;

const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 50%;
user-select: none;
transform: translate(-50%, -50%);
display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;
img{
    width: 15rem;
    height: auto;
    object-fit: contain;
}
@media (max-width: 48em){
  img{
    width:10em;
    height: auto;  
  }
}
`; 

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.body};
padding: 1rem 2rem;
z-index: 10;
width: 35%;
text-transform: capitalize;
text-shadow: 1px 1px 2px ${props => props.theme.text};
@media (max-width: 64em){
  font-size: ${props => props.theme.fontxxl};
  width: 40%;
  text-align: center;
}
@media (max-width: 48em){
  font-size: ${props => props.theme.fontxl};
  width: 100%;
  padding: 2rem 0;
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontbig};
}
`;

const ButtonContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end;
@media (max-width: 48em){
  width: 100%;
  justify-content: center;
}
`;

const BannerBtn = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  outline: none;
  border: none;
  font-weight: 600;
  font-size: ${props => props.theme.fontlg};
  padding: 1.5rem 3rem;
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
    border: 2px solid ${props => props.theme.body};
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
    padding: 1rem 2rem;
  }
  @media (max-width: 30em){
    padding: 0.6rem 1.5rem;
    font-size: ${props => props.theme.fontsm};
  }
`;

function BottomBanner() {
  return (
    <Section>
        <ImgContainer>
            <img src={cardImg1} draggable={false} alt="WackyTric"/>
            <img src={cardImg2} draggable={false} alt="WackyTric"/>
            <img src={cardImg3} draggable={false} alt="WackyTric"/>
            <img src={cardImg4} draggable={false} alt="WackyTric"/>
            <img src={cardImg5} draggable={false} alt="WackyTric"/>
            <img src={cardImg6} draggable={false} alt="WackyTric"/>
        </ImgContainer>
        <Title>
            Join The <br /> WackyTric Club
        </Title>
        <ButtonContainer>
            <BannerBtn>
                Join Now
            </BannerBtn>
            {/* <Button text="Join now" link="#"/>  */}
        </ButtonContainer>
    </Section>
  )
}

export default BottomBanner