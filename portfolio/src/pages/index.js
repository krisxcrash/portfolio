import React from "react"
import Header from '../components/header'
import ContentContainer from "../components/contentContainer"
import Nav from "../components/nav"
import TwoColumn from "../components/twoColumn"
import Image from '../components/image'
import ContentBlock from "../components/contentBlock"
import Title from "../components/title"

export default () => (
  <ContentContainer>
    {/* <Link to="/about/">About</Link> */}
    <Nav />
    <TwoColumn>
      <Image />
      <Header />
    </TwoColumn>
    <Title text="Recent Work" />
    <TwoColumn>
      <ContentBlock backgroundColor="black" margin="0 2.5rem 0 0" />
      <ContentBlock backgroundColor="black" margin="0 0 0 2.5rem" />
    </TwoColumn>
    <TwoColumn>
      <ContentBlock backgroundColor="black" margin="0 2.5rem 0 0" />
      <ContentBlock backgroundColor="black" margin="0 0 0 2.5rem" />
    </TwoColumn>
  </ContentContainer>
)

