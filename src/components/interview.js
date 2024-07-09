import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Interview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <OuterContainer>
      <Title>Projects</Title>
      <Container>
        <StyledSlider {...settings}>
          <Slide>
            <h2>Project 1</h2>
            <p>Description of project 1.</p>
          </Slide>
          <Slide>
            <h2>Project 2</h2>
            <p>Description of project 2.</p>
          </Slide>
          <Slide>
            <h2>Project 3</h2>
            <p>Description of project 3.</p>
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
  width: 80vw;
  height: 60vh;
  .slick-list {
    padding: 0 20px;
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
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  color: white;
  font-size: 24px;
  background-color: #0d3b66;
  border: 2px solid #64ffda;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  margin: 10px;
  text-align: center;
`
