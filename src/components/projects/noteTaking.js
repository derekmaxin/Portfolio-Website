import React from "react"
import styled from "styled-components"
import Grid from "./../../images/projectImages/NoteTaking/Grid.PNG"
import List from "./../../images/projectImages/NoteTaking/List.PNG"

export const NoteTaking = () => {
  return (
    <AppContainer>
      <ImagesContainer>
        <DescriptionContainer>
          <Title>Note Taking</Title>
          <Description>
            A custom built, simple note taking app. Key tech: Kotlin, JavaFX,
            IntelliJ.
          </Description>
        </DescriptionContainer>
        <ResponsiveImage src={List} alt="List" />
        <ResponsiveImage src={Grid} alt="Grid" />
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
  max-width: 550px;
  height: 100%;
  max-height: 50vh;

  margin-left: 10px;
  margin-right: 10px;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120%;
  height: 50vh;

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

export default NoteTaking
