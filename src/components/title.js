import React, {useEffect, useState} from "react"
import styled from "styled-components"
import { RoughNotation } from "react-rough-notation"

const Title = props => {
  const { text, delay } = props
    const [isShowing, updateIsShowing] = useState(false)

    useEffect(() => {
      const timer = setTimeout(() => {
        updateIsShowing(true)
      }, delay)
      return () => clearTimeout(timer)
    }, [])


  return (
    <StyledH2>
      <RoughNotation
        show={isShowing}
        strokeWidth={3}
        type="underline"
        color="rgb(246, 89, 150)"
        iterations={4}
      >
        {text}
      </RoughNotation>
    </StyledH2>
  )
}

const StyledH2 = styled.h2`
font-size: 2.5rem;
  text-align: center;
  margin: 4rem auto 2rem;

  @media screen and (min-width: 1200px) {
    font-size: 5rem;
    margin: 10rem auto 5rem;
  }
`

export default Title
