import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import '../App.css'; // Assuming shared styles

export const Profile = () => {
  const [slide, setSlide] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
    dob: '',
  });

  const slides = [
    // Slide 1: Email and Password
    {
      title: 'Account Details',
      content: (
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300 text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
            />
          </div>
        </div>
      ),
    },
    // Slide 2: First and Last Name
    {
      title: 'Your Name',
      content: (
        <div className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-gray-300 text-sm mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="Enter your first name"
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-300 text-sm mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Enter your last name"
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
            />
          </div>
        </div>
      ),
    },
    // Slide 3: Age and Date of Birth
    {
      title: 'Personal Info',
      content: (
        <div className="space-y-6">
          <div>
            <label htmlFor="age" className="block text-gray-300 text-sm mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              placeholder="Enter your age"
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
              min="1"
              max="150"
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-gray-300 text-sm mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
            />
          </div>
        </div>
      ),
    },
    // Slide 4: Confirmation
    {
      title: 'All Set!',
      content: (
        <div className="text-center">
          <FaCheck className="text-green-500 text-4xl mx-auto mb-4" />
          <p className="text-gray-300 text-lg">Your profile is ready to go!</p>
          <p className="text-gray-400 text-sm mt-2">
            Email: {formData.email || 'Not provided'}
            <br />
            Name: {formData.firstName} {formData.lastName}
            <br />
            Age: {formData.age || 'Not provided'}
            <br />
            DOB: {formData.dob || 'Not provided'}
          </p>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (slide < slides.length - 1) {
      setSlide(slide + 1);
    }
  };

  const handlePrev = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission (e.g., send to API)
    console.log('Profile Data:', formData);
    // Optionally reset or redirect after submission
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="p-6 w-full max-w-md">
        {/* Header */}
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          {slides[slide].title}
        </h1>

        {/* Slide Content */}
        <div className="bg-gray-900 p-6 rounded-lg">
          {slides[slide].content}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              disabled={slide === 0}
              className={`p-2 rounded-full ${
                slide === 0
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              <FaArrowLeft />
            </button>
            {slide === slides.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
              >
                Finish
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
              >
                <FaArrowRight />
              </button>
            )}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === slide ? 'bg-red-600' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

