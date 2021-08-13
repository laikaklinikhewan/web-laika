import React from "react";
import Link from "next/link";

const PinkNavbarButton = ({ isActive, text, onClickFunc, linkTo }) => {
  return (
    <Link href={linkTo} passHref={true}>
      <a
        onClick={onClickFunc}
        className={`filter ${isActive ? "bg-button shadow-roundBtn" : "bg-white drop-shadow-roundBtn"} flex items-center h-11 w-36 ml-6 rounded-full justify-center`}
      >
        <p className='mt-1'>{text}</p>
      </a>
    </Link>
  );
};

export default PinkNavbarButton;