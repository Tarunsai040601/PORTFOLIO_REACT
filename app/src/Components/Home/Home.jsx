import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFileAlt, FaUser } from "react-icons/fa";
import "./Home.css";
import profile from "../../assets/images/profile.jpg";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* Left - Profile Image */}
        <div className="home-image">
          <img src={profile} alt="profile" />
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
            <Link to="/github" className="btn"><FaGithub /> GitHub</Link>
            <Link to="/linkedin" className="btn"><FaLinkedin /> LinkedIn</Link>
            <Link to="/resume" className="btn"><FaFileAlt /> View Resume</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
