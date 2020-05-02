import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import ContentBlock from '../components/ContentBlock'

export default () => (
  <div>
    {/* <Link to="/about/">About</Link> */}
    <Header
      backgroundColor="#141c39"
      color="#FAFAFF"
      title="Hey, I'm Kris.."
      subTitle="I'm a UI Engineer with a passion for pixel perfection."
    />
    <ContentBlock
      color="limegreen"
      backgroundColor="#44f"
      backgroundClipPath="0 17%, 100% 3%, 101% 100%, 0 95%"
      margin="-25vh auto 5rem"
      padding="30vh 5rem 15rem"
    ></ContentBlock>
    <ContentBlock
      color="hotpink"
      backgroundColor="#141c39"
      backgroundClipPath="0 0, 100% 6%, 100% 100%, 0 100%"
      margin="-12vh auto 5rem"
      padding="20vh 5rem 15rem"
    ></ContentBlock>
    <ContentBlock
      color="black"
      backgroundColor="#f0047f"
      margin="-6vh auto 5rem"
      padding="15vh 5rem 15rem"
    ></ContentBlock>
    <ContentBlock
      color="black"
      backgroundColor="#060c23"
      margin="-6vh auto 5rem"
      padding="15vh 5rem 15rem"
    ></ContentBlock>

    
    {/* Credit for Iconset */}
    Icons made by{" "}
    <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
      Eucalyp
    </a>{" "}
    from{" "}
    <a href="https://www.flaticon.com/" title="Flaticon">
      {" "}
      www.flaticon.com
    </a>
  </div>
)

