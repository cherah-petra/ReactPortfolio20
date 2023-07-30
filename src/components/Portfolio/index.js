import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'neighbourhoodLibrary',
      description: 'Interactive Full-Stack Application',
      link: "https://github.com/cherah-petra/NeighbourhoodLibrary",
      repo: "https://github.com/cherah-petra/NeighbourhoodLibrary"
    },
    {
      name: 'nextCity',
      description: 'Interactive Front-End Application',
      link: "https://kimmh891223.github.io/next_city/",
      repo: "https://github.com/kimmh891223/next_city"
    },
    {
      name: 'passwordgenerator',
      description: 'JavaScript: Password Generator',
      link: "https://github.com",
      repo: "https://github.com/cherah-petra/Challenge-03-JS-Password-Generator"
    },
    {
      name: 'weatherDashboard',
      description: 'Server-Side API: Weather Dashboard',
      link: "https://cherah-petra.github.io/A-Helpful-Weather-Dashboard/",
      repo: "https://github.com/cherah-petra/A-Helpful-Weather-Dashboard"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
