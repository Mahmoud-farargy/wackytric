import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import DrawSvg from '../elements/DrawSvg';
import RoadmapItem from '../elements/RoadmapItem';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Title } from "../../styles/shared";


const StyledRoadmap = styled.section`
  min-height: 100vh;
  min-height: 100svh;
  width: 100vw;
  background-color: ${props => props.theme.body};
`;


const Container = styled.div`
width: 70%;
height: 200vh;
background-color: ${props => props.theme.body};
display: flex;
margin: auto;
justify-content: center;
align-items: center;
position: relative;
@media (max-width: 64em){
  width: 80%;
}
@media (max-width: 48em){
  width: 90%;
}
`;

const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&>*:nth-of-type(2n +1){
  justify-content: start;
  div{
    border-radius: 50px 0 50px 0;
    text-align: right;
  }
  p{
    border-radius: 40px 0 40px 0;
  }
  @media (max-width: 48em){
    justify-content: center;
    div{
      border-radius:  0 50px 0 50px;
      text-align: left;
    }
    p{
      border-radius: 0 40px 0 40px;
    }
  }
  @media (max-width: 30em){
    div{
      border-radius:  0 40px 0 40px;
      text-align: left;
    }
    p{
      border-radius: 0.3rem 0.6rem 0.6rem 1.2rem;
    }
  }
}
&>*:nth-of-type(2n){
  justify-content: end;
  div{
    border-radius:  0 50px 0 50px;
    text-align: left;
  }
  p{
    border-radius: 0 40px 0 40px;
  }
  @media (max-width: 48em){
    justify-content: center;
    border-radius: 50px 0 50px 0;
    text-align: right;
  }
}

@media (max-width: 48em){
  width: 90%;
}
`;


const Item = styled.li`
width: 100%;
height: 100%;
display: flex;

@media (max-width: 48em){
  justify-content: flex-end !important;
}
`;
function Roadmap() {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);
  const addToRefs = el => {
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    if(revealRefs.current){
      revealRefs.current.forEach((el,index) => {
        t1.fromTo(
          el.childNodes[0],
          {
            y: "0"
          },{
            y: "-30%",
            scrollTrigger: {
              id: `section-${index +1}`,
              trigger: el,
              start: 'top center+=200px',
              end: "bottom bottom",
              scrub: true,
              // markers: true
            }
          }
          
        )
      })
    }
  }, [])
  return (
    <StyledRoadmap id="roadmap">
      <Title mode="light">
         Roadmap
      </Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>     
        <Items>
          <Item>&nbsp;</Item>
          <RoadmapItem addToRefs={addToRefs} title="Grand Opening" subTitle="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadmapItem addToRefs={addToRefs} title="Great Benefits" subTitle="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadmapItem addToRefs={addToRefs} title="Early Access" subTitle="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadmapItem addToRefs={addToRefs} title="New Merch" subTitle="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadmapItem addToRefs={addToRefs} title="Holders Ranking" subTitle="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
        </Items>
      </Container>

    </StyledRoadmap>
  )
}
export default Roadmap;