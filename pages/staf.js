import React, { useState } from "react";
import PinkNavbar from "../components/PinkNavbar";
import Image from "next/image";
import Footer from "../components/Footer";

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

const Staff = () => {
  const [activePage, setActivePage] = useState(0);

  return (
    <main className="min-h-screen w-full bg-staf">
      <div>
        <PinkNavbar listButton={pageList} setActivePage={setActivePage} />
        <div>
          {
            <ul className={activePage === 0 ? "block" : "hidden"}>
              {doctors.map((doctor, index) => (
                <li key={index}>
                  <StaffListItem
                    photoUrl={doctor.photoUrl}
                    name={doctor.name}
                    desc={doctor.desc}
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
                    photoUrl={paramedic.photoUrl}
                    name={paramedic.name}
                    desc={paramedic.desc}
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
};

export default Staff;

const doctors = [
  {
    photoUrl: "/assets/doc.png",
    name: "Dr.Eren Jaeger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie",
  },
  {
    photoUrl: "/assets/doc.png",
    name: "Dr.Eren Jaeger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. ",
  },
  {
    photoUrl: "/assets/doc.png",
    name: "Dr.Eren Jaeger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. ",
  },
  {
    photoUrl: "/assets/doc.png",
    name: "Dr.Eren Jaeger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. ",
  },
];

const paramedics = [
  {
    photoUrl: "/assets/doc.png",
    name: "Paramedis Eren Jaeger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. ",
  },
  {
    photoUrl: "/assets/doc.png",
    name: "Paramedis Eren Jaeger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. ",
  },
  {
    photoUrl: "/assets/doc.png",
    name: "Paramedis Eren Jaeger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. ",
  },
  {
    photoUrl: "/assets/doc.png",
    name: "Paramedis Eren Jaeger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim magna. Aliquam sed neque sollicitudin, euismod magna in, congue est. Sed in molestie risus, eget lobortis neque. Ut molestie nunc libero, sit amet malesuada sapien sagittis ornare. Sed vitae arcu velit. Quisque sit amet orci ultrices, blandit elit quis, mattis quam. Vivamus id sodales tellus, in placerat nunc. Etiam tristique rhoncus libero, et ullamcorper lacus posuere nec. Quisque nulla mi, maximus a tincidunt nec, facilisis vel ante. Donec ante lacus, ornare id massa egestas, venenatis sagittis mi. Donec aliquam vulputate arcu, ac tempus dolor interdum at. ",
  },
];

const pageList = [
  { text: "Dokter", linkUrl: "#" },
  { text: "Paramedis", linkUrl: "#" },
];
