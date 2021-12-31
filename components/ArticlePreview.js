import React from "react";
import Link from "next/link";

const ArticlePreview = ({ imgUrl, date, slug }) => {
  return (
    <Link href={slug}>
      <a className="mt-4">
        <div className="w-52 text-justify text-sm">
          <div className="relative w-full h-52">
            <img
              className="w-full h-full object-cover"
              loading="lazy"
              src={imgUrl}
              alt="Article Image"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

ArticlePreview.propTypes = {};

export default ArticlePreview;
