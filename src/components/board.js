import React from "react"
import styled from "styled-components"

export const Board = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "break-spaces",
        }}
      >
        <Name className="hand-wave">👋</Name>
        <Name> Hello,</Name>
      </div>
      <Description>
        I am a 4th year Bachelor of Computer Science student at the University
        of Waterloo. My interests include game dev, creating visually appealing
        websites, and building fun mobile apps.
      </Description>
      <Description>
        I also enjoy playing table tennis and badminton, am an avid fan of
        music, and enjoy taking care of animals.
      </Description>
    </Container>
  )
}

const Container = styled.div`
  text-align: left;
  margin: 0 auto;
  padding: 20px;
  padding-left: 200px;
  padding-right: 400px;
  font-family: "Arial", sans-serif;
  background-color: #0a192f;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Description = styled.p`
  color: #a8b2d1;
  font-size: 18px;
  margin: 20px 0;
`

const Title = styled.h1`
  color: #64ffda;
  font-size: 48px;
  margin: 10px 0;
`

const Name = styled.h1`
  color: #e6f1ff;
  font-size: 48px;
  margin: 10px 0;
`
