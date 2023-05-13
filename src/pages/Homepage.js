import React from 'react'
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Roadmap from '../components/sections/Roadmap';
import Showcase from '../components/sections/Showcase';
import Team from '../components/sections/Team';
import FAQ from '../components/sections/FAQ';

function Homepage() {
  return (
    <>
        <Hero />
        <About />
        <Roadmap/>
        <Showcase />
        <Team />
        <FAQ />
    </>
  )
}
export default Homepage;