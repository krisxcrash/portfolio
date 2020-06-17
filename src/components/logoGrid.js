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

const LogoGrid = props => {
  return (
    <Container>
      <Image height={150} src={ReactNativeLogo} />
      <Image height={150} src={ReactLogo} />
      <Image height={150} src={JsLogo} />
      <Image height={150} src={StyledLogo} />
      <Image height={160} src={HtmlLogo} />
      <Image height={150} src={CssLogo} />
      <Image height={150} src={ScssLogo} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex: 1;
  }
`

export default LogoGrid