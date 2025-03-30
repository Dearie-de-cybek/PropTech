import React from 'react'
import "tailwindcss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './global.css';
// import Navbar from './components/Navbar';
import PropertyNavbar from './components/PropertyNavbar';
import PropertyHome from './pages/PropertyHome';

const App = () => {
  return (
          <Router>
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<PropertyHome />} />
              <Route path="/properties" element={<PropertyHome />} />
            </Routes>
          </Router>
  )
}

export default App