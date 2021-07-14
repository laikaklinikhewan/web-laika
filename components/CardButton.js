import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/CardButton.module.css";

const CardButton = ({ bgImgUrl, urlTo, text }) => {
  let tempbg = "/assets/lobi.jpeg";
  console.log(styles.cardButton);
  return (
    <a
      href={urlTo || "#"}
      className={`relative h-80 w-56 rounded-3xl overflow-hidden bg-bottom bg-cover`}
      style={{ backgroundImage: `url(${bgImgUrl || tempbg})` }}
    >
      <div
        className={`w-full h-full justify-center bg-gradient-to-t bg-no-repeat from-black transition-all duration-500 ${styles.cardButton}`}
      ></div>
      <p className="text-2xl text-center absolute left-1/2 bottom-4 transform -translate-x-1/2 z-10 text-white">
        {text || "lorem ipsum"}
      </p>
    </a>
  );
};

CardButton.propTypes = {};

export default CardButton;
