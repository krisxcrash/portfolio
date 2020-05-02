import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContentBlock = props => {
  const {backgroundColor, color, backgroundClipPath, children, margin, padding} = props
  return (
    <Container backgroundColor={backgroundColor} color={color} margin={margin} padding={padding} clipPath={backgroundClipPath}>
      {children}
    </Container>
  )
}


// Need to make shape of container in parent component adn keep this simple.
const Container = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  height: 800px;
  width: 100vw;
  margin: ${({ margin }) => margin || "5rem"};
  padding: ${({ padding }) => padding || "15rem"};
  text-align: center;
  -webkit-clip-path: ${({clipPath}) => !!clipPath && `polygon(${clipPath})`};
  clip-path: ${({clipPath}) => !!clipPath && `polygon(${clipPath})`};
`


export default ContentBlock