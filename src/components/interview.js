import React, { useState, useEffect } from "react"
import styled from "styled-components"

export const Interview = () => {
  const [count, setCount] = useState(0)
  const [isEven, setIsEven] = useState(true)

  useEffect(() => {
    if (count % 2 === 0) {
      setIsEven(true)
    } else {
      setIsEven(false)
    }
  }, [count])

  return (
    <StyledDiv>
      <p>Hello Interviewers!</p>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <button onClick={() => setCount(count + 1)}>Click</button>
        <p>{count}</p>
      </div>
      {isEven ? <p>This number is even</p> : <p>This number is odd</p>}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`Direction:
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  gap: 10px;
  flex-direction: column;
`
