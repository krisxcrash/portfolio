import React from 'react';
import styled from 'styled-components'

const Button = props => {
  const { children, href } = props
  
  return (
    <Container>
      <StyledA href={href} target="_blank">
        {children}
        <span />   
      </StyledA>
    </Container>
  )

}

const Container = styled.div`
  align-items: center;
  display: block;
  display: flex;
  font-family: sans-serif;
  height: 100%;
  justify-content: center;
  margin: 0;
  position: relative;
`

const StyledA = styled.a`
  align-items: center;
  color: rgb(246,89,150);
  display: flex;
  flex-wrap: nowrap;
  font-size: 30px;
  height: 65px;
  justify-content: center;
  padding: 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 1s;
  width: 100%;

  &::before,
  &::after {
    background-color: #000;
    border-radius: 50%;
    content: "";
    height: 20px;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all .7s;
    width: 20px;
    z-index: -1;
}

  &::before {
    box-shadow: -100px 0 0 #000;
    left: 0;
  }

  &::after {
    box-shadow: 100px 0 0 #000;
    right: 0;
  }

  &:hover::before {
    box-shadow: 30px 0 0 #000;
    left: 50%;
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
  }

  &:hover::after {
    box-shadow: -30px 0 0 #000;
    opacity: 1;
    right: 50%;
    transform: translateX(50%) translateY(-50%);
  }

  & > span {
    background-color: #000;
    border-radius: 8px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: scale(0);
    transition: all 0.3s;
    width: 100%;
    z-index: -1;
  } 

  &:hover span {
    transform: scale(1);
    transition-delay: 0.3s;
  } 

  &:hover {
    color: rgb(120, 211, 255);
    transition-delay: 0.2s;
  }
`
export default Button