// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./navbar.css";

// import logo from "../../assets/Icon.svg";
// import brand from "../../assets/Nexcent.svg";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-md background-light z-3 position-fixed w-100 shadow-sm">
//       <div className="container-fluid">
//         <a className="navbar-brand d-block d-md-none" href="#">
//           <img src={logo} alt="Company Logo" />{" "}
//           <img src={brand} alt="Company Name" />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse justify-content-around align-content-center"
//           id="navbarSupportedContent"
//         >
//           <a className="navbar-brand d-none d-md-block" href="#">
//             <img src={logo} alt="LOGO" /> <img src={brand} alt="BRAND" />
//           </a>

//           <ul className="navbar-nav gap-0 gap-lg-4 mb-2 mb-md-0 fw-medium">
//             <li className="nav-item">
//               <a className="nav-link" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#services">
//                 Service
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#product">
//                 Product
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#faq">
//                 FAQ
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#about">
//                 About Us
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#contact">
//                 Contact
//               </a>
//             </li>
//           </ul>

//           <div className="d-flex gap-2 gap-lg-4">
//             <button
//               className="border-0 background-light text-green"
//               type="submit"
//             >
//               Login
//             </button>
//             <button
//               className="border-0 rounded background-green py-2 text-white px-4"
//               type="submit"
//             >
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./navbar.css";

import logo from "../../assets/Icon.svg";
import brand from "../../assets/Nexcent.svg";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-md background-light z-3 position-fixed w-100 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-block d-md-none" href="#">
          <img src={logo} alt="Company Logo" />{" "}
          <img src={brand} alt="Company Name" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-around align-content-center"
          id="navbarSupportedContent"
        >
          <a className="navbar-brand d-none d-md-block" href="#">
            <img src={logo} alt="LOGO" /> <img src={brand} alt="BRAND" />
          </a>

          <ul className="navbar-nav gap-0 gap-lg-4 mb-2 mb-md-0 fw-medium">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Service
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#product">
                Product
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex gap-2 gap-lg-4">
            <button
              className="border-0 background-light text-green"
              type="submit"
            >
              Login
            </button>
            <button
              className="border-0 rounded background-green py-2 text-white px-4"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
