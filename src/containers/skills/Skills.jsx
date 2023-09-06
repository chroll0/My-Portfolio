import React, { useState } from "react";
import {
  SiAdobephotoshop,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMicrosoftoffice,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { images } from "../../constants";
import { motion } from "framer-motion";

import "./skills.css";
import SkillIconsName from "./skillIconsName/SkillIconsName";

const Skills = () => {
  const [isSkillIconsNameVisible, setIsSkillIconsNameVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });

  const handleIconMouseEnter = (title, event) => {
    setCurrentTitle(title);
    setIsSkillIconsNameVisible(true);
    // Get the position and size of the hovered icon
    const iconRect = event.target.getBoundingClientRect();

    // Calculate the position for the SkillIconsName div based on the icon's position and size
    const position = {
      top: iconRect.top + window.scrollY + iconRect.height - 8, // Adjust as needed
      left: iconRect.left + window.scrollX - 12,
    };
    setIconPosition(position);
  };
  const handleIconMouseLeave = () => {
    setIsSkillIconsNameVisible(false); // Hide the component
  };
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
      <div className="skills-container-content">
        <h1>Skills</h1>
        <div className="about-my-skills">
          <ul>
            <li>
              Easily adapts and responds in high-pressure environments,
              maintaining discipline and delivering quality work within tight
              deadlines.
            </li>
            <li>
              Quick to learn new concepts, adapt to changing situation and
              acquire new skills.
            </li>
            <li>
              Friendly in collaborative environments, actively contributing to
              team goals and fostering strong working relationships.
            </li>
            <li>
              Good verbal and written communication skills, enabling clear and
              effective exchange of information with colleagues and
              stakeholders.
            </li>
          </ul>
        </div>
        <div className="skills-icons-container">
          <div className="frontend-development">
            <h2>frontend</h2>
            <div className="skills-icons">
              <SiHtml5
                color="#e54c21"
                onMouseEnter={(event) => handleIconMouseEnter("HTML", event)}
                onMouseLeave={handleIconMouseLeave}
              />
              <SiCss3
                color="#2062af"
                onMouseEnter={(event) => handleIconMouseEnter("CSS", event)}
                onMouseLeave={handleIconMouseLeave}
              />
              <SiJavascript
                color="#ead41c"
                onMouseEnter={(event) =>
                  handleIconMouseEnter("JavaScript", event)
                }
                onMouseLeave={handleIconMouseLeave}
              />
              <SiReact
                color="#61dbfb"
                onMouseEnter={(event) => handleIconMouseEnter("React", event)}
                onMouseLeave={handleIconMouseLeave}
              />
              <SiNextdotjs
                color="white"
                onMouseEnter={(event) => handleIconMouseEnter("Next.js", event)}
                onMouseLeave={handleIconMouseLeave}
              />
              <SiTailwindcss
                color="#38bdf8"
                onMouseEnter={(event) =>
                  handleIconMouseEnter("Tailwind", event)
                }
                onMouseLeave={handleIconMouseLeave}
              />
              {isSkillIconsNameVisible && (
                <SkillIconsName title={currentTitle} position={iconPosition} />
              )}
            </div>
          </div>
          <div className="design">
            <h2>design</h2>
            <div className="skills-icons">
              <SiFigma
                color="#ffff"
                onMouseEnter={(event) => handleIconMouseEnter("Figma", event)}
                onMouseLeave={handleIconMouseLeave}
              />
              <SiAdobephotoshop
                color="#2f9ff2"
                onMouseEnter={(event) =>
                  handleIconMouseEnter("Photoshop", event)
                }
                onMouseLeave={handleIconMouseLeave}
              />
            </div>
          </div>
          <div className="others">
            <h2>others</h2>
            <div className="skills-icons">
              <SiGithub
                color="#ffff"
                onMouseEnter={(event) => handleIconMouseEnter("GitHub", event)}
                onMouseLeave={handleIconMouseLeave}
              />
              <SiGit
                color="#e44c30"
                onMouseEnter={(event) => handleIconMouseEnter("Git", event)}
                onMouseLeave={handleIconMouseLeave}
              />
              <SiMicrosoftoffice
                color="#d03902"
                onMouseEnter={(event) =>
                  handleIconMouseEnter("MC Office", event)
                }
                onMouseLeave={handleIconMouseLeave}
              />
              <SiFirebase
                color="#f2c12b"
                onMouseEnter={(event) =>
                  handleIconMouseEnter("Firebase", event)
                }
                onMouseLeave={handleIconMouseLeave}
              />
              <SiMongodb
                color="#55ad47"
                onMouseEnter={(event) => handleIconMouseEnter("MongoDB", event)}
                onMouseLeave={handleIconMouseLeave}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
