import articles from "../data/articles";
import ArticleCard from "../components/ui/ArticleCard";
import Search from "../components/article/Search";
const Article = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
          همه مقالات
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          جدیدترین و کاربردی‌ترین مقالات برنامه‌نویسی را اینجا بخوان
        </p>
      </div>
      {/* //!Search Components */}
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Article;
