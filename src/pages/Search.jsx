import React, { useState } from 'react';
import { FaSearch, FaPlay } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Assuming shared styles
import wednesdaylogo1 from '../assets/wednesdaylogo1.png'; // Placeholder image

const strangerThings = 'https://wallpaperaccess.com/full/2018178.jpg';
const theWitcher = 'https://wallpaperaccess.com/thumb/2052705.jpg'; 
const squidGame = 'https://wallpaperaccess.com/thumb/6998672.jpg';
const breakingbad = 'https://wallpaperaccess.com/thumb/2906334.jpg';
const theDarkKnight = 'https://wallpaperaccess.com/thumb/210228.jpg';
const inception = 'https://wallpaperaccess.com/thumb/1264817.jpg'; 
const oppenheimer = 'https://wallpaperaccess.com/full/8881280.jpg'; 
const thelionking = 'https://wallpaperaccess.com/thumb/1342394.jpg';
const missionimpossible7 = 'https://wallpaperaccess.com/full/10082314.jpg';
const houseofthedragon = 'https://wallpaperaccess.com/full/7107111.jpg';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample content dataset for search
  const content = [
    { title: "Stranger Things", type: "TV Show", image: strangerThings },
    { title: "The Witcher", type: "TV Show", image: theWitcher },
    { title: "Wednesday", type: "TV Show", image: wednesdaylogo1 },
    { title: "Squid Game", type: "TV Show", image: squidGame },
    { title: "Breaking Bad", type: "TV Show", image: breakingbad },
    { title: "The Dark Knight", type: "Movie", image: theDarkKnight },
    { title: "Inception", type: "Movie", image: inception },
    { title: "Oppenheimer", type: "Movie", image: oppenheimer },
    { title: "The Lion King", type: "Movie", image: thelionking },
    { title: "Mission: Impossible - Dead Reckoning", type: "Movie", image: missionimpossible7 },
    { title: "House of the Dragon", type: "TV Show", image: houseofthedragon },
  ];

  // Popular searches to display when search is empty
  const popularSearches = [
    { title: "Squid Game", type: "TV Show", image: squidGame },
    { title: "The Dark Knight", type: "Movie", image: theDarkKnight },
    { title: "Wednesday", type: "TV Show", image: wednesdaylogo1 },
    { title: "Oppenheimer", type: "Movie", image: oppenheimer },
    { title: "Stranger Things", type: "TV Show", image: strangerThings },
    { title: "Inception", type: "Movie", image: inception },
  ];

  // Filter content based on search term
  const filteredContent = content.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    // Trigger search explicitly (already handled by real-time filtering, but can add custom logic here)
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Search Bar with Button */}
      <div className="p-6">
        <div className="relative max-w-3xl mx-auto flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for a title..."
              className="w-full p-4 pl-12 bg-gray-900 text-white text-lg rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
              autoFocus
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
          <button
            onClick={handleSearchClick}
            className="ml-4 bg-red-600 text-white p-4 rounded-md hover:bg-red-700 flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Search Results or Popular Searches */}
      <div className="px-6 pb-10">
        {searchTerm === '' ? (
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Popular Searches</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {popularSearches.map((item, index) => (
                <div key={index} className="group relative">
                  {/* Image */}
                  <NavLink
                    to={`/${item.type === 'TV Show' ? 'tvshows' : 'movies'}/${item.title
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-md transition-transform duration-200 group-hover:scale-105"
                    />
                  </NavLink>

                  {/* Overlay with Play Button (visible on hover) */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
                      <FaPlay />
                    </button>
                  </div>

                  {/* Title */}
                  <p className="text-sm text-white mt-2 truncate">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ) : filteredContent.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredContent.map((item, index) => (
              <div key={index} className="group relative">
                {/* Image */}
                <NavLink
                  to={`/${item.type === 'TV Show' ? 'tvshows' : 'movies'}/${item.title
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md transition-transform duration-200 group-hover:scale-105"
                  />
                </NavLink>

                {/* Overlay with Play Button (visible on hover) */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
                    <FaPlay />
                  </button>
                </div>

                {/* Title */}
                <p className="text-sm text-white mt-2 truncate">{item.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center text-lg">No results found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

