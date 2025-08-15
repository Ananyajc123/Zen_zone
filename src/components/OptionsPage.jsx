import React from 'react';
import { Link } from 'react-router-dom';

const OptionsPage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerXSLyIQQLdskn41dy8ysxGgq7DmEXTt9Aw&s')",
      }}
    >
      <div className="flex flex-col justify-center items-center text-black h-full pt-10">
        <h1 className="text-5xl font-bold text-white">Serenity Space</h1>
        <p className="text-lg text-center mb-8 max-w-2xl text-white">
          Explore the resources available for your mental health journey. Select an option below.
        </p>

        <div className="w-full max-w-3xl mt-6">
          <h3 className="text-2xl font-medium mb-4 text-white">Choose a Resource</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/resources/family" className="text-blue-500 hover:text-blue-700">
                Family Mental Health Support
              </Link>
            </li>
            <li>
              <Link to="/resources/autism" className="text-blue-500 hover:text-blue-700">
                Autism Spectrum Disorder
              </Link>
            </li>
            <li>
              <Link to="/resources/anxiety" className="text-blue-500 hover:text-blue-700">
                Understanding Anxiety
              </Link>
            </li>
            <li>
              <Link to="/resources/ptsd" className="text-blue-500 hover:text-blue-700">
                PTSD Support and Coping
              </Link>
            </li>
            <li>
              <Link to="/resources/depression" className="text-blue-500 hover:text-blue-700">
                Depression Management
              </Link>
            </li>
            <li>
              <Link to="/resources/therapy" className="text-blue-500 hover:text-blue-700">
                Therapy and Counseling
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OptionsPage;
