import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFileAlt, FaUser } from "react-icons/fa";
import "./Home.css";
import profile_02 from "../../assets/images/profile_02.png";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* Left - Profile Image */}
        <div className="home-image">
          <img src={profile_02} alt="profile" />
        </div>

        {/* Right - Info */}
        <div className="home-text">
          <h1>
            <FaUser className="icon" /> Hello, I'm <span>Tarunsai</span>
          </h1>
          <h2>Web Developer</h2>
          <p>
            Passionate about building <strong>modern, interactive, and responsive</strong> 
            web applications with 3D UI effects and smooth animations.
          </p>

          <div className="home-buttons">
            <Link to="https://github.com/Madhari-tarunsai" className="btn" target="_blank"><FaGithub /> GitHub</Link>
            <Link to="https://www.linkedin.com/in/tarunsai04/" className="btn" target="_blank"><FaLinkedin /> LinkedIn</Link>
            <Link to="https://docs.google.com/document/d/1n_vSu66L7op5Ex4gu2kIeXpNHGTc1egU/edit?usp=sharing&ouid=118110717498746602883&rtpof=true&sd=true" className="btn" target="_blank"><FaFileAlt /> View Resume</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
