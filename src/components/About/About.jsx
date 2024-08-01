import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import laptopImg from "./about.png";

function About() {
  return (
    <Container fluid className="about-section bg-white text-dark py-5">
      <Container>
        <Row className="justify-content-center py-5">
          <Col
            md={7}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h1
              className="text-center"
              style={{ fontSize: "2.5em", paddingBottom: "20px" }}
            >
              Know About <strong className="text-success">Nexcent</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading text-center my-5">
          <strong className="text-success">Tools</strong> We Provide
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
