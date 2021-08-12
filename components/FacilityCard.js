import React from "react";

const FacilityCard = ({ imgUrl, alt, caption, isActive, onClickFunc }) => {
  return (
    <div className="relative w-52 h-32 mx-auto">
      <img className="w-full h-full object-cover" src={imgUrl} alt={alt} />
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
