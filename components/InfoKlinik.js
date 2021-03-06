import React from "react";
import CardButton from "./CardButton";

const InfoKlinik = () => {
  return (
    <section
      className="bg-pink-200 bg-cover py-12 min-h-screen"
      style={{ backgroundImage: "url(/assets/bck-with-paw4.webp" }}
      id="info"
    >
      <div className="h-32 relative w-64 mx-auto mb-8 mt-24">
        <div
          className="w-full h-full filter drop-shadow-lg bg-auto bg-no-repeat"
          style={{ backgroundImage: "url(/assets/bone-bg.svg)" }}
        ></div>
        <h2 className="londrina text-3xl absolute top-1/2 left-1/2 font-semibold transform -translate-x-1/2 -translate-y-1/2">
          Info Klinik
        </h2>
      </div>
      <ul className="grid grid-flow-row md:grid-flow-col gap-y-12 justify-evenly w-full lg:w-3/4 lg:mx-auto">
        <li className="grid">
          <CardButton
            text="Staf"
            bgImgUrl="/assets/doctors.webp"
            urlTo="/staf"
          />
        </li>
        <li className="grid">
          <CardButton
            text="Fasilitas"
            bgImgUrl="/assets/usg.webp"
            urlTo="/fasilitas"
          />
        </li>
        <li className="grid">
          <CardButton
            text="Profil Klinik"
            bgImgUrl="/assets/nonblur.webp"
            urlTo="/profil"
          />
        </li>
      </ul>
    </section>
  );
};

export default InfoKlinik;
