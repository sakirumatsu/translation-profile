import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import productImg from "../assets/product.png";
import documentImg from "../assets/document.png";
import transcriberImg from "../assets/transcriber.png";
import personImg from "../assets/person.png";

const servicesData = [
  {
    img: productImg,
    title: "Product Translation",
    desc: "I bring high-quality e-commerce translation services for each products on your website.",
  },
  {
    img: documentImg,
    title: "Document Translation",
    desc: "We translate documents in any topics and deliver it with highest quality.",
  },
  {
    img: transcriberImg,
    title: "Transcription",
    desc: "I transcribe audio/movies and produce documents quickly and accurately.",
  },
  {
    img: personImg,
    title: "Person to Person",
    desc: "I can help translating document on phone or personal.",
  },
];

function Services() {
  return (
    <div id="services" className="services">
      <h2 className="services-title">Services</h2>
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
        {servicesData.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-box">
              <img src={service.img} alt={service.title} />
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
