import React from "react";
import { getArticlePaths, getOnePageContent } from "../../lib/wordpress";
import ISOtoDate from "../../lib/ISOtoDate";
import Footer from "../../components/Footer";
import Head from 'next/head'
import { DiscussionEmbed } from "disqus-react";


const ArticleView = (data) => {
  const articleData = data.content.post;
  let date = ISOtoDate(articleData.date);
  const fixedContent = articleData.content.replace(/(\n\n\n)/gm, "");

  const article = {
    title: articleData.title,
    id: articleData.id,
    slug: articleData.slug,
    imageUrl:
      articleData.featuredImage == null
        ? "/assets/two-dogs-playing-tug-of-war-with-disc.jpg"
        : articleData.featuredImage.node.sourceUrl,
    date: date,
    content: fixedContent,
  };

  const disqusShortname = "localhost-3000-hjzcrcfzcz"

  const disqusConfig = {
    url: `localhost:3000/artikel/${article.slug}`,
    identifier: article.id,
    title: article.title
  }

  return (
    <div className="flex h-full min-h-screen w-full bg-article flex-col items-center">
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="/assets/LOGO.png" />
      </Head>
      <div className="md:w-viewArt w-10/12 md:mt-28 mt-10">
        <div className="">
          <h1 className="md:text-title text-lg">{article.title}</h1>
          <p className="mt-2 mb-2 opacity-50 md:text-base text-xs">{article.date}</p>
        </div>
        <div>
          <img src={article.imageUrl} alt="" height="540" width="960" />
        </div>
        <div
          className="mt-8 text-justify md:mb-8 md:text-content text-sm whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </div>
      <DiscussionEmbed
        shortname= {disqusShortname}
        config={disqusConfig}
      />
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
