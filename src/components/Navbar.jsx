import React from 'react'
import Box from '@mui/material/Box';
import logo from '../logo.svg'
import '../styles/Navbarstyle.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
         <Box className='Navbar' >
        
     
     
        <img  className='logo' alt='logo' src={logo}/>
        <input className='search' placeholder='search....' type='search'></input>
        
             
           <Link to = '/' className='b1'>Learn</Link>
           <button className='b1'>Referance</button>
           <button className='b1'>community</button>
           <Link to='/Blogs' className='b1'>Blog</Link>
           <div className='links'>
           <LightModeIcon className='link'/>
           <GitHubIcon className='link'/>
           </div>
           
           
   
   
         </Box>
    </div>
  )
}

export default Navbar