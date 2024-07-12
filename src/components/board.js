import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import self from "./../images/mount douglas.jpg"
import treeBranch from "./../images/bark texture.png"

export const Board = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const particles = []

    const addParticle = (x, y) => {
      particles.push({
        x,
        y,
        size: Math.random() * 15 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        angle: Math.floor(Math.random() * 360),
        color: "#64ffda",
      })
    }

    const updateParticles = () => {
      particles.forEach((p, index) => {
        if (p.size <= 0) {
          particles.splice(index, 1)
        } else {
          p.x += p.speedX
          p.y += p.speedY
          p.angle += 5
          p.size -= 0.1
        }
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.angle * Math.PI) / 180)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        ctx.restore()
      })
    }

    const animateParticles = () => {
      requestAnimationFrame(animateParticles)
      addParticle(canvas.width / 2, canvas.height / 2)
      updateParticles()
      drawParticles()
    }

    canvas.width = 300
    canvas.height = 500
    animateParticles()

    return () => cancelAnimationFrame(animateParticles)
  }, [])

  return (
    <CanvasContainer>
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
              University of Waterloo. My interests include game dev, building
              fun apps, and creating websites.
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

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          zIndex: 0,
          width: "1200px",
          height: "1200px",
        }}
      />
    </CanvasContainer>
  )
}

const Container = styled.div`
  z-index: 1;
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

const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Board
