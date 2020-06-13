import React from 'react';
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Hey there,</Title>
        <StyledLine />
      </TitleWrapper>
      <SubTitle>
        I'm a UI Engineer based out of Costa Mesa and currently working for{" "}
        <StyledA href="https://happymoney.com" target="_blank">
          Happy Money
        </StyledA>
        . 
      </SubTitle>
      <SubTitle>
       With a mobile-first approach to design and development I ensure a seamless user experience. I love unique design challenges and executing a pixel-perfect user interface. 
      </SubTitle>

      <DownArrow>&darr;</DownArrow>
    </Container>
  )
}

const Container = styled.div`
  width: 60vw;
  padding: 0;
  text-align: center;
  position: relative;
  height: 100%;
  max-height: fit-content;

  @media screen and (min-width: 1200px) {
    padding: 0 10rem;
    text-align: left;
  }
`

const Title = styled.h1`
  font-size: 3rem;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 4rem auto 2rem;

  @media screen and (min-width: 1200px) {
    margin: 0 auto 1.5rem;
    justify-content: space-between;
    flex-direction: row;
  }
`

const StyledLine = styled.div`
  border-top: 1px solid black;
  height: 1px;
  width: 35vw;

  @media screen and (min-width: 1200px) {
    width: 30vw;
    max-width: 700px;
  }

`

const SubTitle = styled.h3`
  font-size: 3rem;

  @media screen and (min-width: 768px) {
    font-size: 3.95rem;
  }
`

const DownArrow = styled.p`
  font-size: 8rem;

`

const StyledA = styled.a`
  color: rgb(246, 89, 150);
  text-decoration: none;

  &:hover {
    color: rgb(120, 211, 255);
    text-transform: uppercase;
  }
`

export default Header
