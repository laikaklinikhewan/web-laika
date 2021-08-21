import React from "react";
import { getArticlePaths, getOnePageContent } from "../../lib/wordpress";
import ISOtoDate from "../../lib/ISOtoDate";
import Footer from "../../components/Footer";
import Head from 'next/head'
import { DiscussionEmbed } from "disqus-react";


const ArticleView = (data) => {
  console.log(data.content.oembedJSON ? "exist" : "not exist")
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
    oembedJSON: data.content.oembedJSON
  };

  const disqusShortname = "laikaklinikhewan-pages-dev"

  const disqusConfig = {
    url: process.env.NODE_ENV === 'development' ? `http://${process.env.DISQUS_URL}/artikel/${article.slug}` : `https://${process.env.DISQUS_URL}/artikel/${article.slug}`,
    identifier: article.id,
    title: article.title,
  }

  return (
    <>
      <div className="flex h-full min-h-screen w-full bg-article flex-col items-center pb-10">
        <Head>
          <title>{article.title}</title>
          <link rel="icon" href="/assets/LOGO.png" />
        </Head>
        <div className="md:w-viewArt w-10/12 md:mt-28 mt-10 bg-white bg-opacity-60 pb-20">
          <div className="">
            <h1 className="sm:text-title2 lg:text-title text-lg" style={{lineHeight:'inherit'}}>{article.title}</h1>
            <p className="mt-2 mb-2 opacity-50 lg:text-base sm:text-sm text-xs">{article.date}</p>
          </div>
          <div>
            <img src={article.imageUrl} alt="" height="540" width="960" />
          </div>
          <div
            className="mt-8 text-justify md:text-content text-sm whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>
            {article.oembedJSON && (
            <div className="oembed" dangerouslySetInnerHTML={{__html: article.oembedJSON.html}}></div>
            )}
        </div>
        <DiscussionEmbed        
          shortname= {disqusShortname}
          config={disqusConfig}
        />
      </div>
      <Footer />
    </>
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
