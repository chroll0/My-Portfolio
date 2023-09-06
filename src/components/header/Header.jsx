import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import "./header.css";

const Header = () => {
  return (
    <div className="active_header-container">
      <div className="header-icons">
        <AiOutlineGithub />
        <AiFillLinkedin />
        <AiFillInstagram />
      </div>
    </div>
  );
};

export default Header;
