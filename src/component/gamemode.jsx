import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./gamemode.css"
// import background from './lottie-anmiation/background.jsx'
import Lottie from'lottie-react'
import background from '../assets/0.json'
import background0 from '../assets/1.json'
function gamemode() {
  return (
    <div>
      <Typography variant="h4" gutterBottom color={"#fff"} fontWeight={"bold"} className='text0'>{"> "}
         GAME MODE
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgb(195, 195, 195)', borderRadius: '10px', border: 1, borderColor: 'white' }}>

      <Lottie animationData={background} alt="background" className='background'/>
      <NavLink className="link0 text0" to="/streak"> WIN STEAK </NavLink>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', background: 'rgb(195, 195, 195)', borderRadius: '10px', border: 1, borderColor: 'white' }}>
      <Lottie animationData={background0} alt="background" width={100} className='background'/>
      <NavLink className="link0 text0" to="/play"> 60 SEC </NavLink> 
      </Box>
    </div>
  )
}

export default gamemode
