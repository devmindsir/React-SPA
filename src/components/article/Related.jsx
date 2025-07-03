import { Link } from "react-router-dom";
function Related({ related }) {
  return (
    <>
      <div className="border-t pt-6">
        <h3 className="text-xl font-bold mb-4 text-blue-700">مقالات مرتبط</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {related.map((item, index) => (
            <Link
              key={index}
              to={`/article/${item.id}`}
              className="bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-md transition">
              <img
                alt={item.title}
                className="w-full h-40 object-cover"
                src={item.cover}
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">{item.title} </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Related;
