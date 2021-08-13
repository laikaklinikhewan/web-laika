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
          className={`${isLast ? "mb-20" : ""} w-artPrev ${
            isFirst ? "mt-20" : "mt-10"
          } flex relative transform hover:scale-105 transition`}
        >
          <div className='h-preview w-preview overflow-hidden bg-white items-center'>
            <img src={imageUrl} alt="" height={120} width={192} layout="absolute" />
          </div>
          
          <div className="border-b-2 w-dividerArt ml-8">
            <h1 className="text-2xl">{title}</h1>
            <p className="bottom-0 absolute opacity-50">{date}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ArticlePreview2;
