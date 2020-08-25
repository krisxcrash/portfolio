import React from 'react';
import styled from "styled-components"

const Headline = props => {
  const {text} = props
  return (
    <StyledHeadline>{text}</StyledHeadline>
  )
}

const StyledHeadline = styled.h1`
  font-size: 3rem;
  text-align: center;

`

export default Headline