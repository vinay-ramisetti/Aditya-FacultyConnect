import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import '../tailwind.css'; // Adjust the path if needed
import { v4 as uuidv4 } from "uuid"; 


import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import Welcome from './Welcome';


function App() {
  return (
    <div>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route
            path="/"
            element={<Welcome/>}
            />
          <Route
             path="/login"
            element={<Login/>}
            />
            <Route
              path="/home"
              element={<Home/>}
              />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
