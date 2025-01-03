import React from "react";
import { Link } from "react-router-dom";

import data from "../data/data.json";

const StoryPost = () => {
  const reversedBlogs = [...data.blogs].reverse();

  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col items-center justify-center py-6 px-4 border-none outline-none">
      <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-[800px]">
        <div role="status" class="max-w-xl animate-pulse ml-4 -mb-3">
          {/* Default skeleton  */}
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          {/* <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div> */}
          <span class="sr-only">Loading...</span>
        </div>

        {reversedBlogs.map((blogsData) => (
          <li key={blogsData.id} className="mb-1 ms-4 mt-10">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-2 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {blogsData.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {blogsData.title}
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
              {blogsData.description}
            </p>
            <Link
              to={`/blog/${blogsData.id}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              See Details & Download Screenplay
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StoryPost;
