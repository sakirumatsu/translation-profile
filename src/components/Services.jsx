import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import productImg from "../assets/product.webp";
import documentImg from "../assets/document.webp";
import transcriberImg from "../assets/transcriber.webp";
import personImg from "../assets/person.webp";
import useLang from "./UseLang";
function Services() {
  const { t } = useLang(); // ✅ hook called inside
  const translatedServices = t("services", { returnObjects: true });

  const servicesData = [
    { img: productImg },
    { img: documentImg },
    { img: transcriberImg },
    { img: personImg },
  ];

  return (
    <div id="services" className="services">
      <h2 className="services-title">{t("servicesTitle")}</h2>
      <Swiper
        modules={[Autoplay, Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // show 1 full + 2 partials
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        loop
        breakpoints={{
          768: { slidesPerView: 2 }, // iPad/tablet
          1024: { slidesPerView: 2 }, // desktop
        }}
      >
        {translatedServices.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-box">
              <img src={servicesData[index]?.img || ""} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Services;
