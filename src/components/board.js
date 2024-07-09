import React from "react"
import styled from "styled-components"
import self from "./../images/mount douglas.jpg"
import treeBranch from "./../images/bark texture.png"

export const Board = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Content>
        <TextContainer>
          <Greeting>
            <Name className="hand-wave">👋</Name>
            <Name>Hello,</Name>
          </Greeting>
          <Description>
            I am a 4th year Bachelor of Computer Science student at the
            University of Waterloo. My interests include game dev, creating
            visually appealing websites, and building fun mobile apps.
          </Description>
          <Description>
            I also enjoy playing table tennis and badminton, am an avid fan of
            music, and enjoy taking care of animals.
          </Description>
        </TextContainer>
        <ImageWrapper>
          <StyledImage src={self} alt="self" />
          <Caption>Hiking Mount Douglas</Caption>
        </ImageWrapper>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  background-color: #0e3269;
  border-radius: 10px;
  border-width: 30px;
  border-style: solid;
  border-image-source: repeating-linear-gradient(
    45deg,
    transparent,
    #64ffda 20px
  );
  border-image-slice: 30;
  border-image-width: 1;
  border-image-outset: 0;
  border-image-repeat: round;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  border: 20px solid transparent;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const TextContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    text-align: center;
  }
`

const Greeting = styled.div`
  display: flex;
  align-items: center;
  white-space: break-spaces;
`

const Description = styled.p`
  color: #a8b2d1;
  font-size: 18px;
  margin: 20px 0;
  line-height: 1.6;
`

const Title = styled.h1`
  color: #64ffda;
  font-size: 48px;
  margin: 10px 0;
  text-align: center;
`

const Name = styled.h1`
  color: #e6f1ff;
  font-size: 48px;
  margin: 10px 0;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:hover div {
    opacity: 1;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export default Board
