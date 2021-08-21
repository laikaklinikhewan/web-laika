import React, { useState } from "react";
import PinkNavbar from "../components/PinkNavbar";
import Footer from "../components/Footer";
import { getStaffs } from "../lib/wordpress";
import Head from 'next/head'

const StaffListItem = ({ photoUrl, name, desc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start py-10 md:px-16 lg:px-32">
      <div className="relative w-photo h-photo flex-shrink-0">
        <img className="w-full h-full object-cover" src={photoUrl} alt="" />
      </div>
      <div className="px-10 md:px-0 md:ml-10 mt-6 md:mt-0 max-w-1/2">
        <p className="londrina tracking-wide mb-4 md:mb-2 mx-auto text-xl md:text-2xl lg:text-3xl font-bold underline">
          {name}
        </p>
        <p className="mx-auto text-md md:text-lg lg:text-2xl text-justify font-light tracking-tight" dangerouslySetInnerHTML={{__html: desc}}>
        </p>
      </div>
    </div>
  );
};

export default function Staff({ doctors, paramedics }) {
  const [activePage, setActivePage] = useState(0);

  const pageList = [
    { text: "Dokter", linkUrl: "#" },
    { text: "Paramedis", linkUrl: "#" },
  ];

  return (
    <main>
      <Head>
        <title>Staf Medis Laika</title>
        <link rel="icon" href="/assets/LOGO.webp" />
      </Head>
      <div className="min-h-screen w-full bg-staf">
        <PinkNavbar listButton={pageList} setActivePage={setActivePage} />
        <div>
          <span className='bg-red-600 text-white py-px'><i>*Hubungi kami di: <a href="https://bit.ly/asklaikaklinikhewan"><u>https://bit.ly/asklaikaklinikhewan</u></a> untuk perjanjian dengan dokter</i></span>
          {
            <ul className={activePage === 0 ? "block" : "hidden"}>
              {doctors.map((doctor, index) => (
                <li key={index}>
                  <StaffListItem
                    photoUrl={
                      doctor.featuredImage
                        ? doctor.featuredImage.node.mediaItemUrl
                        : "/assets/doc.webp"
                    }
                    name={doctor.title}
                    desc={doctor.content}
                  />
                </li>
              ))}
            </ul>
          }
          {
            <ul className={activePage === 1 ? "block" : "hidden"}>
              {paramedics.map((paramedic, index) => (
                <li key={index}>
                  <StaffListItem
                    photoUrl={
                      paramedic.featuredImage
                        ? paramedic.featuredImage.node.mediaItemUrl
                        : "/assets/doc.webp"
                    }
                    name={paramedic.title}
                    desc={paramedic.content}
                  />
                </li>
              ))}
            </ul>
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
