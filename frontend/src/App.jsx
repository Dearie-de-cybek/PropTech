import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './global.css';

const App = () => {
  return (
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
  )
}

export default App