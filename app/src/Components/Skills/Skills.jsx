import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [active, setActive] = useState("webdev");

  const skillData = {
    webdev: ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript"],
    frontend: ["React.js", "Redux", "Next.js"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    mern: ["MongoDB", "Express.js", "React.js", "Node.js"],
    languages: ["Python", "JavaScript"],
  };

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">My Skills</h2>

      {/* Buttons */}
      <div className="skills-buttons">
        {Object.keys(skillData).map((key) => (
          <button
            key={key}
            className={`skill-btn ${active === key ? "active" : ""}`}
            onClick={() => setActive(key)}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className="skills-container">
        {skillData[active].map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
