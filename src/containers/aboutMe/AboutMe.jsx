import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import "./aboutMe.css";
import { images } from "../../constants";

const AboutMe = () => {
  return (
    <motion.div
      className="section-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="aboutMe-ellipse">
        <img src={images.ellipseTwo} alt="ellipse" />
      </div>
      <div className="aboutMe-content">
        <h1>About Me</h1>
        <div className="image-text-content">
          <ul>
            <li>
              I am a motivated and results-oriented junior programmer who made a
              transition from a career in law to pursue my true passion for
              programming.
            </li>
            <li>
              Through dedicated self-study, online courses, and hands-on
              practice, I have developed a strong foundation in front-end
              development.
            </li>
            <li>
              Currently, I am actively seeking an opportunity to effectively
              apply my technical expertise along with my legal background, with
              a strong aspiration to join a dynamic team where I can make a
              significant contribution and further enhance my skills.
            </li>
            <li>
              Committed to delivering high-quality work, I am eager to
              collaborate with like-minded professionals to drive success and
              exceed expectations.
            </li>
            <li>
              With a passion for continuous learning and a goal-oriented
              mindset, I am ready to embrace new challenges and contribute to
              the growth and success of the organization.
            </li>
          </ul>
          <div className="aboutMe-sidebar-container">
            <div className="profile-image-details">
              <img src={images.profileTransparent} alt="profile" />
              <span>Saba Antadze</span>
              <div className="details">
                <h3>Details</h3>
                <div className="email-box">
                  <IoIosMail size={19} />
                  <p>sabantadze@gmail.com</p>
                </div>
                <div className="phone-box">
                  <FaPhoneAlt size={16} />
                  <p>+995 598 787 261</p>
                </div>
                <div className="address-box">
                  <IoLocationSharp size={20} />
                  <p>
                    10 Nino Zhvania Street <br /> Tbilisi 0179 <br /> Georgia
                  </p>
                </div>
              </div>
            </div>
            <div className="resume-container">
              <p>click button to open my resume</p>
              <a
                href="https://drive.google.com/file/d/1MFTeKp9hdvjHWG4B0lqyrh6sc1P4hynb/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                <button className="resume-download-button">view Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
