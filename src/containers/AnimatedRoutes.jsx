import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import AboutMe from "./aboutMe/AboutMe";
import Profile from "./profile/Profile";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";

import { useEffect, useRef } from "react";

function AnimatedRoutes() {
  const location = useLocation();
  const initialRender = useRef(true);
  useEffect(() => {
    initialRender.current = false;
  }, []);
  return (
    <AnimatePresence>
      {initialRender.current ? (
        <Profile />
      ) : (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Profile />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
