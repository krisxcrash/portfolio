import React from 'react'
import styled from 'styled-components'

const ContentBlock = (props) => {
  const {
    backgroundColor,
    color,
    content,
    backgroundImage,
    children,
    title,
    margin,
    url,
  } = props
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      margin={margin}
      backgroundImage={backgroundImage}
    >
      <StyledImage src={backgroundImage} alt={title} />
      <Caption className='caption'>
        <TitleLink href={url} target='_blank'>
          {title}
        </TitleLink>
        <StyledP>
          {content}
          {url && 
            <StyledLink href={url}>{url}</StyledLink>
          }
        </StyledP>
      </Caption>
      {children}
    </Container>
  )
}

const Container = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;
  text-align: center;
  white-space: pre-wrap;
  width: 300px;
  margin: 0 auto 30px;

  &::before {
    background-color: rgba(0, 0, 0);
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.8;
    position: absolute;
    top: 0;
    transform: translateX(100%);
    transition-delay: 0.25s;
    transition: all 0.25s;
    width: 100%;
  }

  &:hover::before {
    transform: translateX(0);
    transition-delay: 0s;
  }

  &:hover .caption {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.3s;
  }

  @media screen and (min-width: 450px) {
    height: 340px;
    width: 400px;
  }

  @media screen and (min-width: 600px) {
    height: 460px;
    width: 550px;
  }

   @media screen and (min-width: 768px) {
    height: 540px;
    width: 650px;
  }

  @media screen and (min-width: 1200px) {
    margin: ${({ margin }) => margin};
  }

  @media screen and (min-width: 1400px) {
    margin: ${({ margin }) => margin};
    height: 650px;
    width: 800px;

  }
`

const StyledImage = styled.img`
  width: 100%;
  transition: all 0.5s;
`

const TitleLink = styled.a`
  color: rgb(246, 89, 150);
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.25rem;
  margin: 0 auto 15px;
  text-decoration: none;

  &:hover {
    color: rgb(120, 211, 255);
  }

  @media screen and (min-width: 600px) {
    font-size: 5rem;
    line-height: 4.5rem;
  }
`

const Caption = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: 0;
  position: absolute;
  top: 0;
  transform-origin: center;
  transform: translateX(-20px);
  transition: all 0.25s;
  width: 100%;
`

const StyledP = styled.p`
  background-color: #000;
  font-size: 1rem;
  height: 100px;
  margin: 0 auto 15px;
  padding: 15px;
  text-align: center;

@media screen and (min-width: 600px) {
    font-size: 2rem;
    height: 225px;
    padding: 50px 75px;
  }
`

const StyledLink = styled.a`
  color: #fff;
  display: block;
  margin-top:15px;

  &:hover {
    color: rgb(120, 211, 255);
  }
`

export default ContentBlock
