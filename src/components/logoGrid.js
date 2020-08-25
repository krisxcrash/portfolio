import React from 'react';
import styled from 'styled-components'
import Image from './image'

// TODO: cleanup image imports
import ReactLogo from "../assets/images/logos/react.png"
import HtmlLogo from "../assets/images/logos/html5.png"
import CssLogo from "../assets/images/logos/css3-logo.png"
import JsLogo from "../assets/images/logos/JavaScript-logo.png"
import ScssLogo from "../assets/images/logos/sass.png"
import StyledLogo from "../assets/images/logos/styled-components.png"
import ReactNativeLogo from "../assets/images/logos/react-native.png"
import NodeLogo from "../assets/images/logos/node.png"
import GraphQLLogo from "../assets/images/logos/graphql.png"

const LogoGrid = props => {
  return (
    <Container>
      <Row>
        <Image height={150} src={ReactNativeLogo} />
        <Image height={150} src={ReactLogo} />
        <Image height={150} src={JsLogo} />
        <Image height={180} src={NodeLogo} />
        <Image height={150} src={GraphQLLogo} />
      </Row>
      <Row>
        <Image height={150} src={StyledLogo} />
        <Image height={170} src={HtmlLogo} />
        <Image height={150} src={CssLogo} />
        <Image height={150} src={ScssLogo} />
      </Row>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 4rem;
  }
`

export default LogoGrid