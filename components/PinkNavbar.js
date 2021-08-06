import React, { useState } from "react";
import Image from 'next/image'
import PinkNavbarButton from "./PinkNavbarButton";

const PinkNavbar = ({listButton}) => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="relative h-40 w-screen bg-pinkHeader bg-cover flex items-center">
      <div className="w-logo h-logo ml-xnav mr-12 my-ynav self-center">
          <Image src="/assets/LOGO.png" alt="Laika" width="100px" height="100px" layout="fixed"/>
      </div>
      {listButton.map((link, index) => (
        <PinkNavbarButton
          key={index}
          text={link.text}
          isActive={activeLink === index}
          onClickFunc={() => setActiveLink(index)}
          linkTo={link.linkUrl}
        />
      ))}
    </div>
  );
};

export default PinkNavbar;