import React from 'react';
import { FaPlay, FaInfoCircle, FaStar, FaPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Assuming shared styles
import wednesdaylogo1 from '../assets/wednesdaylogo1.png'; // Placeholder image

const strangerThings = 'https://wallpaperaccess.com/full/2018178.jpg'; // Replace with your actual image URL
const theWitcher = 'https://wallpaperaccess.com/thumb/2052705.jpg'; 
const squidGame = 'https://wallpaperaccess.com/thumb/6998672.jpg'; 
const breakingbad = 'https://wallpaperaccess.com/thumb/2906334.jpg'; 
const thecrown = 'https://wallpaperaccess.com/thumb/1902849.jpg'; 
const arcane = 'https://wallpaperaccess.com/thumb/2123638.jpg'; 
const chernobyl = 'https://wallpaperaccess.com/thumb/7068572.png'; 


export const TVShows = () => {
  // Sample TV show data with image paths
  const tvShows = [
    {
      title: "Stranger Things",
      rating: 8.7,
      seasons: 4,
      description: "A group of kids uncover supernatural mysteries in their small town.",
      image: strangerThings, // Replace with '../assets/strangerthings.png'
    },
    {
      title: "The Witcher",
      rating: 8.2,
      seasons: 3,
      description: "A monster hunter navigates a turbulent world of magic and betrayal.",
      image: theWitcher, // Replace with '../assets/thewitcher.png'
    },
    {
      title: "Breaking Bad",
      rating: 9.5,
      seasons: 5,
      description: "A chemistry teacher turns to crime to secure his family's future.",
      image: breakingbad, // Replace with '../assets/breakingbad.png'
    },
    {
      title: "The Crown",
      rating: 8.6,
      seasons: 6,
      description: "The reign of Queen Elizabeth II through decades of change.",
      image: thecrown, // Replace with '../assets/thecrown.png'
    },
    {
      title: "Squid Game",
      rating: 8.0,
      seasons: 1,
      description: "Desperate contestants risk it all in deadly survival games.",
      image: squidGame, // Replace with '../assets/squidgame.png'
    },
    {
      title: "Wednesday",
      rating: 8.4,
      seasons: 1,
      description: "Wednesday Addams solves mysteries at Nevermore Academy.",
      image: wednesdaylogo1, // Keep this one as is or replace
    },
    {
      title: "Arcane",
      rating: 9.1,
      seasons: 1,
      description: "A tale of two cities divided by power and technology.",
      image: arcane, // Replace with '../assets/arcane.png'
    },
    {
      title: "Chernobyl",
      rating: 9.4,
      seasons: 1,
      description: "The aftermath of the nuclear disaster in 1986.",
      image: chernobyl, // Replace with '../assets/chernobyl.png'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-4xl font-bold text-red-600">TV Shows</h1>
        <p className="text-gray-400 mt-2">Explore our collection of top TV series.</p>
      </div>

      {/* TV Show List */}
      <div className="px-6 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tvShows.map((show, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden flex flex-col hover:bg-gray-700 transition duration-200"
            >
              {/* Image */}
              <NavLink to={`/tvshows/${show.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-48 object-cover"
                />
              </NavLink>

              {/* Show Info and Buttons */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <NavLink
                    to={`/tvshows/${show.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-xl font-semibold text-white hover:text-red-500"
                  >
                    {show.title}
                  </NavLink>
                  <div className="flex items-center space-x-2 mt-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm">{show.rating}/10</span>
                    <span className="text-sm text-gray-400">
                      • {show.seasons} Season{show.seasons > 1 ? 's' : ''}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2 line-clamp-2">{show.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-4">
                  <button className="flex items-center bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
                    <FaPlay className="mr-2" /> Play
                  </button>
                  <button className="flex items-center bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-500">
                    <FaInfoCircle className="mr-2" /> Info
                  </button>
                  <button className="flex items-center bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-500">
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

