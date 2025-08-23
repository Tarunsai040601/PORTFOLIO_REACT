import React from "react";
import "./Certificate.css";

const Certificate = () => {
  const certificates = [
    {
      title: "Full Stack Developer",
      org: "10000 Coders",
      year: "2025",
      desc: "Completed Full Stack Web Development training with real-time projects.",
    },
    {
      title: "Azure Fundamentals",
      org: "Magic Bus (under Accenture)",
      year: "2024",
      desc: "Earned Microsoft Azure Fundamentals Certification with cloud concepts and services.",
    },
  ];

  return (
    <section id="certificates" className="certificates">
      <h2 className="cert-title">My Certificates</h2>

      <div className="cert-container">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p className="org">{cert.org}</p>
              <p className="year">{cert.year}</p>
              <p className="desc">{cert.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
