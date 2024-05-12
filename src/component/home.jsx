import React from 'react'
import { NavLink } from "react-router-dom";

function home() {
  return (
    <div>
                <NavLink className="link" to="/interview-reactjs/play"> Play </NavLink>
    </div>
  )
}

export default home
