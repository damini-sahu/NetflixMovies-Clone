import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Our Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Our Website</h3>
            <p className="text-gray-400">
             Watch on smart TVs, Playstation, Xbox, Chromecast, apple Tv, Blu-ray players and more.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/travelling" className="text-gray-400 hover:text-white">Travelling</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/brandflow" className="text-gray-400 hover:text-white">BrandFlow</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">Services</Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="text-gray-400 hover:text-white">Your Account</Link>
              </li>
              <li>
                <Link to="/affiliate" className="text-gray-400 hover:text-white">Become an Affiliate</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white">Shipping Rates</Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white">Help</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">🏠</span>
                <span className="text-gray-400">Gwalior, Madhya Pradesh</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span className="text-gray-400">collab@damini.com</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span className="text-gray-400">+91 80254 52xxx</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📠</span>
                <span className="text-gray-400">+91 80254 55xxx</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Register Button and Social Media Icons */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/register">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
              Register for Free <span className="ml-2">Sign up!</span>
            </button>
          </Link>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-gray-400 hover:text-white text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-white text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-white text-2xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-gray-400 hover:text-white text-2xl" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-white text-2xl" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400">
          <p>Copyright © 2022: Design and Development by Damini</p>
        </div>
      </div>
    </footer>
  );
};
