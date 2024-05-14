import { Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function gamemode() {
  return (
    <div>
      <Typography variant="h4" gutterBottom color={"#fff"} fontWeight={"bold"}>{"> "}
         GAME MODE
      </Typography>
      <NavLink className="link0" to="/streak"> WIN STEAK </NavLink><br />
      <NavLink className="link0" to="/play"> 60 SEC </NavLink>
    </div>
  )
}

export default gamemode
