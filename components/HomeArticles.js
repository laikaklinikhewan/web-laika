import React, { Fragment } from "react";
import { buildUrl } from "react-instafeed";
import Image from "next/image";
import ArticlePreview from "./ArticlePreview";
import Link from "next/link";
import ISOtoDate from "../lib/ISOtoDate";

const options = {
  accessToken:
    "IGQVJYdV9nZAVg1YkZAKTlpKQnVja0cxWHFWNWFLNzAwYmtodFE3V1NSdjZAZAQkplZAkFsVFpWam9laVNDNEdHeVRZARGlKQ2tkUkFxQmhXdnFMQUJfZAElRakl3UThxTzZADZAV94cHpLS1VxRGxGZAkJWSHBLdQZDZD",
  locationId: null,
  get: "user",
  resolution: "standard_resolution",
  tagName: null,
  userId: 108391531688984,
};

async function Instagram() {
  let datafetch = buildUrl(options);
  console.log("test", datafetch);
  const { json, loading, error, abort } = datafetch;
  if (loading) return "Loading...";
  if (error) return `Error: ${error}`;
  if (!json) return null;

  const { data, meta, pagination } = json;

  return (
    <Fragment>
      {
        // eslint-disable-next-line no-unused-vars
        data &&
          data.map(({ caption, id, images, tags }, index) => {
            const image = images[options.resolution];
            return (
              <Image
                alt="igfeed"
                key={index}
                url={image.url}
                title={caption.text}
                caption={caption.text}
                width={image.width}
                height={image.height}
              />
            );
          })
      }
    </Fragment>
  );
}

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
      <Instagram />
      {/* <ul className="relative flex flex-wrap flex-col items-center lg:items-start md:flex-row justify-between">
        {list.map((listItem, index) => (
          <li key={index} className="transform hover:scale-105 transition">
            <ArticlePreview
              title={listItem.title}
              date={ISOtoDate(listItem.date)}
              slug={listItem.slug}
              imgUrl={
                listItem.featuredImage
                  ? listItem.featuredImage.node.mediaItemUrl
                  : undefined
              }
            ></ArticlePreview>
          </li>
        ))}
        <Link href={href}>
          <a className="self-center mt-4 md:my-auto md:absolute -right-16 transform hover:translate-x-4 transition duration-300">
            {arrow}
            <p className="text-sm text-center">Lainnya</p>
          </a>
        </Link>
      </ul> */}
    </div>
  );
};

const HomeArticles = ({ articles, announcements }) => {
  return (
    <section
      className="md:px-40 lg:px-52 py-12 bg-red-100 bg-contain min-h-screen"
      style={{ backgroundImage: "url(/assets/bck2.webp)" }}
      id="artikel"
    >
      <PreviewList href="/artikel" category="Instagram Feed" list={articles} />
    </section>
  );
};

export default HomeArticles;
