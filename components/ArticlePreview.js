import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const ArticlePreview = ({ imgUrl, title, date, slug }) => {
  return (
    <Link href={slug ? `/artikel/${slug}` : "#"}>
      <a className="mt-4">
        <div className="w-48 text-justify text-sm">
          <div className="relative w-full h-32">
            <Image
              src={
                imgUrl || "/assets/two-dogs-playing-tug-of-war-with-disc.jpg"
              }
              alt="Article Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
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
