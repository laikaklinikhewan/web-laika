import React, { useState } from "react";
import PinkNavbarButton from "./PinkNavbarButton";
import Link from "next/link";

const PinkNavbar = ({ listButton, setActivePage }) => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="relative h-40 w-100 bg-pinkHeader bg-cover flex items-center shadow-md">
      <div className="md:ml-xnav md:mr-12 my-ynav self-center">
        <Link href="/" passHref={true}>
          <a>
            <img
              src="/assets/LOGO.png"
              alt="Laika"
              width="100px"
              height="100px"
              layout="fixed"
            />
          </a>
        </Link>
      </div>
      {listButton.map((link, index) => (
        <PinkNavbarButton
          key={index}
          text={link.text}
          isActive={activeLink === index}
          onClickFunc={() => {
            setActiveLink(index);
            if (setActivePage) setActivePage(index);
          }}
          linkTo={link.linkUrl}
        />
      ))}
    </div>
  );
};

export default PinkNavbar;
