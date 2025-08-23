import React from "react";
import "./Services.css";
import { FaCode, FaServer, FaReact, FaLaptopCode } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      desc: "Building responsive, interactive, and modern UI with HTML, CSS, JavaScript, and frameworks.",
      icon: <FaLaptopCode />,
    },
    {
      id: 2,
      title: "Backend Development",
      desc: "Creating secure, scalable, and efficient backend systems with Node.js and Express.",
      icon: <FaServer />,
    },
    {
      id: 3,
      title: "React Development",
      desc: "Developing dynamic single-page applications using React.js and modern hooks.",
      icon: <FaReact />,
    },
    {
      id: 4,
      title: "MERN Stack",
      desc: "Full-stack solutions using MongoDB, Express.js, React.js, and Node.js.",
      icon: <FaCode />,
    },
  ];

  return (
    <section id="services" className="services">
      <h2 className="services-title">My Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
