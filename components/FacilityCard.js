import React from "react";
import Image from "next/image";

const FacilityCard = ({ imgUrl, alt, caption, isActive, onClickFunc }) => {
  return (
    <div className="relative w-52 h-32 mx-auto">
      <Image src={imgUrl} alt={alt} layout="fill" objectFit="cover" />
      <div
        className={`absolute w-full bottom-0 text-center ${
          isActive ? "text-black bg-white" : "text-white bg-black"
        }`}
      >
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
