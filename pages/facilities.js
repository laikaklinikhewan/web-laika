import { useState } from "react";
import Image from "next/image";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FacilityCard from "../components/FacilityCard";
import Footer from "../components/Footer";

SwiperCore.use(Navigation);
// array cards ada di bawah

export default function Facilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCard = cards[activeIndex];

  return (
    <main
      className="bg-white bg-contain min-h-screen"
      style={{ backgroundImage: "url(/assets/bck2.png)" }}
    >
      <div className="py-10 md:py-20 px-4 lg:px-20 lg:flex">
        <div className="relative w-full lg:w-5/12 h-60 md:h-96 lg:72 flex-shrink-0">
          <Image
            src={activeCard.imgUrl}
            alt={activeCard.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="lg:pl-12 h-full">
          <h1 className="text-xl md:text-4xl font-bold mb-6">
            {activeCard.descTitle}
          </h1>
          <p className="text-base md:text-xl text-justify">{activeCard.desc}</p>
        </div>
      </div>
      <div className="bg-black bg-opacity-40 flex justify-evenly md:px-12 lg:px-40 py-4">
        <Swiper
          style={{
            "--swiper-navigation-color": "white",
            "--swiper-pagination-color": "white",
          }}
          spaceBetween={50}
          wrapperTag="ul"
          navigation
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide
              tag="li"
              key={index}
              className="cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <FacilityCard
                imgUrl={card.imgUrl}
                alt={card.alt}
                caption={card.caption}
                isActive={activeIndex === index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </main>
  );
}

const cards = [
  {
    imgUrl: "/assets/lobi.jpeg",
    alt: "gambar lobi",
    caption: "aaaa",
    descTitle: "Ruang Tunggu",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iste temporibus, incidunt molestias ullam repudiandae, consequatur quam molestiae quibusdam totam maxime error expedita asperiores harum fuga voluptatibus nesciunt sit eveniet in? Temporibus mollitia necessitatibus saepe soluta eum esse, dicta tenetur dolores numquam quo iure in minima, debitis officiis ipsam voluptatum.",
  },
  {
    imgUrl: "/assets/usg.jpeg",
    alt: "gambar lobi",
    caption: "aaaa",
    descTitle: "USG",
    desc: "Lorem ipsum dolor sit, . Illum iste temporibus, incidunt amet consectetur adipisicing elit molestias ullam repudiandae, consequatur quam molestiae quibusdam totam maxime error expedita asperiores harum fuga voluptatibus nesciunt sit eveniet in? Temporibus mollitia necessitatibus saepe soluta eum esse, dicta tenetur dolores numquam quo iure in minima, debitis officiis ipsam voluptatum.",
  },
  {
    imgUrl: "/assets/lobi.jpeg",
    alt: "gambar lobi",
    caption: "aaaa",
    descTitle: "Ruang Tunggu",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iste temporibus, incidunt molestias ullam repudiandae, consequatur quam molestiae quibusdam totam maxime error expedita asperiores harum fuga voluptatibus nesciunt sit eveniet in? Temporibus mollitia necessitatibus saepe soluta eum esse, dicta tenetur dolores numquam quo iure in minima, debitis officiis ipsam voluptatum.",
  },
  {
    imgUrl: "/assets/lobi.jpeg",
    alt: "gambar lobi",
    caption: "aaaa",
    descTitle: "Ruang Tunggu",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iste temporibus, incidunt molestias ullam repudiandae, consequatur quam molestiae quibusdam totam maxime error expedita asperiores harum fuga voluptatibus nesciunt sit eveniet in? Temporibus mollitia necessitatibus saepe soluta eum esse, dicta tenetur dolores numquam quo iure in minima, debitis officiis ipsam voluptatum.",
  },
  {
    imgUrl: "/assets/lobi.jpeg",
    alt: "gambar lobi",
    caption: "aaaa",
    descTitle: "Ruang Tunggu",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iste temporibus, incidunt molestias ullam repudiandae, consequatur quam molestiae quibusdam totam maxime error expedita asperiores harum fuga voluptatibus nesciunt sit eveniet in? Temporibus mollitia necessitatibus saepe soluta eum esse, dicta tenetur dolores numquam quo iure in minima, debitis officiis ipsam voluptatum.",
  },
  {
    imgUrl: "/assets/lobi.jpeg",
    alt: "gambar lobi",
    caption: "aaaa",
    descTitle: "Ruang Tunggu",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iste temporibus, incidunt molestias ullam repudiandae, consequatur quam molestiae quibusdam totam maxime error expedita asperiores harum fuga voluptatibus nesciunt sit eveniet in? Temporibus mollitia necessitatibus saepe soluta eum esse, dicta tenetur dolores numquam quo iure in minima, debitis officiis ipsam voluptatum.",
  },
  {
    imgUrl: "/assets/lobi.jpeg",
    alt: "gambar lobi",
    caption: "aaaa",
    descTitle: "Ruang Tunggu",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iste temporibus, incidunt molestias ullam repudiandae, consequatur quam molestiae quibusdam totam maxime error expedita asperiores harum fuga voluptatibus nesciunt sit eveniet in? Temporibus mollitia necessitatibus saepe soluta eum esse, dicta tenetur dolores numquam quo iure in minima, debitis officiis ipsam voluptatum.",
  },
];