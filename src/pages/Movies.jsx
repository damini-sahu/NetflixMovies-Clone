import React from 'react';
import { FaPlay, FaInfoCircle, FaStar, FaPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Assuming shared styles
import wednesdaylogo1 from '../assets/wednesdaylogo1.png'; // Placeholder image


const inception = 'https://wallpaperaccess.com/thumb/1264817.jpg'; 
const theDarkKnight = 'https://wallpaperaccess.com/thumb/210228.jpg'; 
const theShawshankRedemption = 'https://wallpaperaccess.com/full/1632065.jpg'; 
const pulpfiction = 'https://wallpaperaccess.com/thumb/984580.png'; 
const theGodfather = 'https://wallpaperaccess.com/thumb/8066417.jpg'; 
const parasite = 'https://wallpaperaccess.com/thumb/1423165.jpg'; 
const interstellar = 'https://wallpaperaccess.com/thumb/2840379.jpg'; 
const fightclub = 'https://wallpaperaccess.com/thumb/1292553.jpg'; 
const theMatrix = 'https://wallpaperaccess.com/thumb/13028514.jpg'; 
const forrestgump = 'https://wallpaperaccess.com/full/1455905.jpg'; 
const gladiator = 'https://wallpaperaccess.com/thumb/1435180.jpg'; 
const titanic = 'https://wallpaperaccess.com/thumb/1162182.jpg'; 



export const Movies = () => {
  // Sample movie data with image paths
  const movies = [
    {
      title: "The Shawshank Redemption",
      rating: 9.3,
      duration: "2h 22m",
      description: "Two imprisoned men bond over decades, finding redemption.",
      image: theShawshankRedemption, // Replace with '../assets/shawshank.png'
    },
    {
      title: "The Dark Knight",
      rating: 9.0,
      duration: "2h 32m",
      description: "Batman faces the Joker in a battle for Gotham's soul.",
      image: theDarkKnight, // Replace with '../assets/darkknight.png'
    },
    {
      title: "Inception",
      rating: 8.8,
      duration: "2h 28m",
      description: "A thief enters dreams to steal secrets, facing reality's edge.",
      image: inception, // Replace with '../assets/inception.png'
    },
    {
      title: "Pulp Fiction",
      rating: 8.9,
      duration: "2h 34m",
      description: "Interwoven stories of crime and redemption in LA.",
      image: pulpfiction, // Replace with '../assets/pulpfiction.png'
    },
    {
      title: "The Godfather",
      rating: 9.2,
      duration: "2h 55m",
      description: "A mafia family’s power struggles and legacy unfold.",
      image: theGodfather, // Replace with '../assets/godfather.png'
    },
    {
      title: "Parasite",
      rating: 8.6,
      duration: "2h 12m",
      description: "A poor family infiltrates a wealthy household with dark results.",
      image: parasite, // Replace with '../assets/parasite.png'
    },
    {
      title: "Interstellar",
      rating: 8.6,
      duration: "2h 49m",
      description: "A team explores space to save humanity from a dying Earth.",
      image: interstellar, // Replace with '../assets/interstellar.png'
    },
    {
      title: "Fight Club",
      rating: 8.8,
      duration: "2h 19m",
      description: "An insomniac forms an underground club with chaotic consequences.",
      image: fightclub, // Replace with '../assets/fightclub.png'
    },
    {
      title: "The Matrix",
      rating: 8.7,
      duration: "2h 16m",
      description: "A hacker discovers reality is a simulation controlled by machines.",
      image: theMatrix, // Replace with '../assets/matrix.png'
    },
    {
      title: "Forrest Gump",
      rating: 8.8,
      duration: "2h 22m",
      description: "A man with a simple mind impacts history through decades.",
      image: forrestgump, // Replace with '../assets/forrestgump.png'
    },
    {
      title: "Gladiator",
      rating: 8.5,
      duration: "2h 35m",
      description: "A Roman general seeks revenge against a corrupt emperor.",
      image: gladiator, // Replace with '../assets/gladiator.png'
    },
    {
      title: "Titanic",
      rating: 7.8,
      duration: "3h 14m",
      description: "A love story unfolds aboard the doomed ship.",
      image: titanic, // Replace with '../assets/titanic.png'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-4xl font-bold text-red-600">Movies</h1>
        <p className="text-gray-400 mt-2">Discover our curated selection of top films.</p>
      </div>

      {/* Movie List */}
      <div className="px-6 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden flex flex-col hover:bg-gray-700 transition duration-200"
            >
              {/* Image */}
              <NavLink to={`/movies/${movie.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
              </NavLink>

              {/* Movie Info and Buttons */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <NavLink
                    to={`/movies/${movie.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-xl font-semibold text-white hover:text-red-500"
                  >
                    {movie.title}
                  </NavLink>
                  <div className="flex items-center space-x-2 mt-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm">{movie.rating}/10</span>
                    <span className="text-sm text-gray-400">• {movie.duration}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2 line-clamp-2">{movie.description}</p>
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

