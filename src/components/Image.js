import React from "react"
import styled from "styled-components"

const Image = props => {
  const {src, alt, height} = props
  return <StyledImage src={src} alt={alt} height={height} />
}

const StyledImage = styled.img`
  height: ${({ height }) => height+50}px;
  width: auto;
  margin: 10px auto;

  @media screen and (min-width: 768px) {
    height: ${({ height }) => height}px;
    margin: 0 5px;
  }
`

export default Image
