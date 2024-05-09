import React from "react"
import myImg from "./../images/myself.jpg"

export const Home = () => {
  return (
    <>
      <p style={{ margin: "15px" }}>Welcome to my website! I'm Derek</p>
      <p style={{ margin: "15px" }}>
        I am a 4th year Bachelor of Computer Science student at the University
        of Waterloo. My interests include game dev, creating visually appealing
        websites, and building fun mobile apps.
      </p>
      <p style={{ margin: "15px" }}>
        I also enjoy playing table tennis and badminton, am an avid fan of
        music, and enjoy taking care of animals.
      </p>
      <div>
        <img style={{ width: "400px" }} src={myImg} alt="cows" />
      </div>
    </>
  )
}
