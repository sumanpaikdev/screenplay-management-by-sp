import React from "react";

import gitlgo from "../logoPicture/github.png";
import twitterlgo from "../logoPicture/twitter.png";
import gmllogo from "../logoPicture/arroba.png";
import instalogo from "../logoPicture/instagram.png";
import splogo from "../logoPicture/sp.jpg";

const AboutMe = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 flex flex-col justify-start items-center pt-10 sm:pt-20 h-screen">
      <img src={splogo} alt="sp" className="w-20 rounded-full shadow-md mb-4" />

      <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start max-w-[600px] ">
        <span className="font-philo">Suman Paik </span>
        <br />
        Hi,<span className="animate-pulse">🙋‍♂️</span> I'm Suman Paik! I'm from
        Kolkata, India. As a web developer and designer, I craft creative and
        functional websites using React, Tailwind CSS, and modern technologies.
        Beyond coding, I'm a passionate storyteller who writes films and web
        series, weaving compelling narratives that resonate with audiences.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Feel free to reach out to me anytime at{" "}
        <a
          href="mailto:reachout.suman@gmail.com"
          className="text-blue-700 underline"
        >
          reachout.suman@gmail.com
        </a>
      </p>

      <div className="flex flex-col justify-center items-center pt-6 sm:pt-10">
        <a
          className="inline-flex items-center justify-start px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800      
       focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-1 w-[300px] mt-2"
          href="https://x.com/sumanpaik_"
        >
          <img
            className="w-6 ml-[5px] mr-3 invert"
            src={twitterlgo}
            alt="gmail"
          />
          Twitter @sumanpaik_
        </a>
        <a
          className="inline-flex items-center justify-start px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800      
       focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-1 w-[300px] mt-2"
          href="https://www.instagram.com/sumanpaik_/"
        >
          <img
            className="w-6 ml-[5px] mr-3 dark:invert invert-1"
            src={instalogo}
            alt="gmail"
          />
          Instagram @sumanpaik_
        </a>
        <a
          className="inline-flex items-center justify-start px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800      
       focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-1 w-[300px] mt-2"
          href="mailto:reachout.suman@gmail.com"
        >
          <img
            className="w-6 ml-[5px] mr-3 dark:invert invert-1"
            src={gmllogo}
            alt="gmail"
          />
          Suman Paik
        </a>
        <a
          className="inline-flex items-center justify-start px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800      
       focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-1 w-[300px] mt-2 mb-10"
          target="_black"
          href="https://github.com/sumanpaikdev"
        >
          <img className="w-6 ml-[5px] mr-3 invert" src={gitlgo} alt="gmail" />
          GitHub @sumanpaikdev
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
