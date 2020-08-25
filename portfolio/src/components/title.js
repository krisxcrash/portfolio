import React from 'react';
import styled from 'styled-components'

const Title = props => {
  const {text} = props
  return (
    <StyledH2>{text}</StyledH2>
  )
}

const StyledH2 = styled.h2`
  font-size: 5rem;
  text-align: center;
  margin: 10rem auto 5rem;
`

export default Title