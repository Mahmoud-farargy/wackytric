import React from 'react'
import styled from 'styled-components'
import { Title } from "../../styles/shared";
import TeamMemberItem from '../elements/TeamMemberItem';

import cardImg1 from "../../assets/Nfts/bighead.svg";
import cardImg2 from "../../assets/Nfts/bighead-1.svg";
import cardImg3 from "../../assets/Nfts/bighead-2.svg";
import cardImg4 from "../../assets/Nfts/bighead-3.svg";
import cardImg5 from "../../assets/Nfts/bighead-4.svg";
import cardImg6 from "../../assets/Nfts/bighead-5.svg";
import cardImg7 from "../../assets/Nfts/bighead-6.svg";
import cardImg8 from "../../assets/Nfts/bighead-7.svg";
import cardImg9 from "../../assets/Nfts/bighead-8.svg";
import ConfettiComponent from '../elements/Confettie';

const Section = styled.section`
padding:1.7rem 0;
min-height: 100vh;
min-height: 100svh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
flex-wrap: wrap;

@media (max-width: 64em){
  width: 80%;
  justify-content: center;
}
@media (max-width: 48em){
  width: 90%;
}
`;



function Team() {
  return (
    <Section id="team">
      <ConfettiComponent />
      <Title mode="light">
        Team
      </Title>
      <Container>
        <TeamMemberItem img={cardImg1}  name="SKYBLAZE" position="Founder">Memeber 1</TeamMemberItem>
        <TeamMemberItem img={cardImg2}  name="MEGNUM" position="Co-Founder">Memeber 2</TeamMemberItem>
        <TeamMemberItem img={cardImg3}  name="MONKEY KING" position="Director">Memeber 3</TeamMemberItem>
        <TeamMemberItem img={cardImg4}  name="BLACK PANTHER" position="Manager">Memeber 4</TeamMemberItem>
        <TeamMemberItem img={cardImg5}  name="DEATHSTROKE" position="Artist">Memeber 5</TeamMemberItem>
        <TeamMemberItem img={cardImg6}  name="LAZY KONG" position="Social Media Manager">Memeber 6</TeamMemberItem> 
        <TeamMemberItem img={cardImg7}  name="CYBER PUNK" position="Blockchain Specialist">Memeber 7</TeamMemberItem> 
        <TeamMemberItem img={cardImg8}  name="MONK" position="Web3 Developer">Memeber 8</TeamMemberItem>
        <TeamMemberItem img={cardImg9}  name="BANANA" position="Graphic Designer">Memeber 9</TeamMemberItem>
      </Container>
    </Section> 
  )
}

export default Team