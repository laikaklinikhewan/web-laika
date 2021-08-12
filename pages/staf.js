import React, { useState } from "react";
import PinkNavbar from "../components/PinkNavbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { getStaffs } from "../lib/wordpress";

const StaffListItem = ({ photoUrl, name, desc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start my-10 md:px-16 lg:px-32">
      <div className="relative w-photo h-photo flex-shrink-0">
        <Image
          className=""
          src={photoUrl}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-10 md:px-0 md:ml-10 mt-6 md:mt-0 max-w-1/2">
        <p className="mb-4 md:mb-2 mx-auto text-xl md:text-2xl font-bold underline">
          {name}
        </p>
        <p className="mx-auto text-sm md:text-md lg:text-lg text-justify">
          {desc}
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
      <div className="min-h-screen w-full bg-staf">
        <PinkNavbar listButton={pageList} setActivePage={setActivePage} />
        <div>
          {
            <ul className={activePage === 0 ? "block" : "hidden"}>
              {doctors.map((doctor, index) => (
                <li key={index}>
                  <StaffListItem
                    photoUrl={
                      doctor.featuredImage
                        ? doctor.featuredImage.node.mediaItemUrl
                        : "/assets/doc.png"
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
                        : "/assets/doc.png"
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
