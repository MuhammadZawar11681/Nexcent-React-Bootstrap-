import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import Particle from "../Particle";
import ContactUs from "./ContactUs";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "20 px 0" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "90px",
              paddingBottom: "0.5px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Contact Us</strong>
            </h1>
          </Col>
        </Row>

        <ContactUs />

        <br />
        <br />
      </Container>
    </Container>
  );
}

export default Contact;
