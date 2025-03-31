import React from "react";
import { Link } from "react-router-dom";
import PropertyNavbar from "../components/PropertyNavbar";

const PropertyDetail = () => {
  // Sample property data
  const property = {
    id: 1,
    name: "La Rouge Maisonnette",
    address: "123, Anywhere st, any city, any state, 123456",
    price: 480000,
    bedrooms: 3,
    bathrooms: 2,
    toilets: 2,
    images: [
      "../public/images/room1.jpg",
      "../public/images/room2.jpg",
      "../public/images/room3.jpg",
      "../public/images/room4.jpg",
    ],
    description: "A beautiful property with modern amenities...",
    features: ["Air Conditioning", "Pool", "Garden", "Garage"],
  };

  return (
    <>
      <PropertyNavbar />
      <div className="bg-[#0D0D0D] min-h-screen pb-12">
        {/* Back to search link */}
        <div className="container mx-auto px-6 pt-6">
          <Link
            to="/properties"
            className="flex items-center text-[#f10000] mb-4"
          >
            <img
              src="../public/icons/back.svg"
              alt="Back"
              className="h-4 w-4 mr-2"
            />
            <span>BACK TO SEARCH</span>
          </Link>

          {/* Property Title and Actions */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-white text-3xl font-bold mb-2">
                {property.name}
              </h1>
              <div className="flex items-center text-white">
                <img
                  src="../public/icons/map.svg"
                  alt="Location"
                  className="h-5 w-5 mr-2"
                />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="text-white">
                <img
                  src="../public/icons/share.svg"
                  alt="Share"
                  className="h-[20px] w-[17px]"
                />
              </button>
              <button className="text-white">
                <img
                  src="../public/icons/heart.svg"
                  alt="Like"
                  className="h-6 w-6"
                />
              </button>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="flex gap-4 mb-8">
          {/* Main large image (700px x 500px) */}
          <div className="relative">
            <img 
              src={property.images[0]} 
              alt={property.name} 
              className="w-[700px] h-[500px] object-cover rounded-md"
            />
            <button className="absolute left-4 top-4 bg-[#212121] p-2 rounded">
              <img src="../public/icons/expand.svg" alt="Expand" className="h-5 w-5" />
            </button>
          </div>
          
          {/* Right side container */}
          <div className="flex flex-col gap-10">
            {/* Top row with two images side by side */}
            <div className="flex gap-4">
              {/* Floor Plan image (280px x 210px) */}
              <div className="relative">
                <img 
                  src={property.images[1]} 
                  alt={`${property.name} detail 1`} 
                  className="w-[280px] h-[210px] object-cover rounded-md"
                />
                <div className="absolute bottom-4 left-4 bg-[#212121] text-white text-sm px-2 py-1 rounded">
                  Floor Plan
                </div>
                <button className="absolute left-4 top-4 bg-[#212121] p-2 rounded">
                  <img src="../public/icons/expand.svg" alt="Expand" className="h-5 w-5" />
                </button>
              </div>
              
              {/* Blueprint image (280px x 210px) */}
              <div className="relative">
                <img 
                  src={property.images[2]} 
                  alt={`${property.name} detail 2`} 
                  className="w-[280px] h-[210px] object-cover rounded-md"
                />
                <div className="absolute bottom-4 left-4 bg-[#212121] text-white text-sm px-2 py-1 rounded">
                  Blueprint
                </div>
                <button className="absolute left-4 top-4 bg-[#212121] p-2 rounded">
                  <img src="../public/icons/expand.svg" alt="Expand" className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Bottom larger image (600px x 250px) */}
            <div className="relative">
              <img 
                src={property.images[3]} 
                alt={`${property.name} detail 3`} 
                className="w-[600px] h-[250px] object-cover rounded-md"
              />
              <button className="absolute left-4 top-4 bg-[#212121] p-2 rounded">
                <img src="../public/icons/expand.svg" alt="Expand" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

          {/* More property details would go here */}
          {/* Add sections for property details, features, agent info, etc. */}
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
