import { useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FacilityCard from "../components/FacilityCard";
import Footer from "../components/Footer";
import PinkNavbar from "../components/PinkNavbar";
import Head from "next/head";

SwiperCore.use(Navigation);

export default function Facilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCard = cards[activeIndex];

  return (
    <>
      <Head>
        <title>Fasilitas Klinik</title>
        <link rel="icon" href="/assets/LOGO.webp" />
      </Head>
      <PinkNavbar listButton={[{ text: "Fasilitas", linkUrl: "#" }]} />
      <main
        className="bg-white min-h-screen"
        style={{ backgroundImage: "url(/assets/bck2.webp)" }}
      >
        <div className="py-10 md:py-20 px-4 lg:px-20 lg:flex items-center mb-6">
          <div className="relative w-full lg:w-160 aspect-16-9 flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={activeCard.imgUrl}
              alt={activeCard.alt}
            />
          </div>
          <div className="lg:pl-12 h-full">
            <h1 className="londrina tracking-wide text-xl md:text-4xl font-bold mb-6">
              {activeCard.descTitle}
            </h1>
            <p className="text-base font-light md:text-xl text-justify">
              {activeCard.desc}
            </p>
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
      </main>
      <Footer />
    </>
  );
}

const cards = [
  {
    imgUrl: "/assets/lobi.webp",
    alt: "gambar lobi",
    caption: "R. Tunggu",
    descTitle: "Ruang Tunggu",
    desc: "Kami menyediakan ruang tunggu yang baik untuk memastikan kenyamanan anda dan peliharaan anda dalam segala tahap dari proses berobat.",
  },
  {
    imgUrl: "/assets/fasilitas/rkonsul.webp",
    alt: "ruang konsultasi",
    caption: "R. Konsultasi",
    descTitle: "Ruang Konsultasi",
    desc: "Ruang konsultasi yang akan menjadi tempat kami menyelesaikan semua kekhawatiran anda dan peliharaan anda.",
  },
  {
    imgUrl: "/assets/fasilitas/petshop.webp",
    alt: "Pet Shop",
    caption: "Pet Shop",
    descTitle: "Pet Shop",
    desc: "Kami juga menyediakan pet shop untuk berbagai macam keperluan anda karena peliharaan tidak hanya perlu sehat, tapi juga bahagia.",
  },
  {
    imgUrl: "/assets/fasilitas/grooming.webp",
    alt: "R. Grooming",
    caption: "R. Grooming",
    descTitle: "Ruang Grooming",
    desc: "Fasilitas ruang grooming yang kami sediakan akan memastikan peliharaan kesayangan anda berada dalam kondisi bersih dan tanpa masalah kulit ataupun bulu.",
  },
  {
    imgUrl: "/assets/fasilitas/usg.webp",
    alt: "USG",
    caption: "USG",
    descTitle: "USG",
    desc: "Kami menyediakan fasilitas USG untuk memastikan kami dapat memeriksa peliharaan anda dengan baik apabila diperlukan.",
  },
  {
    imgUrl: "/assets/fasilitas/rawatinap.webp",
    alt: "rawat inap",
    caption: "Rawat Inap",
    descTitle: "Rawat Inap",
    desc: "Fasilitas rawat inap kami akan membuat anda tenang baik untuk berpergian keluar kota maupun untuk perawatan lebih intensif di Klinik Hewan Laika.",
  },
  {
    imgUrl: "/assets/fasilitas/lab.webp",
    alt: "laboratorium",
    caption: "Laboratorium",
    descTitle: "Laboratorium",
    desc: "Laboratorium dengan peralatan yang lengkap membuat kami mampu memberikan diagnosis yang akurat dan melakukan tindakan yang tepat.",
  },
  {
    imgUrl: "/assets/fasilitas/roperasi.webp",
    alt: "ruang operasi",
    caption: "R. Operasi",
    descTitle: "Ruang Operasi",
    desc: "Ruang operasi kami memiliki standar yang tinggi untuk mendukung kami dalam melakukan operasi dengan baik, agar peliharaan anda dapat kembali sehat dan bahagia. ",
  },
];
