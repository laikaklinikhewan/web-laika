import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const ArticlePreview = ({ imgUrl, title, date, slug }) => {
  return (
    <Link href={slug ? `/artikel/${slug}` : "#"}>
      <a className="mt-4">
        <div className="w-52 text-justify text-sm">
          <div className="relative w-full h-36">
            <img
              className="w-full h-full object-cover"
              src={
                imgUrl || "/assets/two-dogs-playing-tug-of-war-with-disc.jpg"
              }
              alt="Article Image"
            />
          </div>
          <p className="text-base overflow-hidden overflow-ellipsis whitespace-nowrap">
            {title || "Lorem ipsum dolor sit amet consectetur adipisicing."}
          </p>
          <p className="text-md text-gray-500 mt-1">
            {date || "Lorem ipsum dolor sit amet."}
          </p>
        </div>
      </a>
    </Link>
  );
};

ArticlePreview.propTypes = {};

export default ArticlePreview;
