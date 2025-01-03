import React from "react";

const ActiveProjectCard = ({ picture }) => (
  <div className="max-w-auto px-2 sm:px-4 relative">
    <div className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 md:w-[240px] md:h-[380px] w-[220px] h-[360px] sm:w-[260px] sm:h-[400px] overflow-hidden snap-center sm:hover:scale-105 duration-300">
      <div className="rounded-lg sm:w-[260px] sm:h-[260px] md:w-[240px] md:h-[240px] w-[220px] h-[220px] overflow-hidden flex items-center justify-center">

      <img src={picture.url} alt="img" className="" />
      {/* <p className="absolute w-8 h-8 -top-3 right-0 border-2 border-gray-400 text-xs text-black animate-pulse dark:text-white backdrop-blur-lg flex justify-center items-center rounded-full z-10">{picture.id} </p> */}
      </div>
      <div className="p-4">
        <h5 className="mb-1 text-lg font-semibold text-center tracking-tight text-gray-900 dark:text-white leading-snug">
          {picture.title}
        </h5>
        <p className="text-sm text-center text-gray-700  dark:text-gray-400 leading-snug ">
          {picture.genre}
        </p>
        <p className="text-sm mt-3 font-bold font-philo text-center text-blue-600 uppercase flex items-center justify-between">
        <span className="animate-pulse">{picture.status}</span><span className="bg-white dark:bg-gray-900 w-3 h-3 rounded-full p-3 ml-4 text-md text-black animate-bounce dark:text-white backdrop-blur-lg flex justify-center items-center z-10 font-normal">{picture.id} </span>
        </p>
      </div>
    </div>

  </div>
);

export default ActiveProjectCard;
