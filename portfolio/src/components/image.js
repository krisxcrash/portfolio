import React from 'react';
import styled from 'styled-components'
import Kris from '../assets/images/Kristine-White.jpg'

const Image = props => {
  return (
    <StyledImage src={Kris} alt="kris" />
  )
}

const StyledImage = styled.img`
  width: 90vw;
  max-width: 500px;
  @media screen and (min-width: 1200px) {
    width: 40vw;
  }

  @media screen and (min-width: 1600px) {
    width: 40vw;
    max-width: 700px;
  }
`

export default Image