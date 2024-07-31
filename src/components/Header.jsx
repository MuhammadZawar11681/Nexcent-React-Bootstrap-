import React from "react";
import headerImage from "../assets/headerImage.svg";
import girlSignup from "../assets/girl-signup.svg";
import girlogin from "../assets/girl-login.svg";

const Header = () => {
  return (
    <div className="background-light py-5 px-2 px-sm-5 pb-0 ">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active slider-button"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="slider-button"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="slider-button"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className="d-flex flex-column-reverse flex-md-row container py-5 ">
              <div className=" flex-grow-1 w-full gap-4 d-flex flex-column justify-content-center pt-5">
                <h1 className=" text-dark-grey" style={{ fontSize: "8ex" }}>
                  Lessons and insights <br />
                  <span className="text-green">from 8 years</span>
                </h1>
                <p
                  className="fw-semibold text-grey"
                  style={{ fontSize: "16px" }}
                >
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button
                  className="rounded border-0 background-green text-white px-4 py-2"
                  style={{ width: "fit-content" }}
                >
                  Register
                </button>
              </div>
              <div className=" flex-grow-1 ">
                <img
                  style={{ width: "100%" }}
                  src={headerImage}
                  alt="Header Image"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column-reverse flex-md-row container py-5 ">
              <div className=" flex-grow-1 w-full gap-4 d-flex flex-column justify-content-center pt-5">
                <h1 className=" text-dark-grey" style={{ fontSize: "8ex" }}>
                  Lessons and insights <br />
                  <span className="text-green">from 8 years</span>
                </h1>
                <p
                  className="fw-semibold text-grey"
                  style={{ fontSize: "16px" }}
                >
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button
                  className="rounded border-0 background-green text-white px-4 py-2"
                  style={{ width: "fit-content" }}
                >
                  Register
                </button>
              </div>
              <div className=" flex-grow-1 ">
                <img
                  style={{ width: "100%" }}
                  src={girlSignup}
                  alt="Girl Sign up Image"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column-reverse flex-md-row container py-5 ">
              <div className=" flex-grow-1 w-full gap-4 d-flex flex-column justify-content-center pt-5">
                <h1 className=" text-dark-grey" style={{ fontSize: "8ex" }}>
                  Lessons and insights <br />
                  <span className="text-green">from 8 years</span>
                </h1>
                <p
                  className="fw-semibold text-grey"
                  style={{ fontSize: "16px" }}
                >
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button
                  className="rounded border-0 background-green text-white px-4 py-2"
                  style={{ width: "fit-content" }}
                >
                  Register
                </button>
              </div>
              <div className=" flex-grow-1 ">
                <img
                  style={{ width: "100%" }}
                  src={girlogin}
                  alt="HERO Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
