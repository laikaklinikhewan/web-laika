import React from "react";
import CardButton from "./CardButton";

const InfoKlinik = () => {
  return (
    <section className="bg-pink-200">
      <div className="h-32 relative w-64 mx-auto mb-8">
        <div
          className="w-full h-full filter drop-shadow-lg bg-auto bg-no-repeat"
          style={{ backgroundImage: "url(/assets/bone-bg.svg)" }}
        ></div>
        <h2 className="text-2xl absolute top-1/2 left-1/2 font-semibold transform -translate-x-1/2 -translate-y-1/2">
          Info Klinik
        </h2>
      </div>
      <div className="grid grid-flow-row md:grid-flow-col gap-y-12 justify-evenly w-full lg:w-3/4 lg:mx-auto">
        <CardButton text="Staf" />
        <CardButton text="Fasilitas" />
        <CardButton text="Profil Klinik" />
      </div>
    </section>
  );
};

export default InfoKlinik;
