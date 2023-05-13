import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Carousel from '../elements/Carousel';
import Button from '../elements/Button';
import { dark } from "../../styles/Themes";

const Section = styled.section`
padding:1.7rem 0;
min-height: 100vh;
min-height: 100svh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
align-items: center;
justify-content: center;
position: relative;
`;

const Container = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
@media (max-width: 70em){
  width: 85%;
}
@media (max-width: 64em){
  width: 100%;
  flex-direction: column;
  row-gap: 1.5rem;
  column-gap: 1.5rem;
  &>*:last-child{
    width: 80%;
  }
}
@media (max-width: 40em){
  &>*:last-child{
    width: 90%;
  }
}
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64rem){
    min-height: 50vh;
  }
  @media (max-width: 45rem){
    min-height: 45vh;
  }
`;

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.body};
width: 100%;
@media (max-width: 84em){
  font-size: ${props => props.theme.fontxl};
}
@media (max-width: 64em){
    text-align: center;
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontlg};
}
`;
const SubText = styled.p`
display: inline-block;
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => props.theme.body};
margin: 1rem 0;
font-weight: 400;
width:100%;
@media (max-width: 64em){
    text-align: center;
    font-size: ${props => props.theme.fontmd};
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontsm};
}
`;
const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
margin: 1rem 0;
font-weight: 400;
width:100%;

@media (max-width: 64em){
    text-align: center;
    font-size: ${props => props.theme.fontsm};
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontxs};
}
`;

const CalltoActionContainer = styled.div`
align-self: flex-start;
width: 80%;
margin: 0 auto;
button{
  margin: 1rem 0;
}
@media (max-width: 64em) {
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  button{
    margin: 0 auto;
  }
}
`;
function About() {
  return (
    <Section id="about">
      <Container>
        <Box><Carousel /></Box>
        <Box>
          <CalltoActionContainer>
              <Title >
                Welcome To The <br /> Wackytric Club.
              </Title>
              <SubText>
                The Wackytric CLUB is a private collection of NFTs—unique digital collectibles. The Wackytric are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
              </SubText>
              <SubTextLight>
                With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
              </SubTextLight>
              <ThemeProvider theme={dark}>
                <Button text="JOIN OUR DISCORD" link="#"/>
              </ThemeProvider>
          </CalltoActionContainer>
        </Box>

      </Container>
      </Section>
  )
}
export default About;