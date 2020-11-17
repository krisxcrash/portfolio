import React from 'react';
import styled from 'styled-components'

const ContentContainer = props => {
  const {children} = props
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  max-width: 1800px;
  padding: 2rem;

  @media screen and (min-width: 756px) {
    padding: 4rem;
  }
  
  @media screen and (min-width: 1200px) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
  }
  `


export default ContentContainer