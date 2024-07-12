import React from "react"
import styled from "styled-components"
import Game from "./../../images/projectImages/Connect4/Game.PNG"

export const Connect4 = () => {
  return (
    <AppContainer>
      <ImagesContainer>
        <DescriptionContainer>
          <Title>Connect 4</Title>
          <Description>
            I recreated the popular 2-player game known as Connect 4! This app
            includes slide and drop animations. Key tech: Kotlin, JavaFX,
            IntelliJ.
          </Description>
        </DescriptionContainer>
        <ResponsiveImage src={Game} alt="Connect 4" />
      </ImagesContainer>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ResponsiveImage = styled.img`
  width: 100%;
  height: 50vh;
  max-height: 100%

  margin-left: 10px;
  margin-right: 10px;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
  max-width: 500px;

  margin-left: 10px;
  margin-right: 10px;
`

const Title = styled.h1`
  color: #64ffda;
  font-size: 48px;
  margin: 10px 0;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Description = styled.p`
  width: 100%;
  height: 48vh;

  margin-left: 10px;
  margin-right: 10px;

  color: #64ffda;
  font-size: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export default Connect4
