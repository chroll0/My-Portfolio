import React from "react";
import { motion } from "framer-motion";

import "./education.css";
import { data, images } from "../../constants";

const Education = () => {
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
      <div className="education-container-content">
        <h1>Education</h1>
        <div className="experience-years">
          <div className="text-content-box">
            <div className="years-box">
              <span>2021</span>
              <div className="line-content"></div>
            </div>
            <p>Learning the basics of the programming (HTML/CSS)</p>
          </div>
          <div className="text-content-box margin-box">
            <div className="years-box">
              <span>2022</span>
              <div className="line-content"></div>
            </div>
            <p>practical coding to enhance javascript skills</p>
          </div>
          <div className="text-content-box">
            <div className="years-box">
              <span>2023</span>
              <div className="line-content"></div>
            </div>
            <p>develop a fully responsive websites using React</p>
          </div>
        </div>
        <div className="courses-container">
          {data.educationInfo.map((information) => (
            <div className="courses-text-box" key={information.id}>
              <h4>{information.title}</h4>
              <p>{information.description}</p>
              <span>{information.date}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
