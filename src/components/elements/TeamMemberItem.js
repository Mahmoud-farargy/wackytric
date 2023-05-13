import React, { memo } from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
border-radius: 20px;
border: 1px solid ${props => props.theme.text};
padding: 1rem;
cursor: pointer; 
img{
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: all 0.3s ease;
}
`;

const Item = styled.div`
width: calc(20rem - 4rem);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem ;
position: relative;
border: 2px solid ${props => props.theme.text};
border-radius: 20px;
transition: all 0.3s ease;
z-index: 5;
backdrop-filter: blur(4px);

&:hover{
    img{
        transform: translateY(-2rem) scale(1.2);
    }
}
@media (max-width: 30em){
    width: 70%;
}
`;

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
@media (max-width: 40em){
    font-size: ${props => props.theme.fontmd};
}
`;

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
font-weight:400;
@media (max-width: 40em){
    font-size: ${props => props.theme.fontsm};
}
`;
function TeamMemberItem({img, name="", position = " "}) {
  return (
    <Item>
        <ImageContainer>
            <img src={img} alt={name}/>
        </ImageContainer>   
        <Name>{name}</Name>
        <Position>{position}</Position>
    </Item>

  )
}

export default memo(TeamMemberItem);