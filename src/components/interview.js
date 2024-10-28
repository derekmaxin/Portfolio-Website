import React from "react"
import styled from "styled-components"
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { YummyPiRecipes } from "../components/projects/yummyPiRecipes"
import { Reversi } from "../components/projects/reversi"
import { AceInterviewer } from "../components/projects/aceInterviewer"
import { Graphing } from "../components/projects/graphing"
import { Connect4 } from "../components/projects/connect4"
import { NoteTaking } from "../components/projects/noteTaking"

export const Interview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <OuterContainer>
      <Title>Projects</Title>
      <Description style={{ color: "white" }}>
        All projects presented here are personal and most have public source
        code on my{" "}
        <Link
          href="https://github.com/derekmaxin"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </Link>
        . For my professional experience please request my resume at{" "}
        <Link
          href="mailto:dmaxin@uwaterloo.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          dmaxin@uwaterloo.ca
        </Link>{" "}
        or check out my{" "}
        <Link
          href="https://www.linkedin.com/in/derekmaxin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        .
      </Description>

      <Container>
        <StyledSlider {...settings}>
          <Slide>
            <AceInterviewer />
          </Slide>
          <Slide>
            <YummyPiRecipes />
          </Slide>
          <Slide>
            <Graphing />
          </Slide>
          <Slide>
            <Reversi />
          </Slide>
          <Slide>
            <NoteTaking />
          </Slide>
          <Slide>
            <Connect4 />
          </Slide>
          <Slide>
            <DescriptionContainer>
              <Title>Portfolio Website</Title>
              <Description>
                This website was build from scratch with React, HTML, and CSS.
                Thank you for taking the time to explore my projects. If you've
                made it this far, please consider reaching out to me for a chat,
                it would be great to get to know you!
              </Description>
              <IconRow>
                <IconButton
                  href="https://github.com/derekmaxin"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="#181717"
                  hoverColor="#3b3b3b"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  href="mailto:dmaxin@uwaterloo.ca"
                  color="#d10000"
                  hoverColor="#d63a3a"
                >
                  <FaEnvelope />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/derekmaxin"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="#0A66C2"
                  hoverColor="#2f7dcc"
                >
                  <FaLinkedin />
                </IconButton>
              </IconRow>
            </DescriptionContainer>
          </Slide>
        </StyledSlider>
      </Container>
    </OuterContainer>
  )
}

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 40px;
  font-family: "Arial", sans-serif;
  background-color: #1955ad;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`

const OuterContainer = styled.div`
  margin: 0 auto;
  padding: 0px;
`

const Title = styled.h1`
  color: #64ffda;
  font-size: 48px;
  margin: 10px 0;
  text-align: center;
  padding: 20px;
`

const StyledSlider = styled(Slider)`
  width: 85vw;
  height: 60vh;
  .slick-list {
    padding: 0 0px;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-dots li button:before {
    color: #64ffda;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #64ffda;
  }
`

const Slide = styled.div`
  height: 56vh;
  width: 80vw !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  color: white;
  font-size: 24px;
  background-color: #0d3b66;
  border: 2px solid #64ffda;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
  text-align: center;
`
const Description = styled.p`
  margin-left: 10px;
  margin-right: 10px;

  color: #64ffda;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 50vh;
  padding: 5px;

  margin-left: 10px;
  margin-right: 10px;
`

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconButton = styled.a`
  margin: 0 10px;
  color: ${(props) => props.color || "black"};
  font-size: 100px;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.hoverColor || "black"};
  }
`

const Link = styled.a`
  color: white;
  text-decoration: underline;
`
