import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const contactInfo = [
    { 
      icon: <FaEnvelope />, 
      title: "Email", 
      value: "mtarunsai0601@gmail.com", 
      link: "mailto:mtarunsai0601@gmail.com" 
    },
    { 
      icon: <FaPhone />, 
      title: "Phone", 
      value: "+91 8142253035", 
      link: "tel:+918142253035" 
    },
    { 
      icon: <FaMapMarkerAlt />, 
      title: "Location", 
      value: "Hyderabad, India", 
      link: "https://www.google.com/maps/place/Hyderabad" 
    },
    { 
      icon: <FaLinkedin />, 
      title: "LinkedIn", 
      value: "linkedin.com/in/tarunsai04", 
      link: "https://www.linkedin.com/in/tarunsai04/" 
    },
  ];

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-container">
        {contactInfo.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
