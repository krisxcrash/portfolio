import React from "react"

// TODO: clean up component imports
import Header from '../components/Header'
import ContentContainer from "../components/ContentContainer"
import Nav from "../components/Nav"
import Row from "../components/Row"
import MainImage from '../components/MainImage'
import Title from "../components/Title"
import LogoGrid from "../components/LogoGrid"

import Headline from "../components/Headline"
import Button from "../components/Button"
import { Link } from "gatsby"

// import Payoff from '../assets/images/payoff.png'

export default () => (
  <ContentContainer>
    {/* <Link to="/about/">About</Link> */}
    <Nav />
    <Row>
      <MainImage />
      <Header />
    </Row>
    <Title text="Tech Stack" delay={3500} />
    <Row>
      <LogoGrid />
    </Row>
    
    <Title text="Recent Work" delay={4000} />
    <Row align="center">
      <Link to="/work/">
        <Button>
          Check out my latest work
          </Button>
      </Link> 
  </Row>

   
    <Title text="Contact" delay={5000} />
    <Row align="center">
      <Headline>Have an exciting project and looking for some help?</Headline>
    </Row>
    <Row align="center">
      <Button href="mailto:kristinenicolemartin@gmail.com">Let's chat!</Button>
    </Row>
  </ContentContainer>
)


// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>