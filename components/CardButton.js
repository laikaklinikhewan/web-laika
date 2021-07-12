import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/CardButton.module.css";

const CardButton = ({ bgImgUrl, urlTo, text }) => {
  let temp_bgImgUrl = "/assets/lobi.jpeg";
  console.log(styles.cardButton);
  return (
    <a
      href="#"
      className={`relative h-80 w-56 bg-gradient-to-t from-black transition-all duration-500 bg-no-repeat rounded-3xl overflow-hidden ${styles.cardButton}`}
    >
      <div
        className={`relative w-full h-full bg-bottom bg-cover justify-center ${styles.cardBg}`}
        style={{ backgroundImage: `url(${temp_bgImgUrl})` }}
      ></div>
      <p className="text-2xl text-center absolute left-1/2 bottom-4 transform -translate-x-1/2 z-10 text-white">
        {text}
      </p>
    </a>
  );
};

CardButton.propTypes = {};

export default CardButton;
