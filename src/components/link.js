import React from 'react';
import styled from 'styled-components'

const Link = props => {
const {children, href} = props 

  return (
    <StyledA href= {href} target="_blank" >
    {children}
    </StyledA>
  )
}

const StyledA = styled.a`
  color: rgb(246, 89, 150);
  text-decoration: none;
  text-transform: uppercase;
  border: 4px solid black;
  padding: 10px 15px;
  transition: all .2s ease-in-out;
  &:hover {
    color: black;
    text-decoration: underline;
    border: 4px solid rgb(246, 89, 150);
  }
`

export default Link