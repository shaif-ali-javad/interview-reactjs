import React from 'react'
import { NavLink } from 'react-router-dom'

function gamemode() {
  return (
    <div>
      <NavLink className="link0" to="/streak"> WIN STEAK </NavLink><br />
      <NavLink className="link0" to="/play"> 60 SEC </NavLink>
    </div>
  )
}

export default gamemode
