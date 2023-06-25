import React from 'react'
import logo from '../logo.svg'
import '../styles/Homestyle.css'
function Home() {
  return (
    <div>
         <div className='home' >
          
          <img className='logo1' alt='logo' src={logo}/>
  
             
              <h1 >React</h1>
              <p>The library for web and native user interfaces</p>
              <div >
              <button className='button1'>Learn React</button>
              <button className='button2'>API Reference</button>
              </div>
  
          </div>
    </div>
  )
}

export default Home