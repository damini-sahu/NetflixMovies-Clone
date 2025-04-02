import React from 'react';
import { FaPlay, FaInfoCircle, FaStar, FaPlus, FaBorderAll } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Assuming shared styles
import wednesdaylogo1 from '../assets/wednesdaylogo1.png'; // Placeholder image

const squidGame = 'https://wallpaperaccess.com/thumb/6998672.jpg'; 
const oppenheimer = 'https://wallpaperaccess.com/full/8881280.jpg'; 
const barbie = 'https://wallpaperaccess.com/thumb/9253530.jpg'; 
const theWitcher = 'https://wallpaperaccess.com/thumb/2052705.jpg'; 
const dune = 'https://wallpaperaccess.com/full/12948223.jpg'; 
const avatar = 'https://wallpaperaccess.com/thumb/861755.jpg'; 
const houseofthedragon = 'https://wallpaperaccess.com/full/7107111.jpg'; 
const thebear3 = 'https://wallpaperaccess.com/thumb/7277976.jpg'; 
const missionimpossible7 = 'https://wallpaperaccess.com/full/10082314.jpg'; 

export const NewPopular = () => {
  // Sample new and popular content (mix of movies and TV shows)
  const newPopularItems = [
    {
      title: "Squid Game: Season 2",
      type: "TV Show",
      rating: 8.5,
      seasons: 2,
      description: "The deadly games return with new players and higher stakes.",
      image: squidGame, // Replace with '../assets/squidgame2.png'
    },
    {
      title: "Avatar: The Way of Water",
      type: "Movie",
      rating: 8.0,
      duration: "3h 12m",
      description: "Jake Sully explores Pandora’s oceans in a new epic.",
      image: avatar, // Replace with '../assets/avatar2.png'
    },
    {
      title: "House of the Dragon",
      type: "TV Show",
      rating: 8.5,
      seasons: 1,
      description: "The Targaryen dynasty fights for control of the Iron Throne.",
      image: houseofthedragon, // Replace with '../assets/houseofthedragon.png'
    },
    {
      title: "Oppenheimer",
      type: "Movie",
      rating: 8.9,
      duration: "3h 0m",
      description: "The story of the man who built the atomic bomb.",
      image: oppenheimer, // Replace with '../assets/oppenheimer.png'
    },
    {
      title: "The Bear: Season 3",
      type: "TV Show",
      rating: 8.7,
      seasons: 3,
      description: "Carmy and crew face new challenges in their restaurant.",
      image: thebear3, // Replace with '../assets/thebear3.png'
    },
    {
      title: "Barbie",
      type: "Movie",
      rating: 7.8,
      duration: "1h 54m",
      description: "Barbie ventures into the real world in a whimsical adventure.",
      image: barbie, // Replace with '../assets/barbie.png'
    },
    {
      title: "Wednesday: Season 2",
      type: "TV Show",
      rating: 8.6,
      seasons: 2,
      description: "Wednesday’s mysteries deepen at Nevermore Academy.",
      image: wednesdaylogo1, // Keep or replace with '../assets/wednesday2.png'
    },
    {
      title: "Mission: Impossible - Dead Reckoning",
      type: "Movie",
      rating: 8.1,
      duration: "2h 43m",
      description: "Ethan Hunt races to stop a deadly AI threat.",
      image: missionimpossible7, // Replace with '../assets/missionimpossible7.png'
    },
    {
      title: "The Witcher: Season 4",
      type: "TV Show",
      rating: 8.3,
      seasons: 4,
      description: "Geralt faces new monsters and political intrigue.",
      image: theWitcher, // Replace with '../assets/thewitcher4.png'
    },
    {
      title: "Dune: Part Two",
      type: "Movie",
      rating: 8.8,
      duration: "2h 46m",
      description: "Paul Atreides continues his journey to control the desert planet.",
      image: dune, // Replace with '../assets/dune2.png'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-4xl font-bold text-red-600">New & Popular</h1>
        <p className="text-gray-400 mt-2">Check out the latest releases and trending titles.</p>
      </div>

      {/* New & Popular List */}
      <div className="px-6 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newPopularItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden flex flex-col hover:bg-gray-700 transition duration-200"
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
                  className="w-full h-48 object-cover"
                />
              </NavLink>

              {/* Item Info and Buttons */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <NavLink
                    to={`/${item.type === 'TV Show' ? 'tvshows' : 'movies'}/${item.title
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                    className="text-xl font-semibold text-white hover:text-red-500"
                  >
                    {item.title}
                  </NavLink>
                  <div className="flex items-center space-x-2 mt-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm">{item.rating}/10</span>
                    <span className="text-sm text-gray-400">
                      • {item.type === 'TV Show' ? `${item.seasons} Season${item.seasons > 1 ? 's' : ''}` : item.duration}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2 line-clamp-2">{item.description}</p>
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

