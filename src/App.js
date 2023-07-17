
import './App.css';
import PageOne from './components/PageOne';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Top from './components/Top';
import Blogs from './components/Blogs';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
function App() {
 
 
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
