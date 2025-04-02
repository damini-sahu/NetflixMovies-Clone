// import { NavLink } from 'react-router-dom';
// import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
// import '../App.css';

// export const Navbar = () => {
//   return (
//     <nav className="bg-black p-4 flex items-center justify-between z-10 relative">
//       <div className="flex items-center space-x-6">
//         <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
//         <div className="flex space-x-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/tvshows"
//             className={({ isActive }) =>
//               isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
//             }
//           >
//             TV Shows
//           </NavLink>
//           <NavLink
//             to="/movies"
//             className={({ isActive }) =>
//               isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
//             }
//           >
//             Movies
//           </NavLink>
//           <NavLink
//             to="/newpopular"
//             className={({ isActive }) =>
//               isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
//             }
//           >
//             New & Popular
//           </NavLink>
//           <NavLink
//             to="/mylist"
//             className={({ isActive }) =>
//               isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
//             }
//           >
//             My List
//           </NavLink>
//         </div>
//       </div>

//       <div className="flex text-white items-center space-x-4">
//         <NavLink to="/search">
//           <FaSearch className="text-lg hover:text-gray-400 cursor-pointer" />
//         </NavLink>
//         <NavLink to="/notifications">
//           <FaBell className="text-lg hover:text-gray-400 cursor-pointer" />
//         </NavLink>
//         <NavLink to="/profile">
//           <FaUser className="text-lg hover:text-gray-400 cursor-pointer" />
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

import { NavLink } from 'react-router-dom';
import { FaSearch, FaBell, FaUser, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import '../App.css';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 flex items-center justify-between z-10 relative">
      <div className="flex items-center space-x-6">
        <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
        <button
          className="block md:hidden text-gray-400" // Show only on small screens (below md, 768px)
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
        <div className="hidden md:flex space-x-4">
          {/* Navigation links for large screens */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tvshows"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
            }
          >
            TV Shows
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/newpopular"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
            }
          >
            New & Popular
          </NavLink>
          <NavLink
            to="/mylist"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
            }
          >
            My List
          </NavLink>
        </div>
      </div>

      {/* Backdrop for small screens when menu is open */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" onClick={toggleMenu} />
      )}

      {/* Navigation links for small screens */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black p-4 z-20">
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tvshows"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
              }
            >
              TV Shows
            </NavLink>
            <NavLink
              to="/movies"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/newpopular"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
              }
            >
              New & Popular
            </NavLink>
            <NavLink
              to="/mylist"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
              }
            >
              My List
            </NavLink>
          </div>
        </div>
      )}

      <div className="flex text-white items-center space-x-4">
        <NavLink to="/search">
          <FaSearch className="text-lg hover:text-gray-400 cursor-pointer" />
        </NavLink>
        <NavLink to="/notifications">
          <FaBell className="text-lg hover:text-gray-400 cursor-pointer" />
        </NavLink>
        <NavLink to="/profile">
          <FaUser className="text-lg hover:text-gray-400 cursor-pointer" />
        </NavLink>
      </div>
  </nav>
);
};
