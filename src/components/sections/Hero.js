import React from 'react'
import styled from 'styled-components';
import CallToActionPart from '../elements/CallToActionPart';
import CoverVideo from '../elements/CoverVideo';
import Circle from '../elements/Circle';
const StyledHero = styled.section`
position: relative;
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
background-color: ${props => props.theme.body};
`;

const Container = styled.div`
width: 75%;
min-height: 80vh;

margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em) {
  width: 85%;
}
@media (max-width: 48em) {
  flex-direction: column-reverse;
  width: 90%;
  &>*:first-child{
    width: 100%;
    margin-top: 2rem;
  }
}
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Hero() {
  return (
    <StyledHero id="intro">
      <Container>
        <Box>
          <CallToActionPart btnText="Explore" btnLink="#about" mainTitle="Discover a new era of cool" subTitle="Bored of Apes? Try Something New." typeWriterPhrases={['<span class="text-1">NFTs.</span>', '<span class="text-2">Collectible Items.</span>', '<span class="text-3">Ape Killers!</span>']} />
        </Box>
        <Box>
          <CoverVideo />
        </Box>
        <Circle />
      </Container>
    </StyledHero>
  )
}
export default Hero;