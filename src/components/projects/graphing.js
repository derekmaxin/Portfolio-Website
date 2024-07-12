import React from "react"
import styled from "styled-components"
import barGraph from "./../../images/projectImages/Graphing/Bar.PNG"
import lineGraph from "./../../images/projectImages/Graphing/Line.PNG"
import pieGraph from "./../../images/projectImages/Graphing/Pie.PNG"

export const Graphing = () => {
  return (
    <AppContainer>
      <ImagesContainer>
        <DescriptionContainer>
          <Title>Graphing Calculator</Title>
          <Description>
            A custom built, fully cuztomizable graphing calculator. Key tech:
            Kotlin, JavaFX, IntelliJ.
          </Description>
        </DescriptionContainer>
        <ResponsiveImageWide src={lineGraph} alt="Line graph" />
        <ResponsiveImage src={barGraph} alt="Bar graph" />
        <ResponsiveImage src={pieGraph} alt="Pie graph" />
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
  max-width: 320px;
  height: 100%;
  max-height: 50vh;

  margin-left: 10px;
  margin-right: 10px;
`

const ResponsiveImageWide = styled.img`
  width: 120%;
  max-width: 500px;
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

export default Graphing
