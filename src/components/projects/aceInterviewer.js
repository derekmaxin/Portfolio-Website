import React from "react"
import styled from "styled-components"

import loginScreen from "./../../images/projectImages/AceInterviewer/Login.jpg"
import registerScreen from "./../../images/projectImages/AceInterviewer/Register.jpg"
import homeScreen from "./../../images/projectImages/AceInterviewer/Home.jpg"
import ProfileScreen from "./../../images/projectImages/AceInterviewer/Profile unexpanded.jpg"
import SearchScreen from "./../../images/projectImages/AceInterviewer/Search and filter.jpg"

export const AceInterviewer = () => {
  return (
    <AppContainer>
      <ImagesContainer>
        <DescriptionContainer>
          <Title>Ace Interviewer</Title>
          <Description>
            Ace Interviewer is an app for users to practice their interview
            skills. The app aims to be easy and fun to use by gamifying the
            interview process. Ace Interviewer makes use of multi-user
            functionality, voice recording and audio replay. For an in-depth
            look into the full functionality of Ace Interviewer please check out
            the{" "}
            <Link
              href="https://github.com/derekmaxin/AceInterviewer"
              target="_blank"
              rel="noopener noreferrer"
            >
              public repository
            </Link>
            . Key tech: Kotlin, Compose, Android, Firebase, MVVM architecture,
            MaterialUI.
          </Description>
        </DescriptionContainer>
        <ResponsiveImage src={loginScreen} alt="Login" />
        <ResponsiveImage src={registerScreen} alt="Register" />
        <ResponsiveImage src={homeScreen} alt="Home" />
        <ResponsiveImage src={ProfileScreen} alt="Profile" />
        <ResponsiveImage src={SearchScreen} alt="Search" />
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
  max-width: 360px;
  height: 50vh;

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
  align-items: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Link = styled.a`
  color: #64ffda;
  text-decoration: underline;
`

export default AceInterviewer
