import React from "react";
import { FaXTwitter, FaWhatsapp, FaUpwork } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import useLang from "./UseLang";

const Contact = () => {
  const { t } = useLang(); // ✅ hook called inside

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">{t("contact.title")}</h2>

      <div className="social">
        <h3>{t("contact.subtitle")}</h3>
        <div>
          <a
            href="https://x.com/Deniz48261798"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://wa.me/+48690564981"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://pl.linkedin.com/in/deniz-a-2b980829a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin style={{ fontSize: "30px" }} />
          </a>
          <a
            href="mailto:biancasarahdeniz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosMail style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/denizatici"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaUpwork style={{ fontSize: "30px" }} />
          </a>
        </div>
      </div>
      <div className="phone">
        <h3>{t("contact.call")}</h3>
        <p>+48 690 564 981</p>
      </div>
      <footer className="footer">© Deniz Atıcı 2025</footer>
    </section>
  );
};

export default Contact;
