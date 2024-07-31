import React from "react";
import membership from "../../assets/membership.svg";
import association from "../../assets/association.svg";
import groups from "../../assets/groups.svg";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div id="services" className="w-full py-5">
      <h1 className="text-center mx-auto text-dark-grey px-2 title">
        Manage your entire community in a single system
      </h1>
      <p className="text-center text-grey fw-semibold subtitle">
        Who is Nextcent suitable for?
      </p>

      <div className="d-flex justify-content-center gap-5 mb-5 flex-wrap">
        <div className="service-card">
          <div className="icon-container">
            <img className="icon" src={membership} alt="membership" />
          </div>
          <h1 className="service-title">Membership Organisations</h1>
          <p className="service-description">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img className="icon" src={association} alt="association" />
          </div>
          <h1 className="service-title">National Associations</h1>
          <p className="service-description">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img className="icon" src={groups} alt="groups" />
          </div>
          <h1 className="service-title">Clubs And Groups</h1>
          <p className="service-description">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
