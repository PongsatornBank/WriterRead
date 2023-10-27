import './App.css';
import React from "react";
import { Helmet } from "react-helmet";
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import Profile from './pages/profile';
import Novel from './pages/novel';
import BannerSlider from './BannerSlider';

function App() {
  return (
    <div className='body'>
      <Helmet>
        <title> WriterRead </title>
      </Helmet>

      <header>
        <div>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/novel" element={<Novel />} />
            </Routes>
          </div>
        </div>
      </header>

      <main>
        <BannerSlider/>
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
