import React from "react";
import TravelCompanion from "../assets/portfolio/TravelCompanion.png";
import installNode from "../assets/portfolio/installNode.jpg";
import moksha from "../assets/portfolio/moksha.png";
import CircleClone from "../assets/portfolio/CircleClone.png";
import biodata from "../assets/portfolio/biodata.png";
import dragdrop from "../assets/portfolio/drag&drop.png";
import { useState, useEffect } from "react";

const Portfolio = () => {

  const [currentUrl, setCurrentUrl] = useState('');
  const [currentCodeUrl, setCurrentCodeUrl] = useState('');
  
  const portfolios = [
    {
      id: 1,
      src: TravelCompanion,
      url: 'https://urtravelcompanion.netlify.app/',
      code: 'https://github.com/swastiksuvam55/Travel-Companion',
    },
    {
      id: 2,
      src: installNode,
      url: '',
      code: '',
    },
    {
      id: 3,
      src: moksha,
      url: '',
      code: '',
    },
    {
      id: 4,
      src: CircleClone,
      url: '',
      code: '',
    },
    {
      id: 5,
      src: biodata,
      url: '',
      code: '',
    },
    {
      id: 6,
      src: dragdrop,
      url: '',
      code: '',
    },
  ];


  const handleDemoClick = (id) => {
    setCurrentUrl(portfolios.find(u => u.id === id).url);
  }
  const handleCodeClick = (id) => {
    setCurrentCodeUrl(portfolios.find(u => u.id === id).code);
  }


  useEffect(() => {
    if (currentCodeUrl) {
      window.location.href = currentCodeUrl;
    }
  }, [currentCodeUrl]);

  useEffect(() => {
    if (currentUrl) {
      window.location.href = currentUrl;
    }
  }, [currentUrl]);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => handleDemoClick(id)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => handleCodeClick(id)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;