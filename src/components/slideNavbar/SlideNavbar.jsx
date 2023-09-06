import React, { useState } from "react";
import { ImInfo, ImProfile } from "react-icons/im";
import { MdCastForEducation, MdDehaze, MdClose } from "react-icons/md";
import { AiOutlineProject, AiOutlineContacts } from "react-icons/ai";
import { BsFillSendPlusFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { images } from "../../constants";
import { Link } from "react-router-dom";

import "./SlideNavbar.css";

const SlideNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={!toggleMenu ? "slide-bar" : "active-slide"}>
      <div className="slide-bar-box">
        <div className="logo-content active-logo-content">
          <span className="logo-style active-logo-style">Portfolio</span>
          {toggleMenu ? (
            <div className="close-nav" onClick={() => setToggleMenu(false)}>
              <MdClose />
            </div>
          ) : (
            <div className="open-nav" onClick={() => setToggleMenu(true)}>
              <MdDehaze />
            </div>
          )}
        </div>
        <div className={!toggleMenu ? "icon-content" : "active_icon-content"}>
          <Link to="/">
            <div className="icons active-icons profile">
              <ImProfile />
              <span>Profile</span>
            </div>
          </Link>
          <Link to="/about">
            <div className="icons active-icons about">
              <ImInfo />
              <span>About me</span>
            </div>
          </Link>
          <Link to="/education">
            <div className="icons active-icons education">
              <MdCastForEducation />
              <span>Education</span>
            </div>
          </Link>
          <Link to="/skills">
            <div className="icons active-icons skills">
              <GiSkills />
              <span>Skills</span>
            </div>
          </Link>
          <Link to="projects">
            <div className="icons active-icons projects">
              <AiOutlineProject />
              <span>Projects</span>
            </div>
          </Link>
          <Link to="contacts">
            <div className="icons active-icons contacts">
              <AiOutlineContacts />
              <span>Contacts</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="account-info">
        <img src={images.profile} alt="profile" />
        <div className="account-name">
          <span>Saba Antadze</span>
          <span>Front end Developer</span>
        </div>
        {toggleMenu && (
          <Link to="contacts">
            <div className="toContact">
              <BsFillSendPlusFill size={22} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SlideNavbar;
