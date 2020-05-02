import React from 'react';
import styled from 'styled-components'
import Idea from '../assets/icons/idea';

const Header = props => {
  const { backgroundColor, color, subTitle, title } = props;

  return (
    <Container backgroundColor={backgroundColor} color={color}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      {/* <Idea width={64} height={64} color="hotpink" /> */}
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${({color}) => color};
  height: 95vh;
  background-size: cover;
  background-position: top;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
  padding: 3rem;
`

const Title = styled.h1`
 font-size: 8rem;
`

const SubTitle = styled.h3`
font-size: 3rem`

export default Header
