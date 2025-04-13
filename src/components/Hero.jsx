import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
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
      <div className="language-icons">
        <span
          className="flag-icon flag-icon-gb"
          title="English"
          data-aos="fade-up"
          data-aos-delay="200"
        ></span>
        <span
          className="flag-icon flag-icon-dk"
          title="Danish"
          data-aos="fade-up"
          data-aos-delay="400"
        ></span>
        <span
          className="flag-icon flag-icon-pl"
          title="Polish"
          data-aos="fade-up"
          data-aos-delay="400"
        ></span>
      </div>

      <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
        <h1 data-aos="fade-up" data-aos-delay="400">
          Deniz Atici
        </h1>
        <h2 data-aos="fade-up" data-aos-delay="600">
          Your translator
        </h2>
        <p data-aos="fade-up" data-aos-delay="800">
          18 years deep into bridging Danish and Polish, one word at a time. It
          started with helping friends and family, and turned into translating
          websites, phone calls, and everything in between. I love the puzzle of
          language — finding the right words that <i>feel</i> right on both
          sides.
        </p>
      </div>
      <div className="bg-box-1"></div>
      <div className="bg-box-2"></div>
    </section>
  );
}

export default Hero;
