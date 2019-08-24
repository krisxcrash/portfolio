import React from 'react';
import styled, {withTheme} from 'styled-components'

const Hero = ({ props: Object }) => {
  return (
    <div>
      <Header>
        <LogoContainer>
          Logo
        </LogoContainer>
        <MenuContainer>Menu</MenuContainer>
      </Header>
      <HeadlineSection>
        <Eyebrow>
          Hi there! I'm Kris
        </Eyebrow>
        <Title>
          I am a UI Engineer at Happy Money. I love to build pixel perfect solutions in React and React Native. 
        </Title>
        <ButtonContainer>
          <button>
            Start a project
          </button>
          <button>More about me</button>
        </ButtonContainer>
      </HeadlineSection>
      
      
      
      </div>

  )
}

const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  height: 96px;
`

const LogoContainer = styled.div`

`

const MenuContainer = styled.div`
background-color: ${({ theme }) => theme.colors.black};
color: ${({theme}) => theme.colors.white};
width: 100px;
`
      
const HeadlineSection = styled.div`
      
`

const Eyebrow = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
`

const Title= styled.h1`
color: ${({ theme }) => theme.colors.primary};
font-size: 3.5rem;

`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export default Hero