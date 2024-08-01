import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ServiceCard";
import editor from "./codeEditor.png";
import "./Service.css";
function Services() {
  return (
    <Container fluid className="service-section bg-white ">
      <Container>
        <h1 className="project-heading text-success text-center mb-4">
          Services <strong className="text-dark">Tools</strong>
        </h1>
        <p className="text-muted text-center mb-5">
          These are some of the services we are providing
        </p>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Content Generation"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="/"
              demoLink="/"
            />
          </Col>
          <Col md={4} className="mb-4">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Text To Speech"
              description="Convert your text into speech seamlessly with our advanced AI tools, supporting multiple languages and accents for natural-sounding results."
              ghLink="/"
              demoLink="/"
            />
          </Col>
          <Col md={4} className="mb-4">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Speech To Text"
              description="Accurately transcribe speech into text in real-time or from pre-recorded audio files, enhancing accessibility and productivity."
              ghLink="/"
              demoLink="/"
            />
          </Col>
          <Col md={4} className="mb-4">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Text To Video"
              description="Transform written content into engaging video presentations, perfect for marketing, education, and more, with customizable templates."
              ghLink="/"
              demoLink="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
