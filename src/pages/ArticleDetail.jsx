import React from "react";
import Banner from "../components/article/Banner";
import Information from "../components/article/Information";
import Related from "../components/article/Related";
import articles from "../data/articles";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === Number(id));
  if (!article) {
    return <NotFound />;
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Banner cover={article.cover} title={article.title} />
        <Information article={article} />
        <Related related={article.related} />
      </main>
    </div>
  );
};

export default ArticleDetail;
