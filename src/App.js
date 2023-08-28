import React from "react";
import './App.css';
import PageOne from './components/PageOne';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Top from './components/Top';
import Blogs from './components/Blogs';
import LightModeIcon from './components/Navbar'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ThemeProvider } from '@mui/material';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import { Create } from '@mui/icons-material';

import { createContext ,useState } from 'react';
import { setDarkTheme, setDefaultTheme } from "../src/app/Store/features/themeSlice";
export const ThemeContext = createContext('null')
const App = () => {
 
  return (
    
    <BrowserRouter>
    
        <div className="App">
      <Top/>
      <Navbar/>
     
      
        

      
    </div>
    <div>
      <Routes>
        <Route path='/' element={<PageOne/>}></Route>
        <Route path='/Blogs' element={<Blogs/>}></Route>
        
        
      </Routes>
    </div>
    
    </BrowserRouter> 
    

   
  );
}

export default App;
