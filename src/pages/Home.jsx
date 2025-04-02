import React, { useState } from 'react';
import { FaPlay, FaInfoCircle, FaStar } from 'react-icons/fa';
import ShowDetail from '../components/ShowDetail';
import '../App.css';
import wednesdaylogo1 from '../assets/wednesdaylogo1.png';

const strangerThings = 'https://wallpaperaccess.com/full/2018178.jpg'; // Replace with your actual image URL
const theWitcher = 'https://wallpaperaccess.com/thumb/2052705.jpg'; 
const squidGame = 'https://wallpaperaccess.com/thumb/6998672.jpg'; 
const oppenheimer = 'https://wallpaperaccess.com/full/8881280.jpg'; 
const inception = 'https://wallpaperaccess.com/thumb/1264817.jpg'; 
const theDarkKnight = 'https://wallpaperaccess.com/thumb/210228.jpg'; 
const barbie = 'https://wallpaperaccess.com/thumb/9253530.jpg'; 

export const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const featuredShow = {
    id: 'wednesday',
    title: 'Wednesday',
    description:
      'Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',
    rating: 'UA 13+',
    seasons: 1,
  };

  const popularOnNetflix = [
    { id: 'stranger-things', title: 'Stranger Things', image: strangerThings, rating: 8.7 },
    { id: 'the-witcher', title: 'The Witcher', image: theWitcher, rating: 8.2 },
    { id: 'squid-game', title: 'Squid Game', image: squidGame, rating: 8.0 },
    { id: 'wednesday', title: 'Wednesday', image: wednesdaylogo1, rating: 8.4 },
  ];

  const trendingNow = [
    { id: 'oppenheimer', title: 'Oppenheimer', image: oppenheimer, rating: 8.9 },
    { id: 'the-dark-knight', title: 'The Dark Knight', image: theDarkKnight, rating: 9.0 },
    { id: 'inception', title: 'Inception', image: inception, rating: 8.8 },
    { id: 'barbie', title: 'Barbie', image: barbie, rating: 7.8 },
  ];

  const content = {
    'stranger-things': {
      title: 'Stranger Things',
      type: 'TV Show',
      rating: 8.7,
      seasons: 4,
      description:
        'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
      genre: ['Sci-Fi', 'Horror', 'Drama'],
      releaseYear: 2016,
      image: strangerThings, // Ensure image is defined
    },
    'the-witcher': {
      title: 'The Witcher',
      type: 'TV Show',
      rating: 8.2,
      seasons: 3,
      description:
        'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world.',
      genre: ['Fantasy', 'Action', 'Adventure'],
      releaseYear: 2019,
      image: theWitcher,
    },
    'squid-game': {
      title: 'Squid Game',
      type: 'TV Show',
      rating: 8.0,
      seasons: 1,
      description:
        'Hundreds of desperate contestants risk their lives to win a cash prize in a deadly survival game.',
      genre: ['Thriller', 'Drama'],
      releaseYear: 2021,
      image: squidGame,
    },
    'wednesday': {
      title: 'Wednesday',
      type: 'TV Show',
      rating: 8.4,
      seasons: 1,
      description:
        'Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',
      genre: ['Mystery', 'Comedy', 'Fantasy'],
      releaseYear: 2022,
      image: wednesdaylogo1,
    },
    'oppenheimer': {
      title: 'Oppenheimer',
      type: 'Movie',
      rating: 8.9,
      duration: '3h 0m',
      description:
        'The story of J. Robert Oppenheimer and the development of the atomic bomb during World War II.',
      genre: ['Biography', 'Drama', 'History'],
      releaseYear: 2023,
      image: oppenheimer,
    },
    'the-dark-knight': {
      title: 'The Dark Knight',
      type: 'Movie',
      rating: 9.0,
      duration: '2h 32m',
      description:
        'Batman faces the Joker, a criminal mastermind who seeks to plunge Gotham into anarchy.',
      genre: ['Action', 'Crime', 'Drama'],
      releaseYear: 2008,
      image: theDarkKnight,
    },
    'inception': {
      title: 'Inception',
      type: 'Movie',
      rating: 8.8,
      duration: '2h 28m',
      description:
        'A skilled thief with the ability to enter dreams is given one last job: to steal a secret from the subconscious.',
      genre: ['Sci-Fi', 'Action', 'Thriller'],
      releaseYear: 2010,
      image: inception,
    },
    'barbie': {
      title: 'Barbie',
      type: 'Movie',
      rating: 7.8,
      duration: '1h 54m',
      description:
        'Barbie ventures into the real world, discovering life beyond her perfect plastic existence.',
      genre: ['Comedy', 'Fantasy'],
      releaseYear: 2023,
      image: barbie,
    },
  };

  const handleItemClick = (id) => {
    const selected = content[id];
    if (selected) {
      setSelectedItem(selected);
    } else {
      console.error(`Item with id ${id} not found in content.`);
      setSelectedItem(null); // Reset to avoid issues
    }
  };

  const handleBack = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {selectedItem ? (
        <ShowDetail item={selectedItem} onBack={handleBack} />
      ) : (
        <>
          {/* Hero Section */}
          <div
            className="w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${wednesdaylogo1})` }}
          >
            <div className="absolute top-16 inset-x-0 flex flex-col justify-center px-10">
              <h2 className="text-6xl font-bold mb-4">{featuredShow.title}</h2>
              <div className="flex items-center space-x-2 mb-4">
                <FaStar className="text-yellow-400" />
                <span className="text-sm">{featuredShow.rating}</span>
              </div>
              <p className="text-lg max-w-md mb-6">{featuredShow.description}</p>
              <div className="flex space-x-4">
                <button className="flex items-center bg-white text-black px-6 py-2 rounded hover:bg-gray-200">
                  <FaPlay className="mr-2" /> Play
                </button>
                <button className="flex items-center bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-500">
                  <FaInfoCircle className="mr-2" /> More Info
                </button>
              </div>
            </div>
          </div>

          {/* Carousel 1: Popular on Netflix */}
          <div className="px-10 py-6">
            <h3 className="text-xl font-semibold mb-4">Popular on Netflix</h3>
            <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
              {popularOnNetflix.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="relative flex-shrink-0 w-48 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-28 object-cover rounded hover:scale-105 transition-transform duration-200"
                  />
                  <p className="text-sm mt-2 truncate">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel 2: Trending Now */}
          <div className="px-10 py-6">
            <h3 className="text-xl font-semibold mb-4">Trending Now</h3>
            <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
              {trendingNow.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="relative flex-shrink-0 w-48 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-28 object-cover rounded hover:scale-105 transition-transform duration-200"
                  />
                  <p className="text-sm mt-2 truncate">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// import React, { useState } from 'react';
// import { FaPlay, FaInfoCircle, FaStar } from 'react-icons/fa';
// import ShowDetail from '../components/ShowDetail';
// import '../App.css';

// // Define the image URL
// const wednesdayImageUrl = 'https://via.placeholder.com/1920x1080.png?text=Wednesday+Hero+Image'; // Replace with your actual image URL

// export const Home = () => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const featuredShow = {
//     id: 'wednesday',
//     title: 'Wednesday',
//     description:
//       'Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',
//     rating: 'UA 13+',
//     seasons: 1,
//   };

//   const popularOnNetflix = [
//     { id: 'stranger-things', title: 'Stranger Things', image: wednesdayImageUrl, rating: 8.7 },
//     { id: 'the-witcher', title: 'The Witcher', image: wednesdayImageUrl, rating: 8.2 },
//     { id: 'squid-game', title: 'Squid Game', image: wednesdayImageUrl, rating: 8.0 },
//     { id: 'wednesday', title: 'Wednesday', image: wednesdayImageUrl, rating: 8.4 },
//   ];

//   const trendingNow = [
//     { id: 'oppenheimer', title: 'Oppenheimer', image: wednesdayImageUrl, rating: 8.9 },
//     { id: 'the-dark-knight', title: 'The Dark Knight', image: wednesdayImageUrl, rating: 9.0 },
//     { id: 'inception', title: 'Inception', image: wednesdayImageUrl, rating: 8.8 },
//     { id: 'barbie', title: 'Barbie', image: wednesdayImageUrl, rating: 7.8 },
//   ];

//   const content = {
//     'stranger-things': {
//       title: 'Stranger Things',
//       type: 'TV Show',
//       rating: 8.7,
//       seasons: 4,
//       description:
//         'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
//       genre: ['Sci-Fi', 'Horror', 'Drama'],
//       releaseYear: 2016,
//       image: wednesdayImageUrl,
//     },
//     'the-witcher': {
//       title: 'The Witcher',
//       type: 'TV Show',
//       rating: 8.2,
//       seasons: 3,
//       description:
//         'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world.',
//       genre: ['Fantasy', 'Action', 'Adventure'],
//       releaseYear: 2019,
//       image: wednesdayImageUrl,
//     },
//     'squid-game': {
//       title: 'Squid Game',
//       type: 'TV Show',
//       rating: 8.0,
//       seasons: 1,
//       description:
//         'Hundreds of desperate contestants risk their lives to win a cash prize in a deadly survival game.',
//       genre: ['Thriller', 'Drama'],
//       releaseYear: 2021,
//       image: wednesdayImageUrl,
//     },
//     'wednesday': {
//       title: 'Wednesday',
//       type: 'TV Show',
//       rating: 8.4,
//       seasons: 1,
//       description:
//         'Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',
//       genre: ['Mystery', 'Comedy', 'Fantasy'],
//       releaseYear: 2022,
//       image: wednesdayImageUrl,
//     },
//     'oppenheimer': {
//       title: 'Oppenheimer',
//       type: 'Movie',
//       rating: 8.9,
//       duration: '3h 0m',
//       description:
//         'The story of J. Robert Oppenheimer and the development of the atomic bomb during World War II.',
//       genre: ['Biography', 'Drama', 'History'],
//       releaseYear: 2023,
//       image: wednesdayImageUrl,
//     },
//     'the-dark-knight': {
//       title: 'The Dark Knight',
//       type: 'Movie',
//       rating: 9.0,
//       duration: '2h 32m',
//       description:
//         'Batman faces the Joker, a criminal mastermind who seeks to plunge Gotham into anarchy.',
//       genre: ['Action', 'Crime', 'Drama'],
//       releaseYear: 2008,
//       image: wednesdayImageUrl,
//     },
//     'inception': {
//       title: 'Inception',
//       type: 'Movie',
//       rating: 8.8,
//       duration: '2h 28m',
//       description:
//         'A skilled thief with the ability to enter dreams is given one last job: to steal a secret from the subconscious.',
//       genre: ['Sci-Fi', 'Action', 'Thriller'],
//       releaseYear: 2010,
//       image: wednesdayImageUrl,
//     },
//     'barbie': {
//       title: 'Barbie',
//       type: 'Movie',
//       rating: 7.8,
//       duration: '1h 54m',
//       description:
//         'Barbie ventures into the real world, discovering life beyond her perfect plastic existence.',
//       genre: ['Comedy', 'Fantasy'],
//       releaseYear: 2023,
//       image: wednesdayImageUrl,
//     },
//   };

//   const handleItemClick = (id) => {
//     const selected = content[id];
//     if (selected) {
//       setSelectedItem(selected);
//     } else {
//       console.error(`Item with id ${id} not found in content.`);
//       setSelectedItem(null);
//     }
//   };

//   const handleBack = () => {
//     setSelectedItem(null);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {selectedItem ? (
//         <ShowDetail item={selectedItem} onBack={handleBack} />
//       ) : (
//         <>
//           {/* Hero Section */}
//           <div
//             className="w-full h-screen sm:h-[70vh] relative bg-gray-900"
//             style={{
//               backgroundImage: `url(${wednesdayImageUrl})`,
//               backgroundSize: 'cover', // Changed to cover for better responsiveness
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//             }}
//           >
//             <div className="absolute top-16 inset-x-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-center px-4 sm:px-10">
//               <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">{featuredShow.title}</h2>
//               <div className="flex items-center space-x-2 mb-4">
//                 <FaStar className="text-yellow-400 text-sm sm:text-base" />
//                 <span className="text-xs sm:text-sm">{featuredShow.rating}</span>
//               </div>
//               <p className="text-sm sm:text-lg max-w-md mb-6">{featuredShow.description}</p>
//               <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
//                 <button className="flex items-center justify-center bg-white text-black px-4 py-2 rounded hover:bg-gray-200 text-sm sm:text-base">
//                   <FaPlay className="mr-2" /> Play
//                 </button>
//                 <button className="flex items-center justify-center bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 text-sm sm:text-base">
//                   <FaInfoCircle className="mr-2" /> More Info
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Carousel 1: Popular on Netflix */}
//           <div className="px-4 sm:px-10 py-6">
//             <h3 className="text-lg sm:text-xl font-semibold mb-4">Popular on Netflix</h3>
//             <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 overflow-x-auto scrollbar-hide">
//               {popularOnNetflix.map((item) => (
//                 <div
//                   key={item.id}
//                   onClick={() => handleItemClick(item.id)}
//                   className="relative flex-shrink-0 w-full sm:w-48 cursor-pointer"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-40 sm:h-28 object-cover rounded hover:scale-105 transition-transform duration-200"
//                   />
//                   <p className="text-sm mt-2 truncate">{item.title}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Carousel 2: Trending Now */}
//           <div className="px-4 sm:px-10 py-6">
//             <h3 className="text-lg sm:text-xl font-semibold mb-4">Trending Now</h3>
//             <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 overflow-x-auto scrollbar-hide">
//               {trendingNow.map((item) => (
//                 <div
//                   key={item.id}
//                   onClick={() => handleItemClick(item.id)}
//                   className="relative flex-shrink-0 w-full sm:w-48 cursor-pointer"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-40 sm:h-28 object-cover rounded hover:scale-105 transition-transform duration-200"
//                   />
//                   <p className="text-sm mt-2 truncate">{item.title}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

