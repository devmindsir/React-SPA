import articles from "../../data/articles";
import ArticleCard from "../ui/ArticleCard";
function Article() {
  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">جدیدترین مقالات آموزشی</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Article;
