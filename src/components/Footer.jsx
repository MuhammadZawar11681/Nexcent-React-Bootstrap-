import logo from "../assets/footer-logo.svg";
import brand from "../assets/Nexcent-white.svg";
import share from "../assets/share.svg";
import instagram from "../assets/insta.svg";
import website from "../assets/website.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <div>
      <div className="background-black py-5 ">
        <div className="container d-flex flex-column flex-md-row  ">
          <div className="me-5 me-sm-0 mb-5 mb-md-0 ms-4 ms-md-0 pe-5 pe-sm-0 d-flex flex-column justify-content-between">
            <a className=" " href="#">
              <img src={logo} alt="LOGO" /> <img src={brand} alt="BRAND" />
            </a>
            <div>
              <p className="text-silver my-2">
                Copyright &copy; 2020 Nexcent ltd.
              </p>
              <p className="text-silver">All rights reserved</p>
            </div>

            <div className="d-flex gap-3">
              <img src={instagram} alt="logo" />
              <img src={website} alt="logo" />
              <img src={twitter} alt="logo" />
              <img src={youtube} alt="logo" />
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row  justify-content-center gap-5 gap-sm-2 gap-lg-5 flex-grow-1 ms-4  ms-md-3 ms-lg-5 ">
            <div className="mx-0  mx-md-5 ">
              <ul className="text-light d-flex flex-column gap-1  list-unstyled">
                <li className="fw-semibold fs-5 mb-4 text-white">Company</li>
                <li>About us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div className="me-5  ms-md-0">
              <ul className="text-light d-flex flex-column gap-1 list-unstyled">
                <li className="fw-semibold mb-4 fs-5 text-white">Support</li>
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Status</li>
              </ul>
            </div>
            <div className="">
              <p className="text-white fw-semibold mb-4 fs-5">
                Stay up to date
              </p>
              <div className="bg-white p-2 rounded-2 d-flex justify-content-between me-5 me-md-0 bg-opacity-25 mx-auto text-silver">
                <input
                  className="bg-transparent h-100 border-0  "
                  style={{ outline: "none" }}
                  placeholder="Your email address"
                  type="text"
                />{" "}
                <img src={share} alt="Share Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import logo from "../assets/footer-logo.svg";
// import brand from "../assets/Nexcent-white.svg";
// import share from "../assets/share.svg";
// import instagram from "../assets/insta.svg";
// import website from "../assets/website.svg";
// import twitter from "../assets/twitter.svg";
// import youtube from "../assets/youtube.svg";

// const Footer = () => {
//   return (
//     <footer className="background-dark py-5">
//       <div className="container d-flex flex-column flex-md-row">
//         {/* Logo and Copyright Section */}
//         <div className="me-5 me-sm-0 mb-5 mb-md-0 ms-4 ms-md-0 pe-5 pe-sm-0 d-flex flex-column justify-content-between">
//           <div className="d-flex align-items-center mb-4">
//             <img src={logo} alt="LOGO" className="me-2" />
//             <img src={brand} alt="BRAND" />
//           </div>
//           <div>
//             <p className="text-light my-2">
//               © 2020 Nexcent Ltd. All rights reserved.
//             </p>
//           </div>
//           <div className="d-flex gap-3">
//             <a href="#" aria-label="Instagram" className="footer-icon">
//               <img src={instagram} alt="Instagram" />
//             </a>
//             <a href="#" aria-label="Website" className="footer-icon">
//               <img src={website} alt="Website" />
//             </a>
//             <a href="#" aria-label="Twitter" className="footer-icon">
//               <img src={twitter} alt="Twitter" />
//             </a>
//             <a href="#" aria-label="YouTube" className="footer-icon">
//               <img src={youtube} alt="YouTube" />
//             </a>
//           </div>
//         </div>

//         {/* Links Section */}
//         <div className="d-flex flex-column flex-md-row justify-content-center gap-5 gap-sm-2 gap-lg-5 flex-grow-1 ms-4 ms-md-3 ms-lg-5">
//           <div className="mx-0 mx-md-5">
//             <ul className="text-light d-flex flex-column gap-2 list-unstyled">
//               <li className="fw-bold fs-5 text-white">Company</li>
//               <li>
//                 <a href="#" className="footer-link">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="footer-link">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="footer-link">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="footer-link">
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="footer-link">
//                   Testimonials
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="me-5 ms-md-0">
//             <ul className="text-light d-flex flex-column gap-2 list-unstyled">
//               <li className="fw-bold fs-5 text-white">Support</li>
//               <li>
//                 <a href="#" className="footer-link">
//                   Help Center
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="footer-link">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="footer-link">
//                   Legal
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="footer-link">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="footer-link">
//                   Status
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="subscribe-section">
//             <p className="text-white fw-bold fs-5 mb-3">Stay Up to Date</p>
//             <div className="bg-light p-2 rounded d-flex justify-content-between align-items-center">
//               <input
//                 className="border-0 p-2 flex-grow-1"
//                 placeholder="Your email address"
//                 type="email"
//               />
//               <button className="border-0 bg-green text-white p-2 rounded ms-2">
//                 <img src={share} alt="Share" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
