import React from "react"
import styled from "styled-components"
import home from "./../../images/projectImages/YummyPiRecipes/home.png"
import search from "./../../images/projectImages/YummyPiRecipes/search.png"
import details from "./../../images/projectImages/YummyPiRecipes/details.png"
import create from "./../../images/projectImages/YummyPiRecipes/create.png"

export const YummyPiRecipes = () => {
  return (
    <AppContainer>
      <ImagesContainer>
        <DescriptionContainer>
          <Title>YummyPi Recipes</Title>
          <Description>
            I am the founding engineer for{" "}
            <Link
              href="https://yummypirecipes.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              yummyPiRecipes.com
            </Link>
            . My partner and I used to publish recipes in the uwaterloo mathNEWS
            paper under the writer name yummyPi. This website continues sharing
            recipes with our readers after our graduation. Scalability and cost
            effectiveness were major considerations. Key tech: AWS, MongoDB,
            Express, React, NodeJS.
          </Description>
        </DescriptionContainer>
        <ResponsiveImageWide src={home} alt="Home" />
        <ResponsiveImage src={search} alt="Search" />
        <ResponsiveImage src={details} alt="Details" />
      </ImagesContainer>
    </AppContainer>
  )
}

const Link = styled.a`
  color: #64ffda;
  text-decoration: underline;
`

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
  width: 160%;
  height: 50vh;

  margin-left: 10px;
  margin-right: 10px;
`

const Title = styled.h1`
  color: #64ffda;
  font-size: 60px;
  margin: 10px 0;
  text-align: center;
  padding: 10px;

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
  align-items: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export default YummyPiRecipes
