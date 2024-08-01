import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./AboutCard.css"; // Make sure this CSS file is imported

function AboutCard() {
  return (
    <Card className="about-card-view bg-light shadow-sm border-1 py-2" >
      <Card.Body>
        <blockquote className="blockquote mb-0" >
          <p className="about-text" style={{paddingRight:"px"}}>
            The integration of{" "}
            <span className="text-success">Artificial Intelligence (AI)</span>{" "}
            into a comprehensive web application presents exciting opportunities
            across various domains.
            <br /> This all-in-one platform combines text-to-speech,
            speech-to-text, image generation, and video creation, benefiting
            content creators, educators, and professionals by streamlining tasks
            and enhancing accessibility.
          </p>
          <ul className="list-unstyled">
            <li className="about-activity">
              <ImPointRight /> Content Generation
            </li>
            <li className="about-activity">
              <ImPointRight /> Text To Speech
            </li>
            <li className="about-activity">
              <ImPointRight /> Speech TO Text
            </li>
            <li className="about-activity">
              <ImPointRight /> Text To Video
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
