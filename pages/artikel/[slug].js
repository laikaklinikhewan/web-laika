import React from "react";
import { getArticlePaths, getOnePageContent } from "../../lib/wordpress";
import ISOtoDate from "../../lib/ISOtoDate";
import Footer from "../../components/Footer";
import Head from 'next/head'

const ArticleView = (data) => {
  const articleData = data.content.post;
  let date = ISOtoDate(articleData.date);
  const fixedContent = articleData.content.replace(/(\n\n\n)/gm, "");

  const article = {
    title: articleData.title,
    imageUrl:
      articleData.featuredImage == null
        ? "/assets/two-dogs-playing-tug-of-war-with-disc.jpg"
        : articleData.featuredImage.node.sourceUrl,
    date: date,
    content: fixedContent,
  };

  return (
    <div className="flex h-full min-h-screen w-full bg-article flex-col items-center">
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="/assets/LOGO.png" />
      </Head>
      <div className="w-viewArt mt-28">
        <div className="">
          <h1 className="text-title">{article.title}</h1>
          <p className="mt-2 mb-2 opacity-50">{article.date}</p>
        </div>
        <div>
          <img src={article.imageUrl} alt="" height="540" width="960" />
        </div>
        <div
          className="mt-8 text-justify mb-8 text-content whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  let content = await getOnePageContent(context);
  return {
    props: {
      content,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getArticlePaths();
  return { paths, fallback: false };
}

export default ArticleView;
