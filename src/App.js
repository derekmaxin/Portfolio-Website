import React from "react"
//import { Player } from "./components/player"
import { Board } from "./components/board"
import { Home } from "./components/home"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <div
        style={{
          fontWeight: "bold",
          justifyContent: "center",
          display: "flex",
          padding: "20px",
          fontSize: "x-large",
        }}
      >
        Derek Maxin
      </div>
      <Router>
        <div>
          <nav
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                padding: 0,
              }}
            >
              <li style={{ margin: "0 10px" }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link to="/board">Board</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
