import React from 'react'
import "tailwindcss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './global.css';
// import Navbar from './components/Navbar';
import PropertyNavbar from './components/PropertyNavbar';

const App = () => {
  return (
          <Router>
            {/* <Navbar /> */}
            <PropertyNavbar />
            <Routes>
            </Routes>
          </Router>
  )
}

export default App