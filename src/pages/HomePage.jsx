import React from "react";
// import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Headings from "../components/Headings"
import ActiveProject from "../components/ActiveProject";
import StoryPost from "../components/StoryPost";
import Footer from "../components/Footer"


// Import JSON data
// import data from "../data/data.json";

const HomePage = () => {

  return (
    <div className="">
      <Navbar />
      <Headings/>
      <ActiveProject/>
      <StoryPost/>
      <Footer/>
      
    </div>
  );
};

export default HomePage;
