import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLang } from "./LanguageContext";

function Hero() {
  const { setLang, t } = useLang(); // ✅ hook called inside

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      delay: 100,
      once: false,
    });

    // Important if content is dynamically rendered
    AOS.refresh();
  }, []);
  return (
    <section id="profile" className="hero">
      <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
        <h1 data-aos="fade-up" data-aos-delay="400">
          Deniz Atici
        </h1>
        <h2 data-aos="fade-up" data-aos-delay="600">
          {t("hero.title")}
        </h2>
        <p data-aos="fade-up" data-aos-delay="800">
          {t("hero.description")}
        </p>
      </div>
      <div className="bg-box-1"></div>
      <div className="bg-box-2"></div>
    </section>
  );
}

export default Hero;
