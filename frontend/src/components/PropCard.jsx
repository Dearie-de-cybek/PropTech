import React from 'react';

const PropCard = ({ 
  imageUrl = '/placeholder-property.jpg',
  address = '123 Anywhere St, Main, OK 12321',
  price = 480000, 
  bedrooms = 3, 
  bathrooms = 3, 
  toilets = 4,
  imageCount = 5
}) => {
  return (
    <div className="flex flex-col">
      {/* Main Card */}
      <div className="w-[250px] h-[365px] relative flex flex-col">
        {/* Property Image */}
        <div className="relative h-[250px] overflow-hidden">
          <img 
            src={imageUrl} 
            alt="Property" 
            className="w-full h-full object-cover"
          />
          
          {/* Address Tag */}
          <div className="absolute top-3 left-3 bg-[#212121] text-white py-1 px-2 rounded flex items-center text-xs">
            <img src="../public/icons/map.svg" alt="" />
            <span className="truncate max-w-[180px]">{address}</span>
          </div>
          
          {/* Image Count Tag */}
          <div className="absolute bottom-3 left-3 bg-[#212121] text-white p-1 rounded flex items-center text-xs">
            <img src="../public/icons/camera.svg" alt="" />
            <span>{imageCount}</span>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="bg-[#0D0D0D] flex-1 p-3">
          {/* Price */}
          <div className="text-white font-bold text-xl mb-2">
            ${price.toLocaleString()}
          </div>
          
          {/* Property Features */}
          <div className="flex space-x-2">
            {/* Bedrooms */}
            <div className="bg-[#212121] rounded p-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 2a1 1 0 00-1 1v1h8V3a1 1 0 00-1-1H7zM3 5V4a3 3 0 013-3h8a3 3 0 013 3v1h1a1 1 0 011 1v5a1 1 0 01-1 1h-1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3H2a1 1 0 01-1-1V6a1 1 0 011-1h1z" />
              </svg>
              <span className="text-white">{bedrooms}</span>
            </div>
            
            {/* Bathrooms */}
            <div className="bg-[#212121] rounded p-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-white">{bathrooms}</span>
            </div>
            
            {/* Toilets */}
            <div className="bg-[#212121] rounded p-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-white">{toilets}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Card (Buy and Like) */}
      <div className="w-[250px] h-[66px] bg-[#0D0D0D] mt-8 flex items-center justify-between p-3">
        <button className="bg-[#f10000] text-white font-bold py-2 px-10 rounded">
          Buy
        </button>
        <button className="bg-[#212121] p-2 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PropCard;