import React, { useEffect, useState } from 'react'
import "./home/home.css"
import { NavLink, useNavigate } from "react-router-dom";

import img0 from '../assets/icon-128.png'
import { Box } from '@mui/material';
import axios from 'axios';


// function home() {
  //   return (
    //     <span className="home">
//     <Box sx={{}}>
//       <img src={img0} className='img0' alt="logo" /><br />
//       <NavLink className="link0" to="/start" sx={{}}> Play </NavLink>
    
//     </Box>
//     </span>
//   )
// }

// export default home


const Swr = () => {
const [name, setName] = useState()
const navigation = useNavigate()
const [player, setPlayer] = useState([])


// useEffect(() => {
//   axios.get("http://localhost:3001/getplayer")
//   .then(player => setPlayer(player.data))
//   .catch(err => console.log(err))
// }, [])

const handleSubmit = (e) => {

    e.preventDefault()
  axios.post("http://localhost:4001/player", {name})
  .then(result => {console.log(result)
    navigation("/start")
  })
  .catch(err => console.log(err))
  }

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-12">
                <label htmlFor="name"></label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div className="text-center" onClick={toggleFullScreen}><button style={{backgroundColor: "#24ea77"}} type="submit">Login</button></div>
            </form>
    </div>
  );
};

export default Swr;