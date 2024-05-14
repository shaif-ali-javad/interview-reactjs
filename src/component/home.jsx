import React from 'react'
import "./home/home.css"
import { NavLink } from "react-router-dom";

import img0 from '../assets/icon-128.png'
import { Box } from '@mui/material';

function home() {
  return (
    <span className="home">
    <Box sx={{}}>
      <img src={img0} className='img0' alt="logo" /><br />
      <NavLink className="link0" to="/gamemode" sx={{}}> Play </NavLink>
    
    </Box>
    </span>
  )
}

export default home
