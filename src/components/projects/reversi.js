import React from "react"
import styled from "styled-components"
import endScreen from "./../../images/projectImages/Reversi/End.png"
import intermediateScreen from "./../../images/projectImages/Reversi/Intermediate.png"
import loginScreen from "./../../images/projectImages/Reversi/Login.png"

export const Reversi = () => {
  return (
    <AppContainer>
      <ImagesContainer>
        <DescriptionContainer>
          <Title>Reversi</Title>
          <Description>
            I recreated the popular 2-player game known as Reversi for Android!
            Previously published to Google Play ~ no longer maintained. Key
            tech: Java, XML, Android Studio, design patterns.
          </Description>
        </DescriptionContainer>
        <ResponsiveImage src={loginScreen} alt="Login" />
        <ResponsiveImage src={intermediateScreen} alt="Intermediate" />
        <ResponsiveImage src={endScreen} alt="End" />
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
  max-width: 360px;
  height: 50vh;
  max-height: 490px;
  margin-left: 10px;
  margin-right: 10px;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140%;
  height: 50vh;
  max-height: 490px;
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
  max-height: 490px;
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

export default Reversi
