import React from 'react';
import styled from 'styled-components'

import { Link } from "gatsby"

const Nav = props => {
  return (
    <Container>
      <Name>
        <Link to="/">Kris White</Link>
      </Name>

      <LeftSide>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/about/">Contact</Link>
        </li>
      </LeftSide>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

    & a {
      text-decoration: none;
      color: #0e1111;

      &:hover {
        text-decoration: line-through;
      }
    }
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Name = styled.p`
  font-size: 2.75rem;

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`

const LeftSide = styled.ul`
  /* display: none;

  @media screen and (min-width: 768px) { */
    font-size: 2rem;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;

    
  /* } */
`

export default Nav