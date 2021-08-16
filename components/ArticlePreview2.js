import React from "react";
import Link from "next/link";

const ArticlePreview2 = ({
  title,
  linkUrl,
  imageUrl,
  date,
  isLast,
  isFirst,
}) => {
  return (
    <div className="mx-4">
      <Link href={linkUrl} passHref={true}>
        <a
          className={`${isLast ? "mb-20" : ""} sm:w-artPrev w-11/12 ${
            isFirst ? "mt-20" : "mt-10"
          } flex relative transform hover:scale-105 transition`}
        >
          <div className='sm:h-preview h-auto w-preview overflow-hidden items-center'>
            <img src={imageUrl} alt="" height={120} width={192} layout="absolute" />
          </div>
          
          <div className="sm:border-b-2 w-dividerArt sm:ml-8 ml-3">
            <h1 className="md:text-2xl sm:text-xl text-md">{title}</h1>
            <p className="sm:bottom-0 sm:absolute opacity-50 text-xs sm:text-md">{date}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ArticlePreview2;
