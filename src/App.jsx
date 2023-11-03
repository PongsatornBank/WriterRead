import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Profile from './pages/profile';
import History from './pages/History';
import Write from './pages/Write';
import Search from './pages/Search';
import Fiction from './pages/Fiction';
import Notificate from './pages/Notificate';
import { MainScreen } from './pages/Main';
import Empty from './pages/Empty';
import '../src/css/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`body ${darkMode && 'darkMode'}`}>
      <Helmet>
        <title> WriterRead </title>
      </Helmet>

      <header>
          <div>
            <Navbar/>
            {/* <button onClick={() => setDarkMode(!darkMode)}>Hello</button> */}
            <Routes >
              <Route path="/" element={<MainScreen darkMode={darkMode} setDarkMode={setDarkMode} />}/>
              <Route path="/profile" element={<Profile darkMode={darkMode} setDarkMode={setDarkMode} />}/>
              <Route path="/Read" element={<History darkMode={darkMode} setDarkMode={setDarkMode} />}/>
              <Route path="/Write" element={<Write darkMode={darkMode} setDarkMode={setDarkMode} />}/>
              <Route path="/Notification" element={<Notificate darkMode={darkMode} setDarkMode={setDarkMode} />}/>
              <Route path="/Search" element={<Search darkMode={darkMode} setDarkMode={setDarkMode} />}/>
              <Route path="/Fiction" element={<Fiction darkMode={darkMode} setDarkMode={setDarkMode} />}/>
              <Route path="/Empty" element={<Empty darkMode={darkMode} setDarkMode={setDarkMode} />}/>
            </Routes>
          </div>
      </header>

      <main>
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