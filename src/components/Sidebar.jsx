import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import useLang from "./UseLang";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setLang, t } = useLang(); // ✅ hook called inside

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // only animate once
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="sidebar-container">
      <div className="header" data-aos="fade-right" data-aos-delay="100">
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
          {t("nav.profile")}
        </a>
        <a
          href="#services"
          className="navbar-item"
          onClick={() => setIsOpen(false)}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          {t("nav.services")}
        </a>
        <a
          href="#contact"
          className="navbar-item"
          onClick={() => setIsOpen(false)}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          {t("nav.contact")}
        </a>
        <div className="language-icons">
          <span
            className="flag-icon flag-icon-gb"
            title="English"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() => setLang("en-GB")}
            style={{ cursor: "pointer" }}
          ></span>
          <span
            className="flag-icon flag-icon-dk"
            title="Danish"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={() => setLang("da")}
            style={{ cursor: "pointer" }}
          ></span>
          <span
            className="flag-icon flag-icon-pl"
            title="Polish"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={() => setLang("pl")}
            style={{ cursor: "pointer" }}
          ></span>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
