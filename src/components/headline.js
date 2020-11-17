import React from 'react';
import styled from "styled-components"

const Headline = props => {
  const {children, color} = props
  return (
    <StyledHeadline color={color}>{children}</StyledHeadline>
  )
}

const StyledHeadline = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${({color}) => color || '#000'}
`

export default Headline