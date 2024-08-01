
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import "./Service.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-100 border-0 shadow-sm">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="p-3"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-success">{props.title}</Card.Title>
        <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {!props.isBlog && props.demoLink && (
          <Button
            variant="success"
            href={props.demoLink}
            target="_blank"
            className="mt-3 align-self-end"
          >
            <CgWebsite /> &nbsp;{"Visit"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
