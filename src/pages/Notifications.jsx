import React from 'react';
import { FaBell, FaPlay } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Assuming shared styles
import wednesdaylogo1 from '../assets/wednesdaylogo1.png'; // Placeholder image

const oppenheimer = 'https://wallpaperaccess.com/full/8881280.jpg'; 
const strangerThings = 'https://wallpaperaccess.com/full/2018178.jpg';
const squidGame = 'https://wallpaperaccess.com/thumb/6998672.jpg';


export const Notification = () => {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "New Episode Available: Wednesday",
      message: "Season 2, Episode 1 is now streaming. Watch it now!",
      type: "TV Show",
      link: "/tvshows/wednesday",
      image: wednesdaylogo1,
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      title: "Oppenheimer Now Available",
      message: "The blockbuster movie has just been added to your library.",
      type: "Movie",
      link: "/movies/oppenheimer",
      image: oppenheimer,
      time: "1 day ago",
      unread: false,
    },
    {
      id: 3,
      title: "Stranger Things Update",
      message: "Season 5 is coming soon. Stay tuned for the release date!",
      type: "TV Show",
      link: "/tvshows/stranger-things",
      image: strangerThings,
      time: "3 days ago",
      unread: false,
    },
    {
      id: 4,
      title: "Account Reminder",
      message: "Your subscription renews in 2 days. Check your billing details.",
      type: "Account",
      link: "/profile",
      image: null, // No image for account notifications
      time: "5 days ago",
      unread: true,
    },
    {
      id: 5,
      title: "Squid Game: Season 2",
      message: "The trailer for Season 2 is out now. Take a look!",
      type: "TV Show",
      link: "/tvshows/squid-game",
      image: squidGame,
      time: "1 week ago",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-4xl font-bold text-red-600 flex items-center">
          <FaBell className="mr-2" /> Notifications
        </h1>
        <p className="text-gray-400 mt-2">Stay updated with the latest news and releases.</p>
      </div>

      {/* Notifications List */}
      <div className="px-6 pb-10">
        {notifications.length > 0 ? (
          <div className="space-y-4 max-w-3xl mx-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200 ${
                  notification.unread ? 'border-l-4 border-red-600' : ''
                }`}
              >
                {/* Image (if available) */}
                {notification.image && (
                  <NavLink to={notification.link} className="flex-shrink-0">
                    <img
                      src={notification.image}
                      alt={notification.title}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                  </NavLink>
                )}

                {/* Notification Content */}
                <div className="flex-grow">
                  <NavLink to={notification.link}>
                    <h3 className="text-lg font-semibold text-white hover:text-red-500">
                      {notification.title}
                    </h3>
                  </NavLink>
                  <p className="text-gray-300 text-sm mt-1">{notification.message}</p>
                  <p className="text-gray-500 text-xs mt-1">{notification.time}</p>
                </div>

                {/* Play Button (for content notifications) */}
                {notification.type !== 'Account' && (
                  <NavLink to={notification.link} className="ml-4">
                    <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
                      <FaPlay />
                    </button>
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center text-lg">No new notifications right now.</p>
        )}
      </div>
    </div>
  );
};

