import React from 'react'
import styled from "styled-components";
import BottomBanner from './sections/BottomBanner';
import Logo from './elements/Logo';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';
import LinkedIn from '../Icons/LinkedIn';
import { useScrollTo } from '../Hooks';

const Section = styled.section`
min-height: 100vh;
min-height: 100svh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;

display: flex;
flex-direction: column;
color: ${props => props.theme.text};
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid ${props => `rgba(${props.theme.textRgba}, 0.4)`};
@media (max-width: 48em){
  width: 90%;
}
`;

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 48em){
  width: 100%;
}
`;

const SocialsList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;
&>*{
  &:not(:first-child){
    margin-left: 0.4rem;
  }
  padding:0.1rem;
  transition: all 0.2s ease;
  display: grid;
  place-items: center;
  &:hover{
    transform: scale(1.2);
  }
}
`;

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;
@media (max-width: 48em){
  display: none;
}
`;

const Item = styled.li`
width: fit-content;
cursor: pointer;
color: ${props => `rgba(${props.theme.textRgba}, 0.8)`};
transition: color 0.2s linear;
&::after {
        content: ' ';
        display: block;
        width: 0%;
        height: 2px;
        background: ${props => props.theme.text};
        transition: width 0.3s ease;
    }

&:hover {
  color: ${props => props.theme.text};
  &::after{
     width: 100%;
  }      
}
@media (max-width: 64em){
  font-size: ${props => props.theme.fontmd};
}
`;

const Copyright = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
  text-decoration: underline;
}
@media (max-width: 48em){
  flex-direction: column;
  width: 90%;
  text-align: center;
  span{
    margin-bottom: 1rem;
  }
}
`;
function Footer() {
  const [elementId] = useScrollTo();

  return (
    <Section>
      <BottomBanner />
      <Container>
        <Left>
          <Logo />
          <SocialsList>
            <a href="https://facebook.com" target="_blank" height="30" width="30" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" height="30" width="30" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://twitter.com" target="_blank" height="30" width="30" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/in/mahmoud-farargy-39a949184" target="_blank" height="30" width="30" rel="noopener noreferrer">
              <LinkedIn />
            </a>
          </SocialsList>
        </Left>
        <MenuItems>
          <Item onClick={() => elementId('intro')}>Home</Item>
          <Item onClick={() => elementId('about')}>About</Item>
          <Item onClick={() => elementId('roadmap')}>Roadmap</Item>

          <Item onClick={() => elementId('showcase')}>Showcase</Item>
          <Item onClick={() => elementId('team')}>Team</Item>
          <Item onClick={() => elementId('faq')}>FAQ</Item>
        </MenuItems>
      </Container>
      <Copyright>
        <span>
          &copy; {new Date().getFullYear()} WackyTric club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by {" "}<a aria-label='Mahmoud Farargy' href="https://mahmoudportfolio.netlify.app" target="_blank" rel="noreferrer noopener">
            Mahmoud Farargy
          </a>
        </span>
      </Copyright>
    </Section>
  )
}
export default Footer;