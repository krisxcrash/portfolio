import React from 'react';
import styled from 'styled-components'

const Row = props => {
  const {align, children} = props
  return (
    <Container align={align}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4vh auto;
  height: 100%;
  max-height: fit-content;

  @media screen and (min-width: 1200px) {
    align-items: ${({ align }) => align || "flex-start"};
    flex-direction: row;
    justify-content: ${({ align }) => align || "space-between"};
  }
`


export default Row