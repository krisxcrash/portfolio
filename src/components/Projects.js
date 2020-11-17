import React, {useState} from 'react';
import styled from 'styled-components'

import Row from "../components/Row"
import ContentBlock from "../components/ContentBlock"
import Title from "../components/Title"
import HappyMoney from '../assets/images/happymoney.png'
import Payoff from '../assets/images/payoff.png'
import Iherb from '../assets/images/iherb.png'
import Hma from '../assets/images/hma.png'
import Objects from '../assets/images/objects.png'
import Password from './Password'


const Projects = () => {

const [showPasswordInput, setShowPasswordInput] = useState(true)
const [error, setError] = useState(false)

  const validatePassword = (e) => {
    const pw = "love2code"
    const targetValue = e.target.value
    if (targetValue === pw) {
      setError(false)
      setShowPasswordInput(false)
    } else if ( targetValue === "" ) {
      setError(false)
    } else if (targetValue.length >= pw.length) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const renderProjects = () => {
    return (
      <>
        <Title text='Recent Work' delay="200"/>
        <Row>
          <ContentBlock
            backgroundImage={HappyMoney}
            title="Happy Money"
            url="https://happymoney.com"
            margin="0 2.5rem 0 0"
            content="Built using React, Styled Components, Prismic CMS, GraphQL, Gatsby, and deployed via Netlify"
          />
          <ContentBlock
            backgroundImage={Objects}
            title={`Objects \nby Happy Money`}
            margin="0 0 0 2.5rem"
            content="Built using React, Styled Components, Storybook, and deployed via Netlify"
          />
        </Row>
        <Row>
          <ContentBlock
            backgroundImage={Payoff}
            title="Payoff"
            url="https://payoff.com"
            margin="0 2.5rem 0 0"
            content="Built using React, Bootstrap, Styled Components, Ruby on Rails, and JavaScript"
          />
          <ContentBlock
            backgroundImage={Iherb}
            title="iHerb"
            url="https://iherb.com"
            margin="0 0 0 2.5rem"
            content="Built using MVC pattern in C# with HTML, SCSS, Bootstrap, and jQuery"
          />
        </Row>
        {/* <Row>
          <ContentBlock
            backgroundImage={Hma}
            title="Happy Money Application"
            url="https://happymoney.com"
            margin="0 auto"
          />
        </Row> */}
      </>
    )
  }

  return (
    <>
      <Password onChange={e => validatePassword(e)} error={error} show={showPasswordInput} /> 
      {
        !showPasswordInput && 
        renderProjects()
      }
    </>
    )
}

export default Projects