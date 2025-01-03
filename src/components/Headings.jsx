import React from "react";

import { Link } from "react-router-dom";

import gmailIcon from "../logoPicture/gmail.png";
import userIcon from "../logoPicture/user.png";

const Headings = () => (
  <div className="bg-white dark:bg-gray-900 flex flex-col items-center justify-center pb-4 pt-24">
    <p className="mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-white text-center font-philo">
      <span className="text-blue-700">Sp</span>.SCREENPLAY
    </p>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
      MOVIES | WEB SERIES
    </p>
    <div className="flex flex-row items-center justify-center">

    <a
      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800      
       focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mr-1"
      href="mailto:reachout.suman@gmail.com"
    >
      <img className="w-6 mr-[10px]" src={gmailIcon} alt="gmail" />
      Send Email
    </a>
    <Link
      to="/about"
      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800      
       focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-1"
    >
      <img className="w-6 mr-2 dark:invert invert-1 " src={userIcon} alt="gmail" />
      Learn more
        
    </Link>
    </div>
  </div>
);

export default Headings;
