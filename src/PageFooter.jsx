// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Footer = () => {
//   return (
//     <footer className="bg-light text-center py-3">
//       <p className="mb-0">
//         &copy; {new Date().getFullYear()} Your Name. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
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
