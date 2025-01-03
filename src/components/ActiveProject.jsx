import React from "react";

import ActiveProjectCard from "./subComponent/ActiveProjectCard";
import data from '../data/data.json'

const ActiveProject = () => (
  <div className="bg-white dark:bg-gray-900 flex overflow-x-auto snap-x no-scrollbar sm:justify-center px-2 py-6">
    
    {data.pictures.map((picture) => (
          <ActiveProjectCard key={picture.id} picture={picture} />
        ))}

  </div>
);

export default ActiveProject;
