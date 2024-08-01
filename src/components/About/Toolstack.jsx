// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row className="justify-content-center pb-5">
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMacos size={50} className="text-success" />
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVisualstudiocode size={50} className="text-success" />
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPostman size={50} className="text-success" />
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiSlack size={50} className="text-success" />
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVercel size={50} className="text-success" />
      </Col>
    </Row>
  );
}

export default Toolstack;
