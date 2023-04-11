import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Header';
import Lowerheader from './Lowerheader';
import Home from './Home';

function App() {
  return (
    <Router>
     <div className="app">
      <Routes>
        <Route path='/checkout' element={<><Header/></>} />
          
        <Route path='/login' element={<></>} />
        <Route path='/' element={<><Header/><Lowerheader/><Home/></>}  />
          
          
      
      </Routes>
       
      </div>
    </Router>
   
  );
}

export default App;
