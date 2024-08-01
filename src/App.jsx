import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import Clients from "./components/Clients/Clients";
import Achievements from "./components/Achievements/Achievements";
import Products from "./components/Products/Products";
import Customers from "./components/Customers/Customers";
import Blog from "./components/Blogs/Blog";
import Footer from "./components/Footer";
import Demo from "./components/Demo/DemoSection";
import About from "./components/About/About";
import Services from "./components/Services/Service";
import Contact from "./components/Contact/Contact";
import Homefooter from "./PageFooter";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Clients />
              <Achievements />
              <Products />
              <Customers />
              <Blog />
              <Demo />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Homefooter />
    </Router>
  );
}

export default App;
