import React from "react"
import styled from "styled-components"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import AbcIcon from "@mui/icons-material/Abc"

export const Board = () => {
  return (
    <StyledBoard>
      <Grid container spacing={1}>
        {/* Create a 3x3 grid of BoardCell components */}
        <Grid item xs={4}>
          <AbcIcon />
        </Grid>
        <Grid item xs={4}>
          <AbcIcon />
        </Grid>
        <Grid item xs={4}>
          <AbcIcon />
        </Grid>
        <Grid item xs={4}>
          <AbcIcon />
        </Grid>
        <Grid item xs={4}>
          <AbcIcon />
        </Grid>
        <Grid item xs={4}>
          <AbcIcon />
        </Grid>
        <Grid item xs={4}>
          <AbcIcon />
        </Grid>
        <Grid item xs={4}>
          <AbcIcon />
        </Grid>
        <Grid item xs={4}>
          <AbcIcon />
        </Grid>
      </Grid>
    </StyledBoard>
  )
}

const StyledBoard = styled(Paper)`
  background-color: pink;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
`
