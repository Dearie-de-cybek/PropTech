import React, { useState } from "react";
import PropertyNavbar from "../components/PropertyNavbar";
import SponsoredAdCard from "../components/SponsporedAdCard";
import FilterSidebar from "../components/FilterSidebar";
import PropertyCard from "../components/PropCard";

const PropertyHome = () => {
  // State for view type (grid or list)
  const [viewType, setViewType] = useState("grid");

  // Sample data for sponsored ads
  const sponsoredAds = [
    {
      id: 1,
      imageUrl: "../public/images/sponspored1.jpg",
      adTitle: "Premium Oceanview Property",
      description: "Exclusive beachfront living with panoramic views",
      advertiserName: "Luxury Realty",
      advertiserLogo: "../public/images/adlogo.png",
    },
    {
      id: 2,
      imageUrl: "../public/images/sponspored2.jpg",
      adTitle: "Modern Downtown Apartments",
      description: "Urban living redefined in the heart of the city",
      advertiserName: "Metro Properties",
      advertiserLogo: "../public/images/adlogo.png",
    },
    {
      id: 2,
      imageUrl: "../public/images/sponspored3.jpg",
      adTitle: "Modern Downtown Apartments",
      description: "Urban living redefined in the heart of the city",
      advertiserName: "Metro Properties",
      advertiserLogo: "../public/images/adlogo.png",
    },
  ];

  // Sample data for properties
  const properties = [
    {
      id: 1,
      imageUrl: "../public/images/room1.jpg",
      address: "123 Main St, Springfield",
      price: 480000,
      bedrooms: 3,
      bathrooms: 3,
      toilets: 4,
      imageCount: 5,
    },
    {
      id: 2,
      imageUrl: "../public/images/room2.jpg",
      address: "456 Oak Ave, Riverside",
      price: 550000,
      bedrooms: 4,
      bathrooms: 2,
      toilets: 3,
      imageCount: 8,
    },
    {
      id: 3,
      imageUrl: "../public/images/room3.jpg",
      address: "789 Pine Rd, Lakeside",
      price: 395000,
      bedrooms: 2,
      bathrooms: 2,
      toilets: 2,
      imageCount: 6,
    },
    {
      id: 4,
      imageUrl: "../public/images/room4.jpg",
      address: "101 Cedar Ln, Mountainview",
      price: 620000,
      bedrooms: 5,
      bathrooms: 3,
      toilets: 4,
      imageCount: 12,
    },
    {
      id: 5,
      imageUrl: "../public/images/room5.jpg",
      address: "202 Elm St, Brookside",
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      toilets: 3,
      imageCount: 7,
    },
    {
      id: 6,
      imageUrl: "../public/images/room6.jpg",
      address: "303 Maple Dr, Westfield",
      price: 510000,
      bedrooms: 4,
      bathrooms: 3,
      toilets: 3,
      imageCount: 9,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Navbar */}
      <PropertyNavbar />

      {/* Sponsored Ads Section */}
      {/* Sponsored Ads Section */}
      <div className="py-8 px-6">
        <div className="flex justify-center gap-6 overflow-x-auto pb-4 mx-auto">
          {sponsoredAds.map((ad) => (
            <SponsoredAdCard
              key={ad.id}
              imageUrl={ad.imageUrl}
              adTitle={ad.adTitle}
              description={ad.description}
              advertiserName={ad.advertiserName}
              advertiserLogo={ad.advertiserLogo}
            />
          ))}
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-[#404040] mx-6"></div>

      {/* Main Content Section */}
      <div className="flex px-6 py-6">
        {/* Filter Sidebar */}
        <div className="w-64 flex-shrink-0">
          <FilterSidebar />
        </div>

        {/* Property Listings */}
        <div className="flex-1 ml-6">
          {/* View Options and Sort */}
          <div className="flex justify-end items-center mb-6">
            {/* Grid View Icon */}
            <button
              onClick={() => setViewType("grid")}
              className={`p-2 ${
                viewType === "grid" ? "text-[#f10000]" : "text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>

            {/* List View Icon */}
            <button
              onClick={() => setViewType("list")}
              className={`p-2 ${
                viewType === "list" ? "text-[#f10000]" : "text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-white mx-3"></div>

            {/* Sort Text */}
            <span className="text-white">Sort</span>
          </div>

          {/* Property Grid */}
          <div
            className={`grid ${
              viewType === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            } gap-8`}
          >
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                imageUrl={property.imageUrl}
                address={property.address}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                toilets={property.toilets}
                imageCount={property.imageCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHome;
