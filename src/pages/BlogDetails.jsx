import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/data.json";

import backIcon from "../logoPicture/back.png";
import downloadIcon from "../logoPicture/download.png";
import ink from "../logoPicture/ink.png"

const BlogDetails = () => {
  const { id } = useParams();
  const blog = data.blogs.find((b) => b.id === parseInt(id));

  return (
    <div className="px-2 sm:py-[2rem] py-4 font-sans flex flex-col items-center justify-center pb-6 bg-white dark:bg-gray-900">
      <div className="w-[18rem] h-[18rem] flex justify-center items-center overflow-hidden rounded shadow-md text-gray-500 dark:text-gray-400">
        <img src={blog.image} alt={blog.title} className="" />
      </div>
      <div className="py-6 px-2 mx-2 ">
        <p className="text-center font-bold uppercase text-sm mt-0 mb-1 animate-pulse text-blue-700">
          {blog.category}
        </p>
        <div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
          <p className="uppercase font-semibold text-md pb-6 flex flex-col items-center justify-center">
            {blog.title} <br />
            <span className="text-md font-normal capitalize pt-1">
              {blog.genre}
            </span>
          </p>
          <p>Story by: {blog.storyBy}</p>
          <p className="pb-6">Screenplay by: {blog.screenplayBy}</p>
          <div className="w-[310px] ">
            <p>Location: {blog.location}</p>
            <p>
              Email:{" "}
              <a href="/" className="text-indigo-600">
                {blog.email}
              </a>
            </p>
            <p>
              Phone No: <span>+91 {blog.phoneNo}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4 flex justify-between">
        {/* Download Button for PDF 1 */}
        <a
          href={blog.pdf1} // Path to the first PDF
          download
          className=" inline-flex items-center justify-center px-4 py-3 mr-1 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800      
       focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Treatment{" "}
          <img
            className=" w-6 ml-2 invert animate-bounce"
            src={downloadIcon}
            alt="bck"
          />
        </a>

        {/* Download Button for PDF 2 */}
        <a
          href={blog.pdf2} // Path to the second PDF
          download
          className=" inline-flex items-center justify-center px-4 py-3 ml-1 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800      
       focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Screenplay{" "}
          <img
            className=" w-6 ml-2 invert animate-bounce"
            src={downloadIcon}
            alt="bck"
          />
        </a>
      </div>

      <p
        className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-normal first-   
       letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start max-w-[800px] mx-2 mt-2 relative"
      >
        <span className="font-philo font-semibold">SYNOPSIS: </span>
        <br />
        <img src={ink} alt="img" className=" absolute top-[-.4rem] left-[8.3rem] w-7 h-7 dark:invert invert-1 opacity-70" /> {blog.details}
      </p>
      {/* <p className="text-md font-semibold">SYNOPSIS:</p> */}
      {/* <p className="mt-2 max-w-[800px] text-md text mx-2">{blog.details}</p> */}
      <Link
        to="/"
        className="selected-none flex flex-row items-center justify-center px-3 py-2 rounded-md bg-gray text-white opacity-90 text-md mt-4 mb-21 border-2 bg-gray-900 sm:hover:-translate-x-4 duration-300 "
      >
        <img
          className=" w-4 mr-3 invert animate-pulse"
          src={backIcon}
          alt="bck"
        />{" "}
        Back to Main Page
      </Link>
    </div>
  );
};

export default BlogDetails;
