import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#d4edda",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container fluid className="text-center">
        <small>&copy; 2024 Nexcent. All Rights Reserved.</small>
      </Container>
    </footer>
  );
};

export default Footer;
