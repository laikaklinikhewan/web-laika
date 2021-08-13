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
    <div className="">
      <Link href={linkUrl} passHref={true}>
        <a
          className={`${isLast ? "mb-20" : ""} md:w-artPrev w-11/12 ${
            isFirst ? "mt-20" : "mt-10"
          } flex relative transform hover:scale-105 transition`}
        >
          <div className='md:h-preview h-auto w-preview overflow-hidden items-center'>
            <img src={imageUrl} alt="" height={120} width={192} layout="absolute" />
          </div>
          
          <div className="md:border-b-2 w-dividerArt md:ml-8 ml-3">
            <h1 className="md:text-2xl sm:text-lg text-md">{title}</h1>
            <p className="md:bottom-0 md:absolute opacity-50 text-xs md:text-md">{date}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ArticlePreview2;
