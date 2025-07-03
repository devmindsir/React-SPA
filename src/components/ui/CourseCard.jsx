import { Link } from "react-router-dom";
function CourseCard({ course }) {
  return (
    <>
      <Link to={`/course/${course.id}`}>
        <div className="bg-white rounded-lg shadow hover:shadow-md transition">
          <img
            src={course.image}
            alt={course.title}
            className="rounded h-50 w-full object-cover mb-3"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold">{course.title}</h4>
            <p className="text-sm my-3 text-gray-600">مدرس: فرهاد کاظم زاده</p>
            <p className="text-blue-600 mt-2 font-bold">
              {course.price.toLocaleString()} تومان
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CourseCard;
