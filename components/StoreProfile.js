import React from "react";
import ProfileSlider from "./ProfileSlider";
import PinkNavbar from "./PinkNavbar";

const StoreProfile = () => {
  return (
    <main
      className="bg-white"
      style={{ backgroundImage: "url(/assets/bck2.webp)" }}
    >
      <PinkNavbar listButton={[{ text: "Profil Klinik", linkUrl: "#" }]} />
      <div className="py-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        <ProfileSlider />
      </div>
      <div className="px-10 lg:px-24 py-12">
        <h1 className="text-4xl mb-4 londrina text-purp">Profil</h1>
        <p className="md:ml-8 lg:ml-12 md:w-1/2 text-justify text-xl">
          Klinik Hewan Laika telah melayani sejak tahun 2016 dan akan terus
          mengembangkan layanan yang kami miliki untuk kepuasan Pawrents dan
          kesayangannya. Tak hanya itu, Klinik Hewan Laika juga ikut mengambil
          peran dalam mengedukasi masyarakat tentang kesehatan hewan.
        </p>
      </div>
    </main>
  );
};

export default StoreProfile;
