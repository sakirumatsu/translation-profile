import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // only animate once
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="sidebar-container">
      <div className="logo-header" data-aos="fade-right" data-aos-delay="100">
        <img src={logo} alt="Logo" className="logo" />
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu />
        </button>
      </div>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <a
          href="#profile"
          className="navbar-item"
          onClick={() => setIsOpen(false)}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Profile
        </a>
        <a
          href="#services"
          className="navbar-item"
          onClick={() => setIsOpen(false)}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Services
        </a>
        <a
          href="#contact"
          className="navbar-item"
          onClick={() => setIsOpen(false)}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
