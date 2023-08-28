import React from 'react'
import Box from '@mui/material/Box';
import logo from '../logo.svg'
import '../styles/Navbarstyle.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 17,
};
function Navbar() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  const json = JSON.stringify(darkMode);
  localStorage.setItem("site-dark-mode", json);
}, [darkMode]);
  
  return (
    

    <div>
      <Box className='Navbar' >
    <img  className='logo' alt='logo' src={logo}/>
    <input className='search' onClick={handleOpen} placeholder='search....' type='search'></input>
    <Link to = '/' className='b1' id='link'>Learn</Link>
     <Link to = '/' className='b1'id='link'>Reference</Link>
     <Link to = '/' className='b1'id='link'>community</Link>
     <Link to = '/Blogs'id='link' className='b1'>Blog</Link>
           

     <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
     <Link to = '/' className='b2'id='link'>  <GitHubIcon className='links'/></Link>
     </Box>
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style} className='modal'>
      <input className='search2'  placeholder='search....' type='search'></input>
        <Typography className='modal'>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  </div>





    
    // <div>
    //      <Box className='Navbar' >
        
     
     
    //     <img  className='logo' alt='logo' src={logo}/>
    //     <input className='search' placeholder='search....' type='search'></input>
        
             
    //        <Link to = '/' className='b1'>Learn</Link>
    //        <Link to = '/' className='b1'>Reference</Link>
    //        <Link to = '/' className='b1'>community</Link>
    //        <Link to = '/Blogs' className='b1'>Blog</Link>
           

    //        <Link to = '/' className='b2'> <LightModeIcon className='links'/></Link>
    //        <Link to = '/' className='b2'>  <GitHubIcon className='links'/></Link>
    //        {/* <button className='b1'>Referance</button>
    //        <button className='b1'>community</button> */}
           
           
           
   
   
    //      </Box>
    // </div>
  )
}

export default Navbar