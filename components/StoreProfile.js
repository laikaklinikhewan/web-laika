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
        <p className="md:ml-8 lg:ml-12 md:w-1/2 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore odit
          quas obcaecati hic laborum quidem, dolor quos unde, aliquid error modi
          atque est iure ipsum? Porro mollitia natus quibusdam asperiores cumque
          tempora facilis repudiandae sapiente ipsa. Libero deleniti laboriosam
          eveniet maiores esse quam? Eveniet inventore porro sit earum nobis
          repellat?
        </p>
      </div>
    </main>
  );
};

export default StoreProfile;
