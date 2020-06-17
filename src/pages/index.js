import React from "react"

// TODO: clean up component imports
import Header from '../components/header'
import ContentContainer from "../components/contentContainer"
import Nav from "../components/nav"
import Row from "../components/row"
import MainImage from '../components/mainImage'
import ContentBlock from "../components/contentBlock"
import Title from "../components/title"
import LogoGrid from "../components/logoGrid"

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
    <Row>
      <ContentBlock backgroundColor="black" margin="0 2.5rem 0 0" />
      <ContentBlock backgroundColor="black" margin="0 0 0 2.5rem" />
    </Row>
    <Row>
      <ContentBlock backgroundColor="black" margin="0 2.5rem 0 0" />
      <ContentBlock backgroundColor="black" margin="0 0 0 2.5rem" />
    </Row>
  </ContentContainer>
)

