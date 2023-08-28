import React from 'react'
import logo from '../logo.svg'
import '../styles/Endpagestyle.css'
function Endpage() {
  return (
    <div className='format3'>
     <img className='logo1' alt='logo' src={logo}/>
     <h3 className=''>Welcome to the<br></br>React community</h3>
     <button>Get Started</button>

   </div>
  )
}

export default Endpage