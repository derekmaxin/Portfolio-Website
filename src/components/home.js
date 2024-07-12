import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll"
import myImg from "./../images/myself.jpg"
import { Bird } from "../components/linkArt"
import StarrySky from "./starrySky"
import cloud1 from "./../images/cloud1.png"
import cloud2 from "./../images/cloud2.png"
//import cloud3 from "./../images/cloud3.png"
import cloud4 from "./../images/cloud4.png"

export const Home = () => {
  const Cloud = ({ src, size, top, left, duration, targetRef }) => {
    const cloudRef = useRef(null)
    const [opacity, setOpacity] = useState(0.8)

    useEffect(() => {
      const checkCollision = () => {
        const cloud = cloudRef.current
        const target = targetRef.current

        if (cloud && target) {
          const cloudRect = cloud.getBoundingClientRect()
          const targetRect = target.getBoundingClientRect()

          if (
            cloudRect.left < targetRect.right &&
            cloudRect.right > targetRect.left &&
            cloudRect.top < targetRect.bottom &&
            cloudRect.bottom > targetRect.top
          ) {
            setOpacity(0.3) // Reduce opacity on collision
          } else {
            setOpacity(0.8) // Reset opacity if not colliding
          }
        }
      }

      const interval = setInterval(checkCollision, 100)

      return () => clearInterval(interval)
    }, [targetRef])

    const style = {
      width: size,
      height: size / 3,
      top: top,
      left: left,
      animationDuration: duration,
      opacity: opacity,
    }
    return (
      <img
        src={src}
        className="cloud"
        style={style}
        ref={cloudRef}
        alt="cloud"
      ></img>
    )
  }

  const targetRef = useRef(null)

  return (
    <Container className="target" ref={targetRef}>
      <StarrySkyWrapper>
        <StarrySky />
      </StarrySkyWrapper>
      <Intro>Welcome to my portfolio! My name is</Intro>
      <Name>Derek Maxin</Name>
      <Tagline>Software developer and architect</Tagline>
      <ButtonContainer>
        <ScrollLink to="board" smooth={true} duration={1000}>
          <Button>About Me</Button>
        </ScrollLink>
        <ScrollLink to="tech" smooth={true} duration={1000}>
          <Button>Tech</Button>
        </ScrollLink>
        <ScrollLink to="interview" smooth={true} duration={1000}>
          <Button>Projects</Button>
        </ScrollLink>
      </ButtonContainer>

      <Cloud
        src={cloud1}
        size={200}
        top="10%"
        left="-20%"
        duration="45s"
        targetRef={targetRef}
      />
      <Cloud
        src={cloud4}
        size={150}
        top="40%"
        left="-30%"
        duration="30s"
        targetRef={targetRef}
      />
      <Cloud
        src={cloud2}
        size={250}
        top="50%"
        left="-25%"
        duration="45s"
        targetRef={targetRef}
      />
      <Cloud
        src={cloud4}
        size={180}
        top="70%"
        left="-40%"
        duration="50s"
        targetRef={targetRef}
      />
      <Cloud
        src={cloud1}
        size={220}
        top="20%"
        left="-15%"
        duration="55s"
        targetRef={targetRef}
      />
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

  overflow-x: hidden;
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`

const StarrySkyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`
