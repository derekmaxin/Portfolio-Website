import React from "react"
import styled from "styled-components"
import myImg from "./../images/myself.jpg"
import { Bird } from "../components/linkArt"

export const Home = () => {
  const Cloud = ({ size, top, left, duration }) => {
    const style = {
      width: size,
      height: size / 3,
      top: top,
      left: left,
      animationDuration: duration,
    }
    return <div className="cloud" style={style}></div>
  }

  return (
    <Container>
      <Intro>Welcome to my portfolio! My name is</Intro>
      <Name>Derek Maxin</Name>
      <Tagline>Creating with technology</Tagline>

      <div>
        <Button href="">About me</Button>
        <Button href="">Projects</Button>
      </div>
      <Cloud size={200} top="10%" left="-20%" duration="25s" />
      <Cloud size={150} top="30%" left="-30%" duration="30s" />
      <Cloud size={250} top="50%" left="-25%" duration="35s" />
      <Cloud size={180} top="70%" left="-40%" duration="40s" />
      <Cloud size={220} top="20%" left="-15%" duration="45s" />
    </Container>
  )
}

const Container = styled.div`
  text-align: left;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
  background-color: #0a192f;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Intro = styled.p`
  color: #64ffda;
  font-size: 18px;
`

const Name = styled.h1`
  color: #e6f1ff;
  font-size: 48px;
  margin: 10px 0;
`

const Tagline = styled.h2`
  color: #a8b2d1;
  font-size: 32px;
  margin: 10px 0;
`

const Description = styled.p`
  color: #8892b0;
  font-size: 18px;
  margin: 20px 0;
`

const ButtonContainer = styled.div``

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`
