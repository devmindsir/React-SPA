import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import courses from "../../data/courses";

function Course() {
  const { user } = useContext(UserContext);
  const purchasedCourses = user?.purchasedCourses || [];
  const userCourses = courses.filter((course) =>
    purchasedCourses.includes(course.id)
  );
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">دوره‌های من</h1>

      {/* Courses */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "60%" }}></div>
              </div>
              <p className="text-sm text-gray-500">پیشرفت: 60%</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Course;
