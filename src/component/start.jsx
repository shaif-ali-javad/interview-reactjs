import React from 'react'
import "./start/start.css"
import { NavLink } from 'react-router-dom'
import img0 from '../assets/GUESSTHEFLAG.png'

function start() {
  return (
    <div>
      <img src={img0} alt="" className='img0' />
            <NavLink className="link5" to="/gamemode" sx={{}}> Start </NavLink>
    </div>
  )
}

export default start
