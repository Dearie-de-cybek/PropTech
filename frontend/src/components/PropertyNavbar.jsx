import React from 'react';
import { Link } from 'react-router-dom';

const PropertyNavbar = () => {
  return (
    <nav className="py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section - Hamburger and Logo */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button className="text-white focus:outline-none">
            <img src="../public/icons/hambug.svg" alt="" />
          </button>
          
          {/* Logo */}
          <span className="font-montserrat font-bold text-2xl text-white">LOGO</span>
          {/*  <img src="/logo.svg" alt="Logo" className="h-10" /> */}
        </div>
        
        {/* Middle - Search Bar */}
        <div className="relative flex-1 mx-8">
          <div className="bg-[#1E1E1E] rounded-[20px] flex items-center px-4 py-2">
            {/* Home Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search properties..."
              className="bg-transparent w-full text-white font-roboto focus:outline-none"
            />
            
            {/* Search Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Right - Register and Login */}
        <div className="flex space-x-6">
          <Link to="/register" className="text-white font-roboto uppercase">
            REGISTER
          </Link>
          <Link to="/login" className="text-white font-roboto uppercase">
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PropertyNavbar;