import React from "react";
import profileImage from "../assets/meet-the-cook.jpg";
import './style.css';

const About = () => {
  return (
    <div className="container bg-text">
        <h2>About the Cook:</h2>
        <img src={profileImage} className="my-2" style={{ maxWidth: "65%", width: "50%" }} alt="Jennifer Mulder" />
        <p id="about-me"> Full-Time Accountant, Part Time cook, Fun Time Coder. I love to try new recipies that fit my needs and the ingredients in my fridge/ pantry.
        </p>  
    </div>
  );
};

export default About;
