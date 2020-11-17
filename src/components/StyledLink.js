import React from 'react';
import styled from 'styled-components'

const StyledLink = props => {
const {text, href} = props 

  return (
    <StyledA href= {href} target="_blank" text={text}>
    {text}
    </StyledA>
  )
}

const StyledA = styled.a`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  position: relative;
  color: rgb(246,89,150);
  width: 150px;

  &::before {
    content: ${({text}) => `"${text}"`};
    position: absolute;
    top: 0;
    left: 0;
    color: rgb(120, 211, 255);
    width: 0;
    overflow: hidden;
    transform: translateY(-11px);
    transition: all 0.5s;
     white-space: nowrap;
     text-decoration: underline
  }

&:hover::before {
  width: 100%;
 
}
`

export default StyledLink