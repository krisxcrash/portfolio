import React from 'react';
import styled from 'styled-components'

const LogoGrid = props => {
  return (
    <Container>
      <div style={{ width: "100px", height: "100px", background: "hotpink" }} />
      <div style={{ width: "100px", height: "100px", background: "hotpink" }} />
      <div style={{ width: "100px", height: "100px", background: "hotpink" }} />
      <div style={{ width: "100px", height: "100px", background: "hotpink" }} />
      <div style={{ width: "100px", height: "100px", background: "hotpink" }} />
      <div style={{ width: "100px", height: "100px", background: "hotpink" }} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
  }
`

export default LogoGrid