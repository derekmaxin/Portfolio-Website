import React from "react"
import styled from "styled-components"
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"
import "./styles.css"
//import { Player } from "./components/player"
import { Board } from "./components/board"
import { Tech } from "./components/tech"
import { Home } from "./components/home"
import { Interview } from "./components/interview"
import {
  BrowserRouter as Router,
  //Route,
  ///*Link,*/ Routes,
} from "react-router-dom"
import { Link } from "react-scroll"

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header
            className="nav"
            style={{ backgroundColor: "#293a52", color: "#fff" }}
          >
            <nav
              className="nav__container__actions"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "20px 0",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  position: "fixed",
                  left: "10px",
                  color: "#64ffda",
                }}
              >
                Derek Maxin
              </div>
              <div style={{ flex: 1 }}></div>
              <ul
                style={{
                  display: "flex",
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li style={{ margin: "0 10px" }}>
                  <StyledLink activeClass="active" smooth spy to="home">
                    Home
                  </StyledLink>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <StyledLink activeClass="active" smooth spy to="board">
                    About Me
                  </StyledLink>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <StyledLink activeClass="active" smooth spy to="tech">
                    Tech
                  </StyledLink>
                </li>
                <li style={{ margin: "0 10px" }}>
                  <StyledLink activeClass="active" smooth spy to="interview">
                    Projects
                  </StyledLink>
                </li>
              </ul>
              <IconRow>
                <IconButton
                  href="https://github.com/derekmaxin"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="#181717"
                  hoverColor="#757575"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  href="mailto:dmaxin@uwaterloo.ca"
                  color="red"
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
            </nav>
          </header>
          <section id="home">
            <Home />
          </section>
          <section id="board">
            <Board />
          </section>
          <section id="tech">
            <Tech />
          </section>
          <section id="interview">
            <Interview />
          </section>
        </div>
      </Router>
    </>
  )
}

const StyledLink = styled(Link)`
  color: #64ffda;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: #52c7b8;
  }
`

const IconRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  align-items: center;
  flex: 1;
`

const IconButton = styled.a`
  margin: 0 10px;
  color: ${(props) => props.color || "black"};
  font-size: 30px;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.hoverColor || "black"};
  }
`

export default App
