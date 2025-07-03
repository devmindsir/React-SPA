import { FaClock, FaSignal, FaUserGraduate } from "react-icons/fa";

function Information({ title, duration, description, level, teacher }) {
  return (
    <>
      {/* Title + Desc */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{title} </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Info Box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700 mb-10">
        <div className="flex items-center gap-2">
          <FaClock className="text-blue-600" />
          <span>مدت دوره: {duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaSignal className="text-blue-600" />
          <span>
            سطح:
            {level}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserGraduate className="text-blue-600" />
          <span>
            مدرس:
            {teacher}
          </span>
        </div>
      </div>
    </>
  );
}
export default Information;
