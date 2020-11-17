import React from 'react';
import styled from 'styled-components'
import Headline from './Headline';

const Password = props => {
  const {error, onChange, show } = props
  return (
    <Container display={show}>
      <Headline color="#fff">What's the password?</Headline>
      <StyledInput type="password" onChange={onChange} />
      { error && 
        <Error>Oops! That doesn't look right.</Error>
      }
    </Container>
  )
}

const Container = styled.div`
display: ${({display}) => display ? 'flex' : 'none'};
  background-color: rgba(0,0,0);
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  left: 0;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledInput = styled.input`
  width: 300px;
  height: 60px;
  padding: 10px;
  font-size: 2rem;
  border: 2px solid rgb(246,89,150);
  box-sizing: border-box;
`

const Error = styled.h2`
  margin-top: 10px;
  color: rgb(246,89,150);

`

export default Password