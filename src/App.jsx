import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { TVShows } from "./pages/TVShows";
import { NewPopular } from "./pages/NewPopular";
import { MyList } from "./pages/MyList";
import "./App.css";
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Search } from './pages/Search';
import { Notification } from './pages/Notifications';
import { Profile } from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/newpopular" element={<NewPopular />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add routes for search, notifications, profile if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;