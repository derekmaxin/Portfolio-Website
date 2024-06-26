// src/starrySky.js
import React, { useRef, useEffect, useState } from "react"

const StarrySky = () => {
  const canvasRef = useRef(null)
  const [stars, setStars] = useState([])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const numStars = 200
    const starArray = []

    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = Math.random() * 3 + 2 // Increase size range
      const star = { x, y, size, brightness: 0 }
      starArray.push(star)
    }

    setStars(starArray)

    const drawStar = (context, x, y, radius, points, inset) => {
      context.beginPath()
      context.moveTo(x, y + radius)
      for (let i = 0; i < 2 * points + 1; i++) {
        const angle = (Math.PI / points) * i
        const length = i % 2 === 0 ? radius : radius * inset
        context.lineTo(
          x + length * Math.sin(angle),
          y + length * Math.cos(angle)
        )
      }
      context.closePath()
      context.shadowBlur = 10 // Add glow effect
      context.shadowColor = "white"
      context.fill()
    }

    const drawStars = (cursorX, cursorY) => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      starArray.forEach((star) => {
        const distance = Math.hypot(star.x - cursorX, star.y - cursorY)
        const maxDistance = 250 // Increase max distance for brightness effect
        star.brightness = Math.max(0, 1 - distance / maxDistance)

        context.fillStyle = `rgba(255, 255, 255, ${star.brightness})`
        drawStar(context, star.x, star.y, star.size, 5, 0.5)
      })
    }

    const handleMouseMove = (e) => {
      drawStars(e.clientX, e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ display: "block" }} />
}

export default StarrySky
