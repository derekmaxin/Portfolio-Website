import React from "react"
import "./styles.css"
//import { Player } from "./components/player"
import { Board } from "./components/board"
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
          <header className="nav">
            <div
              style={{
                fontWeight: "bold",
                //justifyContent: "center",
                display: "flex",
                position: "fixed",
                //padding: "20px",
                //fontSize: "x-large",
              }}
            >
              Derek Maxin
            </div>
            <nav
              className="nav__container__actions"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ul>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="home"
                  style={{ margin: "0 10px" }}
                >
                  Home
                </Link>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="board"
                  style={{ margin: "0 10px" }}
                >
                  About Me
                </Link>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="interview"
                  style={{ margin: "0 10px" }}
                >
                  Projects
                </Link>
              </ul>
            </nav>
          </header>
          <section id="home">
            <Home />
          </section>
          <section id="board">
            <Board />
          </section>
          <section id="interview">
            <Interview />
          </section>
        </div>
      </Router>
    </>
  )
}

export default App
