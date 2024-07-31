import React from "react";
import LogoSlider from "./LogoSlider";
//import association from "../../assets/association.svg";
//import membership from "../../assets/membership.svg";
//import groups from "../../assets/groups.svg";
import clientImage from "../../assets/girl-login.svg";
import Servise from "./ServicesSection";
import "./Clients.css";

const Clients = () => {
  return (
    <>
      <div className="py-5">
        <h1 className="text-center fw-bold text-dark-grey">Our Clients</h1>
        <p className="text-grey text-center fw-semibold">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      {/* Slider for sponcers and partners */}
      <LogoSlider />

      <Servise />

      <div className="d-flex flex-column flex-md-row container pb-5 enhanced-section">
        <div className="flex-grow-1 flex-shrink-0">
          <img className="hero-image" src={clientImage} alt="Hero" />
        </div>

        <div className="flex-grow-1 w-full gap-4 d-flex flex-column justify-content-center align-items-center align-items-md-start content-section">
          <h1 className="text-dark-grey text-center text-md-start section-title">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-grey text-center text-md-start section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Clients;
