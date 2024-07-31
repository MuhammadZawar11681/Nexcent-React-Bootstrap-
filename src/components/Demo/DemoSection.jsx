// DemoSection.jsx
import React from "react";
import white_arrow from "../../assets/arrow-right-white.svg"; // Adjust path if necessary

const DemoSection = () => {
  return (
    <div className="background-light py-4 d-flex flex-column justify-content-center gap-3">
      <h1 className="text-center text-black">
        Pellentesque suscipit <br />
        fringilla libero eu.
      </h1>
      <button className="border-0 rounded background-green text-white px-4 py-2 mx-auto">
        Get Demo <img src={white_arrow} alt="Arrow" />
      </button>
    </div>
  );
};

export default DemoSection;
