import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/CardButton.module.css";

const CardButton = ({ bgImgUrl, urlTo, text }) => {
  let temp_bgImgUrl = "/assets/lobi.jpeg";
  console.log(styles.cardButton);
  return (
    <div
      className={`h-80 w-56 z-auto bg-gradient-to-t from-black transition-all duration-500 bg-no-repeat ${styles.cardButton}`}
    >
      <div
        className={`relative w-full h-full bg-bottom bg-cover ${styles.cardBg}`}
        style={{ backgroundImage: `url(${temp_bgImgUrl})` }}
      ></div>
    </div>
  );
};

CardButton.propTypes = {};

export default CardButton;
