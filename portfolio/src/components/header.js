import React from 'react';
import styled from 'styled-components'
import Idea from '../assets/icons/idea';

const Header = props => {
  const { subTitle, title } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Idea width={64} height={64} color="hotpink" />
    </Container>
  )
}

const Container = styled.div`
  background-color: lightsteelblue;
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
