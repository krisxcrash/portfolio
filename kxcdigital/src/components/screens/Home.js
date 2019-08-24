import React from 'react';

import Hero from '../organisms/Hero';
import About from '../organisms/About';
import WhatWeDo from '../organisms/WhatWeDo';
import Portfolio from '../organisms/Portfolio';
import Clients from '../organisms/Clients';
import Contact from '../organisms/Contact';
import Footer from '../organisms/Footer';


const Home = ({ props }) => {
  return (
    <div>
    <Hero />
    <About />
    <WhatWeDo />
    <Portfolio />
    <Clients />
    <Contact />
      <Footer />
    </div>
    )
}

export default Home