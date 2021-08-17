import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/CardButton.module.css";
import Link from "next/link";

const CardButton = ({ bgImgUrl, urlTo, text }) => {
  let tempbg = "/assets/lobi.webp";
  return (
    <Link href={urlTo || "#"}>
      <a
        className={`relative h-80 w-56 rounded-3xl overflow-hidden bg-bottom bg-cover transform hover:scale-105 transition`}
        style={{ backgroundImage: `url(${bgImgUrl || tempbg})` }}
      >
        <div
          className={`w-full h-full justify-center bg-gradient-to-t bg-no-repeat from-black transition-all duration-500 ${styles.cardButton}`}
        ></div>
        <p className="font-light text-3xl text-center absolute left-1/2 bottom-4 transform -translate-x-1/2 z-10 text-white">
          {text || "lorem ipsum"}
        </p>
      </a>
    </Link>
  );
};

CardButton.propTypes = {};

export default CardButton;
