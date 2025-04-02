import React from 'react';
import { FaPlay, FaInfoCircle, FaStar, FaPlus, FaArrowLeft } from 'react-icons/fa';
import '../App.css'; // Adjust path if needed
import wednesdaylogo1 from '../assets/wednesdaylogo1.png'; // Fallback image

const ShowDetail = ({ item, onBack }) => {
  // Use a fallback image if item.image is undefined
  const backgroundImage = item?.image || wednesdaylogo1;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="p-6">
        <button onClick={onBack} className="flex items-center text-gray-400 hover:text-red-600">
          <FaArrowLeft className="mr-2" /> Back to Home
        </button>
      </div>

      {/* Detail Section */}
      <div
        className="w-full h-[70vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-10">
          <h1 className="text-5xl font-bold mb-4">{item?.title || 'Untitled'}</h1>
          <div className="flex items-center space-x-4 mb-4">
            <FaStar className="text-yellow-400" />
            <span className="text-lg">{item?.rating || 'N/A'}/10</span>
            <span className="text-lg">
              {item?.type === 'TV Show' ? `${item.seasons} Season${item.seasons > 1 ? 's' : ''}` : item?.duration || 'N/A'}
            </span>
            <span className="text-lg">{item?.releaseYear || 'N/A'}</span>
          </div>
          <p className="text-lg max-w-2xl mb-6">{item?.description || 'No description available.'}</p>
          <div className="flex space-x-4">
            <button className="flex items-center bg-white text-black px-6 py-3 rounded hover:bg-gray-200">
              <FaPlay className="mr-2" /> Play
            </button>
            <button className="flex items-center bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-500">
              <FaInfoCircle className="mr-2" /> More Info
            </button>
            <button className="flex items-center bg-gray-600 text-white px-4 py-3 rounded hover:bg-gray-500">
              <FaPlus className="mr-2" /> Add to List
            </button>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="px-10 py-6">
        <h2 className="text-2xl font-semibold mb-4">Details</h2>
        <p className="text-gray-300">
          <strong>Type:</strong> {item?.type || 'N/A'}
        </p>
        <p className="text-gray-300">
          <strong>Genre:</strong> {item?.genre ? item.genre.join(', ') : 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default ShowDetail;