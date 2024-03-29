import React from "react";
import Link from "next/dist/client/link";
import ArticlePreview from "./ArticlePreview";

const PreviewList = ({ href, category, list }) => {
  const arrow = (
    <svg width="55" height="55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5 51.5625a24.0625 24.0625 0 10.0002-48.125 24.0625 24.0625 0 00-.0002 48.125zM27.5 55a27.4996 27.4996 0 0019.4454-8.0546 27.4996 27.4996 0 000-38.8908 27.4997 27.4997 0 00-38.8908 0A27.5 27.5 0 0027.5 55z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.2831 39.0294a1.7196 1.7196 0 01-.3737-1.8757 1.721 1.721 0 01.3737-.5581L35.3822 27.5l-9.0991-9.0957a1.721 1.721 0 012.4338-2.4337l10.3125 10.3125a1.7194 1.7194 0 01.5049 1.2169 1.7196 1.7196 0 01-.5049 1.2169L28.7169 39.0294a1.7191 1.7191 0 01-2.4338 0z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4688 27.5a1.7185 1.7185 0 011.7187-1.7188H34.375c.4558 0 .893.1811 1.2153.5035a1.7185 1.7185 0 010 2.4306 1.7185 1.7185 0 01-1.2153.5035H17.1875A1.7185 1.7185 0 0115.4688 27.5z"
        fill="#000"
      />
    </svg>
  );

  return (
    <div className="mt-24">
      <h2 className="text-2xl text-pink-500 font-bold mb-2 text-center md:text-left">
        {category}
      </h2>
      <ul className="relative flex items-center flex-wrap flex-col lg:items-start md:flex-row">
        {list?.map((listLevel, indexLevel) => (
          <div
            key={indexLevel}
            className="relative w-full flex-wrap items-center flex flex-col lg:items-start md:flex-row justify-between xs:mb-6"
          >
            {listLevel.map((listItem, idxItem) => (
              <li
                key={4 * indexLevel + idxItem}
                className="mt-6 transform hover:scale-105 transition"
              >
                <ArticlePreview
                  slug={listItem.permalink}
                  imgUrl={listItem.media_url}
                ></ArticlePreview>
              </li>
            ))}
          </div>
        ))}
        <Link href={href}>
          <a
            className="self-center mt-4 md:my-auto md:absolute -right-16 transform hover:translate-x-4 transition duration-300"
            target="_blank"
            rel="noreferrer"
          >
            {arrow}
            <p className="text-sm text-center">Lainnya</p>
          </a>
        </Link>
      </ul>
    </div>
  );
};

const HomeArticles = ({ articles }) => {
  return (
    <section
      className="md:px-40 lg:px-52 py-12 bg-red-100 bg-contain min-h-screen"
      style={{ backgroundImage: "url(/assets/bck2.webp)" }}
      id="artikel"
    >
      <PreviewList
        href="https://www.instagram.com/laikaklinikhewan/"
        category="Articles"
        list={articles}
      />
    </section>
  );
};

export default HomeArticles;
