import React from 'react';
import styled from 'styled-components'

const Header = props => {
  const { subTitle, title } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
`

const Title = styled.h1`
 font-size: 8rem;
`

const SubTitle = styled.h3`
font-size: 3rem`

export default Header
