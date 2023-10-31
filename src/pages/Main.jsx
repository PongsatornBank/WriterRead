import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { BsEyeFill , BsHeartFill } from 'react-icons/bs';

import './Main.css';

const novel = (name="to be continue", page="/",img="https://i.ibb.co/L1Fzz4W/logo.jpg",writer="unknow",view=0,fav=0) => {
    return(
        <figure>
            <a href={page}>
                <img className="img_category" src={img} alt={name}></img>
            </a>
            <figcaption>
                <div className="nevel_name"> {name} </div>
                <div className="novel_details">
                    <p> {writer} </p>
                    <p className="novel_details_icon"> <BsEyeFill className='view'/> {view} </p>
                    <p className="novel_details_icon"> <BsHeartFill className='fav'/> {fav} </p>
                </div>
            </figcaption>
        </figure>
    )
}

export const MainScreen = () => {
  const slides = [
    {
      url: 'https://i.ibb.co/8j7Z2jc/img1.jpg',
    },
    {
      url: 'https://i.ibb.co/ftbsdS0/img2.jpg',
    },
    {
      url: 'https://i.ibb.co/3T7nNkK/img3.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        {/* Banner */}
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {/* Dot */}
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled/>
            </div>
          ))}
        </div>
      </div>

      <div className="catalog">

            <div className="category">
                <h1 className="topic_original"> Original </h1>
                <div className="product">
                    {novel()}
                    {novel()}
                    {novel()}
                    {novel()}
                    {novel()}
                </div>
            </div>

            <div className="category">
                <h1 className="topic_original"> Action </h1>
                <div className="product">
                    {novel("omniscient reader's viewpoint","OmniscientReader'sViewpoint.jsx","https://i.ibb.co/ftbsdS0/img2.jpg","Sing Shong",300,240)}
                    {novel("solo leveling","SoloLeveling.jsx","https://i.ibb.co/8j7Z2jc/img1.jpg","Chugong",200,150)}
                    {novel()}
                    {novel()}
                    {novel()}
                </div>
            </div>

            <div className="category">
                <h1 className="topic_original"> Japanese </h1>
                <div className="product">
                    {novel("classroom of the elite","ClassroomOfTheElite.jsx","https://i.ibb.co/3T7nNkK/img3.png","Syougo Kinugasa",100,80)}
                    {novel()}
                    {novel()}
                    {novel()}
                    {novel()}
                </div>
            </div>
        </div>
    </div>
  );
}