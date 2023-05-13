import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components';
import ShowcaseNFTItem from '../elements/ShowcaseNFTItem';
import cardImg1 from "../../assets/Nfts/bighead.svg";
import cardImg2 from "../../assets/Nfts/bighead-1.svg";
import cardImg3 from "../../assets/Nfts/bighead-2.svg";
import cardImg4 from "../../assets/Nfts/bighead-3.svg";
import cardImg5 from "../../assets/Nfts/bighead-4.svg";
import cardImg6 from "../../assets/Nfts/bighead-5.svg";
import cardImg7 from "../../assets/Nfts/bighead-6.svg";
import cardImg8 from "../../assets/Nfts/bighead-7.svg";
import cardImg9 from "../../assets/Nfts/bighead-8.svg";
import cardImg10 from "../../assets/Nfts/bighead-9.svg";

const Section =styled.section`
padding:1.7rem 0;
min-height: 100vh;
min-height: 100svh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
overflow-x: hidden;

&>*:first-child{
  animation-duration: 20s;
  @media (max-width: 30em){
    animation-duration: 12s;
  }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;
  }
}
`;

const move = keyframes`
0%{ transform: translateX(100%) }
100%{ transform: translateX(-100%) }
`;

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;
animation: ${move} linear infinite ${props => props.direction};
`;

function Showcase() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={row1Ref}>
        <ShowcaseNFTItem img={cardImg1} number={479} price={1} passRef={row1Ref}/>
        <ShowcaseNFTItem img={cardImg2} number={489} price={1.5} passRef={row1Ref}/>
        <ShowcaseNFTItem img={cardImg3} number={262} price={6.5} passRef={row1Ref}/>
        <ShowcaseNFTItem img={cardImg4} number={964} price={7.4} passRef={row1Ref}/>
        <ShowcaseNFTItem img={cardImg5} number={473} price={9.1} passRef={row1Ref}/>
      </Row>

      <Row direction="reverse" ref={row2Ref}>
        <ShowcaseNFTItem img={cardImg1} number={937} price={1.5} passRef={row2Ref}/>
        <ShowcaseNFTItem img={cardImg6} number={967} price={5} passRef={row2Ref}/>
        <ShowcaseNFTItem img={cardImg7} number={642} price={2.7} passRef={row2Ref}/>
        <ShowcaseNFTItem img={cardImg8} number={158} price={6.8} passRef={row2Ref}/>
        <ShowcaseNFTItem img={cardImg9} number={392} price={7.4} passRef={row2Ref}/>
        <ShowcaseNFTItem img={cardImg10} number={249} price={6} passRef={row2Ref}/>
      </Row>
    </Section>
  )
}
export default Showcase;