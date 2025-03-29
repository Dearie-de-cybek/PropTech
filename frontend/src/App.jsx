import React from 'react'
import "tailwindcss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './global.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
          <Router>
            <Navbar />
            <Routes>
            </Routes>
          </Router>
  )
}

export default App