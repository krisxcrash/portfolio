import React from 'react';
import styled from 'styled-components'
import Image from './Image'

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
        <Image height={150} src={ReactNativeLogo} alt="React Native" title="React Native" />
        <Image height={150} src={ReactLogo} alt="React" title="React" />
        <Image height={150} src={JsLogo} alt="JavaScript" title="JavaScript" />
        <Image height={180} src={NodeLogo} alt="NodeJS" title="NodeJS" />
        <Image height={150} src={GraphQLLogo} alt="GraphQL" title="GraphQL" />
      </Row>
      <Row>
        <Image height={150} src={StyledLogo} alt="Styled Components" title="Styled Components" />
        <Image height={170} src={HtmlLogo} alt="HTML 5" title="HTML 5" />
        <Image height={150} src={CssLogo} alt="CSS 3" title="CSS 3" />
        <Image height={150} src={ScssLogo} alt="SASS/SCSS" title="SASS/SCSS" />
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