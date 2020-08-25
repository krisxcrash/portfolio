import React from 'react';
import styled from 'styled-components'

const Row = props => {
  const {children} = props
  return (
    <Container>
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
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
`


export default Row