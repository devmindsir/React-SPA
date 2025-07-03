import { Link } from "react-router-dom";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
function ArticleCard({ article }) {
  return (
    <>
      <Link to={`/article/${article.id}`}>
        <div className="border rounded-lg p-4 hover:shadow transition">
          <img
            src={article.cover}
            alt={article.title}
            className="rounded h-[13rem] w-full object-cover mb-4"
          />
          <h4 className="text-lg font-semibold mb-2">{article.title} </h4>
          <p className="text-sm text-gray-600 line-clamp-3">
            {article.introduction}{" "}
          </p>
          <div className="mt-3 text-blue-600 text-sm flex items-center gap-1">
            <span>مطالعه مقاله</span>
            <HiMiniArrowLongLeft />
          </div>
        </div>
      </Link>
    </>
  );
}

export default ArticleCard;
