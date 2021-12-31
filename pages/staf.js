import React, { useState } from "react";
import PinkNavbar from "../components/PinkNavbar";
import Footer from "../components/Footer";
import { getStaffs } from "../lib/wordpress";
import Head from "next/head";

const DoctorListItem = ({ photoUrl, name, desc, practice, jadwal }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start py-10 md:mx-16 lg:mx-40 xl:px-28 md:px-10 lg:px-16 bg-staf border-8 mb-5 border-lightPink mt-4 border-dashed rounded-lg`}
    >
      <div className="relative w-photo h-photo flex-shrink-0">
        <img className="w-full h-full object-cover" src={photoUrl} alt="" />
      </div>
      <div className="px-10 md:px-0 md:ml-10 mt-6 md:mt-0 max-w-1/2 flex flex-col lg:inline items-center lg:items-start">
        <span className="londrina tracking-wide mb-4 md:mb-2 mx-auto text-xl md:text-2xl lg:text-3xl font-bold underline">
          {name}
        </span>
        <span className="text-softRed font-bold text-xs md:text-sm">
          {" "}
          (Jadwal praktek: {jadwal})
        </span>
        {practice && (
          <p className="londrina tracking-wide mb-4 md:mb-2 mx-auto text-md md:text-lg lg:text-2xl opacity-70">
            {`~${practice}~`}
          </p>
        )}
        <p
          className="mx-auto text-md md:text-lg lg:text-xl text-justify font-light tracking-tight"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
      </div>
    </div>
  );
};

const ParamedicListitem = ({ photoUrl, name, practice }) => {
  return (
    <div
      className={`flex flex-col paramedic-card-size bg-button my-6 mx-2 pt-3 items-center rounded-lg`}
    >
      <div
        className="w-photo h-photo bg-cover bg-center mt-1"
        style={{ backgroundImage: `url(${photoUrl})` }}
      ></div>
      <p className="londrina tracking-wide my-2 md:mb-2 mx-auto text-xl md:text-lg lg:text-xl font-bold underline">
        {name}
      </p>
      <p className="londrina tracking-wide mb-4 md:mb-2 mx-auto text-md md:text-xs lg:text-sm opacity-70">
        ~{practice}~
      </p>
    </div>
  );
};

export default function Staff({ doctors, paramedics }) {
  const [activePage, setActivePage] = useState(0);

  const pageList = [
    { text: "Dokter", linkUrl: "#dokter" },
    { text: "Paramedis", linkUrl: "#paramedis" },
  ];

  return (
    <main>
      <Head>
        <title>Staf Medis Laika</title>
        <link rel="icon" href="/assets/LOGO.webp" />
      </Head>
      <div className="min-h-screen w-full bg-article pb-16">
        <PinkNavbar listButton={pageList} setActivePage={setActivePage} />
        <div className="bg-red-600 text-white px-2 py-px">
          <i>
            *Hubungi kami di:{" "}
            <a href="https://bit.ly/asklaikaklinikhewan">
              <u>https://bit.ly/asklaikaklinikhewan</u>
            </a>{" "}
            untuk perjanjian dengan dokter
          </i>
        </div>
        <div className="mt-10">
          {
            <ul className={activePage === 0 ? "block" : "hidden"}>
              {doctors.map((doctor, index) => (
                <li key={index}>
                  <DoctorListItem
                    photoUrl={
                      doctor.featuredImage
                        ? doctor.featuredImage.node.mediaItemUrl
                        : "/assets/doc.webp"
                    }
                    name={doctor.title}
                    desc={doctor.content}
                    practice={doctor.practice.practice}
                    jadwal={doctor.jadwal.jadwal}
                    isFirst={index == 0}
                  />
                </li>
              ))}
            </ul>
          }
          {
            <div
              className={
                activePage === 1
                  ? "flex sm:mx-8 md:mx-16 lg:mx-40 flex-wrap justify-around"
                  : "hidden"
              }
            >
              {paramedics.map((paramedic, index) => {
                return (
                  <div key={index}>
                    <ParamedicListitem
                      photoUrl={
                        paramedic.featuredImage
                          ? paramedic.featuredImage.node.mediaItemUrl
                          : "/assets/doc.webp"
                      }
                      name={paramedic.title}
                      practice={paramedic.practice.practice}
                      lastinline={index == 0 ? false : index % 3 == 0}
                    />
                  </div>
                );
              })}
            </div>
          }
        </div>
      </div>
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  return { props: await getStaffs() };
}
