import React from "react";
import { getArticlePaths, getOnePageContent } from "../../lib/wordpress";
import ISOtoDate from "../../lib/ISOtoDate";
import Footer from "../../components/Footer";

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

  const comments = [
    {
      author: "Client1",
      date: "dd/mm/yyyy HH:MM WIB",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus dolor at fringilla feugiat.",
      replies: {
        author: "LaikaKlinikHewan",
        date: "dd/mm/yyyy HH:MM WIB",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus dolor at fringilla feugiat.",
      },
    },
    {
      author: "Client2",
      date: "dd/mm/yyyy HH:MM WIB",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus dolor at fringilla feugiat.",
      replies: {
        author: "LaikaKlinikHewan",
        date: "dd/mm/yyyy HH:MM WIB",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus dolor at fringilla feugiat.",
      },
    },
  ];

  return (
    <div className="flex h-full min-h-screen w-full bg-article flex-col items-center">
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
