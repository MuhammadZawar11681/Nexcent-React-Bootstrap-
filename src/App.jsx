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

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Clients />
      <Achievements />
      <Products />
      <Customers />
      <Blog />
      <Demo />
      <Footer />
    </>
  );
}

export default App;
