import React from "react";
import PropTypes from "prop-types";
import { list } from "postcss";

const JamPraktek = (props) => {
  const jamPraktek = [
    { hari: "Senin-Jumat", jam: ["10.00-21-00", "10.00-16.00 (Pandemi)"] },
    {
      hari: "Sabtu, Minggu, dan Hari Libur",
      jam: ["10.00-16.00"],
    },
  ];
  return (
    <section className="relative h-auto overflow-hidden min-h-screen" id="jam">
      <div
        className="bg-cover bg-bottom absolute z-0 top-0 left-0 w-full h-full filter blur-sm"
        style={{ backgroundImage: "url(/assets/lobi.jpeg)" }}
      ></div>
      <div className="flex flex-col justify-center relative z-10 ml-24 mt-60 h-full w-1/2">
        <h2 className="londrina font-black text-6xl text-white mb-12 text-outline textOutlineThick">
          Jam Praktek
        </h2>
        <ul className="text-white text-3xl paw-list">
          {jamPraktek.map((jadwal, idx) => (
            <li key={idx} className="mb-4">
              <p className="font-bold textOutline">{jadwal.hari}</p>
              {jadwal.jam.map((jam, idx2) => (
                <p key={idx2} className="font-light">
                  {jam}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

JamPraktek.propTypes = {};

export default JamPraktek;
