import { FaUser } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
function Information({ article }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-3">{article.title}</h2>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6 items-center">
        <div className="flex items-center gap-2">
          <FaUser />
          <span> {article.author.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <BsFillCalendarDateFill />
          <span>{article.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaTag />
          <span>{article.category}</span>
        </div>
      </div>
      <article className="prose prose-sm sm:prose-base prose-p:text-gray-700 leading-loose max-w-none mb-10">
        <p>{article.content}</p>
      </article>
      <div className="flex flex-wrap gap-2 mb-12">
        {article.tags.map((item, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            #{item}
          </span>
        ))}
      </div>
    </>
  );
}

export default Information;
