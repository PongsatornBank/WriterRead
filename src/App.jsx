import './App.css';
import React from "react";
import { Helmet } from "react-helmet";
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import Profile from './pages/profile';
import History from './pages/History';
// import Write from './pages/Write'
import Search from './pages/Search';
import Fiction from './pages/Fiction'
import Readfiction from './pages/Readfiction'
import BannerSlider from './BannerSlider';
import { useState } from "react";
function App() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={`body ${darkMode && 'bg-black'}`}>
      <Helmet>
        <title> WriterRead </title>
      </Helmet>

      <header>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <main>
        <Routes >
          <Route path="/" element={<BannerSlider/>} />
          <Route path="/profile" element={<Profile />}  />
          <Route path="/Read" element={<History />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Fiction" element={<Fiction/>}/>
          <Route path="/Readfic" element={<Readfiction/>}/>
        </Routes>
      </main> 

      <footer>
        <div className='icon'>
          <a href="https://web.facebook.com/profile.php?id=61552186592502" target="_blank"><FaFacebook className='fa-facebook'/></a>
          <a href="https://twitter.com/WriterRead_?t=S8EGpYY8uCU4xq__HGHgVg&s=06"  target="_blank"><FaTwitter className='fa-twitter'/></a>
        </div>
        <h3 className='copyright'>&copy; 2023 WriterRead.com </h3>
        <p className='end'> This website is a project in 03603436 Web Application Development course. </p>
      </footer>
    </div>
  );
}

export default App;
