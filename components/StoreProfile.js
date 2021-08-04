import React from "react";
import ProfileSlider from "./ProfileSlider";

const StoreProfile = () => {
  return (
    <main
      className="bg-gray-200 bg-contain"
      style={{ backgroundImage: "url(/assets/bck2.png)" }}
    >
      <ProfileSlider />
      <div className="px-10 lg:px-24 py-12">
        <h1 className="text-4xl font-bold mb-4">Profil</h1>
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
