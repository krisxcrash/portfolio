import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import StyledLink from './StyledLink';


const Header = () => {
  const [isShowing, updateIsShowing] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      updateIsShowing(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, []);


  return (
    <Container>
      <TitleWrapper>
        <Title>Hey there,</Title>
        <StyledLine />
      </TitleWrapper>
      <RoughNotationGroup show={isShowing}>
        <SubTitle>
          I'm a{" "}
          <RoughNotation
            strokeWidth={3}
            type="underline"
            color="rgb(246, 89, 150)"
            order={1}
            iterations={4}
            padding={3}
          >
            UI Engineer
          </RoughNotation>{" "}
          based out of Costa Mesa and currently working for{" "}
          <StyledLink href="https://happymoney.com" target="_blank" text="Happy Money" />
          .
        </SubTitle>
        <SubTitle>
          With a mobile-first approach and a focus on accessibility, I ensure a seamless experience for all users. I love unique design challenges and executing a pixel-perfect user interface.
        </SubTitle>
      </RoughNotationGroup>
      <DownArrow>&darr;</DownArrow>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  max-height: fit-content;
  padding: 0;
  position: relative;
  text-align: center;
  width: 60vw;

  @media screen and (min-width: 1200px) {
    padding: 0 10rem;
    text-align: left;
  }
`

const Title = styled.h1`
  font-size: 1.5rem;

  @media screen and (min-width: 1200px) {
    font-size: 3rem;
  }
`

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem auto 2rem;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto 1.5rem;
  }
`

const StyledLine = styled.div`
  border-top: 2px solid black;
  height: 2px;
  width: 35vw;

  @media screen and (min-width: 1200px) {
    max-width: 700px;
    width: 30vw;
  }
`

const SubTitle = styled.h3`
  font-size: 1.8rem;

  @media screen and (min-width: 768px) {
    font-size: 3.95rem;
    margin-bottom: 15px;
  }
`

const DownArrow = styled.p`
  font-size: 8rem;
`

export default Header
