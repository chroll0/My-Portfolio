import React from "react";
import { images } from "../../constants";
import "./profile.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      className="profile-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="container-overlay">
        <div className="profile-information">
          <h1>
            Welcome to
            <br /> my personal portfolio
          </h1>
          <p className="profile-name">I am Saba Antadze</p>
          <p>
            Self-taught junior/intern frontend developer with a strong passion
            for programming. Through independent learning, I have gained
            valuable skills and knowledge in frontend development. Currently, I
            am actively seeking a job opportunity where I can apply my expertise
            and contribute to a professional setting. With a determination to
            grow and learn, I am ready to continue on my career in the field of
            frontend development.
          </p>
          <Link to="/about">
            <button>Learn more</button>
          </Link>
        </div>
        <div className="ellipse-img">
          <img src={images.ellipseOne} alt="ellipse" />
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
