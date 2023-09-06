import React, { useState } from "react";
import { motion } from "framer-motion";

import "./projects.css";
import { data, images } from "../../constants";

const Projects = () => {
  const [toggleProjects, setToggleProjects] = useState(true);
  return (
    <motion.div
      className="section-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="ellipse-img">
        <img src={images.ellipseOne} alt="ellipse" />
      </div>
      {toggleProjects && (
        <motion.div
          className="projects-content website-projects"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
          <h1>Website Projects</h1>
          <span onClick={() => setToggleProjects(false)}>
            View Game Projects
          </span>
          <div className="websites-container">
            {data.websiteBase.map((project) => (
              <div className="project" key={project.id}>
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="link-container">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
      {!toggleProjects && (
        <motion.div
          className="projects-content"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
          <h1>Game Projects</h1>
          <span onClick={() => setToggleProjects(true)}>
            View Website Projects
          </span>
          <div className="websites-container">
            {data.gameBase.map((project) => (
              <div className="project" key={project.id}>
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.description}</p>{" "}
                <div className="link-container">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
