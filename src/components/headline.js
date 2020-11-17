import React from 'react';
import styled from "styled-components"

const Headline = props => {
  const {children, color} = props
  return (
    <StyledHeadline color={color}>{children}</StyledHeadline>
  )
}

const StyledHeadline = styled.h1`
  color: ${({ color }) => color || '#000'};
  font-size: 2rem;
  text-align: center;

  @media screen and (min-width: 1200px) {
    font-size: 3rem;
  }
`

export default Headline