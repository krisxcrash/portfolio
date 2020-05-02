import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextBlock = props => {
  const {backgroundColor, color, headline, content} = props
  return (
    <Container backgroundColor={backgroundColor} color={color}>
      <Headline>{headline}</Headline>
      <Text>{content}</Text>
    </Container>
  )
}


// Need to make shape of container in parent component adn keep this simple.
const Container = styled.div`
  background-color: ${({backgroundColor}) => backgroundColor};
  width: 100vw;
  color: ${({color}) => color};
  margin: -25vh auto 5rem;
  padding: 30vh 5rem 15rem;
  text-align: center;
`

const Headline = styled.h1`
  font-size: 5rem;
  /* color: ${({color}) => color}; */
  font-weight: bold;
`

const Text = styled.p`
  font-size: 3rem;
  /* color: ${({color}) => color}; */
`

export default TextBlock