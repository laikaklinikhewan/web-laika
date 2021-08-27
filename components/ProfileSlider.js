import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation]);

const sliderImages = [
  { imgUrl: "/assets/lobi.webp", alt: "gambar lobi" },
  { imgUrl: "/assets/usg.webp", alt: "gambar alat usg" },
  { imgUrl: "/assets/laika.webp", alt: "event" },
];

const ProfileSlider = () => {
  return (
    <div className="md:w-5/6 lg:w-2/3 mx-auto">
      <Swiper
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white",
        }}
        spaceBetween={50}
        wrapperTag="ul"
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {sliderImages.map((slide, index) => (
          <SwiperSlide tag="li" key={index} className="h-full">
            <div style={{ height: 450 }}>
              <img
                className="w-full h-full object-cover"
                src={slide.imgUrl}
                alt={slide.alt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileSlider;
