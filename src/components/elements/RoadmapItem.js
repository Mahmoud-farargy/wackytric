import React, { memo } from 'react'
import styled from 'styled-components';

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
@media (max-width: 48em){
  justify-content: flex-end !important;
}
`;
const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};

@media (max-width: 48em){
  width: 70%;
}
`;

const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
@media (max-width: 30rem) {
  padding: 0.5rem;
}
`;

const commonTitleStyle = `
display: block;
text-transform: capitalize;
color: ${props => props.theme.text};
`;
const SubTitle = styled.span`
${commonTitleStyle}
font-size: ${props => props.theme.fontsm};
font-weight: 400;

@media (max-width: 40rem) {
  font-size: ${props => props.theme.fontsm};
}
@media (max-width: 30rem) {
  font-size: ${props => props.theme.fonxs};
}
`;
const Title = styled.span`
${commonTitleStyle}
font-size: ${props => props.theme.fontxl};

margin: 0.5rem 0;
@media (max-width: 40rem) {
  font-size: ${props => props.theme.fontlg};
  font-weight: 600;
}

`;
function RoadmapItem ({title, subTitle, addToRefs}) {
    return (
      <Item ref={addToRefs}>
        <ItemContainer>
            <Box>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </Box>
        </ItemContainer>
      </Item>
    )
  } 

export default memo(RoadmapItem);