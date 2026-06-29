import React, { useState } from "react";
import "./About.css";
import profile_01 from "../../assets/images/profile_01.png";

const About = () => {
  const [showEducation, setShowEducation] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* Left - Image */}
        <div className="about-image">
          <div className="profile-wrap">
            <img src={profile_01} alt="Profile" />
          </div>
        </div>

        {/* Right - Info */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a <span>Web Developer</span> passionate about building modern,
            interactive, and scalable web applications.  
            Skilled in <span>React.js</span>, <span>MERN Stack</span>, and
            creating <strong>3D UI effects</strong> for a unique user
            experience.
          </p>

          {/* Toggle Button */}
          <button 
            className="btn" 
            onClick={() => setShowEducation(!showEducation)}
          >
            {showEducation ? "Hide Education" : "Show Education"}
          </button>

          {/* Education Section */}
          {showEducation && (
            <div className="education">
              <h3>🎓 Education</h3>
              
              <div className="edu-card">
                <h4>SSC (10th)</h4>
                <p><strong>School:</strong> Panchavati High School</p>
                <p><strong>Year:</strong> 2017</p>
                <p><strong>Percentage:</strong> 72%</p>
              </div>

              <div className="edu-card">
                <h4>Intermediate (12th)</h4>
                <p><strong>College:</strong> Sri Adarsh Junior College</p>
                <p><strong>Year:</strong> 2019</p>
                <p><strong>Percentage:</strong> 89%</p>
              </div>

              <div className="edu-card">
                <h4>B.Tech (ECE)</h4>
                <p><strong>College:</strong> BVRIT Institute of Technology</p>
                <p><strong>Branch:</strong>Electronics and Communication Engginering</p>
                <p><strong>Year of Passout:</strong> 2022</p>
                <p><strong>CGPA:</strong>7.32</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
