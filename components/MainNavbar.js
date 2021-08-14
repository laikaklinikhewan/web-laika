import React, { useState } from "react";
import MainNavbarButton from "./MainNavbarButton";

const MainNavbar = () => {
  const SectorList = [
    {
      text: "Artikel",
      sectUrl: "#artikel",
      iconUrl: "/icons/article.svg",
      height: "19",
      width: "18.6",
    },
    {
      text: "Jam Praktek",
      sectUrl: "#jam",
      iconUrl: "/icons/clock.svg",
      height: "19.7px",
      width: "19.25px",
    },
    {
      text: "Info Klinik",
      sectUrl: "#info",
      iconUrl: "/icons/info.svg",
      height: "17.83",
      width: "17.41",
    },
    {
      text: "Home",
      sectUrl: "#hero",
      iconUrl: "/icons/home.svg",
      height: "24.02px",
      width: "23.47px",
    },
  ];

  const [activeSect, setActiveSect] = useState(3);
  return (
    <>
      <div className="sm:hidden flex flex-col fixed bg-white z-50 justify-between h-28 max-w-8xl w-full shadow-lg text-base inline-flex">
        <nav className="flex space-x-3 text-tn text-media items-center absolute right-6 mt-2">
          <a
            className="flex self-center"
            href="https://www.instagram.com/laikaklinikhewan/"
          >
            <div className="p-0.5 h-ig w-ig">
              <img
                src="/icons/instagram-head.svg"
                alt=""
                width="23px"
                height="23px"
              />
            </div>
          </a>
          <a
            className="flex self-center"
            href="https://bit.ly/asklaikaklinikhewan"
          >
            <div className="p-0.5 h-ig w-ig">
              <img
                src="/icons/whatsapp-head.svg"
                alt=""
                width="23px"
                height="23px"
              />
            </div>
          </a>
          <a
            className="flex self-center"
            href="https://mail.google.com/mail/u/0/?fs=1&to=laikaklinikhewan@gmail.com&tf=cm"
          >
            <div className="">
              <img
                src="/icons/mail-head.svg"
                alt=""
                width="24px"
                height="24px"
              />
            </div>
          </a>
        </nav>
        <div className="relative min-w-logo min-h-logo ml-10 mt-6">
          <img src="/assets/LOGO.png" alt="Laika" height={65} width={65} layout="fill" />
        </div>

      </div>
      <div className="sm:flex hidden fixed bg-white z-50 justify-between h-28 max-w-8xl w-screen shadow-lg text-base inline-flex">
        <div className="static min-w-logo min-h-logo lg:mx-xnav ml-10 my-ynav">
          <img src="/assets/LOGO.png" alt="Laika" height={65} width={65} layout="fill" />
        </div>
        <div className="grid lg:mr-xnav mr-xnavmin">
          <nav className="flex space-x-10 text-tn lg:text-sm text-media items-center">
            <a
              className="flex self-center"
              href="https://www.instagram.com/laikaklinikhewan/"
            >
              <div className="lg:p-1 p-0.5 h-igt w-igt lg:h-ig lg:w-ig">
                <img
                  src="/icons/instagram-head.svg"
                  alt=""
                  width="23px"
                  height="23px"
                />
              </div>
              laikaklinikhewan
            </a>
            <a
              className="flex self-center"
              href="https://bit.ly/asklaikaklinikhewan"
            >
              <div className="lg:p-1 p-0.5 h-igt w-igt lg:h-ig lg:w-ig">
                <img
                  src="/icons/whatsapp-head.svg"
                  alt=""
                  width="23px"
                  height="23px"
                />
              </div>
              bit.ly/asklaikaklinikhewan
            </a>
            <a
              className="flex self-center"
              href="https://mail.google.com/mail/u/0/?fs=1&to=laikaklinikhewan@gmail.com&tf=cm"
            >
              <div className="lg:h-mail lg:w-mail h-mailt w-mailt">
                <img
                  src="/icons/mail-head.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
              </div>
              laikaklinikhewan@gmail.com
            </a>
          </nav>
          <nav className="flex flex-row-reverse space-x-10 space-x-reverse mt-ynav items-center lg:text-base text-sm">
            {SectorList.map((sect, index) => (
              <MainNavbarButton
                key={index}
                text={sect.text}
                sectUrl={sect.sectUrl}
                iconUrl={sect.iconUrl}
                isActive={activeSect === index}
                onClickFunc={() => setActiveSect(index)}
                height={sect.height}
                width={sect.width}
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
