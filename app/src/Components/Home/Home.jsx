import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFileAlt, FaUser } from "react-icons/fa";
import "./Home.css";
import profile_02 from "../../assets/images/profile_02.png";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-image">
          <div className="profile-ring">
            <img src={profile_02} alt="Tarunsai profile" />
          </div>
        </div>

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
            <Link to="https://github.com/Madhari-tarunsai" className="btn btn-primary" target="_blank">
              <FaGithub /> GitHub
            </Link>
            <Link to="https://www.linkedin.com/in/tarunsai04/" className="btn btn-primary" target="_blank">
              <FaLinkedin /> LinkedIn
            </Link>
            <Link
              to="https://drive.google.com/file/d/13AY-_x5V_RAu--F6MTiyzLq9bKP6KeeN/view?usp=sharing"
              className="btn btn-primary"
              target="_blank"
            >
              <FaFileAlt /> View Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
