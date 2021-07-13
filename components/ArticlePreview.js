import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const ArticlePreview = ({ imgUrl, title, date, articleID }) => {
  return (
    <Link href={articleID || "#"}>
      <a className="mt-4">
        <div className="w-48 text-justify text-sm">
          <Image
            src={imgUrl || "/assets/two-dogs-playing-tug-of-war-with-disc.jpg"}
            alt="Article Image"
            width="200px"
            height="130px"
          />
          <p className="font-medium">
            {title || "Lorem ipsum dolor sit amet consectetur adipisicing."}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {date || "Lorem ipsum dolor sit amet."}
          </p>
        </div>
      </a>
    </Link>
  );
};

ArticlePreview.propTypes = {};

export default ArticlePreview;
