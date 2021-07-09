import React from "react";

const InfoKlinik = () => {
  return (
    <section>
      <div className="h-24 relative w-48 mx-auto">
        <div
          className="w-full h-full filter drop-shadow-lg bg-auto bg-no-repeat"
          style={{ backgroundImage: "url(/assets/bone-bg.svg" }}
        ></div>
        <h2 className="absolute top-1/2 left-1/2 font-semibold transform -translate-x-1/2 -translate-y-1/2">
          Info Klinik
        </h2>
      </div>
    </section>
  );
};

export default InfoKlinik;
