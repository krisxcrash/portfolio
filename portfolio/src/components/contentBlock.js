import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContentBlock = props => {
  const {backgroundColor, color, backgroundClipPath, children, height, margin, padding} = props
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      margin={margin}
    >
      {children}
    </Container>
  )
}

const Container = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  height: 70vw;
  width: 90vw;
  text-align: center;

  margin: 2.5rem auto;
  @media screen and (min-width: 1200px) {
    height: 40vw;
    max-height: 835px;
    width: 50vw;
    margin: ${({ margin }) => margin};
  }
`


export default ContentBlock