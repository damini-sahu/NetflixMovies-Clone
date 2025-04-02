import React from 'react';
import { FaPlay, FaInfoCircle, FaStar, FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Assuming shared styles
import wednesdaylogo1 from '../assets/wednesdaylogo1.png'; // Placeholder image

const thelionking = 'https://wallpaperaccess.com/thumb/1342394.jpg';
const insideout = 'https://wallpaperaccess.com/thumb/1707294.jpg';
const moana = 'https://wallpaperaccess.com/thumb/668424.jpg';
const strangerThings = 'https://wallpaperaccess.com/full/2018178.jpg';
const arcane = 'https://wallpaperaccess.com/thumb/2123638.jpg'; 

export const MyList = () => {
  // Sample items in "My List" (mix of movies and TV shows)
  const myListItems = [
    {
      title: "Stranger Things",
      type: "TV Show",
      rating: 8.7,
      seasons: 4,
      description: "Kids unravel spooky mysteries in Hawkins.",
      image: strangerThings, // Replace with '../assets/strangerthings.png'
    },
    {
      title: "The Lion King",
      type: "Movie",
      rating: 8.5,
      duration: "1h 58m",
      description: "Simba rises to reclaim his kingdom.",
      image: thelionking, // Replace with '../assets/lionking.png'
    },
    {
      title: "Wednesday",
      type: "TV Show",
      rating: 8.4,
      seasons: 1,
      description: "Wednesday solves quirky mysteries.",
      image: wednesdaylogo1, // Keep or replace
    },
    {
      title: "Inside Out",
      type: "Movie",
      rating: 8.1,
      duration: "1h 35m",
      description: "Emotions guide a girl through life’s changes.",
      image: insideout, // Replace with '../assets/insideout.png'
    },
    {
      title: "Arcane",
      type: "TV Show",
      rating: 9.1,
      seasons: 1,
      description: "Sisters clash in a steampunk world.",
      image: arcane, // Replace with '../assets/arcane.png'
    },
    {
      title: "Moana",
      type: "Movie",
      rating: 7.6,
      duration: "1h 47m",
      description: "A girl sails to save her island.",
      image: moana, // Replace with '../assets/moana.png'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="p-6 text-center">
        <h1 className="text-4xl font-bold text-red-600">My List</h1>
        <p className="text-gray-400 mt-2">Your favorite picks, all in one cozy spot! 🍿</p>
      </div>

      {/* My List Items */}
      <div className="px-6 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {myListItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-4 flex flex-col items-center hover:bg-gray-700 transition duration-300"
            >
              {/* Image */}
              <NavLink
                to={`/${item.type === 'TV Show' ? 'tvshows' : 'movies'}/${item.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
              </NavLink>

              {/* Item Info */}
              <div className="text-center">
                <NavLink
                  to={`/${item.type === 'TV Show' ? 'tvshows' : 'movies'}/${item.title
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                  className="text-lg font-semibold text-white hover:text-red-500"
                >
                  {item.title}
                </NavLink>
                <div className="flex items-center justify-center space-x-2 mt-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm text-gray-300">{item.rating}/10</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  {item.type === 'TV Show' ? `${item.seasons} Season${item.seasons > 1 ? 's' : ''}` : item.duration}
                </p>
                <p className="text-gray-300 text-sm mt-2 line-clamp-2">{item.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-4">
                <button className="flex items-center bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700">
                  <FaPlay className="mr-1" /> Play
                </button>
                <button className="flex items-center bg-gray-600 text-white px-3 py-1 rounded-full hover:bg-gray-500">
                  <FaInfoCircle className="mr-1" /> Info
                </button>
                <button className="flex items-center bg-gray-600 text-white px-2 py-1 rounded-full hover:bg-gray-500">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
